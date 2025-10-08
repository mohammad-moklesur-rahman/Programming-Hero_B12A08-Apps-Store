import Banner from "../components/home/Banner";
import TrandingApps from "../components/home/TrandingApps";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="text-center pt-20">
        <Banner />
      </div>
      <div className="text-center py-20">
        <TrandingApps />
      </div>
    </div>
  );
};

export default Home;
