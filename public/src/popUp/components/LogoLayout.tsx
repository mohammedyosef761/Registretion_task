import React from "react";
import { LogoLayoutType } from "../types";



const LogoLayout = ({ onOpen }: LogoLayoutType) => {
  return (
    <div className="">
      <div className="ms-16">
        <svg
          width="294"
          height="436"
          viewBox="0 0 294 436"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_101_401)">
            <path
              d="M147.113 386.102C206.788 386.102 255.164 337.726 255.164 278.051C255.164 218.376 206.788 170 147.113 170C87.4379 170 39.0618 218.376 39.0618 278.051C39.0618 337.726 87.4379 386.102 147.113 386.102Z"
              fill="white"
            />
            <path
              d="M113.673 354.58C111.489 351.668 108.749 349.299 105.453 347.446C102.144 345.606 98.2134 344.68 93.6206 344.68H88.3262C86.5923 344.68 84.8849 344.786 83.2039 345.011C85.9967 337.4 88.6571 330.041 91.172 322.933C93.6868 315.826 95.9236 309.446 97.8825 303.794C99.8414 298.143 101.469 293.444 102.753 289.698C104.037 285.952 104.845 283.636 105.189 282.736C105.864 281.28 105.162 279.546 103.097 277.534C101.019 275.522 98.5311 273.616 95.6324 271.83C92.7205 270.043 89.9013 268.507 87.1615 267.21C84.4217 265.926 82.7672 265.278 82.2113 265.278C81.4303 266.615 80.5833 268.071 79.6964 269.646C78.9155 271.102 77.9625 272.783 76.8375 274.675C75.7124 276.581 74.5477 278.646 73.3168 280.883C71.5299 278.977 69.1475 277.164 66.1826 275.43C63.2178 273.696 60.0809 272.187 56.7852 270.903C53.4894 269.619 50.326 268.587 47.3083 267.793C44.2905 267.012 41.7624 266.615 39.7506 266.615C38.4138 266.615 36.8122 267.515 34.9724 269.302C33.1326 271.088 31.2002 273.471 29.1751 276.436C27.1633 279.401 25.1514 282.815 23.1263 286.68C21.1145 290.545 19.3276 294.489 17.7526 298.513C16.1907 302.537 14.8936 306.547 13.8877 310.518C12.8818 314.489 12.3788 318.102 12.3788 321.345C12.3788 323.251 13.5833 325.342 15.9922 327.632C18.4011 329.922 21.2468 332.106 24.5558 334.184C27.8515 336.262 31.2399 338.155 34.7077 339.888C38.1755 341.622 41.0345 342.933 43.2713 343.833C44.3831 344.508 45.5082 344.839 46.6332 344.839C47.4142 344.839 48.7642 343.502 50.6569 340.815C52.5629 338.128 54.7733 334.66 57.2881 330.412C59.8029 326.163 62.5428 321.371 65.5076 316.064C68.4724 310.756 71.4108 305.462 74.3227 300.207C72.0858 307.712 69.5445 315.587 66.6856 323.873C63.8266 332.159 60.8353 340.431 57.7117 348.717C49.651 350.623 42.3183 353.085 35.7269 356.102C29.1222 359.12 23.4705 362.482 18.7717 366.175C14.073 369.868 10.4331 373.759 7.86536 377.836C5.2976 381.926 4.00049 386.029 4.00049 390.172C4.00049 398.113 5.15201 404.493 7.44182 409.311C9.73162 414.115 12.5906 417.874 16.0054 420.561C19.4203 423.248 23.0601 425.035 26.9118 425.935C30.7767 426.835 34.2709 427.272 37.4078 427.272C39.8697 427.272 42.6095 425.617 45.6273 422.321C48.6451 419.026 51.7555 414.631 54.9454 409.152C58.1352 403.672 61.378 397.319 64.687 390.105C67.9827 382.892 71.252 375.308 74.508 367.366C80.7686 367.472 86.0364 368.266 90.2851 369.722C94.5339 371.178 97.9487 373.018 100.53 375.268C103.097 377.505 104.924 379.993 105.983 382.733C107.042 385.473 107.584 388.08 107.584 390.542C107.584 391.548 108.233 391.627 109.517 390.794C110.801 389.96 112.257 388.663 113.885 386.929C115.499 385.195 116.969 383.262 118.253 381.131C119.536 379 120.185 377.161 120.185 375.586C120.185 371.893 119.656 368.2 118.583 364.507C117.525 360.814 115.897 357.519 113.713 354.607L113.673 354.58ZM63.9061 296.673C61.4442 300.697 59.0353 304.588 56.6925 308.334C54.3498 312.08 52.0732 315.614 49.8893 318.91C47.7053 322.205 45.7464 324.919 44.0125 327.05C42.2786 329.181 40.9021 330.637 39.8962 331.417C38.8902 332.198 38.3343 331.973 38.2152 330.742C38.5461 328.506 39.2211 325.792 40.2271 322.602C41.233 319.413 42.4375 316.051 43.8405 312.53C45.2435 309.009 46.7788 305.541 48.4598 302.126C50.1407 298.712 51.9011 295.641 53.7409 292.901C55.5807 290.161 57.4602 287.951 59.3661 286.27C61.2721 284.589 63.059 283.755 64.7399 283.755C65.9708 283.755 67.0562 283.901 68.0092 284.179C68.9622 284.457 69.8754 284.761 70.7755 285.105C68.6445 288.798 66.3547 292.663 63.8928 296.687L63.9061 296.673ZM42.0801 387.061C39.8432 392.038 37.8049 396.353 35.9519 399.979C34.1121 403.619 32.4311 406.465 30.9223 408.543C29.4134 410.608 28.2618 411.653 27.4809 411.653C27.2559 411.653 26.9515 411.481 26.5544 411.15C26.1573 410.819 25.7735 410.065 25.3764 408.887C24.9793 407.709 24.6484 406.002 24.3705 403.765C24.0925 401.528 23.9469 398.444 23.9469 394.539C23.9469 389.391 26.2632 384.745 30.909 380.602C35.5548 376.459 41.5639 373.216 48.9495 370.86C46.5935 376.684 44.3037 382.071 42.0669 387.061H42.0801Z"
              fill="#FF8C1E"
            />
            <path
              d="M153.963 295.323C154.44 294.185 154.916 293.02 155.393 291.882L125.678 331.417C126.578 325.819 127.941 320.061 129.794 314.131C131.634 308.202 133.567 302.629 135.592 297.428C137.604 292.226 139.509 287.699 141.296 283.834C143.083 279.97 144.314 277.256 144.989 275.694C145.439 274.794 145.214 273.736 144.314 272.505C143.414 271.274 142.183 270.016 140.621 268.732C139.059 267.448 137.259 266.191 135.248 264.96C133.236 263.729 131.303 262.644 129.45 261.691C127.597 260.738 125.982 259.957 124.579 259.335C123.176 258.726 122.316 258.408 121.972 258.408C121.972 258.858 121.416 260.394 120.291 263.028C119.166 265.662 117.776 268.957 116.095 272.928C114.414 276.899 112.574 281.32 110.563 286.19C108.551 291.061 106.698 295.959 105.03 300.882C103.349 305.806 101.959 310.558 100.834 315.151C99.7225 319.743 99.1533 323.661 99.1533 326.904C99.1533 328.585 100.133 330.491 102.092 332.609C104.051 334.74 106.367 336.804 109.054 338.816C111.741 340.828 114.454 342.615 117.194 344.19C119.934 345.752 122.091 346.824 123.653 347.38C124.553 347.936 125.413 348.439 126.26 348.889C127.094 349.339 127.968 349.564 128.855 349.564C129.186 349.564 130.006 348.756 131.29 347.128C132.574 345.5 134.175 343.356 136.068 340.669C137.908 338.075 139.933 335.124 142.157 331.841C142.58 328.175 143.652 323.674 145.386 318.354C147.676 311.299 150.535 303.635 153.95 295.363L153.963 295.323Z"
              fill="#FF8C1E"
            />
            <path
              d="M128.868 246.576C131.224 248.534 133.844 250.295 136.756 251.857C139.668 253.432 142.487 254.689 145.227 255.629C147.967 256.582 149.727 257.058 150.521 257.058C150.521 255.827 150.852 254.12 151.527 251.936C152.202 249.752 153.036 247.436 154.042 244.974C155.048 242.512 156.107 240.024 157.232 237.509C158.344 234.994 159.35 232.731 160.25 230.706C160.7 229.806 160.475 228.747 159.575 227.516C158.675 226.285 157.444 225.028 155.882 223.744C154.32 222.46 152.52 221.202 150.508 219.971C148.496 218.74 146.564 217.655 144.711 216.702C142.858 215.749 141.243 214.968 139.84 214.346C138.437 213.737 137.577 213.42 137.233 213.42C137.233 214.201 136.611 215.63 135.393 217.695C134.162 219.773 132.785 222.142 131.277 224.829C129.768 227.516 128.391 230.282 127.16 233.141C125.929 236 125.307 238.541 125.307 240.778C125.307 242.684 126.485 244.617 128.828 246.576H128.868Z"
              fill="#FF8C1E"
            />
            <path
              d="M232.597 269.315C231.26 267.078 229.685 265.066 227.899 263.279C226.112 261.492 224.206 260.592 222.194 260.592C220.288 260.592 217.826 261.572 214.808 263.531C211.79 265.49 208.455 268.097 204.828 271.34C201.189 274.583 197.443 278.328 193.578 282.59C189.713 286.839 185.941 291.207 182.248 295.681C185.266 288.97 188.376 282.339 191.566 275.787C194.756 269.235 197.668 263.279 200.289 257.905C202.922 252.532 205.067 248.005 206.748 244.312C208.429 240.619 209.262 238.263 209.262 237.257C209.262 235.021 208.111 232.81 205.821 230.626C203.531 228.442 200.95 226.51 198.105 224.829C195.246 223.148 192.506 221.785 189.885 220.713C187.251 219.654 185.61 219.111 184.935 219.111C185.61 220.117 184.988 223.082 183.095 228.006C181.189 232.929 178.648 239.005 175.458 246.218C172.268 253.432 168.747 261.36 164.883 269.963C161.56 277.389 158.397 284.682 155.406 291.855L161.772 283.384C162.884 281.823 163.903 281.028 164.79 281.028C165.571 281.028 166.272 281.783 166.881 283.292C167.49 284.801 167.808 287.858 167.808 292.438C160.978 303.066 154.823 312.583 149.344 320.974C146.988 324.561 144.671 328.056 142.382 331.47C142.315 331.576 142.236 331.682 142.17 331.788C142.037 332.966 141.958 334.078 141.958 335.084C141.958 337.44 143.162 339.756 145.571 342.046C147.98 344.336 150.72 346.387 153.791 348.174C156.862 349.961 159.853 351.417 162.765 352.542C165.677 353.654 167.569 354.223 168.469 354.223C168.364 353.998 168.297 353.773 168.297 353.548C168.297 353.323 168.271 353.098 168.218 352.873C168.165 352.648 168.139 352.317 168.139 351.867C168.694 350.53 169.542 348.558 170.653 345.99C171.765 343.409 173.009 340.762 174.346 338.022C175.683 335.282 177.06 332.675 178.463 330.213C179.866 327.751 181.123 325.964 182.235 324.839C184.591 336.368 187.714 346.599 191.632 355.56C193.313 359.358 195.246 363.117 197.43 366.81C199.613 370.503 202.075 373.772 204.815 376.631C207.555 379.49 210.573 381.78 213.882 383.514C217.177 385.248 220.791 386.108 224.709 386.108C227.501 386.108 230.135 385.407 232.597 384.017C235.059 382.614 237.124 381.052 238.805 379.318C240.486 377.584 241.624 376.022 242.246 374.619C242.855 373.216 242.723 372.528 241.823 372.528C238.911 372.528 235.747 371.297 232.333 368.835C228.918 366.373 225.556 363.184 222.26 359.266C218.964 355.348 215.774 351.007 212.691 346.255C209.607 341.503 206.867 336.804 204.471 332.159C202.062 327.513 200.169 323.238 198.766 319.32C197.363 315.402 196.675 312.331 196.675 310.081C198.806 306.838 201.705 303.424 205.398 299.837C208.534 296.819 212.664 293.378 217.813 289.513C222.551 285.952 228.388 282.379 235.311 278.778C235.668 277.931 236.012 277.097 236.356 276.277C235.139 273.762 233.881 271.419 232.584 269.288L232.597 269.315Z"
              fill="#FF8C1E"
            />
            <path
              d="M149.343 321.014C154.823 312.623 160.978 303.106 167.808 292.478C167.808 287.885 167.503 284.84 166.881 283.332C166.259 281.823 165.557 281.068 164.79 281.068C163.89 281.068 162.884 281.849 161.772 283.424L155.405 291.895C154.929 293.047 154.439 294.198 153.976 295.337C150.561 303.622 147.715 311.286 145.412 318.327C143.679 323.661 142.606 328.148 142.183 331.815C142.249 331.709 142.328 331.603 142.395 331.497C144.684 328.082 147.014 324.588 149.357 321.001L149.343 321.014Z"
              fill="#FF8C1E"
            />
            <path
              d="M250.558 246.576C252.914 248.534 255.535 250.295 258.447 251.857C261.359 253.432 264.178 254.689 266.918 255.629C269.658 256.582 271.418 257.058 272.212 257.058C272.212 255.827 272.543 254.12 273.218 251.936C273.893 249.752 274.727 247.436 275.733 244.974C276.739 242.512 277.798 240.024 278.923 237.509C280.035 234.994 281.041 232.731 281.941 230.706C282.391 229.806 282.166 228.747 281.266 227.516C280.366 226.285 279.135 225.028 277.573 223.744C276.011 222.46 274.211 221.202 272.199 219.971C270.187 218.74 268.255 217.655 266.402 216.702C264.549 215.749 262.934 214.968 261.531 214.346C260.128 213.737 259.268 213.42 258.924 213.42C258.924 214.201 258.301 215.63 257.084 217.695C255.853 219.773 254.476 222.142 252.967 224.829C251.459 227.516 250.082 230.282 248.851 233.141C247.62 236 246.998 238.541 246.998 240.778C246.998 242.684 248.176 244.617 250.519 246.576H250.558Z"
              fill="#FF8C1E"
            />
            <path
              d="M288.572 283.332C287.95 281.823 287.248 281.068 286.48 281.068C285.58 281.068 284.574 281.849 283.463 283.424L247.382 331.431C248.282 325.832 249.645 320.074 251.498 314.145C253.338 308.215 255.27 302.643 257.295 297.441C259.307 292.239 261.213 287.713 263 283.848C264.787 279.983 266.018 277.27 266.693 275.708C267.143 274.808 266.918 273.749 266.018 272.518C265.118 271.287 263.887 270.029 262.325 268.746C260.763 267.462 258.963 266.204 256.951 264.973C254.939 263.742 253.007 262.657 251.154 261.704C249.301 260.751 247.686 259.97 246.283 259.348C244.88 258.739 244.02 258.422 243.676 258.422C243.676 258.872 243.12 260.407 241.995 263.041C240.87 265.675 239.48 268.971 237.799 272.941C237.336 274.027 236.859 275.165 236.369 276.317C236.621 276.833 236.872 277.349 237.124 277.892C236.515 278.209 235.919 278.514 235.324 278.818C234.344 281.148 233.325 283.609 232.253 286.19C230.241 291.061 228.388 295.959 226.72 300.882C225.04 305.806 223.65 310.558 222.525 315.151C221.413 319.743 220.844 323.661 220.844 326.904C220.844 328.585 221.823 330.491 223.782 332.609C225.741 334.74 228.057 336.804 230.744 338.816C233.431 340.828 236.144 342.615 238.884 344.19C241.624 345.752 243.782 346.824 245.343 347.38C246.243 347.936 247.104 348.439 247.951 348.889C248.785 349.339 249.658 349.564 250.545 349.564C250.876 349.564 251.697 348.756 252.98 347.128C254.264 345.5 255.866 343.356 257.759 340.669C259.665 337.982 261.756 334.938 264.059 331.523C266.349 328.109 268.678 324.614 271.021 321.027C276.501 312.636 282.655 303.119 289.485 292.491C289.485 287.898 289.181 284.854 288.558 283.345L288.572 283.332Z"
              fill="#FF8C1E"
            />
            <path
              d="M236.369 276.303C236.025 277.124 235.681 277.958 235.324 278.805C235.919 278.501 236.515 278.183 237.124 277.878C236.872 277.349 236.621 276.833 236.369 276.303Z"
              fill="#FF8C1E"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_101_401"
              x="0.000488281"
              y="170"
              width="293.485"
              height="265.272"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_101_401"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_101_401"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mt-[100px] mr-[100px] rounded-[8px]">
        <button
          onClick={()=>onOpen()}
          className="bg-primary hover:bg-white hover:text-primary w-[419px] h-[41.14px] text-white font-bold py-2 px-4 rounded-buttonBorder"
        >
          open modal
        </button>
      </div>
    </div>
  );
};

export default LogoLayout;
