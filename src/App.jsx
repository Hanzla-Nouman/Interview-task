import { useState } from "react";
import "./App.css";

const packages = [
  {
    id: 1,
    posts: 30,
    discount: 30,
  },
  {
    id: 2,
    posts: 10,
    discount: 30,
  },
  {
    id: 3,
    posts: 7,
    discount: 30,
  },
];

function App() {
  const [value, setValue] = useState(500);
  const [selectedPackage, setSelectedPackage] = useState(1);
  const disc = value / 9.45;

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg.id);
  };

  const getDiscount = (value) => {
    if (value > 5000) return 50;
    if (value > 2500) return 40;
    return 30;
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-neutral-100">
      <div className="rounded-xl flex flex-col justify-center items-center text-center bg-white w-72">
        <div className="bg-neutral-200 w-full rounded-t-xl">
          <p className="font-bold text-center text-indigo-950 py-2">
            Automatic Views
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-2">
          <p className="text-2xl font-medium mt-6 mb-4 flex items-end">
            <span className="text-lg tracking-tight">Automatic Views</span>
            &nbsp;
            {value}
          </p>
        </div>
        <input
          id="large-range"
          step={100}
          min={"500"}
          max={"10000"}
          type="range"
          value={value}
          onChange={handleValueChange}
          className="w-full h-3 mb-4 bg-gray-300 rounded-xl appearance-none cursor-pointer range-lg dark:bg-indigo-200"
        />
        <div className="flex w-full justify-evenly items-center">
          <div className="items-start">
            <p className="bg-indigo-500 rounded-md px-2 py-1 text-amber-200 flex items-center justify-center font-medium text-xs">
              Flat {getDiscount(value)}%
            </p>
          </div>
          <div className="text-right flex items-center">
            <p className="text-2xl text-indigo-950 font-bold">
              ₪
              {value > 5000
                ? Math.round(disc - (disc * 50) / 100)
                : Math.round(disc - (disc * 30) / 100)}
            </p>
            &nbsp;
            <p className="text-xl font-medium text-stone-500 line-through">
              ₪{Math.round(disc)}
            </p>
          </div>
        </div>

        <div className="flex space-x-2 my-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleSelect(pkg)}
              className={`flex flex-col justify-center items-center transition-all duration-300 ${
                selectedPackage === pkg.id ? "bg-indigo-500" : "bg-gray-200"
              } relative px-5 pt-4 pb-3 rounded-md cursor-pointer`}
            >
              <p className="bg-amber-300 text-center font-bold text-sm rounded absolute w-20 -top-1.5">
                Save {pkg.discount}%
              </p>
              <div className="-space-y-1 justify-center flex flex-col items-center">
                <p
                  className={`${
                    selectedPackage === pkg.id ? "text-white" : "text-black"
                  } font-bold text-xl`}
                >
                  {pkg.posts}
                </p>
                <p
                  className={`${
                    selectedPackage === pkg.id ? "text-white" : "text-black"
                  } font-bold text-lg`}
                >
                  Posts
                </p>
              </div>
              <div className="-space-y-1 justify-center flex flex-col items-center mt-1">
                <p
                  className={`${
                    selectedPackage === pkg.id ? "text-white" : "text-black"
                  } text-xs`}
                >
                  Future
                </p>
                <p
                  className={`${
                    selectedPackage === pkg.id ? "text-white" : "text-black"
                  } font-bold text-lg`}
                >
                  ₪
                  {value > 5000
                    ? Math.round(disc - (disc * 50) / 100)
                    : Math.round(disc - (disc * 30) / 100)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-fuchsia-600 mx-4 w-full p-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-fuchsia-500 transition-all duration-300">
          Purchase Now
        </button>

        <p className="border bg-indigo-500 font-bold text-center text-neutral-50 px-3 py-0.5 my-4 text-xs rounded-xl w-24">
          Automatic
        </p>
      </div>
    </div>
  );
}

export default App;
