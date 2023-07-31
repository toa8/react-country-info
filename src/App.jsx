import React from "react";
// Components
import Navbar from "./components/Navbar";
import SearchFilterContent from "./components/SearchFilterContent";
import DisplayCards from "./components/DisplayCards";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [btnValue, setBtnValue] = React.useState(null);

  return (
    <div className="w-full min-h-[100vh]">
      <Navbar />
      <SearchFilterContent
        setBtnValue={setBtnValue}
        setInputValue={setInputValue}
      />
      <DisplayCards inputValue={inputValue} btnValue={btnValue} />
    </div>
  );
};

export default App;
