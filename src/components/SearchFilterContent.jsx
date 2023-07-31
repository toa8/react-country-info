/* eslint-disable react/prop-types */
// Components
import Input from "./UI/Input";
import FilterButton from "./UI/FilterButton";

const SearchFilterContent = ({ setInputValue, setBtnValue }) => {
  const continents = ["Europe", "America", "Asia", "Africa", "Oceania"];

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleButton = (e) => {
    let { textContent } = e.target;
    setBtnValue(textContent);
  };

  return (
    <div className="w-4/5 mx-auto flex flex-col gap-6 items-center justify-center h-44">
      <form className="flex">
        <Input
          type="text"
          placeholder="Enter a country name..."
          onChange={handleInput}
        />
      </form>
      <div className="flex gap-4">
        {continents.map((continent, idx) => (
          <FilterButton name={continent} key={idx} onClick={handleButton} />
        ))}
      </div>
    </div>
  );
};

export default SearchFilterContent;
