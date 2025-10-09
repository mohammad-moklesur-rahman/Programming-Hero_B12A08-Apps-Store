import { useLoaderData } from "react-router";
import AppsCard from "../components/apps/AppsCard";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      const searchTerm = search.trim().toLowerCase();
      const filteredData = searchTerm
        ? data.filter((appInfo) =>
            appInfo.title.toLowerCase().includes(searchTerm)
          )
        : data;

      setSearchedData(filteredData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, data]);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-20">
        <div className="text-center mb-10 px-4 sm:px-0">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-[20px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-[22px]">
          <div>
            <h2 className="text-2xl text-[#001931] font-semibold mb-4 sm:mb-0">
              {`(${searchedData.length})`} Apps Found
            </h2>
          </div>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
                value={search}
              />
            </label>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <AppsCard searchedData={searchedData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
