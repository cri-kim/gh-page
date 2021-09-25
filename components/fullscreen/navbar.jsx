import Link from "next/link";
import styles from "@/components/fullscreen/navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';

class Navbar extends Component {

render(){
    return (
      <div className={styles.aside}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton} type="button">
             <svg id="Capa_1" enableBackground="new 0 0 510.499 510.499" height="30" 
             viewBox="0 0 510.499 510.499" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="m317.651 479.368c-48.863-8.745-99.038-7.567-148.125-1.64-37.612 7.786-70.337 7.445-95.88-25.739-55.476-75.76-20.34-210.028-17.195-299.601.379-87.057 46.9-83.099 118.447-75.087.2 28.324 9.412 64.437 42.35 69.139 48.285 13.013 70.406-18.186 69.523-64.57 35.975-1.273 76.31-2.481 107.624 17.291 27.763 22.463 14.56 64.545 13.554 95.752-2.533 26.747-4.472 53.706-3.823 80.626 2.109 19.595 31.794 16.385 29.872-3.069-11.037-149.94 43.687-206.857-147.553-211.96-.507-13.874-1.253-27.48-.295-39.551-7.501-15.573-44.861-18.853-60.72-20.386-44.356-4.596-55.916 18.764-51.558 59.463-82.997-9.955-131.312-7.099-136.344 90.384-7.735 89.405-28.109 182.338-11.586 271.555 46.566 148.546 179.179 61.423 290.039 74.228 10.18.53 11.659-15.351 1.67-16.835zm-114.159-447.937c-.09.051-.169.083-.226.075.074-.027.151-.048.226-.075zm1.908-.636c20.194-5.117 42.877-3.553 63.53-1.688-2.692 34.328 12.809 112.668-40.366 97.457-28.189-2.13-25.494-32.687-24.904-53.908.784-13.776-2.81-28.952 1.74-41.861z"/><path d="m489.768 449.52c-5.866-29.634-32.419-46.085-49.555-69.097-13.275-15.326-28.081-31.511-42.569-45.705-21.06-18.77-43.234-41.043-71.986-46.636-11.805-2.935-23.585-4.728-35.06-7.399-9.173-1.075-17.076-7.907-26.114-4.597-6.533 2.824-9.541 10.409-6.719 16.942 5.28 12.362 9.935 25.286 14.465 38.074 2.592 6.685 7.934 22.981 10.396 29.394 3.644 10.642 4.098 12.425 12.274 20.383 18.047 19.086 36.808 39.159 53.998 58.907 20.428 21.838 35.726 50.621 63.839 65.05 35.728 19.48 86.132-14.32 77.031-55.316zm-103.684 6.435c-7.409-9.126-14.321-18.286-21.045-24.956-20.62-22.486-41.875-45.591-63.354-67.241-1.618-18.038-6.715-36.227-10.854-53.897 16.341 4.905 34.333 5.911 48.361 15.759 18.696 12.612 36.331 28.254 52.64 43.804 14.464 13.782 28.418 28.254 42.585 42.549-.886 1.725-1.734 3.464-2.627 5.044-8.179 10.938-18.835 19.997-29.581 28.272-4.946 4.296-11.184 6.57-16.125 10.666zm81.617 12.327c-3.135 9.676-12.697 16.914-22.103 20.459-14.711 4.366-27.352-1.115-38.646-10.55.385-.408.762-.839 1.128-1.307 10.814-13.198 22.529-28.043 32.543-41.656 2.012-3.658 5.161-6.253 8.3-8.817.238.233.473.469.712.702 12.099 9.512 23.084 25.309 18.066 41.169z"/></g></svg>
          </button>
          <div className={styles.dropdownContent}>
            <button type="button" className={styles.asideBtn}>
              <Link href="/portfolio/about">
                <a href="#">
                  <svg version="1.0" style={{width:"100%"}} xmlns="http://www.w3.org/2000/svg"
                  width="100" height="50" viewBox="0 0 135.000000 66.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,66.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M390 483 c-24 -5 -40 -19 -40 -37 0 -4 21 -5 46 -1 51 7 51 10 1 -64
                  -27 -40 -32 -43 -65 -38 -81 14 -204 -42 -218 -100 -6 -21 -2 -31 20 -50 53
                  -45 141 -19 220 66 26 27 36 31 82 31 57 0 64 -7 64 -66 0 -22 5 -34 14 -34
                  27 0 76 22 76 35 0 14 52 29 92 26 18 -1 31 5 39 17 12 19 13 19 47 -4 44 -30
                  63 -30 101 1 29 25 30 25 40 7 12 -23 43 -33 62 -21 7 4 18 4 25 -2 13 -11 74
                  -1 74 13 0 5 10 2 22 -6 31 -22 43 -20 56 10 10 20 9 28 -3 40 -21 22 -19 51
                  5 57 26 7 26 37 0 44 -11 3 -20 9 -20 14 0 5 -13 8 -30 7 -17 -1 -30 -8 -30
                  -15 0 -8 -14 -13 -37 -13 l-38 0 0 -45 c0 -25 -4 -44 -10 -42 -5 1 -9 24 -9
                  50 l2 48 -32 -6 c-17 -4 -36 -14 -43 -22 -10 -13 -12 -13 -20 1 -13 24 -78 23
                  -112 -2 l-29 -21 -14 20 c-7 12 -26 22 -40 22 -24 2 -28 7 -34 43 -5 38 -7 40
                  -35 36 l-29 -4 0 -101 c0 -117 -12 -118 -28 -2 -13 97 -30 116 -101 114 -25
                  -1 -57 -4 -71 -6z m96 -127 l7 -38 -34 7 c-19 4 -36 9 -38 11 -2 2 7 19 20 38
                  27 40 35 37 45 -18z m191 -42 c-12 -12 -25 7 -19 28 l5 22 10 -22 c6 -12 7
                  -25 4 -28z m151 34 c14 -14 16 -58 2 -58 -12 0 -30 33 -30 54 0 19 11 21 28 4z
                  m-504 -69 c-26 -43 -49 -59 -85 -59 -27 0 -38 5 -42 19 -9 34 9 46 73 49 48 3
                  60 1 54 -9z"/>
                  </g>
                  </svg>
                </a>
              </Link>
            </button>
            <button type="button" className={styles.asideBtn}>
              <Link href="/portfolio/exp">
                <a href="#">
                <svg version="1.0"  style={{width:"100%"}} xmlns="http://www.w3.org/2000/svg"
                  width="100" height="50" viewBox="0 0 164.000000 63.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,63.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M215 436 c-15 -20 -29 -54 -32 -78 -4 -31 -15 -53 -39 -77 -53 -53
                  -44 -118 17 -140 40 -14 129 -14 164 -1 15 6 30 22 36 39 6 17 26 39 46 51
                  l35 20 5 -20 c5 -18 11 -20 36 -14 l30 6 -7 -41 c-6 -38 -4 -41 20 -47 31 -8
                  39 2 48 58 5 31 10 39 25 36 10 -2 28 5 38 15 19 16 21 16 38 -3 30 -34 105
                  -18 105 22 0 6 11 -1 25 -16 33 -35 71 -35 80 1 4 17 2 29 -4 31 -6 2 -11 12
                  -11 23 0 14 6 18 25 17 23 -2 25 -6 25 -49 l0 -47 73 0 c39 0 80 5 90 10 11 6
                  17 5 17 -2 0 -7 14 -10 33 -8 31 3 32 5 37 58 4 39 8 50 14 37 5 -9 5 -37 2
                  -62 -7 -40 -5 -44 11 -38 10 3 26 13 36 21 15 13 19 13 35 -1 25 -23 68 -21
                  91 2 19 19 20 19 37 0 20 -22 62 -25 87 -6 23 17 44 103 31 125 -13 21 -89 29
                  -110 11 -9 -8 -18 -8 -26 -1 -27 21 -78 25 -98 7 -15 -14 -23 -15 -34 -6 -9 7
                  -37 10 -74 8 -33 -3 -79 -1 -101 3 -28 5 -46 3 -60 -6 -13 -9 -22 -11 -26 -4
                  -3 6 -17 7 -31 4 -13 -3 -31 -1 -38 6 -9 7 -21 8 -33 3 -17 -9 -63 -9 -144 -2
                  -21 2 -44 -3 -53 -10 -14 -12 -21 -12 -42 0 -21 11 -29 11 -47 0 -15 -10 -22
                  -10 -25 -2 -5 15 -85 14 -100 -1 -9 -9 -15 -8 -25 6 -10 14 -21 16 -49 11
                  l-36 -7 29 -46 30 -47 -45 -42 c-42 -40 -49 -43 -101 -43 -68 0 -95 13 -95 45
                  0 32 11 37 50 23 29 -9 35 -9 47 7 17 24 17 45 -1 45 -24 0 -46 29 -46 61 0
                  16 2 29 5 29 12 0 84 -40 90 -50 14 -22 26 -8 23 27 -3 39 -32 67 -79 78 -22
                  6 -31 1 -54 -29z m525 -117 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10
                  9 6 -3 10 -10 10 -16z m720 0 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12
                  10 9 6 -3 10 -10 10 -16z m-951 -31 l0 -43 -13 35 c-13 36 -12 50 5 50 5 0 9
                  -19 8 -42z m91 11 c0 -10 -4 -19 -10 -19 -5 0 -10 12 -10 26 0 14 4 23 10 19
                  6 -3 10 -15 10 -26z m460 21 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10
                  10 10 6 0 10 -4 10 -10z m315 -26 c0 -28 -49 -27 -53 1 -2 17 2 20 25 19 20 0
                  28 -6 28 -20z m-600 -14 c-3 -5 -14 -10 -23 -10 -15 0 -15 2 -2 10 20 13 33
                  13 25 0z m320 0 c-3 -5 -14 -10 -23 -9 -14 0 -13 2 3 9 27 11 27 11 20 0z
                  m400 0 c-3 -5 -14 -10 -23 -10 -15 0 -15 2 -2 10 20 13 33 13 25 0z"/>
                  <path d="M925 456 c-20 -15 -17 -44 7 -59 12 -8 21 -7 32 2 36 30 -1 85 -39
                  57z"/>
                  </g>
                  </svg>
                </a>
              </Link>
            </button>
            <button type="button" className={styles.asideBtn}>
              <Link href="/portfolio/skill">
                <a href="#">
                  <svg version="1.0" style={{width:"100%"}}  xmlns="http://www.w3.org/2000/svg"
                  width="100" height="50" viewBox="0 0 97.000000 52.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M302 393 c-20 -8 -62 -80 -62 -107 0 -42 11 -57 56 -77 49 -21 50
                  -40 4 -64 -26 -13 -32 -13 -72 10 -24 13 -63 31 -86 39 -42 15 -42 15 -42 -9
                  0 -15 15 -36 42 -60 46 -39 76 -50 111 -41 38 9 114 65 136 99 l21 32 0 -32
                  c0 -30 3 -33 29 -33 19 0 35 8 45 21 l14 21 22 -22 c21 -21 23 -21 41 -4 17
                  16 19 16 19 1 0 -17 25 -22 54 -11 13 5 16 22 16 80 0 80 -3 84 -57 63 -19 -7
                  -29 -7 -31 0 -2 6 -16 11 -31 11 -23 0 -29 -6 -38 -37 -10 -32 -10 -26 -6 44
                  l5 82 -32 -9 c-18 -5 -34 -11 -36 -13 -2 -2 -4 -29 -5 -60 -2 -55 -7 -66 -23
                  -50 -4 5 -26 12 -49 18 -32 8 -43 15 -45 33 -4 26 11 28 48 7 35 -20 40 -19
                  40 11 0 54 -36 78 -88 57z m278 -158 c0 -26 0 -26 -24 -8 -27 20 -25 33 5 33
                  14 0 19 -7 19 -25z"/>
                  <path d="M586 384 c-22 -21 -20 -31 9 -50 20 -13 28 -14 40 -4 21 17 19 47 -4
                  60 -25 13 -27 13 -45 -6z"/>
                  <path d="M773 388 l-33 -9 0 -91 c0 -50 -3 -88 -6 -85 -4 3 -6 47 -5 97 2 83
                  1 90 -18 90 -47 0 -51 -7 -51 -104 0 -67 4 -98 16 -114 18 -26 36 -28 54 -7
                  12 14 15 14 31 -1 21 -19 48 -15 63 9 8 13 8 19 -1 25 -8 5 -13 42 -15 103
                  l-3 95 -32 -8z"/>
                  </g>
                  </svg>
                </a>
              </Link>
            </button>
            <button type="button" className={styles.asideBtn}>
              <Link href="/portfolio/contact">
                <a href="#">
                  <svg version="1.0"  style={{width:"100%"}} xmlns="http://www.w3.org/2000/svg"
                  width="100" height="50" viewBox="0 0 128.000000 51.000000"
                  preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,51.000000) scale(0.100000,-0.100000)"
                  fill="#000000" stroke="none">
                  <path d="M247 404 c-59 -18 -132 -89 -147 -142 -39 -141 47 -203 243 -176 34
                  5 47 12 55 29 11 23 9 24 -56 30 -99 9 -174 35 -191 66 -18 32 -9 72 24 105
                  45 45 162 25 166 -28 1 -25 28 48 29 78 0 56 -32 66 -123 38z"/>
                  <path d="M738 352 c-20 -2 -28 -9 -28 -24 0 -15 -3 -18 -12 -10 -19 15 -109
                  12 -135 -4 -21 -13 -27 -11 -24 9 0 4 -20 7 -45 7 -87 0 -138 -91 -78 -139 34
                  -27 74 -27 108 0 l26 20 0 -20 c0 -17 6 -21 35 -21 l35 0 0 55 c0 34 4 55 11
                  55 8 0 10 -19 6 -60 -3 -33 -2 -59 1 -57 43 19 62 33 62 43 0 7 11 2 26 -12
                  17 -18 32 -24 47 -20 12 3 29 1 37 -4 11 -7 23 -2 42 17 27 26 28 26 28 5 0
                  -18 6 -22 35 -22 19 0 35 5 35 10 0 7 6 7 19 0 30 -15 66 -12 84 8 24 27 21
                  38 -10 37 -21 0 -29 5 -31 20 -2 17 3 20 33 21 33 0 35 -1 35 -32 0 -33 28
                  -64 57 -64 19 0 37 40 24 53 -17 17 -14 67 4 67 8 0 15 9 15 20 0 11 -7 20
                  -15 20 -8 0 -15 5 -15 10 0 6 -16 10 -35 10 -29 0 -35 -4 -35 -21 0 -16 -3
                  -19 -12 -11 -24 18 -75 19 -99 2 -20 -16 -25 -16 -61 -2 -31 12 -46 13 -69 5
                  -16 -6 -29 -7 -29 -2 0 5 -5 9 -11 9 -7 0 -17 6 -23 13 -6 7 -23 11 -38 9z
                  m-244 -95 c6 -24 -7 -43 -23 -33 -17 11 -14 67 3 60 8 -3 17 -15 20 -27z m298
                  7 c-3 -17 -7 -22 -12 -13 -9 13 -2 39 10 39 4 0 5 -12 2 -26z m82 7 c3 -5 -1
                  -14 -9 -21 -13 -10 -15 -9 -15 9 0 21 14 28 24 12z"/>
                  </g>
                  </svg>
                </a>
              </Link>
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}
export default Navbar;