import { useState } from "react";
import "./App.css";
import BmiList from "./components/bmi_list";
import BmiScore from "./components/bmi_score";
import Form from "./components/form";

function App() {
  const [bmi, setbmi] = useState("");
  const [bmiType, setbmiType] = useState("");

  return (
    <>
      <Form />
      <BmiScore bmiNo={bmi} bmiName={bmiType} />
      <BmiList />
    </>
  );
}

export default App;
