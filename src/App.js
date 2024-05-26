import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];



const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false)

  

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1)
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1)
  };

  const handleCancel = () => {
    setIsOpen((is) => !is)
  }
  const handleEnter = () => {
    setIsOpen(false)
  }

  return (

    <div>

     
      <button className=" close" onMouseEnter={handleCancel} onMouseLeave={handleEnter}>
        &times;
      </button>

      {isOpen || (

    <div className=" w-[600px] bg-[#f7f7f7] rounded-md py-[25px] px-[100px] my-[100px] mx-auto">
      <div className=" flex justify-between items-center text-[18px] numbers">
        <div className={step === 1 ? "active" : "" }>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>

      <p className=" text-center text-xl my-10 mx-0 font-bold flex flex-col items-center $``">
        Step {step}: {messages[step - 1]}
      </p>

      <div className=" text-white flex justify-between">
        <button
          className="py-[10px] px-[15px] rounded-[100px] text-[14px] font-bold bg-[#7950f2]"
          onClick={handlePrevious}
          >
          Previous
        </button>
        <button
          className="bg-[#7950f2] py-[10px] px-[15px] rounded-[100px] text-[14px] font-bold "
          onClick={handleNext}
          >
          Next
        </button>
      </div>
    </div>)
      }
          </div>
  );
};

export default App;
