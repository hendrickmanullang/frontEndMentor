import styles from "./Result.module.css";

const Result = ({ rating }) => {
  return (
    <div className={styles["result-container"]}>
      <h2 className={styles["result-title"]}>Your Result</h2>
      <div className={styles["result-score-container"]}>
        <p className={styles["result-score"]}>{Math.round(rating)}</p>
        <p>of 100</p>
      </div>
      <div className={styles["result-text"]}>
        <h3 className={styles["result-feedback"]}>Great</h3>
        <p className={styles["result-description"]}>
          You scored higher than 65% of the people who have take these tests
        </p>
      </div>
    </div>
  );
};

export default Result;
