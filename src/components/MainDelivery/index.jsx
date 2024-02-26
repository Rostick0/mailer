import styles from "./style.module.scss";
import Title from "../../ui/Title";
import { useTranslation } from "react-i18next";
import Item from "../Item";

export default function MainDelivery() {
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
          <g clipPath="url(#clip0_14_384)">
            <path d="M34.4985 30.1274H34.4632C35.7525 28.9286 36.5612 27.2194 36.5612 25.3242C36.5612 21.7064 33.6179 18.7631 30.0001 18.7631C26.3824 18.7631 23.439 21.7064 23.439 25.3242C23.439 27.2194 24.2477 28.9286 25.537 30.1274H25.5016C22.9283 30.1274 20.8346 32.2209 20.8346 34.7944V40.4766C20.8346 40.9621 21.2282 41.3555 21.7136 41.3555H38.2864C38.772 41.3555 39.1654 40.9621 39.1654 40.4766V34.7944C39.1655 32.2209 37.0719 30.1274 34.4985 30.1274ZM25.197 25.3242C25.197 22.6758 27.3517 20.5209 30.0002 20.5209C32.6488 20.5209 34.8035 22.6758 34.8035 25.3242C34.8035 27.9727 32.6487 30.1274 30.0002 30.1274C27.3518 30.1274 25.197 27.9727 25.197 25.3242ZM37.4077 39.5977H22.5926V34.7944C22.5926 33.1903 23.8977 31.8852 25.5018 31.8852H34.4985C36.1025 31.8852 37.4077 33.1903 37.4077 34.7944V39.5977Z" />
            <path d="M24.6986 14.8385H35.3017C36.453 14.8385 37.3898 13.9017 37.3898 12.7502V9.19242C37.3898 8.70691 36.9964 8.31351 36.5109 8.31351C36.0254 8.31351 35.632 8.70691 35.632 9.19242V12.7501C35.632 12.9323 35.4838 13.0806 35.3017 13.0806H24.6986C24.5163 13.0806 24.3681 12.9322 24.3681 12.7501V2.14711C24.3681 1.96547 24.5163 1.81769 24.6986 1.81769H35.3017C35.4839 1.81769 35.632 1.96547 35.632 2.14711V5.09086C35.632 5.57636 36.0254 5.96976 36.5109 5.96976C36.9964 5.96976 37.3898 5.57636 37.3898 5.09086V2.14711C37.3898 0.996326 36.453 0.0599976 35.3017 0.0599976H24.6986C23.5471 0.0599976 22.6103 0.996326 22.6103 2.14711V12.7501C22.6104 13.9017 23.5472 14.8385 24.6986 14.8385Z" />
            <path d="M58.0025 25.0059C57.6707 24.6518 57.1146 24.6333 56.7601 24.9652C56.4059 25.297 56.3876 25.8532 56.7193 26.2076C57.7014 27.2559 58.2421 28.6241 58.2421 30.0599C58.2421 33.1648 55.7156 35.6908 52.6102 35.6908C49.5046 35.6908 46.9781 33.1648 46.9781 30.0599C46.9781 26.9544 49.5046 24.428 52.6102 24.428C52.9553 24.428 53.3011 24.4597 53.638 24.5222C54.1155 24.6115 54.574 24.2957 54.6625 23.8184C54.7511 23.3411 54.4358 22.8825 53.9586 22.7939C53.5162 22.7119 53.0625 22.6702 52.61 22.6702C48.5353 22.6702 45.2202 25.9852 45.2202 30.0599C45.2202 34.1339 48.5353 37.4484 52.61 37.4484C56.6848 37.4484 60 34.1339 60 30.0599C60 28.1762 59.2905 26.3814 58.0025 25.0059Z" />
            <path d="M14.4509 36.3997C14.8569 35.7426 14.8931 34.9378 14.5478 34.2469L9.37066 23.8928C8.99344 23.1383 8.23523 22.6696 7.3916 22.6696C6.5482 22.6696 5.78988 23.1383 5.41266 23.8926L0.235663 34.2469C-0.109806 34.9378 -0.0735947 35.7426 0.33246 36.3997C0.738515 37.0567 1.44211 37.449 2.21449 37.449H12.5687C13.3412 37.449 14.0448 37.0567 14.4509 36.3997ZM1.82777 35.4756C1.78769 35.4106 1.70555 35.2378 1.80785 35.0331L6.98496 24.6787C7.0984 24.4519 7.30723 24.4274 7.3916 24.4274C7.47609 24.4274 7.68492 24.452 7.79836 24.6789L12.9755 35.033C13.0779 35.2377 12.9956 35.4108 12.9555 35.4755C12.9155 35.5404 12.7976 35.6912 12.5687 35.6912H2.21449C1.98574 35.6912 1.86785 35.5404 1.82777 35.4756Z" />
            <path d="M35.9931 46.7678L31.397 44.1146C30.5353 43.6172 29.4649 43.6172 28.6034 44.1146L24.0074 46.7677C23.1457 47.2649 22.6104 48.1919 22.6104 49.1871V49.7894C22.6104 50.275 23.0039 50.6684 23.4893 50.6684C23.9747 50.6684 24.3682 50.275 24.3682 49.7894V49.1871C24.3682 48.8182 24.5666 48.4744 24.8861 48.29L29.4821 45.6369C29.8017 45.4525 30.1987 45.4526 30.5181 45.6369L35.1143 48.2901C35.4336 48.4744 35.632 48.8182 35.632 49.1871V54.4944C35.632 54.8633 35.4336 55.2071 35.1141 55.3915L30.518 58.0446C30.1985 58.2292 29.8016 58.2292 29.482 58.0446L24.8858 55.3914C24.5664 55.2071 24.3681 54.8633 24.3681 54.4944V53.891C24.3681 53.4055 23.9746 53.0121 23.4892 53.0121C23.0038 53.0121 22.6103 53.4055 22.6103 53.891V54.4944C22.6103 55.4896 23.1456 56.4166 24.0071 56.9137L28.6032 59.5669C29.034 59.8155 29.5171 59.94 30 59.94C30.483 59.94 30.966 59.8155 31.3968 59.5669L35.9927 56.9139C36.8544 56.4166 37.3898 55.4896 37.3898 54.4944V49.1871C37.39 48.1919 36.8545 47.2649 35.9931 46.7678Z" />
            <path d="M40.299 8.32803H50.2429C51.0638 8.32803 51.7315 8.99577 51.7315 9.81667V17.6385L50.3909 16.2977C50.0475 15.9546 49.4911 15.9546 49.1478 16.2977C48.8046 16.6411 48.8046 17.1975 49.1478 17.5407L51.9889 20.3818C52.1538 20.5466 52.3773 20.6392 52.6105 20.6392C52.8436 20.6392 53.0671 20.5466 53.2321 20.3817L56.073 17.5406C56.4163 17.1974 56.4163 16.6408 56.0729 16.2977C55.7298 15.9546 55.1733 15.9545 54.83 16.2978L53.4895 17.6385V9.81667C53.4895 8.02663 52.0331 6.57022 50.2431 6.57022H40.2993C39.8137 6.57022 39.4203 6.96362 39.4203 7.44913C39.4203 7.93464 39.8135 8.32803 40.299 8.32803Z" />
            <path d="M17.4823 3.98601C17.139 3.64289 16.5825 3.64277 16.2394 3.98613C15.8961 4.32937 15.8961 4.88589 16.2394 5.22902L17.58 6.56953H9.75808C7.96804 6.56953 6.51164 8.02593 6.51164 9.81597V19.7598C6.51164 20.2453 6.90515 20.6387 7.39054 20.6387C7.87594 20.6387 8.26945 20.2453 8.26945 19.7598V9.81609C8.26945 8.99519 8.9373 8.32746 9.75808 8.32746H17.58L16.2394 9.66808C15.8961 10.0114 15.8961 10.5678 16.2394 10.9111C16.4109 11.0827 16.6359 11.1684 16.8608 11.1684C17.0857 11.1684 17.3107 11.0827 17.4823 10.9111L20.3234 8.06999C20.4882 7.90511 20.5808 7.68164 20.5808 7.44843C20.5808 7.21523 20.4882 6.99187 20.3234 6.82687L17.4823 3.98601Z" />
            <path d="M19.7012 51.7894H9.7575C8.93672 51.7894 8.26887 51.1216 8.26887 50.3007V42.4789L9.60949 43.8197C9.78105 43.9912 10.0061 44.077 10.2309 44.077C10.4558 44.077 10.6808 43.9912 10.8524 43.8197C11.1956 43.4763 11.1956 42.9199 10.8524 42.5767L8.01129 39.7356C7.84652 39.5708 7.62293 39.4782 7.38984 39.4782C7.15676 39.4782 6.93316 39.5708 6.7684 39.7356L3.92742 42.5766C3.58418 42.9199 3.58418 43.4763 3.92742 43.8196C4.27066 44.1627 4.82719 44.1627 5.17031 43.8196L6.51106 42.4788V50.3006C6.51106 52.0907 7.96746 53.5471 9.7575 53.5471H19.7012C20.1866 53.5471 20.5801 53.1537 20.5801 52.6682C20.5801 52.1827 20.1866 51.7894 19.7012 51.7894Z" />
            <path d="M52.6097 39.4786C52.1242 39.4786 51.7308 39.872 51.7308 40.3575V50.3013C51.7308 51.1222 51.063 51.7899 50.2421 51.7899H42.4203L43.7611 50.4493C44.1043 50.106 44.1043 49.5496 43.7611 49.2063C43.4177 48.8632 42.8613 48.8632 42.5181 49.2063L39.677 52.0474C39.5122 52.2123 39.4196 52.4358 39.4196 52.669C39.4196 52.9022 39.5122 53.1255 39.6771 53.2905L42.5182 56.1315C42.6898 56.3031 42.9148 56.3888 43.1396 56.3888C43.3645 56.3888 43.5895 56.3031 43.7612 56.1314C44.1044 55.7881 44.1045 55.2316 43.7611 54.8885L42.4205 53.548H50.2423C52.0323 53.548 53.4887 52.0916 53.4887 50.3015V40.3577C53.4886 39.8721 53.0951 39.4786 52.6097 39.4786Z" />
          </g>
          <defs>
            <clipPath id="clip0_14_384">
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
          <g clipPath="url(#clip0_14_396)">
            <path d="M32.0028 47.0895C32.4889 47.0895 32.8827 46.6956 32.8827 46.2097C32.8827 45.7236 32.4888 45.3297 32.0028 45.3297H27.9972C27.5113 45.3297 27.1174 45.7236 27.1174 46.2097C27.1174 46.6957 27.5113 47.0895 27.9972 47.0895H32.0028Z" />
            <path d="M56.1492 8.37442H48.7711L50.0032 7.1425C50.5802 6.56535 50.5802 5.62664 50.0032 5.04948L47.9914 3.03771C47.4142 2.46068 46.4757 2.46068 45.8984 3.03771L44.6511 4.28511C43.865 3.83773 43.0286 3.49083 42.1594 3.25167V1.48914C42.1594 0.67318 41.4955 0.00915527 40.6794 0.00915527H37.8343C37.0183 0.00915527 36.3544 0.673063 36.3544 1.48914V3.25155C35.4852 3.49071 34.6489 3.83762 33.8626 4.28511L32.6153 3.03771C32.038 2.46068 31.0996 2.46068 30.5223 3.03771L28.5106 5.04948C27.9336 5.62664 27.9336 6.56535 28.5106 7.1425L29.7428 8.37442H3.85097C1.72747 8.37442 0 10.102 0 12.2255V47.0146C0 49.1381 1.72747 50.8656 3.85097 50.8656H12.011C12.4969 50.8656 12.8908 50.4717 12.8908 49.9856C12.8908 49.4995 12.4969 49.1057 12.011 49.1057H3.85097C2.69795 49.1057 1.75983 48.1676 1.75983 47.0146V43.3137H4.54841H58.2402V47.0146C58.2402 48.1676 57.3022 49.1057 56.1492 49.1057H16.1944C15.7085 49.1057 15.3145 49.4996 15.3145 49.9856C15.3145 50.4717 15.7085 50.8656 16.1944 50.8656H23.4171C23.3517 52.8742 23.1514 56.3485 22.7003 58.231H19.6509C19.1649 58.231 18.771 58.625 18.771 59.111C18.771 59.5971 19.1649 59.9909 19.6509 59.9909H40.3493C40.8353 59.9909 41.2291 59.597 41.2291 59.111C41.2291 58.625 40.8352 58.231 40.3493 58.231H37.2999C36.8491 56.349 36.6487 52.8744 36.5832 50.8656H56.1493C58.2726 50.8656 60.0001 49.1381 60.0001 47.0146V12.2255C60 10.102 58.2725 8.37442 56.1492 8.37442ZM24.5007 58.231C24.9661 55.9523 25.1261 52.4758 25.1773 50.8656H34.8227C34.8739 52.4758 35.0339 55.9523 35.4993 58.231H24.5007ZM31.1555 7.29842L29.953 6.09605L31.569 4.48019L32.7715 5.68268C33.2507 6.1617 33.9934 6.25315 34.5778 5.90507C35.3328 5.45547 36.1453 5.11842 36.9929 4.90306C37.6532 4.73494 38.1144 4.14466 38.1144 3.46738V1.7691H40.3997V3.46738C40.3997 4.14466 40.8608 4.73506 41.5213 4.90306C42.3689 5.11854 43.1814 5.45582 43.9359 5.90484C44.5205 6.25326 45.2633 6.16194 45.7427 5.68256L46.9451 4.48019L48.5609 6.09605L47.3583 7.29866C46.8795 7.77768 46.7881 8.52049 47.136 9.10515C47.5854 9.85956 47.9225 10.6721 48.1379 11.5197C48.3058 12.1803 48.8962 12.6416 49.5736 12.6416H51.272V14.9269H49.5736C48.8961 14.9269 48.3057 15.3882 48.1381 16.0483C47.9225 16.8961 47.5854 17.7085 47.1358 18.4633C46.788 19.0478 46.8795 19.7907 47.3584 20.2698L48.5609 21.4721L46.9451 23.088L45.7427 21.8855C45.2633 21.4064 44.5204 21.315 43.9362 21.663C43.1816 22.1125 42.369 22.4497 41.5213 22.6651C40.8609 22.833 40.3997 23.4233 40.3997 24.1007V25.799H38.1144V24.1007C38.1144 23.4232 37.6531 22.8328 36.9927 22.6651C36.1449 22.4495 35.3325 22.1125 34.5777 21.6629C33.9933 21.3152 33.2506 21.4066 32.7712 21.8855L31.569 23.088L29.953 21.4721L31.1555 20.2698C31.6346 19.7905 31.7261 19.0476 31.378 18.4632C30.9285 17.7084 30.5915 16.896 30.376 16.0485C30.2082 15.3881 29.6178 14.9269 28.9403 14.9269H27.242V12.6416H28.9403C29.6178 12.6416 30.2082 12.1803 30.376 11.5199C30.5915 10.6722 30.9285 9.8598 31.3779 9.10515C31.726 8.52073 31.6346 7.77792 31.1555 7.29842ZM3.66843 14.5895V41.5539H1.75983V12.2255C1.75983 11.0725 2.69784 10.1344 3.85097 10.1344H28.9608C28.8735 10.3806 28.794 10.6296 28.7246 10.8817H26.9622C26.1461 10.8817 25.4823 11.5457 25.4823 12.3616V12.4104H5.84762C4.64607 12.4103 3.66843 13.3878 3.66843 14.5895ZM54.5719 41.5537H5.42826V14.5895C5.42826 14.3583 5.61643 14.1701 5.84762 14.1701H25.4822V15.2066C25.4822 16.0225 26.1461 16.6866 26.9621 16.6866H28.7245C28.9638 17.5559 29.3105 18.3921 29.758 19.1783L28.5108 20.4256C27.9337 21.0027 27.9337 21.9414 28.5108 22.5186L30.5224 24.5304C31.0997 25.1074 32.0382 25.1074 32.6154 24.5304L33.8627 23.2831C34.6485 23.7305 35.4849 24.0774 36.3545 24.3168V26.0792C36.3545 26.8951 37.0185 27.559 37.8344 27.559H40.6795C41.4955 27.559 42.1595 26.8952 42.1595 26.0792V24.3166C43.0289 24.0774 43.8653 23.7305 44.6512 23.2831L45.8985 24.5304C46.4758 25.1074 47.4142 25.1074 47.9915 24.5304L50.0033 22.5186C50.5803 21.9416 50.5803 21.0027 50.0033 20.4256L48.7559 19.1783C49.2033 18.3925 49.5502 17.5562 49.7894 16.6866H51.552C52.3679 16.6866 53.032 16.0227 53.032 15.2066V14.1701H54.1526C54.3838 14.1701 54.572 14.3583 54.572 14.5895V41.5537H54.5719ZM58.2402 41.5537H56.3317V14.5895C56.3317 13.3878 55.3542 12.4103 54.1525 12.4103H53.0318V12.3615C53.0318 11.5455 52.3679 10.8816 51.5519 10.8816H49.7894C49.72 10.6295 49.6406 10.3804 49.5532 10.1342H56.1492C57.3022 10.1342 58.2402 11.0724 58.2402 12.2254V41.5537Z" />
            <path d="M39.2571 20.6047C43.018 20.6047 46.0777 17.545 46.0777 13.784C46.0777 10.023 43.018 6.96326 39.2571 6.96326C38.6207 6.96326 37.9906 7.05095 37.384 7.22376C36.9167 7.35694 36.6457 7.84393 36.779 8.31124C36.9125 8.77854 37.3991 9.04924 37.8665 8.91617C38.316 8.78792 38.7839 8.72297 39.2569 8.72297C42.0475 8.72297 44.3178 10.9934 44.3178 13.7839C44.3178 16.5745 42.0475 18.8448 39.2569 18.8448C36.4663 18.8448 34.196 16.5745 34.196 13.7839C34.196 12.7696 34.4947 11.7914 35.0599 10.9548C35.3319 10.5522 35.226 10.0052 34.8233 9.73308C34.4207 9.46109 33.8736 9.56695 33.6016 9.96966C32.8391 11.0982 32.4362 12.4171 32.4362 13.7838C32.4362 17.5451 35.4959 20.6047 39.2571 20.6047Z" />
            <path d="M42.8049 13.784C42.8049 11.8277 41.2134 10.2362 39.2571 10.2362C37.3008 10.2362 35.7093 11.8277 35.7093 13.784C35.7093 15.7404 37.3008 17.3318 39.2571 17.3318C41.2134 17.3318 42.8049 15.7404 42.8049 13.784ZM37.469 13.784C37.469 12.7982 38.2711 11.9961 39.257 11.9961C40.2428 11.9961 41.0449 12.7982 41.0449 13.784C41.0449 14.7699 40.2428 15.572 39.257 15.572C38.2711 15.572 37.469 14.77 37.469 13.784Z" />
            <path d="M27.375 26.2766H26.1807C26.0101 25.699 25.7786 25.1405 25.4895 24.6102L26.3345 23.7651C26.5876 23.5121 26.727 23.1757 26.727 22.8179C26.727 22.4602 26.5877 22.124 26.3346 21.8708L24.794 20.3302C24.2719 19.8079 23.4221 19.8078 22.8998 20.3302L22.0547 21.1753C21.5243 20.8862 20.9659 20.6547 20.3882 20.4841V19.2898C20.3882 18.5512 19.7873 17.9505 19.0487 17.9505H16.8699C16.1314 17.9505 15.5305 18.5513 15.5305 19.2898V20.4841C14.9528 20.6546 14.3945 20.8862 13.864 21.1753L13.0188 20.3302C12.4967 19.8079 11.6469 19.808 11.1246 20.3302L9.58382 21.871C9.06188 22.3933 9.06188 23.243 9.58405 23.7651L10.4292 24.6102C10.1401 25.1405 9.90856 25.6987 9.73786 26.2766H8.54346C7.80488 26.2766 7.20404 26.8776 7.20404 27.616V29.7949C7.20404 30.5334 7.80488 31.1342 8.54346 31.1342H9.73775C9.90844 31.7121 10.1401 32.2708 10.4291 32.8007L9.5837 33.6459C9.06176 34.1682 9.06176 35.018 9.58393 35.54L11.1244 37.0805C11.3774 37.3336 11.7139 37.4729 12.0717 37.4729C12.4296 37.4729 12.766 37.3335 13.0188 37.0806L13.864 36.2355C14.3945 36.5247 14.9529 36.7563 15.5305 36.9268V38.1211C15.5305 38.8597 16.1313 39.4604 16.8699 39.4604H19.0487C19.7872 39.4604 20.3882 38.8595 20.3882 38.1211V36.9268C20.9659 36.7562 21.5242 36.5248 22.0547 36.2355L22.8996 37.0804C23.1526 37.3335 23.4891 37.4729 23.8469 37.4729C24.2048 37.4729 24.5411 37.3335 24.794 37.0806L26.3345 35.54C26.5876 35.287 26.727 34.9507 26.727 34.5929C26.727 34.2352 26.5877 33.8989 26.3346 33.6457L25.4895 32.8007C25.7786 32.2703 26.0102 31.712 26.1807 31.1342H27.375C28.1134 31.1342 28.7144 30.5333 28.7144 29.7949V27.616C28.7144 26.8774 28.1136 26.2766 27.375 26.2766ZM26.9546 29.3743H25.86C25.247 29.3743 24.7128 29.7913 24.5608 30.3887C24.4007 31.0186 24.1502 31.6223 23.816 32.1834C23.5014 32.712 23.5843 33.3843 24.0179 33.818L24.793 34.593L23.8469 35.5391L23.0719 34.7641C22.6383 34.3304 21.9661 34.2475 21.4373 34.5623C20.8762 34.8964 20.2725 35.1469 19.6424 35.3069C19.0454 35.4588 18.6283 35.9931 18.6283 36.6062V37.7007H17.2903V36.6062C17.2903 35.993 16.8733 35.4588 16.276 35.3069C15.6462 35.1469 15.0424 34.8964 14.4815 34.5624C13.9526 34.2474 13.2804 34.3304 12.8468 34.764L12.0717 35.5391L11.1256 34.593L11.9008 33.8179C12.3342 33.3844 12.4172 32.7123 12.1024 32.1832C11.7684 31.6226 11.5179 31.0188 11.3577 30.3888C11.206 29.7916 10.6718 29.3743 10.0585 29.3743H8.96387V28.0363H10.0584C10.6716 28.0363 11.2059 27.6193 11.3575 27.0221C11.5177 26.3921 11.7683 25.7883 12.1024 25.2272C12.4171 24.6986 12.3342 24.0265 11.9005 23.5927L11.1254 22.8177L12.0714 21.8716L12.8465 22.6466C13.2802 23.0804 13.9524 23.1634 14.4811 22.8485C15.0422 22.5144 15.646 22.2638 16.2759 22.1037C16.8731 21.9519 17.2901 21.4176 17.2901 20.8046V19.7101H18.6281V20.8046C18.6281 21.4176 19.0451 21.9519 19.6422 22.1037C20.2721 22.2638 20.876 22.5144 21.4368 22.8484C21.9658 23.1635 22.638 23.0803 23.0715 22.6467L23.8465 21.8716L24.7926 22.8177L24.0174 23.5928C23.5839 24.0266 23.5009 24.6988 23.8158 25.2273C24.1499 25.7884 24.4005 26.3923 24.5606 27.0222C24.7124 27.6193 25.2467 28.0363 25.8598 28.0363H26.9543V29.3743H26.9546Z" />
            <path d="M17.9592 24.0499C15.3922 24.0499 13.3037 26.1384 13.3037 28.7054C13.3037 31.2724 15.3922 33.3608 17.9592 33.3608C20.5262 33.3608 22.6146 31.2724 22.6146 28.7054C22.6146 26.1384 20.5263 24.0499 17.9592 24.0499ZM17.9592 31.601C16.3625 31.601 15.0635 30.3021 15.0635 28.7054C15.0635 27.1086 16.3625 25.8098 17.9592 25.8098C19.5558 25.8098 20.8548 27.1086 20.8548 28.7054C20.8548 30.3021 19.5559 31.601 17.9592 31.601Z" />
          </g>
          <defs>
            <clipPath id="clip0_14_396">
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
          <path d="M52.2 14.4H15C12.36 14.4 10.2 16.56 10.2 19.2V21C10.2 21.66 10.74 22.2 11.4 22.2C12.06 22.2 12.6 21.66 12.6 21V19.2C12.6 18.96 12.66 18.72 12.72 18.48L26.16 30L12.72 41.52C12.66 41.28 12.6 41.04 12.6 40.8V39C12.6 38.34 12.06 37.8 11.4 37.8C10.74 37.8 10.2 38.34 10.2 39V40.8C10.2 43.44 12.36 45.6 15 45.6H52.2C54.84 45.6 57 43.44 57 40.8V19.2C57 16.56 54.84 14.4 52.2 14.4ZM14.52 16.86C14.64 16.8 14.82 16.8 15 16.8H52.2C52.38 16.8 52.56 16.8 52.68 16.86L34.38 32.52C33.9 32.88 33.3 32.88 32.82 32.52L14.52 16.86ZM52.2 43.2H15C14.82 43.2 14.64 43.2 14.52 43.14L28.02 31.56L31.26 34.38C31.92 34.98 32.76 35.28 33.6 35.28C34.44 35.28 35.28 34.98 35.94 34.38L39.18 31.56L52.68 43.14C52.56 43.2 52.38 43.2 52.2 43.2ZM54.6 40.8C54.6 41.04 54.54 41.28 54.48 41.52L41.04 30L54.48 18.48C54.54 18.72 54.6 18.96 54.6 19.2V40.8ZM6.6 27C6.6 26.34 7.14 25.8 7.8 25.8H15C15.66 25.8 16.2 26.34 16.2 27C16.2 27.66 15.66 28.2 15 28.2H7.8C7.14 28.2 6.6 27.66 6.6 27ZM15 34.2H4.2C3.54 34.2 3 33.66 3 33C3 32.34 3.54 31.8 4.2 31.8H15C15.66 31.8 16.2 32.34 16.2 33C16.2 33.66 15.66 34.2 15 34.2Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.delivery}>
      <Title className={styles.delivery__title} variant="center">
        {t("deliveryTitle")}
      </Title>
      <div className={styles.delivery__subtitle}>{t("deliverySubTitle")}</div>
      <ul className={styles.delivery__list}>
        {list.map((item, index) => (
          <Item
            key={index}
            variant="red"
            svg={item.svg}
            title={t("deliveryItemTitle" + (index + 1))}
            description={t("deliveryItemDeescription" + (index + 1))}
          />
        ))}
      </ul>
    </div>
  );
}
