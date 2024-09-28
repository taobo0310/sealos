Welcome to the v5.0.1-beta1 release of Sealos!🎉🎉!



## Changelog
### New Features
* 79b0cae57275d2965e7517e11e9a029bef84c250: feat(applaunchpad): Improve domain handling for legacy and new domains (#5011) (@zjy365)
* 68c0244a7369804b08e7bc1b78ceb79479063a5c: feat(costcenter): add gift code (#5026) (@HUAHUAI23)
* 80f468297e83abbf7a94b0d56a663e748d616b82: feat(desktop): Implement smart dock behavior (#4998) (@zjy365)
* 9a7bcba87ada604ba2042e1a65e7f1dacea6b969: feat(desktop): add realname auth (#4931) (@HUAHUAI23)
* f54fc3ab48abb8eb8ab43913335746f0f0e742e0: feat(desktop): add signup user sem info (#4949) (@HUAHUAI23)
* 3d0f9645c823c725e06c035c0e8a86786add1cc1: feat(desktop): adjust the style of real-name authentication (#4979) (@HUAHUAI23)
* 3f6343238e5787dcb6a84a1b366911441b01cb3b: feat(desktop): signup user sem data add keyword data (#4983) (@HUAHUAI23)
* 028fa0c36c3b3fe857674d435ad934be6bd4b09a: feat(devbox): devbox basic frontend ui and logic (#4953) (@mlhiter)
* dd2ac2060769d05f6ed5e48ddba14ac7b98b7eb1: feat(docs): add SEM keywords parameter (#4981) (@zjy365)
* 932cd71be14c1039356ba4dc70566c6f39b56098: feat(objectstorage): web host add history router support (#5076) (@HUAHUAI23)
* 04d823c3ac176c2bd4cd1ea318196da616aefe40: feat(template): add translations for app content (#4961) (@zjy365)
* 3d4b3fe917bb579a21ed71f2c0b83ed3c8d7b6c0: feat: Add .gitignore file and i18n.md documentation (#4911) (@zjy365)
* 2eda19e407cca6cc00dd779451146556b40c430c: feat: Enhance cron schedule, Markdown display (#4888) (@zjy365)
* dbca6f0aff908f9f9d58051895be2666113f9179: feat: acmedns (#5063) (@zijiren233)
* b4ee7b8cba1290d713863cdff42a529c2fdbbcc6: feat: add Kafka and Milvus connection string support (#5061) (@zjy365)
* 9ca435cba8059047bf7d63c4b4c2d0ac6869c1a2: feat: add SEO TDK support and pricebox to template (#5038) (@zjy365)
* 1fe875a91d2464e6d8eb329cb9992fc1b5fc5d21: feat: add desktop tooltip for improved user experience (#4945) (@zjy365)
* 1faf9d65714fb97d1667228c5a4449c34a77aa06: feat: add support for launching creation page in launchpad (#4984) (@zjy365)
* bab49b738cb9a23d86a398d35a45f6ab9b3e32b5: feat: applaunchpad log previous (#5047) (@zijiren233)
* 54c0180ff3e91fbef15a99ce0dad5b5e05ff7aed: feat: cost quota and price (#5014) (@zijiren233)
* 582dd4f4fa80a20515fe29cfec42d277802c2eb7: feat: cronjob implement job (#5093) (@zijiren233)
* 6338cf80af7bfe451614feac8afaede3acc0f672: feat: db log (#5069) (@zijiren233)
* cca4da935f9cdfbc0abb1651cd55720a21d4e668: feat: get os traffic from minio (#4968) (@nowinkeyy)
* fad81885c0f18b5e60e82bb829b60e64c0cd36e3: feat: launchpad implement URL query to form data conversion (#5081) (@zjy365)
* 95c5a7d2005975c52a99d59ee980134985c1cb09: feat: resource quota add object storage size (#4874) (@nowinkeyy)
* 88961c5b64ae7bbc2f63598bd252fe1ef90847bb: feat: strip bin and trimpath (#4860) (@zijiren233)
* 20bf7a538e4d5d4e101437c35cc130bc63197c5e: feat: support tagging launchpad and database application sources (#4975) (@zjy365)
* 022e1a0fcf93574b2a16e637794f8cca0f232982: feat: support user external domain (#5021) (@zijiren233)
* bd3f6d45266be04f3fa10a0a86790d3b8be32b74: feat: templates support conditional rendering (#4937) (@zijiren233)
* 4fd0ebc4742df34b0196b106f67c2271bb95bf30: feat: use dumb-init as the init system for Docker container (#4901) (@zjy365)
* 7091b8665cab2b149c9e2fef629f64289cb17f49: feat: user private ns invite (#5043) (@zijiren233)
* fa8ba1e9667184eb700fff1c1928a06bccf9b1d6: feat:dbprovider support reconfigure (#4926) (@zjy365)
* f4bb39d5a1ea10580c6f0702f8f29091db92b4be: feat:desktop update sem (#4993) (@zjy365)
* 9caf45a82b07513466cbd4c76df610a03c4ca47c: feat:docs add 's' parameter for user source tracking (#4958) (@zjy365)
* d32471d2052ab97f92dc38a377ac3b2102ae058b: feat:launchpad && database add cost tip (#4980) (@zjy365)
* eb838607f089f7bfc78ea5df44132bd2f2c9a824: feat:launchpad update container status reason (#4947) (@zjy365)
### Bug fixes
* 010975259d94df105f25b2ab154a1e3ff8d0302f: fix(desktop): fix realname auth multi notify (#4944) (@HUAHUAI23)
* 2bf0773d44271c94b78d854d87bb14c5437194c1: fix(desktop):fix init database error (#5003) (@xudaotutou)
* b75c85f007631dec814f512c1f61aecc621b663b: fix(docs):header title translation (#4963) (@zjy365)
* 83be88aa639e303de502470a20a6a589afca3c54: fix(launchpad): file upload in Kubernetes pods (#4970) (@zjy365)
* 4e95958ea6335168afb779ee46b3576b23272336: fix(objectstorage): Fix site hosting errors for domains (#5082) (@HUAHUAI23)
* 62a290d42c1df72d012957df725c64f5140e861c: fix: add return in PROMPTS_EN/PROMPTS_CN (#4974) (@cbluebird)
* 4ec113475ba8c61e1f668854b38e31efaa431d20: fix: adjust GPU quota for launchpad (#5041) (@zjy365)
* d1193f70675b6505cbdad60d9d1cb5152ed65b66: fix: bg file ext (#4895) (@zijiren233)
* 6c82972f675fc5cbe6a2f17eed2c1a9ab42bf697: fix: check control plane count of master IPs (#4972) (@cbluebird)
* 4288104427fc497567f7768671e217a76af740d4: fix: concat ldflags str (#4893) (@zijiren233)
* 74f8ba5309b9a8d0978bc4e6018c8ead9857fe67: fix: cronjob kc and no mount sa (#5092) (@zijiren233)
* 94d7e328d8f262a5a306dd8464f91065ed636b3f: fix: cronjob total amount (#5095) (@zijiren233)
* 86823ab2f4d71bd98583c7071b78172bb905110e: fix: db quota check (#4927) (@zijiren233)
* 5d6fab9f3acbdda8f2d19402e9e62f1b39685a21: fix: defaults and inputs maybe empty (#4987) (@zijiren233)
* ce47655f8de9cc74eee553f143c5f571d828e025: fix: desktop right-click menu issue (#4939) (@zjy365)
* c1d447fa7eb229d8b83befcebd5700eb3ccf81e6: fix: download exit and status_code check (#4908) (@zijiren233)
* 76990afc9729e02daf97f0ac28434f037d18708f: fix: failed to delete node by apply (#4936) (@yangxggo)
* febe93b505feb4b333d57d221868c38b473546e7: fix: improve timezone handling in Kubernetes pods (#5087) (@zjy365)
* 738bd0b6b79caa7ea5c93e5f2bac3e56b16186ca: fix: load env before fetching app details in launchpad (#4943) (@zjy365)
* 97939b559c0b7772d0290b744bb069794af807c2: fix: log stream cannot be used with jsonRes after flushHeader (#5064) (@zijiren233)
* ba66b046781a9644ad91806aa42aebf0a00cd127: fix: resolve desktop monitoring issue (#5019) (@zjy365)
* a7a7cacb95df719a6e4eedd8e8729e4ce32a493a: fix: signup with password donot save kc (#5036) (@zijiren233)
* 8eef22eb8879ae0095831133baef990fdf05e1e5: fix: switch pod logs (#5040) (@zijiren233)
* c69a4605ecdc2f9dcccd7417bf6c2f3347d7f456: fix: template undefined value (#4992) (@zijiren233)
* 4a3631716c95ff56f95931a94b66b2ab9fc794a5: fix: update work order status to pending (#4899) (@zjy365)
* 002e7a519f3d09c0e49b7c1c185ac2dac969e94b: fix:launchpad domain for internal app call listener (#5090) (@zjy365)
* d36fa02e8039e62f5f592ba059232f36e3af9850: fix:launchpad resource update in checkPermission API (#5077) (@zjy365)
* e91bce93bb139b05800cc8c155233792c18bb840: fix:permission change check for launchpad (#5072) (@zjy365)
* e210fd876a615266c8732e302c81b0bb095367fe: fix:update copywriting (#4905) (@xudaotutou)
### Build process updates
* ae37edef3f24dff0eb8698f0f04ee61f5e66debd: build: add Husky and lint-staged for code formatting (#4982) (@zjy365)
### Other work
* e3c9b629b409aeff73e61e554078430168f8ec32:  add default rbac rules for devbox runtime and runtime class. (#5012) (@lingdie)
* 17601ae99548e62fabff95f2fa069e8e1ed38f6f: 5.0.0 New document (#5032) (@bearslyricattack)
* f3efe285fc019437cf616fddbcbb7a9ec8618478: :bug: fix image sha256 (#5094) (@cuisongliu)
* 0853f2d8b2c8cfc556833841acb59fc07305b412: Accountcenter merge (#4795) (@xudaotutou)
* f4be739dac0e42f09a5debafe9bf0717ed9a2c9e: Add pausing kb cluster database in namespace controller & fix get cost api  (#4946) (@bxy4543)
* e10a76e5f8881931037a2878b69eb08401835091: Add terminate ns, skip notifications for abnormal users, set default.NodePort.Limit=10, adapt new user struct. (#5056) (@bxy4543)
* 594f3af2ac9f4bdd6c2eea6fbbb39c4df54ffab0: CostCenter api update (#4932) (@bxy4543)
* e2f66e5fa3852dc29384d2f97c862b35af45dbcb: DB backup monitoring (#4950) (@bxy4543)
* bf2fe19c9d796b0b93893444c248236426741fa1: Devbox runtime support release command and args (#5078) (@lingdie)
* a284f3b318af9796bb0a1ca389016ccc230624e6: Doc: update video (#4915) (@zuoFeng59556)
* 2882addbbc621a61843d9c76e37634058e7adb90: Feat/invoice (#4988) (@bxy4543)
* 1decf9a8487d976cb9f1a367d9e66fe9d3b3682a: Fix devbox podPhase logic and license in deploy.yaml.tmpl (#5067) (@lingdie)
* 7268c174d0cca59347c3f6a12426e087be5a27bb: Fix doc platform-components relative link. (#4896) (@zzjin)
* c23bad822748ed1cf0d9709c93b6be2081553578: Fix/get invoice payment (#5088) (@bxy4543)
* f488b6fbb74837a278ecb82faf485ef65b3bbf3f: Fix: Resolve bug introduced by launchpad JSON patching (#4935) (@zjy365)
* 9468f7fa69b5b02cab5d7153f223191de25655f4: Forward compatibility terminal label. (#4921) (@zzjin)
* 7e6cb8bccb9e65fe9405dd8dcf432e7cd604e689: Monitor api adapt token (#5049) (@bxy4543)
* e91f227c171defe16cebe34e78125af03aac4137: Optimize/payment (#5000) (@bxy4543)
* 9e2faf929afde56b5a3745fb8ae412b793f8ad07: Patch kb addon (#4969) (@wallyxjh)
* 456aaaf65a599cd686b342a66699a0d13e46c855: Region amount api (#5070) (@bxy4543)
* ee997b24a5a1520e6a06745c1279f2ff13fc5438: Remove registry with no more needed. (#4910) (@zzjin)
* 3127c815bd290b2229af05bbe72c286c5ba2943c: Replace gomail/gomail with wneessen/go-mail in email mail utility (#4867) (@wneessen)
* 31471d7a572346df2ad693dcf46e40758770f752: Update costcenter (#4990) (@xudaotutou)
* 52a1e82e43bd078677bece7759871e096bdbb2d8: Update costcenter (#5085) (@xudaotutou)
* 0549a9a8eec347ce2a69ff7dbb0d387180de4adc: Update db backup (#4976) (@wallyxjh)
* 525b4dd81c3c5c47ca7f89acde5555a95456ee02: Update feishu notification (#4920) (@wallyxjh)
* 7ef586d2e873ed3ffe289c648e0e58661ab760e5: WIP: Replace `ingress-nginx` with `higress`. (#4831) (@zzjin)
* bcb8ab419c97be1890a21904523c7973ded8641a: add LastTerminatedState and improve squash logic for devbox. (#5080) (@lingdie)
* 3d625499da793e60124dd9dece02deef441de8c5: add additionalPrinterColumns for devbox. (#5020) (@lingdie)
* 132eb38634dbeb70afe171a27f7edfbf49d815b5: add backuprepo (#4986) (@wallyxjh)
* a42f12a9ef59bad8033f0e875a2403c6ef791955: add backuprepo (#4989) (@wallyxjh)
* 7e77b7a8795b27473f3ba1ffdfa490ad90f2f850: add devbox controller rbac, enable in ci to build docker images (#5009) (@lingdie)
* 306bbda51914f2e7ab0fa39cdf667cacb3029a39: add devbox controller rbac. (#5028) (@lingdie)
* a3c9c55ae71f258df704b0c9fdfe00a3d9eded77: add devbox controller. (#4999) (@lingdie)
* 980e796e93a14b77b5d01caeb735e6b37a646ec5: add devbox default runtime ref namespace to devbox-system. (#5034) (@lingdie)
* 6507e5379e737404136340d32ab8d1862d92ff80: add devbox monitor (#5086) (@bxy4543)
* 4a17349ac2f65dcbd955bf339ba58d0204b67639: add devbox node and containerId (#5045) (@bearslyricattack)
* 0ed063560f8ae1898e24298a795dab6934023786: add devbox phase and controller (#5042) (@bearslyricattack)
* e52f5d3c51ac314af58c35fa4f14bed31fcfef1b: add devbox pod hostname set to devbox name (#5015) (@lingdie)
* 086681e078871b356340d41880b2cc04ead87426: add devbox proposal (#4900) (@fanux)
* d58375ebd643599dbee95cd3669dbb3260244b74: add devbox restart pod (#5010) (@bearslyricattack)
* 103c3ac27c5c49cd0e2f12dc49ec3282f305b33f: add devbox runtime app port. (#5099) (@lingdie)
* 7f8ff72737d2defaaf8921496066b59eff8a36ff: add dify installation QA (#4991) (@wallyxjh)
* 569bcfd27035965e4375d7b8e541ee0470c5c019: add extraEnv toleration affinity,ephemeral-storage limit (#5023) (@bearslyricattack)
* 5877ddb053faa770d923db313a3f7fa129692354: add generate public and private key (#5004) (@bearslyricattack)
* 7d882d0504748d52e40c811270bb1523232742cd: add logs for CheckPodConsistency. (#5035) (@lingdie)
* e4e57023de116f259deddcba4083fbaa98b074fc: add random (#5050) (@bearslyricattack)
* d47170c6897924140ac2379b067bb698e7b7a53e: add release old tag (#5053) (@bearslyricattack)
* 60c4065bb9e4dcab4a4842c192fda7b0c62f8726: add service port (#5048) (@bearslyricattack)
* e3347059be70e04f548ffa3fce32a4b950f79d2b: bump format go version (#5062) (@bxy4543)
* 35c1c569d8eb7b68a00bb9ba31d88ac2822037b0: change label location (#5022) (@bearslyricattack)
* 5d1d9ba83ecc96a4f2408e5cb7765b476df469dc: change runtime and runtime class to namespace scope, improve devbox c… (#5024) (@lingdie)
* d59fd4a0c29ee6d7e4977fe10ca6001d992dac62: change svc version to 1.22 (#4916) (@bxy4543)
* 2163655376aaa2f9a2a7b9ceff27ee0711d4055e: chrome(desktop):update token (#5089) (@xudaotutou)
* e9087cf8e69b34dcbb6d45c384715538548dc15a: dep: upgrade controllers client-go and controller-runtime (#4898) (@lingdie)
* 93c5a9a7087ae70f7bc16a6948eeead692a6bb88: docs:update scripts (#4925) (@zjy365)
* 8a6844f602b8912716b39874834f236faa550bf6: feat(account-service): add use giftcode (#5013) (@HUAHUAI23)
* 47001c9ba85927dc846e13b6078ec4b9fe5f38ee: fix  release bug (#5051) (@bearslyricattack)
* 4e13ab5fd865062811b321f03b557252fbbe8356: fix devbox get runtime. (#5030) (@lingdie)
* 0f6d5cdd7f010440b65d168942e736b92db548c2: fix env render with app images (#5079) (@bxy4543)
* 331229e388e3b327f2ab1e99ee006fd151cf2726: fix flow error (#4964) (@nowinkeyy)
* 73c3919fbc0da65f735569e8f989c6111977e6e8: fix read notice cause panic (#4930) (@bxy4543)
* 95ce6b8177f91fcf32275e497fa022e58b71257e: fix ssh volume bug (#5039) (@bearslyricattack)
* 6647429d6c8e66181d6e617552afaeb6191a125c: fix webhook (#5068) (@bxy4543)
* 8c21c3705bcbcdcd5935f5fc3c886619b2976bf9: fix(desktop) add phone number bind logic to realname auth (#4940) (@HUAHUAI23)
* a541722e59437b822d059d475117dc4467acb51d: i18n: update i18n for template provider (#4917) (@yangchuansheng)
* 26604f99fa5eca579a6123a8cdae6d4cf3c00dbb: opt: desktop default config (#4876) (@zijiren233)
* 3c418c33641627e33938f4d7df5566fb29527992: optimize get app cost with index(owner+order_id) (#5002) (@bxy4543)
* 3515cdb3d1a960c6c33a2b9b1faa0ed7f49bb2d7: perf(desktop): reduce network traffic overhead (#4948) (@zjy365)
* 22e4ff25251249ee2212d70d3b22f43c2feb6c25: refactor(desktop): refactor delete (#5055) (@xudaotutou)
* d2ea1ed9215ad7387edbeb057a9b976c25d43417: refactor: enhance i18n type annotations for better developer experience (#4878) (@zjy365)
* 80c052f101c1b678e55a96b0e9058f9038471182: refactor: improve i18n in dbprovider for better developer experience  (#4919) (@zjy365)
* 11221466e78621b4cb734bc43acb124104c4c522: refactor:Fetch Launchpad pricing from service API (#5025) (@zjy365)
* b03274cf3ff0ebf27cd09f3dedef7df0fbc82106: remove pod finalizer (#5060) (@bearslyricattack)
* 1d82b3fe69a13b9dc331a3a202333cca7531e69b: rollback email package (#4929) (@bxy4543)
* fd6733eaaba0177d39b9112cd5ffb692c6d5aa58: set AutomountServiceAccountToken to false (#5001) (@lingdie)
* e8d627101ef54033fe1402224e487d913301008c: styles(objectstorage): fix styles (#4959) (@xudaotutou)
* 570c1a0495f89efe1861f06f70b2cf83863ae25a: update (#5075) (@nowinkeyy)
* 06caa81dc975e64d7a96a070ad5a8e756f6e3679: update cpu/mem usage (#5006) (@wallyxjh)
* 9e3327a7e6009d550c22ba91998b95264ab5e711: update cpu/mem usage (#5008) (@wallyxjh)
* d2eb60c857fea42ccc9ad65b930c756f74f73737: update devbox to add delete resource. (#5017) (@lingdie)
* b2f04454666dc5ef162c452b16008f5bc7cbf119: update launchpad cpu/mem usage (#5016) (@wallyxjh)
* 4fabfc989886d3cf3473125874b41691ea6424f7: update launchpad single (#5052) (@wallyxjh)
* 8ad51bcb2e96cb3bec3a695a1f91fe5a64b42d97: update launchpad test (#5044) (@wallyxjh)
* c5445068d090167d775ac1e7237427d54c880911: update self-deployment (#4938) (@bearslyricattack)
* 1b92dcde5bc48b91eb0b48e531e557b57bf6c182: update: Set default k8sVersion in license-system (#4889) (@zjy365)
* e292b8417fbd41910c53736103a7d42cb9348866: update:dbprovider Pause Hint message (#4902) (@zjy365)
* d2cfd468fabd8741caad2f980a6fb588d4998dd6: update:desktop add scripts & workorder closedBy (#4928) (@zjy365)
* 2baac3760cc06b451ca9afb79289325dd385e76a: update:docs announcementBar (#4906) (@zjy365)
* 7a19c64dba46599366b38988af5e36d4c2b92065: upgrade devbox runtime crd, rewrite devbox controller. (#5066) (@lingdie)
* 62e61ac41fc3a08c750e3eb4e1a5f31779c9ecd5: 🤖 add release changelog using rebot. (#4887) (@sealos-release-robot)

**Full Changelog**: https://github.com/labring/sealos/compare/v5.0.0...v5.0.1-beta1

See [the CHANGELOG](https://github.com/labring/sealos/blob/main/CHANGELOG/CHANGELOG.md) for more details.

Your patronage towards Sealos is greatly appreciated 🎉🎉.

If you encounter any problems during its usage, please create an issue in the [GitHub repository](https://github.com/labring/sealos), we're committed to resolving your problem as soon as possible.