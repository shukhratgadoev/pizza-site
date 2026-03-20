import logo from "../../img/pice-of-pizza.svg";
import basket from "../../img/basket.svg";
import line from "../../img/line.svg";

import styles from "./Header.module.css";

const ComponentHeader = () => {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header_wrapper_left}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles.cite_name_cover}>
          <h2 className='cite_name'>react pizza</h2>
          <span className='cite-prev'>самая вкусная пицца во вселенной</span>
        </div>
      </div>
      <div className='header-wrapper-rigt'>
        <div className={styles.header_wrapper_rigt_btns}>
          <button>
            580
            <span>$</span>
          </button>
          <img src={line} height={25} alt='line' />
          <button>
            <img src={basket} alt='' />
            <span>3</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
