/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["OTechCup"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import { FaChevronDown, FaRegBell } from "react-icons/fa";
import { useUser } from "../../../static/assets/js/useUser";
import { decodeUserId } from "../../../static/assets/js/app";



function Header() {
  const { profile, basicInfo } = useUser();
  const { userId } = decodeUserId();
  return (
    <div className="w-full fixed text-white bg-[#0D2C58] z-[3] px-12 py-6 top-0">
      <div className="flex items-center justify-end gap-8 text-[0.9rem]">
        <div className="h-5 w-5 relative cursor-pointer">
          <div className="w-[5px] h-[5px] absolute cursor-pointer rounded-[50%] right-0 top-0 bg-[#f00]" />

          <span>


            <FaRegBell className="w-[100%] h-[100%]" />


          </span>
        </div>

        <div className="@apply h-[38px] w-[38px] flex flex-col items-center justify-center text-center bg-white text-[black] cursor-pointer rounded-[50%]">

          <img
            src={`https://beta.api.offerletter.co.in/file-system/user/${userId}/${basicInfo.profile_picture}` || "https://beta.api.offerletter.co.in/file-system/default.png"}
            alt="demo-account-img"
            className="rounded-full"
            
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              cursor: 'pointer'
            }}
          />
        </div>

        <p className="flex items-center capitalize cursor-pointer">
          <span className="capitalize">
            {profile.first_name}  {profile.middle_name}  {profile.last_name}
          </span>

          <span className="text-2xl cursor-pointer ml-2 mr-0 my-0">


            <FaChevronDown className="flex items-center" />


          </span>
        </p>
      </div>
    </div>
  );
};


export default Header;
