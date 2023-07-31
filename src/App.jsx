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
    <>
      <Navbar />
      <SearchFilterContent
        setBtnValue={setBtnValue}
        setInputValue={setInputValue}
      />
      <div className="mt-10 flex items-center justify-center flex-wrap gap-8 w-4/5 mx-auto">
        {data?.map((item, idx) => (
          <CountryCard data={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default App;
