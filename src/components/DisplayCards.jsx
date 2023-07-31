/* eslint-disable react/prop-types */
import React from "react";

// Components
import CountryCard from "./UI/CountryCard";

import useFetch from "../hooks/useFetch";

const DisplayCards = ({ inputValue, btnValue }) => {
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

  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-12 justify-center items-center w-4/5 min-h-[100vh] mx-auto mt-10">
      {data?.map((country, idx) => (
        <CountryCard data={country} key={idx} />
      ))}
    </div>
  );
};

export default DisplayCards;
