import Marquee from "react-fast-marquee";
import Sajek from "../../assets/Sajek.png";
import Sreemongle from "../../assets/Sreemongol.png";
import Sunderbone from "../../assets/sundorbon.png";
const MarQuee = () => {
  return (
    <div className="lg:pt-24">
      <Marquee>
        <div className="relative">
          <img className="max-w-full h-[500px] ml-8" src={Sajek} alt="" />
          <h1 className="absolute bottom-5 left-10 font-extrabold text-white text-5xl">Sajek vali</h1>
        </div>
        <div className="relative">
          <img className="max-w-full h-[500px] ml-8" src={Sreemongle} alt="" />
          <h1 className="absolute bottom-5 left-10 font-extrabold text-white text-5xl">Sreemongle</h1>
        </div>
        <div className="relative">
          <img className="max-w-full h-[500px] ml-8" src={Sunderbone} alt="" />
          <h1 className="absolute bottom-5 left-10 font-extrabold text-white text-5xl">Sunderbone</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default MarQuee;
