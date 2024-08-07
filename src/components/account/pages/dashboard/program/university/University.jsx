import { useState } from "react";

import Layout from "../../../../layout/Layout";
import Funnelicon from "../../../../../../static/assets/img/account/dashboard/funnel-icon.svg";
import Blackdropdpown from "../../../../../../static/assets/img/account/dashboard/black-drop-down.svg";
import Cancelicon from "../../../../../../static/assets/img/account/dashboard/cancel-icon.svg";
import UniSelect from "./UniSelect.jsx";

function University() {
  const [schFilter, setSchFilter] = useState(false);
  const [eligDrop, setEligDrop] = useState(false);
  const [showFunnel, setShowFunnel] = useState(false);

  const handleSchFilter = () => {
    setSchFilter(!schFilter);
  };

  const handleEligDrop = () => {
    setEligDrop(!eligDrop);
  };

  return (

    <Layout>
       <div className="flex justify-center items-center w-full bg-white pt-14">
        <div className="box-border flex overflow-x-hidden">
          <div className="w-[78vw]">
            <div className="absolute flex bg-[white] h-[120px] items-center w-[78%] justify-between">
              <div className="flex items-center w-[490px] h-[50px] bg-[#eff8ff] justify-between rounded-[10px] mr-auto">
                <input
                  className="text-black text-[large] bg-[#eff8ff] ml-[30px] border-[none] outline-none"
                  type="text"
                  placeholder="Search School"
                />

                <button className="w-[170px] h-[50px] bg-[#0d2c58] flex justify-center items-center text-center text-white rounded-[10px]">
                  Search
                </button>

              </div>

              <div className="flex items-center">
                <div className="flex items-center w-[490px] h-[50px] bg-[#eff8ff] justify-between rounded-[10px]">
                  <input
                    className="text-black text-[large] bg-[#eff8ff] ml-[30px] border-[none] outline-none"
                    type="text"
                    placeholder="Search course to study"
                  />

                  <button className="w-[170px] h-[50px] bg-[#0d2c58] flex justify-center items-center text-center text-white rounded-[10px]">
                    Search
                  </button>

                </div>

                <div className="w-[3px] h-[30.5px] ml-[10px] bg-[#d5ebff]"></div>
                <div
                  onClick={() => setShowFunnel(!showFunnel)}
                  className="h-[25px] w-[25px] ml-[21px] cursor-pointer"
                >

                  <img src={Funnelicon} alt="funnel-icon" />

                </div>
              </div>
            </div>

            <div className="flex mt-[120px]">
              {showFunnel && (
                <div className="fixed flex flex-col justify-around w-[197px] h-[236px] bg-[#b6d8f2] z-10 pt-[15px] pb-[27px] px-[15px] rounded-[10px] right-5 top-[190px]">

                  <span className="not-italic font-semibold text-base leading-6 mt-4 pb-[5px] border-b-white border-b border-solid">
                    Low Tution Fees
                  </span>

                  <span className="not-italic font-semibold text-base leading-6 mt-4 pb-[5px] border-b-white border-b border-solid">
                    High Tution Fees
                  </span>

                  <span className="not-italic font-semibold text-base leading-6 mt-4 pb-[5px] border-b-white border-b border-solid">
                    Low Application Fees
                  </span>

                  <span className="not-italic font-semibold text-base leading-6 mt-4 pb-[5px] border-b-white border-b border-solid">
                    High Application Fees
                  </span>

                  <span className="not-italic font-semibold text-base leading-6 mt-4 pb-[5px] border-b-white border-b border-solid">
                    School Ranks
                  </span>
                </div>
              )}

              <div>
                <div className="bg-[#eff8ff] cursor-pointer rounded-[10px]">
                  <div
                    className="flex justify-between items-center w-[300px] h-10 bg-[#eff8ff] shadow-[0px_1px_1px_rgba(0,0,0,0.25)] select-none mb-[15px] px-2.5 py-0 rounded-[10px]"
                    onClick={handleSchFilter}
                  >

                    <span>
                      School Filter
                    </span>

                    <div className="mx-4">

                      <img src={Blackdropdpown} alt="down-icon" />

                    </div>
                  </div>

                  <div
                    className={
                      schFilter
                        ? "bg-[#eff8ff] block mt-0.5 pt-5 rounded-[0_0_10px_10px]"
                        : "bg-[#eff8ff] hidden mt-0.5 pt-5 rounded-[0_0_10px_10px]"
                    }
                  >
                    <div className="ml-2.5 mr-auto first-pick">

                      <p>
                        Preferred country to study
                      </p>

                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">

                        <span className="ml-2.5 mr-auto">
                          India
                        </span>

                        <div className="h-[10px] w-[10px]">

                          <img src={Cancelicon} alt="cancel-icon" />

                        </div>

                        <div className="mx-4">

                          <img src={Blackdropdpown} alt="down-icon" />

                        </div>
                      </div>
                    </div>

                    <div className="ml-2.5 mr-auto">

                      <p>
                        School
                      </p>

                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">

                        <span className="ml-2.5 mr-auto">
                          India
                        </span>

                        <div className="h-[10px] w-[10px]">

                          <img src={Cancelicon} alt="cancel-icon" />

                        </div>

                        <div className="mx-4">

                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-2.5 mr-auto">
                      <p>School Program</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">India</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-2.5 mr-auto">
                      <p>Discipline</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">India</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                      
                    </div>
                    <div className="ml-2.5 mr-auto">
                      <p>Enrollment</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">India</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-2.5 mr-auto">
                      <p>Specialization</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">India</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>

                    <div className="w-[90%] mt-[23px] mx-auto my-0">
                      <p>Application Fee</p>
                      <div>
                        <input
                          className="w-[100%] bg-transparent"
                          type="range"
                          min="0"
                          max="100"
                          default="0"
                        />
                        <div className="flex justify-between text-[#7c8999]">
                          <span>0k</span>
                          <span>100k</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[23px] mx-auto my-0">
                      <p>Application Fee</p>
                      <div>
                        <input
                          className="w-[100%] bg-transparent"
                          type="range"
                          min="0"
                          max="100"
                          default="0"
                        />
                        <div className="flex justify-between text-[#7c8999]">
                          <span>0k</span>
                          <span>100k</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-[90%] h-[39px] bg-[#0d2c58] not-italic font-bold text-sm leading-6 text-white mt-[25px] mb-[30px] mx-4 rounded-[5px] border-[none]">
                      Apply Filter
                    </button>
                  </div>
                </div>
                <div className="bg-[#eff8ff] cursor-pointer rounded-[10px]">
                  <div
                    className="flex justify-between items-center w-[300px] h-10 bg-[#eff8ff] shadow-[0px_1px_1px_rgba(0,0,0,0.25)] select-none mb-[15px] px-2.5 py-0 rounded-[10px]"
                    onClick={handleEligDrop}
                  >
                    <span>Eligibility</span>
                    <div className="mx-4">
                      <img src={Blackdropdpown} alt="down-icon" />
                    </div>
                  </div>

                  <div
                    className={
                      eligDrop
                        ? "bg-[#eff8ff] block mt-0.5 pt-5 rounded-[0_0_10px_10px]"
                        : "bg-[#eff8ff] hidden mt-0.5 pt-5 rounded-[0_0_10px_10px]"
                    }
                  >
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>Do you have a valid passort</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">I don't have</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>Nationality</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">India</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>Education level</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">
                          3-year Bachelor's degree
                        </span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>Grading Scheme</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">
                          Higher Education 5.0 scale
                        </span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>Average Grade</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">3.88</span>
                      </div>
                    </div>
                    <div className="w-[90%] mt-[15px] mx-auto my-0">
                      <p>English Exam Type</p>
                      <div className="flex w-full h-10 border justify-end items-center rounded-[5px] border-solid border-[#97a9be]">
                        <span className="ml-2.5 mr-auto">GMAT</span>

                        <div className="h-[10px] w-[10px]">
                          <img src={Cancelicon} alt="cancel-icon" />
                        </div>
                        <div className="mx-4">
                          <img src={Blackdropdpown} alt="down-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[90%] flex justify-between items-center not-italic font-normal text-[15px] leading-6 text-black mt-2.5 mx-auto mb-0">
                      <span>Show GMAT Exam Score</span>
                      <input type="checkbox" />
                    </div>

                    <button className="w-[90%] h-[39px] bg-[#0d2c58] not-italic font-bold text-sm leading-6 text-white mt-[25px] mb-[30px] mx-4 rounded-[5px] border-[none]">
                      Save to Profile
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full ml-[15px]">
                <UniSelect /> 
              </div>
            </div>
          </div>
        </div>
     </div>
    </Layout>
  );
};

export default University;
