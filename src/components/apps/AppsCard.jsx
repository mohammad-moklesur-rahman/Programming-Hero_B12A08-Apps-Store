import { useNavigate } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import AppNotFound from "./AppNotFound";

const AppsCard = ({ searchedData }) => {
  const navigate = useNavigate();
  return (
    <>
      {searchedData.length === 0 ? (
        <AppNotFound />
      ) : (
        <div className="grid grid-cols-4 gap-6 mt-10">
          {searchedData.map((info) => {
            return (
              <>
                <div
                  onClick={() => navigate(`/apps/${info.id}`)}
                  className="card bg-base-100 shadow-sm hover:scale-95 cursor-pointer"
                >
                  <div className="p-4">
                    <figure className="bg-[#D9D9D9] rounded-[10px] p-2">
                      <img
                        src={info.image}
                        alt="Shoes"
                        className="rounded-xl"
                      />
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
      )}
    </>
  );
};

export default AppsCard;
