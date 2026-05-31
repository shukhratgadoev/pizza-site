import styles from "./CategoryItem.module.css";

const CategoryItem = () => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.categoryItemImg}></div>
      <h3 className={styles.categoryHeading}>Чизбургер-пицца</h3>

      <div className={styles.setTabs}>
        <div className={styles.setTabsTop}>
          <span className={styles.active}>тонкое</span>
          <span>традиционное</span>
        </div>

        <div className={styles.setTabsBottom}>
          <span className={styles.active}>26 см.</span>
          <span>30 см.</span>
          <span>40 см.</span>
        </div>

        <div className={styles.setTabFinish}>
          <span className={styles.price}>от 395 ₽</span>
          <button><b>+</b> Добавить <span  id="counter">2</span></button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
