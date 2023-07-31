import React from "react";
// Components
import Navbar from "./components/Navbar";
import SearchFilterContent from "./components/SearchFilterContent";
import CountryCard from "./components/CountryCard";

import useFetch from "./hooks/useFetch";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [btnValue, setBtnValue] = React.useState(null);
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (inputValue !== "") {
      const filteredUrl = `https://restcountries.com/v3.1/name/${inputValue}`;
      const finalUrl =
        btnValue !== null
          ? `https://restcountries.com/v3.1/region/${btnValue}`
          : filteredUrl;
      setUrl(finalUrl);
    } else {
      const finalUrl =
        btnValue !== null
          ? `https://restcountries.com/v3.1/region/${btnValue}`
          : "https://restcountries.com/v3.1/all";
      setUrl(finalUrl);
    }
  }, [inputValue, btnValue]);

  const { data } = useFetch(url);

  return (
    <div className="w-full min-h-[100vh]">
      <Navbar />
      <SearchFilterContent
        setBtnValue={setBtnValue}
        setInputValue={setInputValue}
      />
      <div className="flex flex-wrap gap-12 justify-center items-center w-4/5 min-h-[100vh] mx-auto mt-10">
        {data?.map((country, idx) => (
          <CountryCard data={country} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default App;
