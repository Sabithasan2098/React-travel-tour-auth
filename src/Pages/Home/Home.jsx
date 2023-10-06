import Nvabar from "../Navbar/Nvabar";
import { FaArrowRight } from "react-icons/fa6";
import MarQuee from "./MarQuee";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" bg-homeBg relative overflow-hidden bg-cover w-[100%] h-[923px]">
      <div className="absolute bg-[#000000B3] top-0 left-0 h-[100%] w-[100%]">
        <Nvabar></Nvabar>
        <div className="pb-[200px] flex flex-col lg:flex-row">
          <div className="lg:pl-96 lg:pt-24 pt-10">
            <h1 className="font-normal  text-white text-8xl ">Cox's bazar</h1>
            <p className="text-white py-10">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
            <div>
              {user ? (
                <Link to={"/private"}>
                  <button className="btn btn-warning">
                    Booking<FaArrowRight></FaArrowRight>
                  </button>{" "}
                </Link>
              ) : (
                <Link to={"/login"}>
                  <button className="btn btn-warning">
                    Login<FaArrowRight></FaArrowRight>
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <MarQuee></MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
