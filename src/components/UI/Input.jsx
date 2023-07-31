/* eslint-disable react/prop-types */
const Input = ({ placeholder, type, onChange }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        className="p-2 rounded-lg w-96 outline-none border-2 border-slate-300 focus:border-slate-500"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
