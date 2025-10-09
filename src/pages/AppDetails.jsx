import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import Rechart from "../components/apps/Rechart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const AppDetails = () => {
  const data = useLoaderData();
  const { appId } = useParams();
  const id = parseInt(appId);
  const appData = data.find((appInfo) => appInfo.id === id);
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = appData;

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const installedApps = getLocalStorage();
    const isAlreadyInstalled = installedApps?.some((app) => app.id === id);
    if (isAlreadyInstalled) {
      setDisabled(true);
    }
  }, [id]);

  const handelInstalledBtn = () => {
    if(disabled) return;
    setDisabled(true);
    setLocalStorage(appData);
    toast(`${title} Installed`);
  };
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto py-20">
        <div className="flex gap-4 border-b-1 border-[#ccced0] pb-10">
          <div>
            <figure className="bg-white w-88 p-4">
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="w-full">
            <div className="border-b-1 border-[#ccced0] pb-4">
              <h2 className="text-[32px] text-[#001931] font-bold">
                {companyName}: {title}
              </h2>
              <p className="text-[20px] text-[#627382]">
                Developed by{" "}
                <span className="primary-color">{companyName}</span>
              </p>
            </div>
            <div className="flex gap-15 my-8">
              <div>
                <img className="w-7" src={downloadIcon} alt="" />
                <p className="text-[#001931] mt-2">Downloads</p>
                <h2 className="text-[40px] text-[#001931] font-extrabold">
                  {downloads}
                </h2>
              </div>
              <div>
                <img className="w-7" src={ratingIcon} alt="" />
                <p className="text-[#001931] mt-2">Average Ratings</p>
                <h2 className="text-[40px] text-[#001931] font-extrabold">
                  {ratingAvg}
                </h2>
              </div>
              <div>
                <img className="w-7" src={reviewIcon} alt="" />
                <p className="text-[#001931] mt-2">Total Reviews</p>
                <h2 className="text-[40px] text-[#001931] font-extrabold">
                  {reviews}
                </h2>
              </div>
            </div>
            <button
              onClick={handelInstalledBtn}
              className={`btn text-white text-[20px] font-semibold ${
                disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
              }`}
            >
              {disabled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <div className="h-100 border-b-1 border-[#ccced0] py-10">
          <h2 className="text-2xl font-semibold text-[#001931]">Ratings</h2>
          <Rechart ratings={ratings} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#001931] mt-10">
            Description
          </h2>
          <p className="text-[20px] text-[#627382] mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
