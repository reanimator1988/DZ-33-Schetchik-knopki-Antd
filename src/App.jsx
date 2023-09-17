import React from "react";
import Counter from "./Counter.jsx";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Counter initialValue={0} />
    </div>
  );
}

export default App;
