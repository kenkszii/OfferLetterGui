/**
*!/usr/bin/env
* -*- coding: utf-8 -*-
* Education Management Information System App
*/


/**
* author: Exfac
* copyright: Copyright 2023 - new Date().getFullYear(), Exfac Inc.
* credits: [@kenkszii]
* version: process.env.EMISYSTEM_VERSION
* maintainer: OTechCup
* email: support@exfac.info
* status: process.env.EMISYSTEM_ENVIRONMENT_STATUS
*/


/* import modules */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { parsePhoneNumberFromString } from 'libphonenumber-js';

import { useAuth } from "../../../static/assets/js/useAuth.jsx";
import fetchAPI from "../../../static/assets/js/fetchAPI.js";
import Layout from "./Layout";
import "../../../static/assets/css/auth/signup.css"

function SignUp() {
  const [value, setValue] = useState();
  const [inputType, setInputType] = useState("password");
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isProcessingRequest, setProcessingRequest] = useState(false);
  const [referralID, setReferralID] = useState('')
  const [editable, setEditable] = useState(false);

  const [isValid, setIsValid] = useState(true);

  const handlePhoneInputChange = (newValue) => {
    setValue(newValue);

    // Validate the phone number
    const phoneNumber = parsePhoneNumberFromString(newValue);
    setIsValid(phoneNumber ? phoneNumber.isValid() : false);
  };

  function handleShowPassword() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const referrdParam = urlParams.get('referral_id');
      if (referrdParam) {
        setReferralID(referrdParam);
      } else {
        setEditable(true);
      }
    }
  }, []);



  function onSubmit(form_data) {
    if (form_data.password === form_data.confirm_password && !isAuthenticated) {
      setProcessingRequest(true);
      console.log("form", form_data)

      fetchAPI("/auth/sign-up", "POST", form_data, [201, 422])
        .then(
          function (response) {
            if (response) {
              const { data, status } = response;

              if (status === 201) {
                navigate("/auth/sign-in");

                new Swal({
                  title: "Success",
                  text: data["message"],
                  icon: "success",
                  confirmButtonText: "Proceed to Login",
                });
              }

              else {
                let { data, statusText, status } = response.response;

                new Swal({
                  title: statusText + ": " + status,
                  text: data["message"],
                  icon: "error",
                  confirmButtonText: "Please Try Again",
                });


                const fields = ["first_name", "last_name", "email_address", "password", "account_type", "phone_number", "referral_id"];

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
    if (form_data.password !== form_data.confirm_password) {
      {
        setError(
          "confirm_password",
          {
            type: "manual",
            message: "Password does not match",

          },
        );
      }
    }

  }



  return (
    <Layout>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

        <p>
          Create student account
        </p>

        <input
          type="text"
          placeholder="First Name*"
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"

          {
          ...register(
            "first_name",
            {
              required: true,
              minLength: 2,
              maxLength: 100,
            },
          )
          }

        />

        {
          errors.first_name
          && <p id="first_name" style={{ color: "red" }}>
            <small>

              {
                errors.first_name?.type === "required"
                  ? "First name is required"
                  : errors.first_name?.type === "minLength"
                    ? "First name  must be more than 2 characters"
                    : errors.first_name.message
              }

            </small>
          </p>
        }



        <input
          type="text"
          placeholder="Middle Name"
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
          {...register("middle_name")}
        />


        <input
          type="text"
          placeholder="Last Name*"
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"

          {
          ...register(
            "last_name",
            {
              required: true,
              minLength: 2,
              maxLength: 100,
            },
          )
          }

        />

        {
          errors.last_name
          && <p id="last_name" style={{ color: "red" }}>
            <small>


              {
                errors.last_name?.type === "required"
                  ? "Last name is required"
                  : errors.last_name?.type === "minLength"
                    ? "Last name  must be more than 2 characters"
                    : errors.last_name.message
              }



            </small>
          </p>
        }

        {editable ? (
          <input
            type="text"
            placeholder="Referral Id"
            className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
            {...register(
              "referral_id",
              {

                maxLength: 15,
                minLength: 15,

              },
            )}
          />
        ) : (
          <input
            type="text"
            value={referralID}
            readOnly
            className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
            {...register(
              "referral_id",
              {

                maxLength: 15,
                minLength: 15,

              },
            )}
          />
        )}

        {errors.referral_id && (
          <p id="referral_id" style={{ color: "red" }}>
            <small>

              {
                errors.referral_id?.type === "minLength"
                  ? "Referral id must not be less than 15 characters"
                  : errors.referral_id?.type === "maxLength"
                    ? "Referral id must not be more than 15 characters"
                    : errors.referral_id.message
              }


            </small>
          </p>
        )}



        {/* Phone input */}

        <PhoneInput
          placeholder="Phone Number*"
          international
          defaultCountry="IN"
          value={value}
          onChange={handlePhoneInputChange}

          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
          {
          ...register(
            "phone_number",
            {
              required: true,
              minLength: 7,
              maxLength: 20,

            },
          )
          }


        />

        {
          errors.phone_number
          && <p id="phone_number" style={{ color: "red" }}>
            <small>


              {
                errors.phone_number?.type === "required"
                  ? "Phone number is required"
                  : errors.phone_number?.type === "minLength"
                    ? "phone number must be more than 7 characters"
                    : errors.phone_number.message
              }


            </small>
          </p>
        }


        {/* Account type */}
        <select
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"

          {
          ...register(
            "account_type",

            {
              required: true,

            },
          )
          }
        >
          <option value="">Select Account Type</option>
          <option value="Student">Student</option>
          <option value="University">University</option>          
          <option value="School">School</option>
          <option value="Agent">Agent</option>
         
        </select>

        {
          errors.account_type
          && <p id="account_type" style={{ color: "red" }}>
            <small>


              {
                errors.account_type?.type === "required"
                  ? "Account type is required"
                  : errors.account_type.message
              }



            </small>
          </p>
        }




        {/* Email input */}
        <input
          type="email"
          placeholder="Email Address*"
          className="text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"

          {
          ...register(
            "email_address",
            {

              required: true,
              minLength: 8,
              maxLength: 500,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            },
          )
          }
        />
        {
          errors.email_address
          && <p id="email_address" style={{ color: "red" }}>
            <small>

              {
                errors.email_address?.type === "required"
                  ? "Email is required"
                  : errors.email_address?.type === "minLength"
                    ? "Email must be more than 8 characters"
                    : errors.email_address.message
              }


            </small>
          </p>
        }

        <div className="flex flex-col">
          <div className="relative flex items-center">


            {/* Password input */}
            <input
              className="w-full text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
              type={inputType}
              placeholder="Password*"
              autoComplete=""
              {
              ...register(
                "password",
                {

                  minLength: 8,
                  required: true,
                },
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
            && <p id="password" style={{ color: "red" }}>
              <small>

                {
                  errors.password?.type === "required"
                    ? "Password is required"
                    : errors.password?.type === "minLength"
                      ? "Password must be more than 8 characters"
                      : errors.password.message
                }


              </small>
            </p>
          }

        </div>

        <div className="flex flex-col">
          <div className="relative flex items-center">

            {/*Confirm Password input */}
            <input
              className="w-full text-[#8696AC] border-2 border-[#8696AC] outline-none rounded-lg px-4 py-4 font-bold"
              type={inputType}
              placeholder="Confirm Password*"

              {
              ...register
                ("confirm_password",
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
            errors.confirm_password
            && <p id="confirm_password" style={{ color: "red" }}>
              <small>


                {
                  errors.confirm_password?.type === "required"
                    ? "Confirm Password is required"
                    : errors.confirm_password?.type === "minLength"
                      ? "Confirm Password must be more than 8 characters"
                      : errors.confirm_password.message
                }


              </small>
            </p>
          }




        </div>

        <div className="flex items-center gap-4">

          <small>
            <p className="text-black">
              By clicking the signup button you agree to our OFFERLETTER

              &#8204;<span className="">


                <Link
                  to="#"
                  target="_blank"
                  className="text-base font-bold text-[#0D2C58]"
                >
                  User Agreement
                </Link>


                &#8204; </span>
              and
              &#8204;<span>


                <Link
                  to="#"
                  target="_blank"
                  className="text-base font-bold text-[#0D2C58]"
                >
                  Privacy Policy
                </Link>


              </span>
            </p>
          </small>
        </div>


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
              Signup
            </button>
        }

      </form>
    </Layout>
  );
}

export default SignUp;

