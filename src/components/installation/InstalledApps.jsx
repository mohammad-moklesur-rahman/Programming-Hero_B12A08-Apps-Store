import { useState } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { removeData } from "../../utils/LocalStorage";

const InstalledApps = ({sortItem, appFoundCount }) => {
  const [updateInstalled, setUpdateInstalled] = useState(sortItem);
  const handelUninstallBtn = (id) => {
    removeData(id);
    setUpdateInstalled((prev) => prev.filter((aInfo) => aInfo.id !== id));
  };

  appFoundCount(updateInstalled)
  return (
    <>
      {sortItem.map((appInfo) => {
        return (
          <>
            <div className="bg-white my-4 rounded-[10px]">
              <div className="p-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <figure className="bg-gray-100 p-2 rounded-2xl">
                    <img className="w-20" src={appInfo.image} alt="" />
                  </figure>
                  <div>
                    <h2 className="text-[20px] font-medium text-[#001931]">
                      {appInfo.companyName}: {appInfo.title}
                    </h2>
                    <div className="flex gap-4 mt-2">
                      <div className="flex gap-1 font-medium text-[#00D390]">
                        <img className="w-5 h-5" src={downloadIcon} alt="" />
                        <p>{appInfo.downloads}</p>
                      </div>
                      <div className="flex gap-1 font-medium text-[#FF8811]">
                        <img className="w-5 h-5" src={ratingIcon} alt="" />
                        <p>{appInfo.ratingAvg}</p>
                      </div>
                      <span className="text-[#627382]">{appInfo.size} MB</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handelUninstallBtn(appInfo.id)}
                    className="btn bg-[#00D390] font-semibold text-white"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default InstalledApps;
