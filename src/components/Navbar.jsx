const Navbar = () => {
  return (
    <div className="w-4/5 h-24 flex gap-2 items-center pl-10 mx-auto">
      <img src="/country-info-favicon.jpg" alt="logo" className="w-12 h-12" />
      <p className="text-3xl text-green-900">
        <a href="/">Country Info</a>
      </p>
    </div>
  );
};

export default Navbar;
