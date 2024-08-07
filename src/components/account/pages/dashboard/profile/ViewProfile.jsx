/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/

/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["@kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import { useState } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert2';

import "../../../../../static/assets/css/account/pages/ViewProfile.css";
import Layout from "../../../layout/Layout";
import Progbar from "../../../../../static/assets/img/account/dashboard/studentprofile/prog-bar.svg";
import Editicon from "../../../../../static/assets/img/account/dashboard/studentprofile/edit-icon.svg";
import Studentimage from "../../../../../static/assets/img/account/dashboard/studentprofile/student-image.png";
import Emailicon from "../../../../../static/assets/img/account/dashboard/studentprofile/email-icon.svg";
import Callicon from "../../../../../static/assets/img/account/dashboard/studentprofile/call-icon.svg";
import Whatsappicon from "../../../../../static/assets/img/account/dashboard/studentprofile/whatsapp-icon.svg";
import Locationicon from "../../../../../static/assets/img/account/dashboard/studentprofile/location-icon.svg";
import Calendericon from "../../../../../static/assets/img/account/dashboard/studentprofile/calendar-icon.svg";
import Gendericon from "../../../../../static/assets/img/account/dashboard/studentprofile/gender-icon.svg";
import { useUser } from "../../../../../static/assets/js/useUser";
import fetchAPI from "../../../../../static/assets/js/fetchAPI";
import { decodeUserId } from "../../../../../static/assets/js/app";

// progress bar
const ProgressCircle = (props) => {
  const progessDegrees = props.progress * 3.6;

  const style = {
    background: `conic-gradient(#084FC7 ${progessDegrees}deg, #000 ${progessDegrees}deg ${360 - progessDegrees
      }deg) `,
  };



  return (

    <div
      className="circle-wrap flex flex-col items-center justify-center w-[51px] h-[51px] rounded-full"
      style={style}
    >
      <div className="circle flex flex-col items-center justify-center w-[40px] h-[40px] bg-[#fff] rounded-full">
        <p className="progress text-sm text-[#084FC7] font-semibold">
          {props.progress}%
        </p>
      </div>
    </div>
  );
};


function ViewProfile() {
  const { profile, basicInfo, location } = useUser();
  const { userId } = decodeUserId();
  let profileProgressBar = 0
  const fieldWeights = {
    first_name: 12.5,
    last_name: 12.5,
    phone_number: 12.5,
    gender: 12.5,
    email_address: 12.5,
    birthdate: 12.5,
  };

  for (const field in fieldWeights) {
    if (profile[field] !== null || basicInfo[field] !== null) {
      profileProgressBar += fieldWeights[field];
    }
  }

  const [newAvatar, setNewAvatar] = useState(null);

  // const handleAvatarChange = (e) => {
  //   const newAvatarFile = e.target.files[0];

  //   if (newAvatarFile) {
  //     const form_data = {
  //       first_name: profile.first_name,
  //       middle_name: profile.middle_name,
  //       last_name: profile.last_name,
  //       gender: basicInfo.gender,
  //       birthdate: basicInfo.birthdate,
  //       profile_picture: newAvatarFile,
  //     };


  //     console.log("dp", form_data)

  //     fetchAPI(`/user/${userId}/update/PersonalDetail`, "PUT", form_data, [200, 422])
  //       .then(
  //         function (response) {
  //           if (response) {
  //             const { data, status } = response;
  //             if (status === 200) {
  //               new swal({
  //                 title: "Success",
  //                 text: "Your profile picture has been updated successfully",
  //                 icon: "success",
  //                 confirmButtonText: "ok",
  //               });

  //             }

  //           };
  //         }
  //       )
  //     const imageUrl = URL.createObjectURL(newAvatarFile);
  //     setNewAvatar(imageUrl);
  //   }
  // };

  const handleAvatarChange = (e) => {
    const newAvatarFile = e.target.files[0];

    if (newAvatarFile) {
      const form_data = new FormData();
      form_data.append("first_name", profile.first_name);
      form_data["middle_name"] = profile.middle_name;
      form_data.append("last_name", profile.last_name);
      form_data.append("gender", basicInfo.gender);
      form_data.append("birthdate", basicInfo.birthdate);
      form_data.append("profile_picture", newAvatarFile);

      console.log("dp", form_data);

      fetchAPI(`/user/${userId}/update/PersonalDetail`, "PUT", form_data, [200, 422])
        .then(function (response) {
          if (response) {
            const { data, status } = response;
            if (status === 200) {
              new swal({
                title: "Success",
                text: data["message"],
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          }
        });

      const imageUrl = URL.createObjectURL(newAvatarFile);
      setNewAvatar(imageUrl);
    };
  };


  return (
    <Layout>

      <div className="view-profile">


        <div className="prof-head">
          <h1>Student Profile</h1>
          <div>
            {/* <span className="text-[#FF0000]">3 pending actions</span> */}
            <div className="progress-bar">
              <ProgressCircle progress={profileProgressBar} />
            </div>
          </div>
        </div>
        <div className="profile-info">
          <div className="pencil">
            <Link to="/student/profilesettings" >
              <img src={Editicon} alt="edit-icon" />
            </Link>
          </div>
          <div className="flex items-end mb-[18px] pl-[18px] pr-0 py-0">
            <div className="h-[70px] w-[70px] mr-[20px]">
              <label htmlFor="avatar-upload">
                <input
                  type="file"
                  accept="image"
                  id="avatar-upload"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange}
                />
                <img
                  src={
                   
                       newAvatar || `https://beta.api.offerletter.co.in/file-system/user/${userId}/${basicInfo.profile_picture}`
                  }
                  className="rounded-full border"
                  alt="User Avatar"
                  style={{
                    borderRadius: "50%",
                    width: "100%",
                    height: "100%",
                    cursor: 'pointer'
                  }}
                />


              </label>
            </div>

            <div className="w-full not-italic font-bold text-base">
              <h2>{profile.first_name} {profile.middle_name} {profile.last_name}</h2>
              <div className="flex gap-x-[19px] items-center ">
                <div className="flex items-end">
                  <div className="h-[15px] w-[18px] mr-2">
                    <img src={Emailicon} alt="email-icon" />
                  </div>
                  <span className="w-full not-italic font-bold text-xs leading-[14px] text-[#a7a9ac]">
                    {basicInfo.email_address}

                  </span>
                </div>
                <div className="flex items-end">
                  <div className="h-[18px] w-[18px] mr-2">
                    <img src={Callicon} alt="call-icon" />
                  </div>
                  <span className="w-full not-italic font-bold text-xs text-[#a7a9ac] flex flex-grow-1">
                    {basicInfo.phone_number}
                  </span>
                </div>
                <div className="flex items-end">
                  <div className="h-[18px] w-[18px] mr-2">
                    <img src={Whatsappicon} alt="whatsapp-icon" />
                  </div>
                  <span className="w-full not-italic text-center font-bold text-xs leading-[14px] text-[#a7a9ac]">
                    Add Phone Number
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm-wrap">
              <div>
                <img src={Locationicon} alt="location-icon" />
              </div>
              <span>{location.post_code}, {location.neighbourhood}, {location.city}, {location.state_region}, {location.country}.</span>
            </div>
            <div className="btm-wrap">
              <div>
                <img src={Calendericon} alt="calendar-icon" />
              </div>
              <span>
                {basicInfo.birthdate}
              </span>
            </div>
            <div className="btm-wrap">
              <div>
                <img src={Gendericon} alt="gender-icon" />
              </div>
              <span>{basicInfo.gender}</span>
            </div>
          </div>
        </div>

        <div className="prof-head">
          <h1>Education </h1>
        </div>

        <div className="below-edu">
          <div className="pencil">
            <img src={Editicon} alt="edit-icon" />
          </div>

          {/* Sample Data */}
          <i className="text-red-600">Sample Data</i>
          <h2>Graduation</h2>
          <p>CGPA 3.99</p>
          <p>June 2015 - December 2021</p>


        </div>

        <div className="prof-head">
          <h1>Test Score </h1>
        </div>
        <div className="below-test-score">
          <div className="pencil">
            <img src={Editicon} alt="edit-icon" />
          </div>
          <div className="ielt">
            <span className="big-text">IELTS</span>
            <span>5</span>
          </div>
          <div className="gmat">
            <span className="big-text">GMAT</span>
            <span>10</span>
          </div>
        </div>

      </div>

    </Layout>
  );
};

export default ViewProfile;
