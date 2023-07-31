/* eslint-disable react/prop-types */
const CountryCard = ({ data, idx }) => {
  const formattedPopulation = new Intl.NumberFormat().format(data.population);

  return (
    <div className="flex flex-col w-1/4 h-[100vh]" key={idx}>
      {data ? (
        <>
          <div className="w-full h-1/3">
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
              Population: {formattedPopulation}
            </p>
            <p className="text-xl p-2 ">
              UN Member: {data.unMember === true ? "✔" : "❌"}
            </p>
            <p className="text-xl p-2 ">
              Car: {data.car.signs} | {data.car.side}
            </p>
            <p className="text-xl mt-4 text-stone-700">
              <a
                href={data.maps.googleMaps}
                target="blank"
                className="text-stone-700 w-32  bg-zinc-200 p-2 rounded-sm font-bold"
              >
                Click for map!
              </a>
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
