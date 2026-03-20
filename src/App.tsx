import ComponentHeader from "./Components/Header/Header";
import Categories from "./Components/Categories/Categories";
import Sort from "./Components/Sort/Sort";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <ComponentHeader />
      <Categories />
      <Sort />
    </div>
  );
}

export default App;
