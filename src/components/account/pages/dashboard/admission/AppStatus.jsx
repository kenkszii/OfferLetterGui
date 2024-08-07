/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["Kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import "../../../../../static/assets/css/account/pages/AppStatus.css";
import Layout from "../../../layout/Layout";


function AppStatus() {
  return (
    <Layout>
      <div className="app-status-wrapper">
        <div className="app-status bg-[#F6F6F6] rounded-[10px] max-w-full">
          <div className="px-4 py-4">
            <h2 className="text-[#0D2C58] text-xl font-bold">Application</h2>
          </div>
          {/* {applicationsLoading ? (
            <Spinner />
          ) : (
            applications?.map((application) => (
              <div key={application.id} className="">
                <div className="application-table min-w-max">
                  <ul className="heading grid grid-cols-6 bg-[#B6D8F2] px-4 py-6 rounded-[0__0__8px__8px] shadow-[0__0__5px__#00000040] ">
                    <li>Status</li>
                    <li>School</li>
                    <li>Course</li>
                    <li>Specialization</li>
                    <li>Start Date</li>
                    <li>Fees</li>
                  </ul>
                  <ul className="body grid grid-cols-6 bg-[#FFFFFF] gap-3 px-4 py-6 rounded-[0__0__8px__8px] shadow-[0__0__5px__#00000040] ">
                    <li className={`accepted`}>{application?.status}</li>
                    <li>{application?.university?.name}</li>
                    <li>{application?.program}</li>
                    <li>{application?.specialization}</li>
                    <li>
                      {application?.startDate ? (
                        application?.startDate
                      ) : (
                        <>none provided</>
                      )}
                    </li>
                    <li>
                      {application?.fees ? (
                        application?.fees
                      ) : (
                        <>none provided</>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )} */}

          {/* <div className="application-table min-w-max">
            <ul className="heading grid grid-cols-6 bg-[#B6D8F2] px-4 py-6 rounded-[0__0__8px__8px] shadow-[0__0__5px__#00000040] ">
              <li>Status</li>
              <li>School</li>
              <li>Course</li>
              <li>Specialization</li>
              <li>Start Date</li>
              <li>Fees</li>
            </ul>
            <ul className="body grid grid-cols-6 bg-[#FFFFFF] px-4 py-6 rounded-[0__0__8px__8px] shadow-[0__0__5px__#00000040] ">
              <li className={`accepted`}>Accepted</li>
              <li>University of Toronto</li>
              <li>Computer Engineering</li>
              <li>Software Engineering</li>
              <li>11th May 2022</li>
              <li>$34,000</li>
            </ul>
          </div> */}

          <div className="flex justify-between px-4 py-6">
            <p className="text-base text-[#737475]">
              You have no paid Application
            </p>
            <button className="bg-[#0D2C58] text-white px-4 py-2 text-xl rounded-lg">
              Pay for Application
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppStatus;
