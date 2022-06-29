import styles from "./MineCounter.module.css";

function MineCounter({ mines }) {
  return <div className={styles.count}>{mines}</div>;
}

export default MineCounter;
