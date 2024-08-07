import { Link } from "react-router-dom";
import Layout from "../../../../layout/Layout";

import Bookimage from "../../../../../../static/assets/img/account/dashboard/book-image.svg";
import Gather from "../../../../../../static/assets/img/account/dashboard/gather.svg";


function ExamHome() {
  return (

    <Layout>
      <div className="flex justify-center items-center w-full bg-white pt-14">
        <div className="flex justify-end w-[90%] mt-16">
          <div className="flex flex-col w-[80%] h-[80%] gap-y-12 mb-28">
            <div className="bg-[#EFF8FF] text-lg rounded-lg p-5 font-bold shadow-lg absolute w-[72%]">

              <span>
                Prepare for Exam
              </span>
              
            </div>

            <div className="bg-[#EFF8FF] flex items-center justify-between w-full md:h-[45vh] h-full p-5 md:py-10 md:px-12 rounded-xl mt-6">
              <div className="flex md:items-center md:justify-between flex-col-reverse md:flex-row w-full">
                <div className="md:w-[45%]">
                  <div className="md:leading-8 md:text-lg">

                    <p>
                      Get prepared for your GMAT exam with helpful guide to
                    </p>

                    <p>
                      help you get started
                    </p>
                  </div>

                  <Link to="/program/exams/gmat">

                    <button className="bg-[#21B573] py-3 px-8 md:px-16 text-white cursor-pointer mt-5 text-lg rounded-lg">
                      Get Started
                    </button>

                  </Link>

                </div>

                <div className="md:w-[50%] flex justify-center mb-3 md:mb-0">
                  <img src={Bookimage} alt="book" className="h-56 w-54" />
                </div>

              </div>
            </div>

            <div className="bg-[#EFF8FF] flex items-center justify-between w-full md:h-[45vh] h-full p-5 md:px-12 rounded-xl">
              <div className="flex md:items-center md:justify-between flex-col-reverse md:flex-row w-full">
                <div className="md:w-[45%]">
                  <div className="md:leading-8 md:text-lg">
                    <p>
                      Do you need assistance to help guide you as
                    </p>
                    <p>
                      you prepare for your exam?
                    </p>
                  </div>


                  <Link to="/program/exams/gmat">

                    <button className="bg-[#0D2C58] py-3 px-8 md:px-16 text-white cursor-pointer mt-5 text-lg rounded-lg">
                      Get In Touch
                    </button>

                  </Link>


                </div>

                <div className="md:w-[50%] flex justify-center mb-3 md:mb-0">
                  <img src={Gather} alt="gather" className="h-56 w-54" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  );
};

export default ExamHome;