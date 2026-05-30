import styles from "./CategoryItem.module.css";

const CategoryItem = () => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.categoryItemImg}></div>
      <h3 className={styles.categoryHeading}>Чизбургер-пицца</h3>
    </div>
  );
};

export default CategoryItem;
