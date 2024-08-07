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
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputPassword(props) {
  const [inputType, setInputType] = useState("password"); // [password, text
  function handleShowPassword() {
    setInputType(inputType === "password" ? "text" : "password");
  }


  return (
    <div className="relative flex items-center">

      <input
        className="w-full text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
        type={inputType} placeholder={props.placeholder}
      />
      <button
        className="absolute text-sm font-medium text-black right-4"
        type="button"
        onClick={handleShowPassword}
      >
        {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
      </button>
      

    </div>
  );
}

export default InputPassword;

