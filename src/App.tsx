import ComponentHeader from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort/Sort";
import CategoryItem from "./Components/CategoryItem/CategoryItem";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <ComponentHeader />
      <section className={styles.listWrap}>
        <Categories />
        <Sort />
      </section>

      <div className={styles.categoryHeading}>
        <h2>Все пиццы</h2>
      </div>
      <section>
        <CategoryItem />
      </section>
    </div>
  );
}

export default App;
