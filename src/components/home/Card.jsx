import { use } from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

const Card = ({ fatchPromice }) => {
  const data = use(fatchPromice);
  const trandingData = data.slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {trandingData.map((info) => {
          return (
            <>
              <div className="card bg-base-100 shadow-sm hover:scale-95 cursor-pointer">
                <div className="p-4">
                  <figure>
                    <img src={info.image} alt="Shoes" className="rounded-xl" />
                  </figure>
                  <h2 className="mt-4 text-left">
                    {info.companyName}: {info.title}
                  </h2>
                  <div className="flex justify-between mt-4">
                    <button className="btn text-[#00D390]">
                      <img className="w-4" src={downloadIcon} alt="" />{" "}
                      {info.downloads}
                    </button>
                    <button className="btn text-[#FF8811]">
                      <img className="w-4" src={ratingIcon} alt="" />{" "}
                      {info.ratingAvg}
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button className="btn mt-10 px-8 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</button>
    </>
  );
};

export default Card;
