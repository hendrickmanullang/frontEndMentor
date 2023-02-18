import Result from "./Components/result";
import { data } from "./data.js";

const App = () => {
  const scores = data.map((entry) => entry.score);
  const sumScore = scores.reduce((a, b) => a + b);
  const averageScore = sumScore / scores.length;

  return <Result rating={averageScore} />;
};

export default App;
