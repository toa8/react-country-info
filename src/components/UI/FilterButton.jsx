// eslint-disable-next-line react/prop-types
const FilterButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-32 bg-slate-50 p-2 rounded-sm font-bold"
    >
      {name}
    </button>
  );
};

export default FilterButton;
