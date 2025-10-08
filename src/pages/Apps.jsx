import { useLoaderData } from "react-router";
import AppsCard from "../components/apps/AppsCard";

const Apps = () => {
  const data = useLoaderData()
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-20">
        <div className="text-center mb-10">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-[20px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center mb-[22px]">
          <div>
            <h2 className="text-2xl text-[#001931] font-semibold">{`(${data.length})`} Apps Found</h2>
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
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div>
          <AppsCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default Apps;
