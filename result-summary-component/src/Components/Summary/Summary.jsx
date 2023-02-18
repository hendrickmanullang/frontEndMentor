import styles from "./Summary.module.css";
import Skill from "../Skill/Skill";

const Summary = ({ data }) => {
  return (
    <div className={styles["summary-container"]}>
      <h2 className={styles["summary-title"]}>Summary</h2>
      {data.map((entry) => (
        <Skill
          key={entry.category}
          category={entry.category}
          score={entry.score}
          icon={entry.icon}
        />
      ))}
      {/* need to fix hover states with CSS Transition*/}
      <button className={styles["btn--continue"]}>Continue</button>
    </div>
  );
};

export default Summary;
