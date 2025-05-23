import { useState, useCallback } from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

export const useLoading = (props?: { defaultLoading: boolean }) => {
  const [isLoading, setIsLoading] = useState(props?.defaultLoading || false);

  const Loading = useCallback(
    ({
      loading,
      fixed = true,
      size = 'xl'
    }: {
      loading?: boolean;
      fixed?: boolean;
      size?: string;
    }): JSX.Element | null => {
      return (
        <Flex
          position={fixed ? 'fixed' : 'absolute'}
          zIndex={100}
          backgroundColor={'rgba(255,255,255,0.5)'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems={'center'}
          justifyContent={'center'}
          visibility={isLoading || loading ? 'visible' : 'hidden'}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brightBlue.600"
            size={size}
          />
        </Flex>
      );
    },
    [isLoading]
  );

  return {
    isLoading,
    setIsLoading,
    Loading
  };
};
