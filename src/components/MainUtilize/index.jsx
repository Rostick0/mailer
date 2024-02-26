// MainUtilize
import { useTranslation } from "react-i18next";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import styles from "./style.module.scss";
import Item from "../Item";

export default function MainReputation() {
  const { t } = useTranslation();

  const list = [
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M48.1641 30.8041V25.1953C48.1641 17.013 42.7253 10.078 35.2734 7.81289V5.27344C35.2734 2.36566 32.9078 0 30 0C27.0922 0 24.7266 2.36566 24.7266 5.27344V7.81289C17.2746 10.078 11.8359 17.0129 11.8359 25.1953V30.8041C11.8359 37.9915 9.09633 44.8066 4.12184 49.9943C3.63434 50.5027 3.49734 51.2528 3.77367 51.9006C4.05 52.5484 4.68633 52.9688 5.39062 52.9688H21.3878C22.2043 56.9756 25.7556 60 30 60C34.2445 60 37.7955 56.9756 38.6122 52.9688H54.6094C55.3137 52.9688 55.9499 52.5484 56.2262 51.9006C56.5025 51.2528 56.3655 50.5027 55.8782 49.9943C50.9037 44.8066 48.1641 37.9914 48.1641 30.8041ZM28.2422 5.27344C28.2422 4.30418 29.0307 3.51562 30 3.51562C30.9693 3.51562 31.7578 4.30418 31.7578 5.27344V7.11656C31.1793 7.06078 30.593 7.03125 30 7.03125C29.407 7.03125 28.8207 7.06078 28.2422 7.11656V5.27344ZM30 56.4844C27.7084 56.4844 25.7545 55.0147 25.0289 52.9688H34.9711C34.2455 55.0147 32.2916 56.4844 30 56.4844ZM9.1793 49.4531C13.1825 44.0869 15.3516 37.5928 15.3516 30.8041V25.1953C15.3516 17.1182 21.9229 10.5469 30 10.5469C38.0771 10.5469 44.6484 17.1182 44.6484 25.1953V30.8041C44.6484 37.5928 46.8175 44.0869 50.8208 49.4531H9.1793Z" />
          <path d="M52.8516 25.1952C52.8516 26.166 53.6386 26.9531 54.6094 26.9531C55.5802 26.9531 56.3672 26.166 56.3672 25.1952C56.3672 18.1523 53.6245 11.5308 48.6444 6.55071C47.958 5.86434 46.845 5.86422 46.1585 6.55071C45.472 7.23719 45.472 8.35012 46.1585 9.03661C50.4746 13.3527 52.8516 19.0913 52.8516 25.1952Z" />
          <path d="M5.39063 26.9532C6.36141 26.9532 7.14844 26.1662 7.14844 25.1954C7.14844 19.0916 9.52547 13.353 13.8415 9.03689C14.528 8.35041 14.528 7.23748 13.8415 6.551C13.1551 5.86451 12.0421 5.86451 11.3556 6.551C6.37547 11.5311 3.63281 18.1524 3.63281 25.1954C3.63281 26.1662 4.41984 26.9532 5.39063 26.9532Z" />
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_14_296)">
            <path d="M58.75 9.99996H7.5C6.81 9.99996 6.24996 10.5587 6.24996 11.25C6.24996 11.9413 6.81 12.5 7.5 12.5H57.5V53.75C57.5 55.8176 55.8176 57.5 53.75 57.5H6.24996C4.18242 57.5 2.49996 55.8176 2.49996 53.75V6.24996C2.49996 4.18242 4.18242 2.49996 6.24996 2.49996H53.7437C54.3713 2.50746 57.4999 2.72121 57.4999 6.24996C57.4999 6.94125 58.06 7.5 58.75 7.5C59.44 7.5 60 6.94125 60 6.24996C60 1.30629 55.9112 0 53.75 0H6.24996C2.80371 0 0 2.80371 0 6.24996V53.7499C0 57.1963 2.80371 60 6.24996 60H53.7499C57.1963 60 60 57.1963 60 53.75V11.25C60 10.5587 59.44 9.99996 58.75 9.99996Z" />
            <path d="M9.99997 5H7.50001C6.81001 5 6.24997 5.55875 6.24997 6.25004C6.24997 6.94121 6.81001 7.49996 7.50001 7.49996H9.99997C10.69 7.49996 11.25 6.94121 11.25 6.24992C11.25 5.55875 10.69 5 9.99997 5Z" />
            <path d="M17.5 5H15C14.31 5 13.75 5.55875 13.75 6.25004C13.75 6.94121 14.31 7.49996 15 7.49996H17.5C18.19 7.49996 18.75 6.94121 18.75 6.24992C18.75 5.55875 18.19 5 17.5 5Z" />
            <path d="M53.7501 5H51.2501C50.5601 5 50.0001 5.55875 50.0001 6.25004C50.0001 6.94133 50.5601 7.50008 51.2501 7.50008H53.7501C54.4401 7.50008 55.0001 6.94133 55.0001 6.25004C55 5.55875 54.4401 5 53.7501 5Z" />
            <path d="M48.75 20H16.25C15.56 20 15 20.5587 15 21.25C15 21.9413 15.56 22.5001 16.25 22.5001H48.75C49.1987 22.5001 49.5938 22.7376 49.815 23.0963L30 33.585L9.33504 22.6449C8.9475 22.4411 8.48133 22.4537 8.10633 22.6787C7.73004 22.905 7.50012 23.3111 7.50012 23.7499V46.2499C7.50012 48.3174 9.18258 49.9999 11.2501 49.9999H48.7501C50.8177 49.9999 52.5001 48.3174 52.5001 46.2499V23.775C52.5001 23.7549 52.5001 23.7375 52.5001 23.7187C52.4825 21.665 50.8075 20 48.75 20ZM50 46.25C50 46.94 49.4388 47.5 48.75 47.5H11.25C10.5613 47.5 9.99997 46.94 9.99997 46.25V25.8262L22.1987 32.2837L14.1162 40.3663C13.6274 40.855 13.6274 41.645 14.1162 42.1338C14.3599 42.3775 14.68 42.5 14.9999 42.5C15.3198 42.5 15.6398 42.3775 15.8836 42.1338L24.5099 33.5075L29.4149 36.105C29.7799 36.2975 30.2198 36.2975 30.5849 36.105L35.4899 33.5075L44.1162 42.1338C44.3599 42.3775 44.68 42.5 44.9999 42.5C45.3199 42.5 45.6399 42.3775 45.8836 42.1338C46.3724 41.645 46.3724 40.855 45.8836 40.3663L37.8011 32.2837L49.9998 25.8262V46.25H50Z" />
          </g>
          <defs>
            <clipPath id="clip0_14_296">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_14_327)">
            <path d="M4 21C4.00163 19.7292 4.80237 18.5969 6 18.172V34H8V9C8.00187 7.34387 9.34387 6.00187 11 6H38V4H11C8.23987 4.00313 6.00313 6.23988 6 9V16.1006C3.67362 16.5787 2.003 18.625 2 21V33H4V21Z" />
            <path d="M59 52H58V31H56V52H38.4141C37.2427 51.9967 36.1189 52.4624 35.2929 53.2929C34.8411 53.7471 34.2265 54.0018 33.5859 54H26.4141C25.7735 54.0018 25.1589 53.7471 24.7071 53.2929C23.8811 52.4624 22.7572 51.9967 21.5859 52H4V48H2V52H1C0.44775 52 0 52.4478 0 53V56C0.0025 58.2081 1.79187 59.9975 4 60H56C58.2081 59.9975 59.9975 58.2081 60 56V53C60 52.4478 59.5522 52 59 52ZM58 56C57.9987 57.104 57.104 57.9988 56 58H4C2.896 57.9988 2.00125 57.104 2 56V54H21.5859C22.2265 53.9982 22.8411 54.2529 23.2929 54.7071C24.1179 55.5366 25.2401 56.0021 26.41 56H33.59C34.7599 56.0021 35.8821 55.5367 36.7071 54.7072C37.1589 54.253 37.7735 53.9984 38.4141 54H58V56Z" />
            <path d="M52 31H54V50H52V31Z" />
            <path d="M6 48H8V50H6V48Z" />
            <path d="M10.9994 8H12.9994V10H10.9994V8Z" />
            <path d="M14.9994 8H16.9994V10H14.9994V8Z" />
            <path d="M18.9994 8H20.9994V10H18.9994V8Z" />
            <path d="M11 12H36V14H11V12Z" />
            <path d="M26.3904 19.0284C29.6241 17.5483 33.4003 17.8943 36.3113 19.9374L37.4629 18.302C33.3237 15.3866 27.799 15.3866 23.6599 18.302L24.8112 19.9374C25.3089 19.587 25.8375 19.2828 26.3904 19.0284Z" />
            <path d="M36.5918 50.4435C38.8048 48.1491 40.5564 45.451 41.7515 42.4959L39.8979 41.7449C38.7983 44.4636 37.1868 46.9459 35.1508 49.0567L36.5918 50.4435Z" />
            <path d="M59 12H58V9C58 4.02938 53.9705 0 49 0C44.0295 0 40 4.02938 40 9C40 9.55225 40.4477 10 41 10H45C45.5522 10 46 9.55225 46 9C46 7.34313 47.3431 6 49 6C50.6569 6 52 7.34313 52 9V12H39C38.4477 12 38 12.4478 38 13V22.0933C35.4787 20.7878 32.6792 20.1108 29.84 20.12H29.7C26.3635 20.1179 23.1041 21.1228 20.3479 23.003L21.4721 24.657C23.8969 23.0024 26.7645 22.118 29.7 22.1195H29.84C32.7176 22.1064 35.5424 22.892 38 24.3889V26.8C35.643 25.0456 32.7795 24.105 29.8412 24.1199H29.7012C25.5159 24.137 21.6027 26.1975 19.2205 29.6388L18.7402 30.3288L20.3821 31.471L20.8615 30.782C22.8696 27.8773 26.17 26.1365 29.7012 26.1195H29.8412C33.571 26.1195 37.0079 27.8306 39.034 30.6959C39.7421 31.6975 40.272 32.8139 40.6 33.9959C41.1316 35.863 41.1312 37.8415 40.5989 39.7084L42.5239 40.2516C43.157 38.0295 43.1574 35.6748 42.525 33.4524C42.1355 32.052 41.5072 30.7294 40.668 29.5426C40.537 29.3574 40.4002 29.177 40.2596 29H59C59.5522 29 60 28.5523 60 28V13C60 12.4478 59.5522 12 59 12ZM49 4C46.6249 4.003 44.5784 5.6735 44.1 8H42.0712C42.6215 4.17338 46.1695 1.51725 49.9962 2.0675C53.4434 2.56313 56.0019 5.5175 56 9V12H54V9C53.9969 6.23988 51.7601 4.00313 49 4ZM58 27H40V14H58V27Z" />
            <path d="M51.8583 19.9C51.952 19.6092 51.9999 19.3055 52 19C52 17.3431 50.6569 16 49 16C47.3431 16 46 17.3431 46 19C46.0001 19.3055 46.048 19.6092 46.1418 19.9C44.7973 20.8315 43.9965 22.3644 44 24C44 24.5522 44.4478 25 45 25H53C53.5523 25 54 24.5522 54 24C54.0035 22.3644 53.2028 20.8315 51.8583 19.9ZM46.1708 23C46.4568 22.1926 47.075 21.5464 47.869 21.225C48.3804 21.0163 48.6256 20.4325 48.4169 19.9212C48.376 19.8211 48.3191 19.7282 48.2485 19.6462C48.0904 19.4679 48.0021 19.2384 48 19C48 18.4478 48.4478 18 49 18C49.5523 18 50 18.4478 50 19C49.9979 19.2384 49.9096 19.4681 49.7515 19.6465C49.3909 20.0649 49.4378 20.6963 49.856 21.0569C49.938 21.1275 50.0309 21.1844 50.131 21.2253C50.925 21.5466 51.5431 22.1926 51.8293 23H46.1708Z" />
            <path d="M1 46H21.2658L21.1429 46.1229L22.5571 47.5375L24.0946 46H26.9163L24.1125 48.8029L25.5268 50.2171L30.5548 45.189C32.4956 43.2554 33.9425 40.8827 34.773 38.2719C35.2294 36.8447 34.97 35.2851 34.0762 34.0826C33.179 32.8435 31.7395 32.1129 30.2096 32.1201H29.7C27.6818 32.1201 25.8635 33.4467 25.1735 35.4274C25.106 35.6254 25.0318 35.8149 24.95 36.0001H22.6625C22.9253 35.6226 23.1349 35.2107 23.2852 34.7761C24.2455 31.9912 26.8234 30.1201 29.6999 30.1201H30.2099C32.3703 30.1234 34.401 31.1514 35.6826 32.8905C36.9587 34.6067 37.3288 36.8332 36.676 38.8699C35.7505 41.7872 34.1375 44.4394 31.9727 46.603L28.2827 50.293L29.697 51.7072L33.387 48.0172C35.7785 45.6266 37.5605 42.6962 38.5829 39.473C39.4311 36.8287 38.952 33.9377 37.2961 31.7085C35.6369 29.4561 33.0074 28.1246 30.2099 28.1201H29.7C25.9706 28.1201 22.633 30.5326 21.3946 34.1241C21.2405 34.5632 20.9905 34.9625 20.6629 35.293L19.9557 36H1C0.44775 36 0 36.4477 0 37V45C0 45.5522 0.44775 46 1 46ZM29.7 34.12H30.21C31.1015 34.116 31.9404 34.542 32.463 35.2642C32.977 35.9536 33.1274 36.8484 32.8667 37.6679C32.2689 39.5691 31.2939 41.3302 30 42.8461V39.304C30.4589 38.4559 30.821 37.5587 31.0795 36.6297C31.115 36.4964 31.0357 36.3594 30.9023 36.3239C30.8948 36.3219 30.8871 36.3202 30.8795 36.3189L29 36H27.095C27.5274 34.8556 28.5404 34.12 29.7 34.12ZM2 38H28V44H2V38Z" />
            <path d="M4 40H6V42H4V40Z" />
            <path d="M8 40H10V42H8V40Z" />
            <path d="M12 40H14V42H12V40Z" />
            <path d="M16 40H18V42H16V40Z" />
          </g>
          <defs>
            <clipPath id="clip0_14_327">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_14_345)">
            <path d="M0.943592 8.34326H59.0573V10.2169H0.943592V8.34326Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.58047 4.19824C6.08531 4.19824 6.48375 4.61027 6.48375 5.10152C6.48375 5.60637 6.08531 6.0184 5.58047 6.0184C5.07563 6.0184 4.67672 5.60637 4.67672 5.10152C4.67672 4.61027 5.07563 4.19824 5.58047 4.19824ZM13.4986 4.19824C14.0034 4.19824 14.4019 4.61027 14.4019 5.10152C14.4019 5.60637 14.0034 6.0184 13.4986 6.0184C12.9933 6.0184 12.5817 5.60637 12.5817 5.10152C12.5822 4.61027 12.9938 4.19824 13.4986 4.19824ZM9.53953 4.19824C10.0444 4.19824 10.4428 4.61027 10.4428 5.10152C10.4428 5.60637 10.0444 6.0184 9.53953 6.0184C9.03469 6.0184 8.62266 5.60637 8.62266 5.10152C8.62266 4.61027 9.03469 4.19824 9.53953 4.19824Z"
            />
            <path d="M53.2369 4.17139C53.7548 4.17139 54.1669 4.58342 54.1669 5.10139C54.1669 5.61936 53.7548 6.04498 53.2369 6.04498H21.3375C20.8195 6.04498 20.3939 5.61982 20.3939 5.10139C20.3939 4.58342 20.8191 4.17139 21.3375 4.17139H53.2369Z" />
            <path d="M38.6756 29.4019C38.6756 27.6216 39.4997 26.4788 40.5764 25.9477C41.0011 25.7485 41.4661 25.6421 41.9442 25.6421C42.4228 25.6421 42.8873 25.7485 43.313 25.9608C44.4023 26.4919 45.2531 27.6483 45.2531 29.4019V38.4497C45.4922 38.5027 45.9305 38.6091 46.3416 38.7151C47.9503 39.0872 49.2914 39.4065 51.4308 40.1635C52.2539 40.456 53.0386 41.0672 53.6095 41.8116C54.1669 42.5551 54.5259 43.4321 54.5259 44.296V56.5983C54.5259 58.4588 52.9852 60.0001 51.1111 60.0001H42.0769C40.5094 60.0001 38.8083 59.0035 37.8253 57.7946L31.1564 49.6369C30.053 48.3352 29.8275 46.9529 30.1462 45.8508C30.292 45.346 30.5714 44.8941 30.93 44.5351C31.2886 44.176 31.7541 43.9107 32.272 43.7776C33.5869 43.4326 34.9416 44.0302 35.8983 44.934L38.6752 47.3518V44.934V42.2494L38.6756 29.4019ZM41.3864 27.6352C40.9214 27.8743 40.5497 28.4457 40.5497 29.4024V42.2499V44.9344V49.4251C40.5497 49.6374 40.47 49.8638 40.3097 50.0363C39.9783 50.4216 39.3797 50.4615 38.9948 50.1291L34.6762 46.343C34.0252 45.8251 33.0155 45.1069 32.2453 45.8644C31.5009 46.5952 32.0194 47.7643 32.5903 48.4285L39.2198 56.5594C39.5925 57.0512 40.7883 58.1274 42.0764 58.1274H51.1106C51.9609 58.1274 52.6387 57.4365 52.6387 56.5993V44.296C52.6387 43.8441 52.44 43.366 52.1208 42.9404C51.7617 42.4754 51.2841 42.1032 50.805 41.9312C48.7861 41.2135 47.4708 40.9079 45.9033 40.5357C45.638 40.4691 45.3712 40.403 44.7075 40.2432C44.3081 40.1504 43.9767 39.9244 43.7508 39.6319C43.5117 39.3268 43.3781 38.9546 43.3781 38.5557V29.4019C43.3781 28.4719 42.9937 27.8874 42.502 27.6483C42.3155 27.5555 42.1294 27.5152 41.9438 27.5152C41.7581 27.5152 41.5725 27.5555 41.3864 27.6352Z" />
            <path d="M13.658 14.6279H19.6763H25.6688C26.28 14.6279 26.8509 14.8806 27.2498 15.2921C27.6619 15.6911 27.9141 16.262 27.9141 16.8732V34.1453C27.9141 34.7565 27.6614 35.3275 27.2498 35.7264V35.7395C26.8509 36.1384 26.28 36.3911 25.6688 36.3911H7.66594C7.04109 36.3911 6.48328 36.1384 6.07172 35.7395V35.7264C5.66016 35.3275 5.4075 34.7565 5.4075 34.1453V16.8732C5.4075 16.262 5.66016 15.6911 6.07172 15.2921C6.48328 14.8801 7.04156 14.6279 7.66594 14.6279H13.658ZM18.9459 31.7275C18.428 31.7275 18.0028 31.3023 18.0028 30.7839C18.0028 30.2654 18.428 29.8539 18.9459 29.8539H22.5202C23.0381 29.8539 23.4502 30.2654 23.4502 30.7839C23.4502 31.3023 23.0381 31.7275 22.5202 31.7275H18.9459ZM20.6067 16.5015V22.892C20.6067 23.1709 20.527 23.4367 20.3808 23.6626C20.2345 23.8886 20.0222 24.0742 19.7564 24.1937C19.2384 24.4196 18.6403 24.3268 18.2152 23.9415L16.7006 22.5864L15.0928 23.9945C14.6677 24.3531 14.07 24.4459 13.5516 24.2068C13.2989 24.1004 13.0997 23.9148 12.9403 23.6889C12.7941 23.4498 12.7144 23.184 12.7144 22.9051V16.5015H7.66594C7.55953 16.5015 7.46672 16.5414 7.40016 16.6079C7.33359 16.6745 7.29375 16.7673 7.29375 16.8737V34.1457C7.29375 34.2521 7.33359 34.345 7.40016 34.4115C7.46672 34.4781 7.55953 34.5179 7.66594 34.5179H25.6688C25.7752 34.5179 25.868 34.4781 25.9345 34.4115C26.0011 34.3445 26.0409 34.2517 26.0409 34.1457V16.8732C26.0409 16.7668 26.0011 16.674 25.9345 16.6075C25.868 16.5409 25.7752 16.5011 25.6688 16.5011L20.6067 16.5015ZM18.7336 16.5015H14.5884V21.9353L15.7706 20.9125C16.0233 20.6865 16.395 20.567 16.7273 20.567C17.0592 20.567 17.4047 20.6865 17.6705 20.9261L18.7336 21.8959V16.5015Z" />
            <path d="M35.7661 30.4383C36.2841 30.4383 36.7102 30.8503 36.7102 31.3683C36.7102 31.8867 36.2845 32.3119 35.7661 32.3119H35.0353C33.4669 32.3119 32.1928 31.0364 32.1928 29.4685V24.6056C32.1928 23.0377 33.4809 21.7622 35.0353 21.7622H51.3773C52.9317 21.7622 54.2072 23.0377 54.2072 24.6056V29.4685C54.2072 31.0364 52.9317 32.3119 51.3773 32.3119H48.6136C48.0956 32.3119 47.6705 31.8872 47.6705 31.3683C47.6705 30.8503 48.0952 30.4383 48.6136 30.4383H51.3773C51.9084 30.4383 52.3341 30 52.3341 29.4685V24.6056C52.3341 24.0741 51.9084 23.6358 51.3773 23.6358H35.0353C34.5042 23.6358 34.0659 24.0741 34.0659 24.6056V29.4685C34.0659 30 34.5047 30.4383 35.0353 30.4383H35.7661Z" />
            <path d="M6.35063 44.9869C5.83266 44.9869 5.4075 44.5618 5.4075 44.0433C5.4075 43.5249 5.83266 43.1133 6.35063 43.1133H10.8281C11.3461 43.1133 11.7717 43.5254 11.7717 44.0433C11.7717 44.5613 11.3466 44.9869 10.8281 44.9869H6.35063ZM6.35063 41.0274C5.83266 41.0274 5.4075 40.6022 5.4075 40.0974C5.4075 39.5794 5.83266 39.1538 6.35063 39.1538H18.4809C18.9989 39.1538 19.4109 39.579 19.4109 40.0974C19.4109 40.6022 18.9994 41.0274 18.4809 41.0274H6.35063Z" />
            <path d="M26.7314 48.0291C27.2362 48.0291 27.6614 48.4542 27.6614 48.9727C27.6614 49.4911 27.2362 49.9027 26.7314 49.9027H2.67047C1.89984 49.9027 1.23516 49.5834 0.757031 49.0655C0.278906 48.5606 0 47.8566 0 47.1122V2.75016C0 1.24875 1.24875 0 2.75016 0H57.2358C58.7512 0 60 1.24875 60 2.75016V47.1122C60 47.8697 59.6677 48.5737 59.1366 49.0786C58.6186 49.5834 57.9145 49.9027 57.1561 49.9027C56.6381 49.9027 56.213 49.4906 56.213 48.9727C56.213 48.4547 56.6377 48.0291 57.1561 48.0291C57.4087 48.0291 57.6478 47.9227 57.8344 47.7366C58.0064 47.5641 58.1264 47.3381 58.1264 47.1122V2.75016C58.1264 2.27203 57.727 1.87313 57.2358 1.87313H2.75016C2.27156 1.87313 1.87313 2.27203 1.87313 2.75016V47.1122C1.87313 47.378 1.96594 47.6302 2.12578 47.79C2.27203 47.9363 2.45766 48.0291 2.67047 48.0291H26.7314Z" />
          </g>
          <defs>
            <clipPath id="clip0_14_345">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.5475 51.2837C33.08 51.5937 31.5588 51.7574 30 51.7574C17.9262 51.7574 8.125 41.9561 8.125 29.8824C8.125 28.8474 7.285 28.0074 6.25 28.0074C5.215 28.0074 4.375 28.8474 4.375 29.8824C4.375 44.0249 15.8575 55.5074 30 55.5074C31.825 55.5074 33.6063 55.3161 35.3238 54.9524C36.3363 54.7374 36.985 53.7424 36.77 52.7299C36.5563 51.7174 35.56 51.0687 34.5475 51.2837ZM33.0812 8.22239C43.6975 9.72114 51.875 18.8549 51.875 29.8824C51.875 37.6824 47.7825 44.5349 41.6312 48.4087C40.755 48.9599 40.4925 50.1187 41.0438 50.9937C41.595 51.8699 42.7537 52.1324 43.6287 51.5812C50.835 47.0449 55.625 39.0186 55.625 29.8824C55.625 16.9636 46.0425 6.26489 33.605 4.50989C32.58 4.36489 31.6312 5.07988 31.4862 6.10363C31.3412 7.12863 32.0562 8.07864 33.0812 8.22239ZM9.69999 21.7224C12.0437 15.9036 16.8175 11.3211 22.7612 9.23489C23.7388 8.89239 24.2525 7.82116 23.91 6.84491C23.5675 5.86866 22.4963 5.35365 21.52 5.69615C14.5575 8.1399 8.96626 13.5074 6.22126 20.3212C5.83501 21.2812 6.3 22.3749 7.26 22.7612C8.22 23.1487 9.31249 22.6824 9.69999 21.7224Z"
          />
        </svg>
      ),
    },
    {
      svg: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="#DD1405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40 56.25H10C8.34301 56.248 6.75445 55.5889 5.58277 54.4172C4.4111 53.2456 3.75198 51.657 3.75 50V10C3.75198 8.34301 4.4111 6.75445 5.58277 5.58277C6.75445 4.4111 8.34301 3.75198 10 3.75H29.325C30.1574 3.75056 30.9813 3.91661 31.7489 4.2385C32.5165 4.56039 33.2125 5.0317 33.7963 5.625L44.4688 16.5488C45.6135 17.7174 46.2532 19.2891 46.25 20.925V30.2375C46.25 30.569 46.1183 30.887 45.8839 31.1214C45.6495 31.3558 45.3315 31.4875 45 31.4875C44.6685 31.4875 44.3505 31.3558 44.1161 31.1214C43.8817 30.887 43.75 30.569 43.75 30.2375V20.925C43.7505 19.9437 43.3664 19.0013 42.68 18.3L32.0062 7.375C31.6565 7.01876 31.2392 6.73579 30.7789 6.54263C30.3185 6.34947 29.8242 6.24999 29.325 6.25H10C9.00544 6.25 8.05161 6.64509 7.34835 7.34835C6.64509 8.05161 6.25 9.00544 6.25 10V50C6.25 50.9946 6.64509 51.9484 7.34835 52.6517C8.05161 53.3549 9.00544 53.75 10 53.75H40C40.4716 53.7519 40.9388 53.6605 41.375 53.4813C41.6817 53.3551 42.0259 53.356 42.3319 53.4836C42.6379 53.6112 42.8807 53.8552 43.0069 54.1619C43.133 54.4685 43.1322 54.8127 43.0045 55.1188C42.8769 55.4248 42.6329 55.6676 42.3262 55.7938C41.5882 56.0969 40.7978 56.2519 40 56.25Z" />
          <path d="M44.4875 20H36.25C34.593 19.998 33.0044 19.3389 31.8328 18.1672C30.6611 16.9955 30.002 15.4069 30 13.75V5.38745C30 5.05593 30.1317 4.73799 30.3661 4.50357C30.6005 4.26915 30.9185 4.13745 31.25 4.13745C31.5815 4.13745 31.8995 4.26915 32.1339 4.50357C32.3683 4.73799 32.5 5.05593 32.5 5.38745V13.75C32.5 14.7445 32.8951 15.6983 33.5983 16.4016C34.3016 17.1049 35.2554 17.5 36.25 17.5H44.4875C44.819 17.5 45.137 17.6316 45.3714 17.8661C45.6058 18.1005 45.7375 18.4184 45.7375 18.75C45.7375 19.0815 45.6058 19.3994 45.3714 19.6338C45.137 19.8683 44.819 20 44.4875 20Z" />
          <path d="M42.5 56.0674C42.0071 56.068 41.525 55.9222 41.115 55.6486L37.1 52.9711C34.5296 51.2621 32.422 48.9436 30.9651 46.2223C29.5082 43.5011 28.7472 40.4616 28.75 37.3749V35.2349C28.7525 34.6725 28.9436 34.1271 29.2929 33.6863C29.6422 33.2455 30.1293 32.9347 30.6763 32.8036C34.3886 31.7775 37.9203 30.1841 41.1463 28.0799C41.5499 27.8199 42.0199 27.6816 42.5 27.6816C42.9801 27.6816 43.4501 27.8199 43.8538 28.0799C47.0796 30.1844 50.6113 31.7778 54.3238 32.8036C54.8707 32.9347 55.3579 33.2455 55.7071 33.6863C56.0564 34.1271 56.2476 34.6725 56.25 35.2349V37.3749C56.2536 40.4625 55.4931 43.5029 54.0361 46.2251C52.5791 48.9473 50.4711 51.2666 47.9 52.9761L43.8863 55.6524C43.4754 55.9248 42.993 56.0693 42.5 56.0674ZM42.5 30.1799C39.044 32.4345 35.2589 34.1389 31.28 35.2324L31.25 37.3749C31.247 40.0507 31.9061 42.6857 33.1687 45.045C34.4314 47.4042 36.2582 49.4143 38.4863 50.8961L42.5 53.5674L46.5138 50.8911C48.7412 49.4098 50.5675 47.4005 51.8301 45.0422C53.0927 42.6839 53.7522 40.0499 53.75 37.3749V35.2349C49.7613 34.142 45.9662 32.4372 42.5 30.1811V30.1799Z" />
          <path d="M41.25 45C40.9185 45 40.6006 44.8682 40.3663 44.6338L37.8663 42.1338C37.6386 41.898 37.5126 41.5823 37.5154 41.2545C37.5183 40.9268 37.6497 40.6133 37.8815 40.3815C38.1133 40.1497 38.4268 40.0183 38.7545 40.0154C39.0823 40.0126 39.398 40.1386 39.6338 40.3663L41.25 41.9825L45.3663 37.8663C45.602 37.6386 45.9178 37.5126 46.2455 37.5154C46.5733 37.5183 46.8868 37.6497 47.1185 37.8815C47.3503 38.1133 47.4818 38.4268 47.4846 38.7545C47.4875 39.0823 47.3615 39.398 47.1338 39.6338L42.1338 44.6338C41.8994 44.8682 41.5815 45 41.25 45Z" />
          <path d="M22.5 16.25H12.5C12.1685 16.25 11.8505 16.1183 11.6161 15.8839C11.3817 15.6495 11.25 15.3315 11.25 15C11.25 14.6685 11.3817 14.3505 11.6161 14.1161C11.8505 13.8817 12.1685 13.75 12.5 13.75H22.5C22.8315 13.75 23.1495 13.8817 23.3839 14.1161C23.6183 14.3505 23.75 14.6685 23.75 15C23.75 15.3315 23.6183 15.6495 23.3839 15.8839C23.1495 16.1183 22.8315 16.25 22.5 16.25Z" />
          <path d="M30 23.75H12.5C12.1685 23.75 11.8505 23.6183 11.6161 23.3839C11.3817 23.1495 11.25 22.8315 11.25 22.5C11.25 22.1685 11.3817 21.8505 11.6161 21.6161C11.8505 21.3817 12.1685 21.25 12.5 21.25H30C30.3315 21.25 30.6495 21.3817 30.8839 21.6161C31.1183 21.8505 31.25 22.1685 31.25 22.5C31.25 22.8315 31.1183 23.1495 30.8839 23.3839C30.6495 23.6183 30.3315 23.75 30 23.75Z" />
          <path d="M32.5 31.25H12.5C12.1685 31.25 11.8505 31.1183 11.6161 30.8839C11.3817 30.6495 11.25 30.3315 11.25 30C11.25 29.6685 11.3817 29.3505 11.6161 29.1161C11.8505 28.8817 12.1685 28.75 12.5 28.75H32.5C32.8315 28.75 33.1495 28.8817 33.3839 29.1161C33.6183 29.3505 33.75 29.6685 33.75 30C33.75 30.3315 33.6183 30.6495 33.3839 30.8839C33.1495 31.1183 32.8315 31.25 32.5 31.25Z" />
          <path d="M25 38.75H12.5C12.1685 38.75 11.8505 38.6183 11.6161 38.3839C11.3817 38.1495 11.25 37.8315 11.25 37.5C11.25 37.1685 11.3817 36.8505 11.6161 36.6161C11.8505 36.3817 12.1685 36.25 12.5 36.25H25C25.3315 36.25 25.6495 36.3817 25.8839 36.6161C26.1183 36.8505 26.25 37.1685 26.25 37.5C26.25 37.8315 26.1183 38.1495 25.8839 38.3839C25.6495 38.6183 25.3315 38.75 25 38.75Z" />
          <path d="M25 46.25H12.5C12.1685 46.25 11.8505 46.1183 11.6161 45.8839C11.3817 45.6495 11.25 45.3315 11.25 45C11.25 44.6685 11.3817 44.3505 11.6161 44.1161C11.8505 43.8817 12.1685 43.75 12.5 43.75H25C25.3315 43.75 25.6495 43.8817 25.8839 44.1161C26.1183 44.3505 26.25 44.6685 26.25 45C26.25 45.3315 26.1183 45.6495 25.8839 45.8839C25.6495 46.1183 25.3315 46.25 25 46.25Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.utilize}>
      <Title variant="center">{t("utilizeTitle")}</Title>
      <ul className={styles.utilize__list}>
        {list.map((item, index) => (
          <Item
            key={index}
            svg={item.svg}
            title={t("utilizeItemTitle" + ++index)}
            description={t("utilizeItemDescription" + ++index)}
          ></Item>
        ))}
      </ul>
      <Button>{t("utilizeButton")}</Button>
    </div>
  );
}
