import React, { useState } from "react";
import { Button } from 'antd';
import styles from "./App.module.scss";


const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div>
      <h1 className={styles.heading}>ДЗ 33. Counter 2.0 кнопки з Antd, файли стилів модулями</h1>
      <div className={styles.counter}>
        <h2>Counter App</h2>
        <div className={styles.count}>{count}</div>
        <Button onClick={decrement} className={styles.button}>-</Button>
        <Button onClick={increment} className={styles.button}>+</Button>
        <Button onClick={reset} className={styles.reset}><span>Reset</span></Button>
      </div>
    </div>
  );
}

export default Counter;