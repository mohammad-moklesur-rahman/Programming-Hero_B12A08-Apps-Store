import googlePlayIcon from "../../assets/google_play.png"
import appStoreIcon from "../../assets/app_store.png"
import heroImg from "../../assets/hero.png"
const Banner = () => {
  return (
    <div>
      <p className="text-[#001931] text-[72px] font-bold">
        We Build <br /><span className="primary-color">Productive</span> Apps
      </p>

      <p className="text-[#627382] text-[20px]">
        At B12A08, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 justify-center py-10 text-[20px] font-semibold text-[#001931]">
        <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="btn"><img className="w-6" src={googlePlayIcon} alt="" /> Google Play</a>
        <a href="https://www.apple.com/app-store/" target="_blank" className="btn"><img className="w-6" src={appStoreIcon} alt="" /> App Store</a>
      </div>
      <figure className="flex justify-center">
        <img src={heroImg} alt="" />
      </figure>
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="py-20">
          <h2 className="text-[48px] font-bold text-white">Trusted by Millions, Built for You</h2>
          <div className="mt-10 flex justify-center gap-45">
            <div className="text-white">
              <small>Total Downloads</small>
              <h2 className="text-[64px] font-extrabold">29.6M</h2>
              <small>21% more than last month</small>
            </div>
            <div className="text-white">
              <small>Total Reviews</small>
              <h2 className="text-[64px] font-extrabold">906K</h2>
              <small>46% more than last month</small>
            </div>
            <div className="text-white">
              <small>Active Apps</small>
              <h2 className="text-[64px] font-extrabold">132+</h2>
              <small>31 more will Launch</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
