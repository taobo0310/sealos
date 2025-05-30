import { getPodLogs } from '@/api/db';
import { useLoading } from '@/hooks/useLoading';
import { streamFetch } from '@/services/streamFetch';
import { downLoadBold } from '@/utils/tools';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  MenuButton,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useTheme
} from '@chakra-ui/react';
import { SealosMenu } from '@sealos/ui';
import { default as AnsiUp } from 'ansi_up';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from '../index.module.scss';
import MyIcon from '@/components/Icon';
import Empty from './empty';

interface sinceItem {
  key: 'streaming_logs' | 'within_5_minutes' | 'within_1_hour' | 'within_1_day' | 'terminated_logs';
  since: number;
  previous: boolean;
}

const newSinceItems = (baseTimestamp: number): sinceItem[] => {
  return [
    {
      key: 'streaming_logs',
      since: 0,
      previous: false
    },
    {
      key: 'within_5_minutes',
      since: baseTimestamp - 5 * 60 * 1000,
      previous: false
    },
    {
      key: 'within_1_hour',
      since: baseTimestamp - 60 * 60 * 1000,
      previous: false
    },
    {
      key: 'within_1_day',
      since: baseTimestamp - 24 * 60 * 60 * 1000,
      previous: false
    },
    {
      key: 'terminated_logs',
      since: 0,
      previous: true
    }
  ];
};

const LogsModal = ({
  dbName,
  podName,
  dbType,
  podAlias,
  pods = [],
  setLogsPodName,
  closeFn
}: {
  dbName: string;
  podName: string;
  dbType: string;
  podAlias: string;
  pods: { alias: string; podName: string }[];
  setLogsPodName: (name: string) => void;
  closeFn: () => void;
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { Loading } = useLoading();
  const [logs, setLogs] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const LogBox = useRef<HTMLDivElement>(null);
  const ansi_up = useRef(new AnsiUp());
  const [sinceKey, setSinceKey] = useState('streaming_logs');
  const [sinceTime, setSinceTime] = useState(0);
  const [previous, setPrevious] = useState(false);

  const switchSince = useCallback(
    (item: sinceItem) => {
      setSinceKey(item.key);
      setPrevious(item.previous);
      setSinceTime(item.since);
    },
    [setSinceKey, setPrevious, setSinceTime]
  );

  const sinceItems = useMemo(() => newSinceItems(Date.now()), []);

  const watchLogs = useCallback(() => {
    // dbType is empty. pod may has been deleted
    if (!dbType) return closeFn();

    const controller = new AbortController();
    streamFetch({
      url: '/api/pod/getPodLogs',
      data: {
        podName,
        dbType,
        stream: true,
        sinceTime,
        previous
      },
      abortSignal: controller,
      firstResponse() {
        setLogs('');
        setIsLoading(false);
        // scroll bottom
        setTimeout(() => {
          if (!LogBox.current) return;
          LogBox.current.scrollTo({
            top: LogBox.current.scrollHeight
          });
        }, 500);
      },
      onMessage(text) {
        try {
          setLogs((state) => {
            return state + ansi_up.current.ansi_to_html(text);
          });
        } catch (error) {
          console.error(error);
        }

        // scroll bottom
        setTimeout(() => {
          if (!LogBox.current) return;
          const isBottom =
            LogBox.current.scrollTop === 0 ||
            LogBox.current.scrollTop + LogBox.current.clientHeight + 100 >=
              LogBox.current.scrollHeight;

          isBottom &&
            LogBox.current.scrollTo({
              top: LogBox.current.scrollHeight
            });
        }, 100);
      }
    });
    return controller;
  }, [closeFn, dbType, podName, sinceTime, previous]);

  useEffect(() => {
    const controller = watchLogs();
    return () => {
      controller?.abort();
    };
  }, [watchLogs]);

  const exportLogs = useCallback(async () => {
    try {
      const allLogs = await getPodLogs({
        dbName,
        podName,
        stream: false,
        dbType: dbType,
        sinceTime,
        previous
      });
      downLoadBold(allLogs, 'text/plain', 'log.txt');
    } catch (error) {
      console.error('download log error:', error);
    }
  }, [dbName, dbType, podName, sinceTime, previous]);

  return (
    <Modal isOpen={true} onClose={closeFn} isCentered={true} lockFocusAcrossFrames={false}>
      <ModalOverlay />
      <ModalContent className={styles.logs} display={'flex'} maxW={'90vw'} h={'90vh'} m={0}>
        <ModalHeader py={'8px'}>
          <Flex alignItems={'center'}>
            <Box fontSize={'xl'} fontWeight={'bold'}>
              Pod {t('Logs')}
            </Box>
            <Box px={3} zIndex={10000}>
              <SealosMenu
                width={240}
                Button={
                  <MenuButton
                    as={Button}
                    variant={'outline'}
                    leftIcon={<MyIcon name="pods" width={'16px'} height={'16px'} />}
                    minW={'240px'}
                    h={'32px'}
                    textAlign={'start'}
                    bg={'grayModern.100'}
                    border={theme.borders.base}
                    borderRadius={'md'}
                  >
                    <Flex alignItems={'center'}>
                      <Box flex={1}>{podAlias}</Box>
                      <ChevronDownIcon ml={2} />
                    </Flex>
                  </MenuButton>
                }
                menuList={pods.map((item) => ({
                  isActive: item.podName === podName,
                  child: <Box>{item.alias}</Box>,
                  onClick: () => setLogsPodName(item.podName)
                }))}
              />
            </Box>
            <Box px={3} zIndex={10000}>
              <SealosMenu
                width={200}
                Button={
                  <MenuButton
                    minW={'200px'}
                    h={'32px'}
                    textAlign={'start'}
                    bg={'grayModern.100'}
                    border={theme.borders.base}
                    borderRadius={'md'}
                  >
                    <Flex px={4} alignItems={'center'}>
                      <Box flex={1}>{t(sinceKey as sinceItem['key'])}</Box>
                      <ChevronDownIcon ml={2} />
                    </Flex>
                  </MenuButton>
                }
                menuList={sinceItems.map((item) => ({
                  isActive: item.key === sinceKey,
                  child: <Box>{t(item.key)}</Box>,
                  onClick: () => switchSince(item)
                }))}
              />
            </Box>
            <Button
              height={'32px'}
              variant={'outline'}
              onClick={exportLogs}
              leftIcon={<MyIcon name={'export'} w={'16px'} />}
            >
              {t('Export')}
            </Button>
          </Flex>
        </ModalHeader>
        <ModalCloseButton top={'10px'} right={'10px'} />
        <Box flex={'1 0 0'} h={0} position={'relative'} pl={'36px'} pr={'10px'} mt={'24px'}>
          {logs === '' ? (
            <Empty />
          ) : (
            <Box
              ref={LogBox}
              h={'100%'}
              whiteSpace={'pre'}
              pb={2}
              overflow={'auto'}
              fontWeight={400}
              fontFamily={'SFMono-Regular,Menlo,Monaco,Consolas,monospace'}
              dangerouslySetInnerHTML={{ __html: logs }}
            ></Box>
          )}
          <Loading loading={isLoading} fixed={false} />
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default LogsModal;
