import { useMemo, useState } from "react";
import InstalledApps from "../components/installation/InstalledApps";
import { getLocalStorage } from "../utils/LocalStorage";

const Installation = () => {
  const installedData = getLocalStorage();
  const [sortOrder, setSortOrder] = useState("none");
  const [count, setCount] = useState(0);
  const appFoundCount = (updateInstalled) => {
    setCount(updateInstalled.length);
  };

  const sortItem = useMemo(() => {
    if (sortOrder === "downloads-asc") {
      return [...installedData].sort((a, b) => Number(a.downloads) - Number(b.downloads));
    } else if (sortOrder === "downloads-desc") {
      return [...installedData].sort((a, b) => Number(b.downloads) - Number(a.downloads));
    } else {
      return installedData;
    }
  }, [sortOrder, installedData]);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-20">
        <div className="text-center">
          <h2 className="text-[48px] text-[#001931] font-bold">
            Your Installed Apps
          </h2>
          <p className="text-[20px] text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <div>
            <h2 className="text-2xl text-[#001931] font-semibold">
              {count} Apps Found
            </h2>
          </div>
          <div>
            <fieldset className="fieldset">
              <select
                onChange={(e) => setSortOrder(e.target.value)}
                className="select"
              >
                <option value="none">Sort By Size</option>
                <option value="downloads-desc">High-Low</option>
                <option value="downloads-asc">Low-High</option>
              </select>
            </fieldset>
          </div>
        </div>
        <div>
          <InstalledApps sortItem={sortItem} appFoundCount={appFoundCount} />
        </div>
      </div>
    </div>
  );
};

export default Installation;
