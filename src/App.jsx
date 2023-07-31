import React from "react";

import axios from "axios";

// Components
import Navbar from "./components/Navbar";
import SearchFilterContent from "./components/SearchFilterContent";
import CountryCard from "./components/CountryCard";

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <Navbar />
      <SearchFilterContent />
      <div className="mt-10 flex items-center justify-center flex-wrap gap-8 w-4/5 mx-auto">
        {data.map((item, idx) => (
          <CountryCard data={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default App;
