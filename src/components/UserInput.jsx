import { useState } from "react";

export default function UserInput() {
   const[userInput,setUserInput]= useState({
        initialInvestment:1000,
        annualInvestment:100,
        expectedReturn:5,
        duration:3,
    })

    function handleChange(event){
        console.log(event.target)
        const {name,value}=event.target;
        setUserInput((prevUserInput)=>{
            return{
                ...prevUserInput,
                [name]:value
            }
        })

    }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intial Investment</label>
          <input type="number" name="initialInvestment" value={userInput.initialInvestment} onChange={handleChange} required />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" name="annualInvestment" value={userInput.annualInvestment} onChange={handleChange} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" name="expectedReturn" value={userInput.expectedReturn} onChange={handleChange} required />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" name="duration" value={userInput.duration} onChange={handleChange} required />
        </p>
      </div>
    </section>
  );
}
