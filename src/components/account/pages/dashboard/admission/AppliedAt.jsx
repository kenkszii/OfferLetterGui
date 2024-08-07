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
import React from "react";
import "../../../../../static/assets/css/account/pages/AppliedAt.css";
// import uniImg from "../../../assets/Student/images/uni-i-img.png";
// import emailIcon from "../../../assets/Student/icons/email-icon.svg";
// import callIcon from "../../../assets/Student/icons/call-icon.svg";
// import locIcon from "../../../assets/Student/icons/location-icon.svg";
import Gather from "../../../../../static/assets/img/account/dashboard/gather.svg"

// import AppliedCard from "./AppliedCard";
// import Spinner from "./Spinner";
// import moment from "moment/moment";

import Layout from "../../../layout/Layout";

function AppliedAt () {
  // console.log(applications);
  // const appliedCards = applications?.map((application) => (
  //   <AppliedCard
  //     key={application._id}
  //     img={application?.university?.logo?.path}
  //     uniName={application?.university?.name}
  //     timestamp={application?.createdAt}
  //     email={application?.user?.email}
  //     phone={application?.student?.phoneNumber}
  //     uniLoc={application?.university?.country}
  //     course={application?.program}
  //     specialization={application?.specialization}
  //     degree={application?.degree}
  //     duration={application?.duration}
  //   />
  // ));

  return (
    <Layout>
    
      <h1 className="font-semibold text-2xl leading-6 mb-[30px]">
        University Status
      </h1>


      <div className="flex flex-col lg:flex-row justify-between items-center lg:h-[330px] bg-[#EFF8FF] my-28 lg:px-[67px] px-6 py-9 rounded-[10px]">
        <div className="py-4 items-end">
          <p className="m-0">
            Connect with mentors to help guide you in your application
          </p>
          <p className="m-0">process to stand a chance of being accepted</p>
          <button className="w-[223px] h-[50px] cursor-pointer bg-[#0D2C58] font-normal text-base leading-[19px] text-white mt-[30px] rounded-[10px] border-[none]">
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="h-[276px] w-[271px] lg:mr-[138px]">
            <img src={Gather} alt="gather" />
          </div>
        </div>
      </div>
    
    </Layout>
  );
};

export default AppliedAt;
