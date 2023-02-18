import Result from "./Components/Result/Result";
import Summary from "./Components/Summary/Summary";
import { data } from "./data.js";

const App = () => {
  const scores = data.map((entry) => entry.score);
  const sumScore = scores.reduce((a, b) => a + b);
  const averageScore = sumScore / scores.length;

  return (
    <>
      <Result rating={averageScore} />
      <Summary data={data} />
    </>
  );
};

export default App;
