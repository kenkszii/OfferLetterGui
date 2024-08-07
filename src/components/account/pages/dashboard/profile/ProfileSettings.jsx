

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import Layout from "../../../layout/Layout";
import { useUser } from "../../../../../static/assets/js/useUser";
import { decodeUserId } from "../../../../../static/assets/js/app";
import fetchAPI from "../../../../../static/assets/js/fetchAPI";
import "../../../../../static/assets/css/account/pages/Profilesetings.css";
import Upload from "../../../../../static/assets/img/account/dashboard/studentprofile/upload-icon.svg";



function PersonalDetails() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { profile, basicInfo, } = useUser();
  const { userId } = decodeUserId();
  const navigate = useNavigate();
  function onSubmit(form_data) {
    console.log("form", form_data)
    fetchAPI(`/user/${userId}/update/PersonalDetail`, "PUT", form_data, [200, 422])
      .then(
        function (response) {
          if (response) {
            const { data, status } = response;
            if (status === 200) {
              navigate("/student/profile");
              new swal({
                title: "Success",
                text: data["message"],
                icon: "success",
                confirmButtonText: "ok",
              });

            }
          };
        }
      )
  }
  return (
    <div className="form-container flex flex-col mt-13 items-center pb-20">
      <div className="bg-info w-[60%]">
        <h1 className="text-base font-semibold mb-5 tracking-wide">Personal Details</h1>
        <form
          action=""
          className="w-[100%] border  shadow-[0__2px__4px__#e5e7eb] rounded-lg p-12 text-base font-medium"
          onSubmit={handleSubmit(onSubmit)}
        >

          <fieldset className="fieldset flex justify-between">
            <fieldset className="w-[45%]">
              <label htmlFor="first_name">First Name</label>
              <br />
              <input
                type="integer"
                name="firstName"
                id="first-name"
                placeholder="Enter your first name"
                defaultValue={profile ? profile.first_name : ""}
                className="w-full mt-2 rounded-[8px]"
                {
                ...register(
                  "first_name",
                  {

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
                      errors.first_name?.type === "minLength"
                        ? "First name  must be more than 2 characters"
                        : errors.first_name.message
                    }



                  </small>
                </p>
              }
            </fieldset>



            <fieldset className="w-[45%]">
              <label htmlFor="last_name"> Middle Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Enter your middle name"
                defaultValue={profile ? profile.middle_name : ""}
                className="w-full mt-2 rounded-[8px]"
                {
                ...register(
                  "middle_name",
                  {

                    minLength: 2,
                    maxLength: 100,
                  },
                )
                }

              />

              {
                errors.middle_name
                && <p id="middle_name" style={{ color: "red" }}>
                  <small>


                    {
                      errors.middle_name?.type === "minLength"
                        ? "Middle name  must be more than 2 characters"
                        : errors.middle_name?.type === "minLength"
                          ? "Middle name  must be more than 2 characters"
                          : <></>
                    }



                  </small>
                </p>
              }
            </fieldset>
          </fieldset>

          <fieldset className="fieldset flex justify-between mt-6">
            <fieldset className="w-[45%]">
              <label htmlFor="last_name">Last Name</label>
              <br />
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                className="w-full mt-2 rounded-[8px]"
                defaultValue={profile ? profile.last_name : ""}

                {
                ...register(
                  "last_name",
                  {

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
                      errors.first_name?.type === "minLength"
                        ? "Last name  must be more than 2 characters"
                        : errors.first_name?.type === "minLength"
                          ? "Last name  must be more than 2 characters"
                          : errors.last_name.message
                    }



                  </small>
                </p>
              }
            </fieldset>

            <fieldset className="w-[45%]">
              <label htmlFor="city">Gender</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <select
                  //the width in the className adjust the size of the phone number filed to the size of the parent container 
                  className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                  defaultValue={basicInfo.gender}
                  id="gender"
                  {...register("gender")}

                >
                  <option value="">{basicInfo.gender ? basicInfo.gender : "Select Gender"}</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </fieldset>
          </fieldset>


          <fieldset className="fieldset flex justify-between mt-6">
            <fieldset className="w-[45%]">
              <label htmlFor="dob">Date of Birth</label>
              <br />
              <input
                type="date"
                name="dob"
                id="dob"
                className="uppercase w-full mt-2 rounded-lg"
                defaultValue={basicInfo ? basicInfo.birthdate : ""}
                {
                ...register(
                  "birthdate",

                )
                }
              />
            </fieldset>
          </fieldset>

          <fieldset className="grid grid-cols-2 mt-14">
            <button
              type="submit"
              className="bg-[#0D2C58] text-white py-3 rounded-lg text-2xl font-semibold"
            >
              Save
            </button>

            <button
              type="button"
              className="text-base font-semibold"

            >

              <Link to="/student/profile" >
                Cancel
              </Link>

            </button>

          </fieldset>
        </form>
      </div>
    </div>
  )
}

function ContactInformation() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { basicInfo } = useUser();
  const { userId } = decodeUserId();
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const [isValid, setIsValid] = useState(true);

  const handlePhoneInputChange = (newValue) => {
    setValue(newValue);

    // Validate the phone number
    const phoneNumber = parsePhoneNumberFromString(newValue);
    setIsValid(phoneNumber ? phoneNumber.isValid() : false);
  };





  function onSubmit(form_data) {


    console.log("form", form_data)

    fetchAPI(`/user/${userId}/update/ContactInformation`, "PUT", form_data, [200, 422])
      .then(
        function (response) {

          if (response) {
            const { data, status } = response;

            if (status === 200) {
              navigate("/student/profile");
              new swal({
                title: "Success",
                text: data["message"],
                icon: "success",
                confirmButtonText: "ok",
              });

            }

          };
        }
      )
  }
  return (
    <div className="form-container flex flex-col items-center pb-20">

      <div className="bg-info w-[60%]">
        <h1 className="text-base font-semibold mb-5 tracking-wide">Contact Information</h1>
        <form
          action=""
          className="w-[100%] border  shadow-[0__2px__4px__#e5e7eb] rounded-lg p-12 text-base font-medium"
          onSubmit={handleSubmit(onSubmit)}
        >

          <fieldset className="mt-6">
            <label htmlFor="email_address">Email Address</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
              defaultValue={basicInfo ? basicInfo.email_address : ""}

              {
              ...register(
                "email_address",
                {
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
                    errors.email_address?.type === "minLength"
                      ? "Email must be more than 8 characters"
                      : "Enter a correct email"
                  }

                </small>
              </p>
            }
          </fieldset>

          <fieldset className="mt-6">
            <label htmlFor="phone_number">Phone number</label>
            <br />
            <fieldset className="flex mt-2 justify-between">
              <PhoneInput
                placeholder="Phone Number*"
                international
                defaultCountry="IN"
                value={value}
                onChange={handlePhoneInputChange}

                //the width in the className adjust the size of the phone number filed to the size of the parent container 
                className="border-2  outline-none rounded-lg px-2 pr-0  w-[100%]"
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
            </fieldset>
          </fieldset>


          <fieldset className="grid grid-cols-2 mt-14">
            <button
              type="submit"
              className="bg-[#0D2C58] text-white py-3 rounded-lg text-2xl font-semibold"
            >
              Save
            </button>

            <button
              type="button"
              className="text-base font-semibold"

            >

              <Link to="/student/profile" >
                Cancel
              </Link>

            </button>

          </fieldset>
        </form>
      </div>

    </div>
  )
}

function Location() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { location } = useUser();
  const { userId } = decodeUserId();
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countriesList = Country.getAllCountries().map(
    (country) => `${country.name}`
  );

  const selectedCountryCode = Country.getAllCountries().find((country) =>
    selectedCountry.includes(country.name)
  )?.isoCode;

  const statesList = State.getStatesOfCountry(selectedCountryCode).map(
    (state) => state.name
  );

  const selectedStateCode = State.getAllStates().find(
    (state) => state.name === selectedState
  )?.isoCode;

  const citiesList = City.getCitiesOfState(
    selectedCountryCode,
    selectedStateCode
  ).map((city, i) => city.name);

  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset selected state when country changes
    setSelectedCity(""); // Reset selected city when country changes
  }

  function handleStateChange(e) {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset selected city when state changes
  }

  function onSubmit(form_data) {
    fetchAPI(`/user/${userId}/update/LocationInformation`, "PUT", form_data, [200, 422])
      .then(function (response) {
        if (response) {
          const { data, status } = response;
          if (status === 200) {
            navigate("/student/profile");
            new swal({
              title: "Success",
              text: data["message"],
              icon: "success",
              confirmButtonText: "ok",
            });
          }
        }
      });
  }

  return (
    <div className="form-container flex flex-col items-center pb-20">
      <div className="bg-info w-[60%]">
        <h1 className="text-base font-semibold mb-5 tracking-wide">Location</h1>
        <form
          action=""
          className="w-[100%] border  shadow-[0__2px__4px__#e5e7eb] rounded-lg p-12 text-base font-medium"
          onSubmit={handleSubmit(onSubmit)}
        >

          <fieldset className="mt-6">
            <label htmlFor="country">Country  Of Residence </label>
            <br />
            <div className="rounded-lg mt-2 w-full">
              <select
                //the width in the className adjust the size of the phone number filed to the size of the parent container 
                className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                defaultValue={location ? location.country : ""}
                id="country"
                {...register("country")}
                onChange={handleCountryChange}
              >
                <option value="">{location ? location.country : "Select Country"}</option>
                {countriesList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

          </fieldset>

          <fieldset className="flex mt-6 justify-between mb-6">
            <fieldset className="w-[45%]">
              <label htmlFor="state">State</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <select
                  //the width in the className adjust the size of the phone number filed to the size of the parent container 
                  className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                  defaultValue={location ? location.state_region : ""}
                  id="state"
                  {...register("state_region")}
                  onChange={handleStateChange}

                >
                  <option value="">{location ? location.state_region : "Select State"}</option>
                  {statesList.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <fieldset className="w-[45%]">
              <label htmlFor="city">City</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <select
                  //the width in the className adjust the size of the phone number filed to the size of the parent container 
                  className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                  defaultValue={location ? location.city : ""}
                  id="city"
                  {...register("city")}

                >
                  <option value="">{location ? location.city : "Select City"}</option>
                  {citiesList.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="flex mt-6 justify-between mb-6">
            <fieldset className="w-[45%]">
              <label htmlFor="residential">Residential Address</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Residential Address"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={location ? location.residential : ""}

                  {
                  ...register(
                    "residential",
                    {
                      minLength: 2,
                      maxLength: 500,

                    },
                  )
                  }
                />
                {
                  errors.residential
                  && <p id="residential" style={{ color: "red" }}>
                    <small>

                      {
                        errors.residential?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.residential?.type === "maxLength"
                            ? "this field must be less than 500 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>

            <fieldset className="w-[45%]">
              <label htmlFor="post_code">Post Code</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Post Code"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={location ? location.post_code : ""}

                  {
                  ...register(
                    "post_code",
                    {
                      minLength: 2,
                      maxLength: 10,

                    },
                  )
                  }
                />
                {
                  errors.post_code
                  && <p id="residential" style={{ color: "red" }}>
                    <small>

                      {
                        errors.post_code?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.post_code?.type === "maxLength"
                            ? "this field must be less than 10 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="grid grid-cols-2 mt-14">
            <button
              type="submit"
              className="bg-[#0D2C58] text-white py-3 rounded-lg text-2xl font-semibold"
            >
              Save
            </button>

            <button
              type="button"
              className="text-base font-semibold"

            >

              <Link to="/student/profile" >
                Cancel
              </Link>

            </button>

          </fieldset>
        </form>
      </div>
    </div>
  );
}

function EmergencyContact() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { emergency_contact } = useUser();
  const { userId } = decodeUserId();
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState();
  const [isValid, setIsValid] = useState(true);

  const handlePhoneInputChange = (newValue) => {
    setValue(newValue);

    // Validate the phone number
    const phoneNumber = parsePhoneNumberFromString(newValue);
    setIsValid(phoneNumber ? phoneNumber.isValid() : false);
  };

  const countriesList = Country.getAllCountries().map(
    (country) => `${country.name}`
  );

  const selectedCountryCode = Country.getAllCountries().find((country) =>
    selectedCountry.includes(country.name)
  )?.isoCode;

  const statesList = State.getStatesOfCountry(selectedCountryCode).map(
    (state) => state.name
  );

  const selectedStateCode = State.getAllStates().find(
    (state) => state.name === selectedState
  )?.isoCode;

  const citiesList = City.getCitiesOfState(
    selectedCountryCode,
    selectedStateCode
  ).map((city, i) => city.name);

  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset selected state when country changes
    setSelectedCity(""); // Reset selected city when country changes
  }

  function handleStateChange(e) {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset selected city when state changes
  }

  function onSubmit(form_data) {
    console.log("form", form_data)
    fetchAPI(`/user/${userId}/update/ EmergencyContact`, "PUT", form_data, [200, 422])
      .then(
        function (response) {
          if (response) {
            const { data, status } = response;
            if (status === 200) {
              navigate("/student/profile");
              new swal({
                title: "Success",
                text: data["message"],
                icon: "success",
                confirmButtonText: "ok",
              });

            }

          };
        }
      )
  }
  return (
    <div className="form-container flex flex-col items-center pb-20">

      <div className="bg-info w-[60%]">
        <h1 className="text-base font-semibold mb-5 tracking-wide">Emergency Contact</h1>
        <form
          action=""
          className="w-[100%] border  shadow-[0__2px__4px__#e5e7eb] rounded-lg p-12 text-base font-medium"
          onSubmit={handleSubmit(onSubmit)}
        >

          <fieldset className="fieldset flex justify-between">
            <fieldset className="w-[45%]">
              <label htmlFor="first_name">First Name</label>
              <br />
              <input
                type="integer"
                name="firstName"
                id="first-name"
                placeholder="Enter your first name"
                defaultValue={emergency_contact ? emergency_contact.first_name : ""}

                className="w-full mt-2 rounded-[8px]"
                {
                ...register(
                  "first_name",
                  {

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
                      errors.first_name?.type === "minLength"
                        ? "First name  must be less than 100 characters"
                        : errors.first_name?.type === "minLength"
                          ? "First name  must be more than 2 characters"
                          : ""
                    }



                  </small>
                </p>
              }
            </fieldset>



            <fieldset className="w-[45%]">
              <label htmlFor="last_name"> Middle Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Enter your middle name"
                defaultValue={emergency_contact ? emergency_contact.middle_name : ""}
                className="w-full mt-2 rounded-[8px]"
                {
                ...register(
                  "middle_name",
                  {

                    minLength: 2,
                    maxLength: 100,
                  },
                )
                }

              />

              {
                errors.middle_name
                && <p id="middle_name" style={{ color: "red" }}>
                  <small>


                    {
                      errors.middle_name?.type === "minLength"
                        ? "Middle name  must be less than 100 characters"
                        : errors.middle_name?.type === "minLength"
                          ? "Middle name  must be more than 2 characters"
                          : <></>
                    }



                  </small>
                </p>
              }
            </fieldset>
          </fieldset>


          <fieldset className="fieldset flex justify-between mt-6">
            <fieldset className="w-[45%]">
              <label htmlFor="last_name">Last Name</label>
              <br />
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Enter your last name"
                className="w-full mt-2 rounded-[8px]"
                defaultValue={emergency_contact ? emergency_contact.middle_name : ""}

                {
                ...register(
                  "last_name",
                  {

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
                      errors.last_name?.type === "maxLength"
                        ? "Last name  must be less than 100 characters"
                        : errors.last_name?.type === "minLength"
                          ? "Last name  must be more than 2 characters"
                          : ""
                    }



                  </small>
                </p>
              }
            </fieldset>



            <fieldset className="w-[45%]">
              <label htmlFor="last_name"> Relationship</label>
              <br />
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder="Enter your relationship with this contact"
                defaultValue={emergency_contact ? emergency_contact.relationship : ""}
                className="w-full mt-2 rounded-[8px]"
                {
                ...register(
                  "relationship",
                  {

                    minLength: 2,
                    maxLength: 100,
                  },
                )
                }

              />

              {
                errors.relationship
                && <p id="relationship" style={{ color: "red" }}>
                  <small>


                    {
                      errors.relationship?.type === "minLength"
                        ? "This field  must be more than 2 characters"
                        : errors.relationship?.type === "maxLength"
                          ? "This field  must be less than 10 characters"
                          : ""
                    }



                  </small>
                </p>
              }
            </fieldset>
          </fieldset>




          <fieldset className="mt-6">
            <label htmlFor="email_address">Email Address</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
              defaultValue={emergency_contact ? emergency_contact.email_address : ""}

              {
              ...register(
                "email_address",
                {

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
                    errors.email_address?.type === "minLength"
                      ? "Email must be more than 8 characters"
                      : "Enter a correct email"
                  }

                </small>
              </p>
            }
          </fieldset>

          <fieldset className="mt-6">
            <label htmlFor="phone_number">Phone number</label>
            <br />
            <fieldset className="flex mt-2 justify-between">
              <PhoneInput
                placeholder="Phone Number*"
                international
                defaultCountry="IN"
                value={value}
                onChange={handlePhoneInputChange}

                //the width in the className adjust the size of the phone number filed to the size of the parent container 
                className="border-2  outline-none rounded-lg px-2 pr-0  w-[100%]"
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
                      errors.phone_number?.type === "minLength"
                        ? "phone number must be more than 7 characters"
                        : errors.phone_number.message
                    }


                  </small>
                </p>
              }
            </fieldset>
          </fieldset>

          <fieldset className="mt-6">
            <label htmlFor="cor">Country of residence</label>
            <br />
            <div className=" bg-[#EBEBEB] rounded-lg mt-2 w-full">
              <select
                //the width in the className adjust the size of the phone number filed to the size of the parent container 
                className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                defaultValue={emergency_contact ? emergency_contact.country : ""}
                id="country"
                {...register("country")}
                onChange={handleCountryChange}
              >
                <option value="">{emergency_contact ? emergency_contact.country : "Select State"}</option>
                {countriesList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset className="flex mt-6 justify-between mb-6">
            <fieldset className="w-[45%]">
              <label htmlFor="state">State</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <select
                  //the width in the className adjust the size of the phone number filed to the size of the parent container 
                  className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                  defaultValue={emergency_contact ? emergency_contact.state_region : ""}
                  id="state"
                  {...register("state_region")}
                  onChange={handleStateChange}

                >
                  <option value="">{emergency_contact ? emergency_contact.state_region : "Select State"}</option>
                  {statesList.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
            <fieldset className="w-[45%]">
              <label htmlFor="city">City</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <select
                  //the width in the className adjust the size of the phone number filed to the size of the parent container 
                  className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                  defaultValue={emergency_contact ? emergency_contact.city : ""}
                  id="city"
                  {...register("city")}

                >
                  <option value="">{emergency_contact.city ? emergency_contact.city : "Select City"}</option>
                  {citiesList.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="flex mt-6 justify-between mb-6">
            <fieldset className="w-[45%]">
              <label htmlFor="residential">Residential Address</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Residential Address"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={emergency_contact ? emergency_contact.residential : ""}

                  {
                  ...register(
                    "residential",
                    {
                      minLength: 2,
                      maxLength: 500,

                    },
                  )
                  }
                />
                {
                  errors.residential
                  && <p id="residential" style={{ color: "red" }}>
                    <small>

                      {
                        errors.residential?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.residential?.type === "maxLength"
                            ? "this field must be less than 500 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>

            <fieldset className="w-[45%]">
              <label htmlFor="post_code">Post Code</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Post Code"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={emergency_contact ? emergency_contact.post_code : ""}

                  {
                  ...register(
                    "post_code",
                    {
                      minLength: 2,
                      maxLength: 10,

                    },
                  )
                  }
                />
                {
                  errors.post_code
                  && <p id="post_code" style={{ color: "red" }}>
                    <small>

                      {
                        errors.post_code?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.post_code?.type === "maxLength"
                            ? "this field must be less than 10 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="grid grid-cols-2 mt-14">
            <button
              type="submit"
              className="bg-[#0D2C58] text-white py-3 rounded-lg text-2xl font-semibold"
            >
              Save
            </button>

            <button
              type="button"
              className="text-base font-semibold"

            >

              <Link to="/student/profile" >
                Cancel
              </Link>

            </button>

          </fieldset>
        </form>
      </div>

    </div>
  )
}

function EducationalBackground() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { educational_background } = useUser();
  const { userId } = decodeUserId();
  const navigate = useNavigate();
  const [fileNames, setFileNames] = useState([]);
  const [tenthPercentage, setTenthPercentage] = useState(null);
  const [twelfthPercentage, setTwelfthPercentage] = useState(null);
  const [governmentIdOrPassport, setGovernmentIdOrPassport] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [neetscorecard, setNeetscoreCard] = useState(null);
  const [resume, setResume] = useState(null);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countriesList = Country.getAllCountries().map(
    (country) => `${country.name}`
  );


  function handleCountryChange(e) {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset selected state when country changes
    setSelectedCity(""); // Reset selected city when country changes
  }




  const handletenthpercentage = (event) => {
    const file = event.target.files[0];
    setTenthPercentage(file);
  };

  const handletwelfthpercentage = (event) => {
    const file = event.target.files[0];
    setTwelfthPercentage(file);
  };

  const handlegovernmentIdOrPassport = (event) => {
    const file = event.target.files[0];
    setGovernmentIdOrPassport(file);
  };

  const handleaadharCard = (event) => {
    const file = event.target.files[0];
    setAadharCard(file);
  };

  const handleneetscorecard = (event) => {
    const file = event.target.files[0];
    setNeetscoreCard(file);

  };


  const handleresume = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };



  function onSubmit() {
    const form_data = new FormData();
    form_data.append("tenth_percentage", tenthPercentage);
    form_data.append("twelfth_percentage", twelfthPercentage);
    form_data.append("passport", governmentIdOrPassport);
    form_data.append("aadhar_card", aadharCard);
    form_data.append("neet_card", neetscorecard);
    form_data.append("resume", resume);

    fetchAPI(`/user/${userId}/update/EducationalBackground`, "PUT", form_data, [200, 422])
      .then(
        function (response) {
          if (response) {
            const { data, status } = response;
            if (status === 200) {
              navigate("/student/profile");
              new swal({
                title: "Success",
                text: data["message"],
                icon: "success",
                confirmButtonText: "ok",
              });

            }

          };
        }
      )
  }


  return (
    <div className="form-container flex flex-col items-center pb-20">
      <div className="mbbs w-[60%]">
        <div className="form-title relative">
          <h1 className="text-base font-semibold mb-5 tracking-wide">Educational Background</h1>

        </div>

        <form
          action=""
          className="w-[100%] border  shadow-[0__2px__4px__#e5e7eb] rounded-lg p-12 text-base font-medium"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="fieldset">
            <label htmlFor="school_name">School Name</label>
            <br />
            <input
              type="text"
              placeholder="Enter School Name"
              className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
              defaultValue={educational_background ? educational_background.school_name : ""}

              {
              ...register(
                "school_name",
                {
                  required: true,
                  minLength: 2,
                  maxLength: 500,
                },
              )
              }
            />
            {
              errors.school_name
              && <p id="school_name" style={{ color: "red" }}>
                <small>

                  {
                    errors.school_name?.type === "required"
                      ? "This field is required"
                      : errors.school_name?.type === "minLength"
                        ? "School name must be more than 2 characters"
                        : errors.school_name?.type === "maxLength"
                          ? "School name must be less than 500 characters"
                          : ""
                  }

                </small>
              </p>
            }
          </fieldset>

          <fieldset className="mt-6">
            <label htmlFor="cor">Country</label>
            <br />
            <div className=" bg-[#EBEBEB] rounded-lg mt-2 w-full">
              <select
                //the width in the className adjust the size of the phone number filed to the size of the parent container 
                className="border-2 outline-none rounded-lg px-4 py-4 w-[100%]"
                defaultValue={educational_background ? educational_background.country : ""}
                id="country"
                {...register("country")}
                onChange={handleCountryChange}
              >
                <option value="">{educational_background ? educational_background.country : "Select State"}</option>
                {countriesList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>10th Percentage</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.tenth_percentage
                        ? "border-blue-900"
                        : tenthPercentage
                          ? "border-green-500 "
                          : "border-red-500 "
                      }`}
                  >
                    {educational_background && educational_background.tenth_percentage ? (
                      "Uploaded"
                    ) : (
                      <>
                        {tenthPercentage
                          ? "Document Attached"
                          : "Upload Document"
                        }
                      </>
                    )}
                  </span>

                  <input
                    type="file"
                    name="tenth_percentage"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    height={20}
                    {...register("tenth_percentage")}
                    onChange={handletenthpercentage}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">

                {educational_background && educational_background.tenth_percentage ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                )
                  : (
                    <>
                      {tenthPercentage ? (
                        <p className=" font-bold sm:mr-6 text-green-600">
                          {" "}
                          {tenthPercentage.name}
                        </p>
                      ) : (
                        <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                          Format Accepted. PDF, PNG, JPG, DOC
                        </p>
                      )}
                    </>
                  )

                }
              </span>
            </div>
          </fieldset>


          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>12th Percentage</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.twelfth_percentage

                        ? "border-blue-900"
                        : twelfthPercentage
                          ? "border-green-500 "
                          : "border-red-500 "
                      }`}
                  >
                    {educational_background && educational_background.twelfth_percentage
                      ? (
                        "Uploaded"
                      ) : (
                        <>
                          {twelfthPercentage
                            ? "Document Attached"
                            : "Upload Document"
                          }
                        </>
                      )}
                  </span>

                  <input
                    type="file"
                    name="twelfth_percentage
"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    height={20}
                    {...register("twelfth_percentage")}
                    onChange={handletwelfthpercentage}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">

                {educational_background && educational_background.twelfth_percentage ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                )
                  : (
                    <>
                      {twelfthPercentage ? (
                        <p className=" font-bold sm:mr-6 text-green-600">
                          {" "}
                          {twelfthPercentage.name}
                        </p>
                      ) : (
                        <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                          Format Accepted. PDF, PNG, JPG, DOC
                        </p>
                      )}
                    </>
                  )

                }
              </span>
            </div>
          </fieldset>

          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>Passport</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.passport
                        ? "border-blue-900"
                        : governmentIdOrPassport
                          ? "border-green-500"
                          : "border-red-500"
                      }`}
                  >
                    {educational_background && educational_background.passport ? (
                      "Uploaded"
                    ) : (
                      <>
                        {governmentIdOrPassport
                          ? "Document Attached"
                          : "Upload Document"}
                      </>
                    )}
                  </span>
                  <input
                    type="file"
                    name="passport"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    {...register("passport")}
                    onChange={handlegovernmentIdOrPassport}

                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                {educational_background && educational_background.passport ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                ) : (
                  <>
                    {governmentIdOrPassport ? (
                      <p className=" font-bold sm:mr-6 text-green-600">
                        {" "}
                        {governmentIdOrPassport.name}
                      </p>
                    ) : (
                      <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                        Format Accepted. PDF, PNG, JPG, DOC
                      </p>
                    )}
                  </>
                )}
              </span>
            </div>
          </fieldset>

          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>Aadhar Card</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.aadhar_card
                        ? "border-blue-900"
                        : aadharCard
                          ? "border-green-500"
                          : "border-red-500"
                      }`}
                  >
                    {educational_background && educational_background.aadhar_card ? (
                      "Uploaded"
                    ) : (
                      <>
                        {aadharCard
                          ? "Document Attached"
                          : "Upload Document"}
                      </>
                    )}
                  </span>
                  <input
                    type="file"
                    name="aadhar_card"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    {...register("aadhar_card")}
                    onChange={handleaadharCard}

                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                {educational_background && educational_background.aadhar_card ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                ) : (
                  <>
                    {aadharCard ? (
                      <p className=" font-bold sm:mr-6 text-green-600">
                        {" "}
                        {aadharCard.name}
                      </p>
                    ) : (
                      <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                        Format Accepted. PDF, PNG, JPG, DOC
                      </p>
                    )}
                  </>
                )}
              </span>
            </div>

          </fieldset>


          <fieldset className="fieldset mt-6">
            <label htmlFor="school_name">Neet Score</label>
            <br />
            <input
              type="number"
              placeholder="Enter School Name"
              className="bg-[#EBEBEB] rounded-lg mt-2 w-full"


              {
              ...register(
                "neet_score",
                {
                  required: true,
                  minLength: 1,
                  maxLength: 5,
                },
              )
              }
            />
            {
              errors.school_name
              && <p id="neet_score" style={{ color: "red" }}>
                <small>

                  {
                    errors.school_name?.type === "minLength"
                      ? "Neet Score can not be empty"
                      : errors.school_name?.type === "maxLength"
                        ? "Neet Score must be less than 5 characters"
                        : ""
                  }

                </small>
              </p>
            }
          </fieldset>

          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>Neet Score Card</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.neet_card
                        ? "border-blue-900"
                        : neetscorecard
                          ? "border-green-500"
                          : "border-red-500"
                      }`}
                  >
                    {educational_background && educational_background.neet_card ? (
                      "Uploaded"
                    ) : (
                      <>
                        {neetscorecard
                          ? "Document Attached"
                          : "Upload Document"}
                      </>
                    )}
                  </span>
                  <input
                    type="file"
                    name="neet_card"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    {...register("neet_card")}
                    onChange={handleneetscorecard}


                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                {educational_background && educational_background.neet_card ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                ) : (
                  <>
                    {neetscorecard ? (
                      <p className=" font-bold sm:mr-6 text-green-600">
                        {" "}
                        {neetscorecard.name}
                      </p>
                    ) : (
                      <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                        Format Accepted. PDF, PNG, JPG, DOC
                      </p>
                    )}
                  </>
                )}
              </span>
            </div>

          </fieldset>

          <fieldset className="flex mt-6 justify-between mb-6">
            <fieldset className="w-[45%]">
              <label htmlFor="residential">Highest Qualification</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="text"
                  placeholder="Enter your Residential Address"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={educational_background ? educational_background.highest_qualification : ""}

                  {
                  ...register(
                    "highest_qualification",
                    {
                      minLength: 2,
                      maxLength: 500,

                    },
                  )
                  }
                />
                {
                  errors.highest_qualification
                  && <p id="highest_qualification" style={{ color: "red" }}>
                    <small>

                      {
                        errors.highest_qualification?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.highest_qualification?.type === "maxLength"
                            ? "this field must be less than 500 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>

            <fieldset className="w-[45%]">
              <label htmlFor="post_code">CGPA/Percentage</label>
              <br />
              <div className="rounded-lg mt-2 w-full">
                <input
                  type="number"
                  placeholder="Enter your Post Code"
                  className="bg-[#EBEBEB] rounded-lg mt-2 w-full"
                  defaultValue={educational_background ? educational_background.cgpa : ""}

                  {
                  ...register(
                    "cgpa",
                    {
                      minLength: 2,
                      maxLength: 10,

                    },
                  )
                  }
                />
                {
                  errors.cgpa
                  && <p id="cgpa" style={{ color: "red" }}>
                    <small>

                      {
                        errors.cgpa?.type === "minLength"
                          ? "this field must be more than 2 characters"
                          : errors.cgpa?.type === "maxLength"
                            ? "this field must be less than 10 characters"
                            : ""
                      }

                    </small>
                  </p>
                }
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="mt-6 shadow-[1px_1px_1px_1px_rgba(0,0,0,0.25)] pt-3 pb-2 px-[18px] rounded-[10px]">
            <div className="flex justify-between items-center">
              <span>Upload Reume</span>
              <div className="w-[174px] h-10 relative">
                <label className="w-full h-full">
                  <span
                    className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${educational_background && educational_background.resume
                        ? "border-blue-900"
                        : resume
                          ? "border-green-500"
                          : "border-red-500"
                      }`}
                  >
                    {educational_background && educational_background.resume ? (
                      "Uploaded"
                    ) : (
                      <>
                        {resume
                          ? "Document Attached"
                          : "Upload Document"}
                      </>
                    )}
                  </span>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf, .png, .jpg, .doc"
                    hidden
                    {...register("resume")}
                    onChange={handleresume}


                  />
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="h-[40px] w-[24px]">
                  <img src={Upload} alt="upload-icon" />
                </div>
              </div>
              <span className="font-normal text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                {educational_background && educational_background.resume ? (
                  <>
                    <p className="font-bold sm:mr-6 text-blue-800"></p>
                  </>
                ) : (
                  <>
                    {resume ? (
                      <p className=" font-bold sm:mr-6 text-green-600">
                        {" "}
                        {resume.name}
                      </p>
                    ) : (
                      <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                        Format Accepted. PDF, PNG, JPG, DOC
                      </p>
                    )}
                  </>
                )}
              </span>
            </div>

          </fieldset>

          <fieldset className="grid grid-cols-2 mt-14">
            <button
              type="submit"
              className="bg-[#0D2C58] text-white py-3 rounded-lg text-2xl font-semibold"
            >
              Save
            </button>

            <button
              type="button"
              className="text-base font-semibold"

            >

              <Link to="/student/profile" >
                Cancel
              </Link>

            </button>

          </fieldset>
        </form>
      </div>
    </div>

  );
};


function ProfileSettings() {
  return (
    <Layout>
      <PersonalDetails />
      <ContactInformation />
      <Location />
      <EmergencyContact />
      <EducationalBackground />
    </Layout>
  );
};

export default ProfileSettings;