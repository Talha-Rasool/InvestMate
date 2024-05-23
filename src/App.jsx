import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 3,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: +value,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Result input={userInput} />
    </>
  );
}

export default App;
