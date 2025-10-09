import googlePlayIcon from "../../assets/google_play.png"
import appStoreIcon from "../../assets/app_store.png"
import heroImg from "../../assets/hero.png"
const Banner = () => {
  return (
    <div>
      {/* Banner Content */}
      <p className="text-[#001931] text-3xl sm:text-[72px] font-bold">
        We Build <br /><span className="primary-color">Productive</span> Apps
      </p>

      <p className="text-[#627382] text-[20px] px-4 md:px-0 mt-4 md:mt-0">
        At B12A08, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>

      {/* Banner App Button */}
      <div className="flex gap-4 justify-center py-10 text-[20px] font-semibold text-[#001931]">
        <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="btn"><img className="w-6" src={googlePlayIcon} alt="" /> Google Play</a>
        <a href="https://www.apple.com/app-store/" target="_blank" className="btn"><img className="w-6" src={appStoreIcon} alt="" /> App Store</a>
      </div>

      {/* Banner image */}
      <figure className="flex justify-center">
        <img src={heroImg} alt="" />
      </figure>

      {/* Banner Trusted section */}
      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="py-20">
          <h2 className="text-3xl sm:text-[48px] font-bold text-white">Trusted by Millions, Built for You</h2>
          <div className="mt-10 md:flex justify-center md:gap-10 lg:gap-45">
            <div className="text-white">
              <small>Total Downloads</small>
              <h2 className="text-[64px] font-extrabold">29.6M</h2>
              <small>21% more than last month</small>
            </div>
            <div className="text-white my-10 sm:my-0">
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
