import styles from "./Skill.module.css";
import { classLister } from "../../utils/classLister";

const classes = classLister(styles);

const Skill = (props) => {
  const colorMapping = {
    Reaction: { color: "color-red", backgroundColor: "bg-red" },
    Memory: { color: "color-yellow", backgroundColor: "bg-yellow" },
    Verbal: { color: "color-teal", backgroundColor: "bg-teal" },
    Visual: { color: "color-blue", backgroundColor: "bg-blue" },
  };

  return (
    <div
      className={classes(
        "skill-container",
        colorMapping[props.category]["backgroundColor"]
      )}
    >
      <div
        className={classes(
          "skill-category",
          colorMapping[props.category]["color"]
        )}
      >
        <img src={props.icon} alt="" />
        <p className="skill-name">{props.category}</p>
      </div>
      <p>
        {props.score}
        <span className={styles["skill-max-score"]}>&nbsp;&nbsp;/ 100</span>
      </p>
    </div>
  );
};

export default Skill;
