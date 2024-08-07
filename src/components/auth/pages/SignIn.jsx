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
import React, { useState, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert2";


import { useAuth } from "../../../static/assets/js/useAuth.jsx";
import fetchAPI from "../../../static/assets/js/fetchAPI.js";

import Layout from "./Layout";

function SignIn() {
  const [inputType, setInputType] = useState("password");
  const { isAuthenticated, signIn, unauthorize } = useAuth();
  const [isProcessingRequest, setProcessingRequest] = useState(false);
  const navigate = useNavigate();

  function handleShowPassword() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  

  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  function onSubmit(form_data) {
    

    if (!isAuthenticated) {
      setProcessingRequest(true);
      unauthorize();
      fetchAPI("/auth/sign-in", "POST", form_data, [201, 401, 422])
        .then(
          function (response) {

            if (response) {
              const { data, status } = response;

              if (status === 201) {
                signIn(data.data, data.title, data.message);

              } else {
                const {statusText, data, status } = response.response;

                new swal({
                  title: statusText + ": " + status,
                  text: data["message"],
                  icon: "error",
                  confirmButtonText: "Please Try Again",
                });

                const fields = ["password", "unique_identifier"];

                fields.forEach(field => {
                  const errorMessage = data.errors[field];

                  if (errorMessage) {
                    setError(
                      field,
                      {
                        type: "manual",
                        message: errorMessage,
                      }
                    );
                  }
                });  
              }

            };
          }
        )

        .finally(
          function () {
            setProcessingRequest(false);
          }
        );

    }

    else {
      navigate("/account/dashboard");
    };


  }
  return (
    <Layout>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>


        {/* Email input */}
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Email Address/User ID*"
            className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"

            {
            ...register(
              "unique_identifier",
              {

                required: true,
                minLength: 7,
                maxLength: 500,

              },
            )
            }
          />
          {
            errors.unique_identifier
            && <p id="unique_identifier" style={{ color: "red" }}>
              <small>

                {
                  errors.unique_identifier?.type === "required"
                    ? "this filed is required"
                    : errors.unique_identifier?.type === "minLength"
                      ? "email/user id  must be more than 8 characters"
                      : errors.unique_identifier.message
                }


              </small>
            </p>
          }

        </div>


        {/* Password input */}
        <div className="flex flex-col">
          <div className="relative flex items-center">
            <input
              className="w-full text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
              type={inputType}
              placeholder="Password"
              {
              ...register
                (
                  "password",
                  {
                    required: true,
                    minLength: 8
                  }
                )
              }
            />

            <button
              className="absolute text-sm font-medium text-black right-4"
              type="button"
              onClick={handleShowPassword}
            >
              {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>


          {
            errors.password
            && <p id="Password" style={{ color: "red" }}>
              <small>

                {
                  errors.password?.type === "required"
                    ? "Password is required"
                    : errors.password?.type === "minLength"
                      ? "Password should not be less than 8 characters"
                      : errors.password.message
                }


              </small>
            </p>
          }

        </div>

        {/* Forget Password link */}
        <div className="flex flex-col">
          <Link className="text-sm font-medium text-black" to="/auth/Resetpassword">
            Forget Password?
          </Link>
        </div>

        {/* Signin button */}
        <div className="flex flex-col">


          {
            isProcessingRequest
              ?
              <button className="bg-[#0D2C58] btn text-white py-4 font-semibold text-base md:text-xl rounded-lg"
                type="button"
                as="sub"
                disabled
              >
                Creating account, please wait...
              </button>

              : <button className="bg-[#0D2C58] text-white py-4 font-semibold text-base md:text-xl rounded-lg"
                type="submit"
                as="sub"
              >
                Sign in
              </button>
          }

        </div>
      </form>
    </Layout>
  );
}

export default SignIn;
