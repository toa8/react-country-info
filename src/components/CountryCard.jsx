/* eslint-disable react/prop-types */
const CountryCard = ({ data, idx }) => {
  return (
    <div className="w-1/4 h-[80vh] rounded-lg" key={idx}>
      {data ? (
        <>
          <div className="w-full h-2/4">
            <img
              className="w-full h-full rounded-t-lg cursor-pointer"
              src={data.flags?.png}
              alt={data.flags?.alt}
              loading="lazy"
            />
          </div>
          <div className=" mt-4 flex gap-2 flex-col ">
            <p className="font-bold text-3xl text-stone-800 text-center">
              {data.name?.common}
            </p>
            <p className="text-xl p-2 text-stone-700">
              Capital : {data.capital}
            </p>
            <p className="text-xl p-2 text-stone-700">Region: {data.region}</p>
            <p className="text-xl p-2 text-stone-700">
              Population: {data.population}
            </p>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CountryCard;
