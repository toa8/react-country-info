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
    <div className="mt-10 w-4/5 mx-auto flex flex-wrap flex-col gap-8 justify-center items-center md:flex-row">
      {data?.map((country, idx) => (
        <CountryCard data={country} key={idx} />
      ))}
    </div>
  );
};

export default DisplayCards;
