import appNotFoundImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center p-20 bg-[#F5F5F5]">
      <div className="text-center">
        <figure className="flex justify-center">
          <img src={appNotFoundImg} alt="" />
        </figure>
        <h2 className="text-[48px] text-[#001931] font-semibold mt-6">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-[20px] text-[#627382]">
          The App you are requesting is not found on our system.  please try another apps
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
