/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["OTechCup", "@kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import Layout from "../../layout/Layout";

import SinglePerson from "../../../../static/assets/img/account/dashboard/single-person.png"
import Gather from "../../../../static/assets/img/account/dashboard/gather.svg"
import { useUser } from "../../../../static/assets/js/useUser";


function Arrow() {
  return (
    <div className="flex flex-col items-center justify-center mr-[5px]">
      <svg
        width="15"
        height="43"
        viewBox="0 0 32 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L30 27.5L1 56" stroke="#e5e8eb" strokeWidth="2" />
      </svg>
    </div>
  );
};

const Stage = (props) => {
  return (
    <>
      <div className="flex gap-1 items-center relative h-[43px]">
        <div className="w-[16px] h-[16px] rounded-full flex items-center justify-center bg-white">
          <span
            className={`text-[9px] ${
              props.appStage > props.stage
                ? "text-[#009106]"
                : props.appStage === props.stage
                ? "text-[#002151]"
                : "text-[#A7A7A7]"
            } `}
          >
            {props.stage}
          </span>
        </div>
        <p
          className={`text-[9px] max-w-[54px] ${
            props.appStage > props.stage
              ? "text-[#009106]"
              : props.appStage === props.stage
              ? "text-[#002151]"
              : "text-[#A7A7A7]"
          } `}
        >
          {props.title}
        </p>
      </div>
    </>
  );
};



const StudEval = (props) => {
  return (
    <div className="eva bg-[#F8FCFF] flex items-center justify-between py-4 px-6 mb-6 rounded-[10px] cursor-pointer w-full">
      <div
        className="grid 
      lg:grid-cols-[200px_300px_100px] 
      items-center"
      >
        <p className="text-base font-medium">{props.action}</p>
        <p className="text-[10px] bg-[#0000001c] px-4 py-1">{props.title}</p>
      </div>
      <span className="text-2xl">
        <FaCaretDown />
      </span>
    </div>
  );
};

function StudentDashoard() {
  const navigate = useNavigate();
  const profileCompletion = 0;
  const progessDegrees = profileCompletion * 3.6;

  const style = {
    background: `conic-gradient(#084FC7 ${progessDegrees}deg, #000 ${progessDegrees}deg ${
      360 - progessDegrees
    }deg) `,
  };

  return (
    <Layout>

      <section>
        <div className="w-[100%] relative mb-4">
          <div className="absolute footerbottom overflow-hidden">

            <div className="application-progress lg:w-[67%]">
              <div className="arrow bg-[#EFF8FF]">
                <div className="flex font-medium py-2">
                  <Stage appStage={4} title={"Profile completion"} stage={1} />
                  <Arrow />
                  <Stage appStage={4} title={"Document selected"} stage={2} />
                  <Arrow />
                  <Stage appStage={4} title={"Pendencies rejection"} stage={3} />
                  <Arrow />
                  <Stage appStage={4} title={"Conditional offer letter"} stage={4} />
                  <Arrow />
                  <Stage appStage={4} title={"Completed document selected"} stage={5} />
                  <Arrow />
                  <Stage appStage={4} title={"Offer letter"} stage={6} />
                  <Arrow />
                  <Stage appStage={4} title={"COA"} stage={7} />
                  <Arrow />
                  <Stage appStage={4} title={"Visa file"} stage={8} />
                  <Arrow />
                  <Stage appStage={4} title={"Visa decision"} stage={9} />
                </div>
              </div>
            </div>

            <div className="top-wrapper my-4 flex flex-col lg:flex-row justify-between">
              <div className="dashboard-left lg:w-[67%]">
                <div className="profile-details bg-[#EFF8FF] py-7 px-8 mb-14 relative rounded-[10px]">
                  <h1 className="text-2xl font-semibold mb-6">
                    Profile Completion
                  </h1>

                  <div className="progress absolute top-7 right-8">


                    <div
                      className="circle-wrap flex flex-col items-center justify-center w-[51px] h-[51px] rounded-full"
                      style={style}
                    >
                      <div className="circle flex flex-col items-center justify-center w-[40px] h-[40px] bg-[#fff] rounded-full">
                        <p className="progress text-sm text-[#084FC7] font-semibold">
                          {progessDegrees}%
                        </p>
                      </div>
                    </div>


                  </div>

                  <p className="text-sm font-normal">
                    Please complete your profile to identify the list of most relevant
                    universities for you
                  </p>

                  <div className="performance-button flex flex-col lg:flex-row items-center gap-7 mb-12 mt-6">
                    <button className="border border-[#FF0000] py-2 px-8 text-[#FF0000] text-sm">
                      Personal Info
                    </button>

                    <button className="border border-[#FF0000] py-2 px-8 text-[#FF0000] text-sm">
                      Educational Info
                    </button>

                    <button className="border border-[#FF0000] py-2 px-8 text-[#FF0000] text-sm">
                      Test Score
                    </button>

                    <button className="py-2 px-8 text-[#fff] text-sm bg-[#21B573]">
                      Experience
                    </button>
                  </div>

                  <div className="coplete-fields">


                    {profileCompletion !== 100 ? (
                      <Link
                        to="/create-profile"
                        className="py-2 px-8 text-white bg-[#21B573] rounded-[8px]"
                      >
                        Complete all fields
                      </Link>
                    ) : (
                      <button className="py-2 px-8 text-white bg-[#21B573] rounded-[8px]">
                        Profile is complete
                      </button>
                    )}


                  </div>
                </div>

                <div className="dropdown-eval mb-9 w-full">


                  <StudEval
                  action="Profile eveluations report"
                  title="10 recommendations based on your profile evaluation"
                />
                
                <StudEval action="Your Applications" title="0 Application" />
                
                <StudEval
                  action="Short list your universities"
                  title="0 Application"
                />
             


                </div>

                <div className="check-eligibility">
                  <button className="text-base font-normal bg-[#0D2C58] py-4 px-9 rounded-[10px] text-white">
                    Check Eligibility
                  </button>
                </div>
              </div>

              <div className="dashboard-right mt-5 lg:mt-0 lg:w-[30%]">
                <div className="p-6 bg-[#EFF8FF] mb-2 rounded-[10px]">
                  <h4 className="text-base font-medium mb-4 text-center">
                    Want help to get started?
                  </h4>

                  <p className="text-[15px] font-normal mb-11 text-center">
                    Verify your account and connect with an Expert
                  </p>

                  <div
                    className="connect-expert flex flex-col"
                    onClick={() => navigate("/student/dashboard/webinar/")}
                  >
                    <button className="text-base font-medium text-white bg-[#21B573] py-3 px-12 rounded-[10px]">
                      Connect with an Expert
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center bg-[#EFF8FF] rounded-[10px] pt-6 p-4">
                  <div className="illus w-[150px] h-[150px]">
                    <img src={Gather} alt="gather" />
                  </div>

                 

                  <p className="text-xl font-normal text-center">
                    Join our live webinar section to guide you on your application
                    process
                  </p>

                  <div className="get-connected flex flex-col mt-6 w-full">
                    <button className="py-3 px-10 bg-[#0D2C58] text-white text-base font-normal rounded-[10px]">
                      Get connected{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-wrapper w-full bg-[#EFF8FF] rounded-[10px]">
              <div className="w-full px-4 py-6 rounded-[10px] shadow-[0_1px_1px_rgba(0,0,0,0.25)] flex sm:justify-center lg:justify-start">
                <h4 className="text-xl font-bold">
                  Document Section
                </h4>
              </div>

              <div className="doc-wrapper flex flex-col lg:flex-row items-center justify-center py-7 lg:pr-28" style ={{marginBottom:"15%"}}>
                <div className="left-deoc px-7 text-center lg:text-left">
                  <p className="mt-7 mb-3 text-base font-normal">
                    Keep track of all you document needed for your application{" "}
                  </p>

                  <p className="text-base font-normal">
                    We accept document of all kind
                  </p>

                  <div className="upload-doc mt-10 mb-6">
                    <button className="text-base font-normal text-white bg-[#0D2C58] px-12 py-4 rounded-[10px]">
                      Upload Document
                    </button>
                  </div>

                  <p className="text-base font-normal text-[#f00]">
                    Please upload your document if you have ot done so
                  </p>
                </div>

                <div className="right-doc">
                  <div className="doc-illus flex justify-center lg:w-[460px] lg:h-[275px] pt-4 pl-10 lg:p-0">
                    <img src={SinglePerson} alt="single-person" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default StudentDashoard;
