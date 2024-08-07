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
import React, { useState, useEffect } from "react";

import Layout from "../../../layout/Layout";
import "../../../../../static/assets/css/account/pages/ProfDocuments.css";

import Upload from "../../../../../static/assets/img/account/dashboard/studentprofile/upload-icon.svg";
import Progbar from "../../../../../static/assets/img/account/dashboard/studentprofile/prog-bar.svg";


// import { Link } from "react-router-dom";
// import {
//   usePostUpdateStudentDocumentsMutation,
//   useFetchStudentQuery,
// } from "../../../redux/features/student/studentApiSlice";

const ProfDocuments = () => {
  const [docData, setDocData] = useState();
  const [fileNames, setFileNames] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Form UseStates
  const [tenthClassCertificate, setTenthClassCertificate] = useState(null);
  const [tenthClassMarksheet, setTenthClassMarksheet] = useState(null);
  const [twelfthClassCertificate, setTwelfthClassCertificate] = useState(null);
  const [twelfthClassMarksheet, setTwelfthClassMarksheet] = useState(null);
  const [ieltsToeflPteDuolingo, setIeltsToeflPteDuolingo] = useState(null);
  const [graduateCertificate, setGraduateCertificate] = useState(null);
  const [underGraduateOfficialMarksheet, setUnderGraduateOfficialMarksheet] =
    useState(null);
  const [postGraduationMarksheet, setPostGraduationMarksheet] = useState(null);
  const [postGraduationDegree, setPostGraduationDegree] = useState(null);
  const [statementOfPurpose, setStatementOfPurpose] = useState(null);
  const [letterOfRecommendations, setLetterOfRecommendations] = useState(null);
  const [workExperienceCertificate, setWorkExperienceCertificate] =
    useState(null);
  const [governmentIdOrPassport, setGovernmentIdOrPassport] = useState(null);

  // // handle submit function that puts documents into the db
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);

  //   try {
  //     const formData = new FormData(e.currentTarget);
  //     await updateDocuments(formData)
  //       .unwrap()
  //       .then((res) => {
  //         console.log(res);
  //         setSuccess(res.message);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //     setError(`${err?.data?.error}`);
  //   }
  //   setLoading(false);
  //   window.location.reload();
  // };


  function handleSubmit() {

  }

  // // fetches the data in the documents source
  // useEffect(() => {
  //   if (loading) return;
  //   if (isLoading) return;
  //   setDocData(student?.data?.documents);
  //   const names = student?.data?.documents?.map((file) => file.name);
  //   setFileNames(names);
  //   console.log(student?.data);
  //   console.log(names);
  // }, [student, loading, isLoading]);

  // if (isLoading || loading)
  //   return (
  //     <div className=" text-5xl flex items-center justify-center h-screen">
  //       Loading...
  //     </div>
  //   );

  const isFilePresent = (fileName) => {
    return fileNames?.includes(fileName);
  };

  const reqFiles = [
    "tenthClassCertificate",
    "tenthClassMarksheet",
    "twelfthClassCertificate",
    "twelfthClassMarksheet",
    "graduateCertificate",
    "underGraduateOfficialMarksheet",
    "postGraduationDegree",
    "postGraduationMarksheet",
    "workExperienceCertificate",
    "ieltsToeflPteDuolingo",
    "resume",
    "letterOfRecommendations",
    "statementOfPurpose",
    "statementOfPurpose",
    "passport",
    "aadhar",
  ];

  // const pendingActions = reqFiles?.filter(
  //   (name) => !fileNames?.includes(name)
  // )?.length;

  return (
    <Layout>

      {/* <ToastContainer /> */}
      <div className="prof-doc">
        <div className="doc-status">
          <div className="left">
            <h1>Document Status</h1>
            <p>
              Documents should be uploaded to help stand a chance of being
              accepted in your dream school
            </p>
          </div>

          <div className="right">
            <span>
              {/* {pendingActions > 0 ? pendingActions : "No"} No pending actions */}
            </span>
            <div className="prog-bar">
              <img src={Progbar} alt="progress-bar" />

            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="school-cert">
            <div className="head">
              <h2>School Certificate</h2>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>10th Class Certificate</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("tenthClassCertificate")
                            ? "border-blue-900"
                            : tenthClassCertificate
                              ? "border-green-500 "
                              : "border-red-500 "
                          }
                        `}
                      >
                        {isFilePresent("tenthClassCertificate") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {tenthClassCertificate
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="tenthClassCertificate"
                        onChange={(e) => {
                          setTenthClassCertificate(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        height={20}
                        disabled={isFilePresent("tenthClassCertificate")}
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
                    {isFilePresent("tenthClassCertificate") ? (
                      <>
                        <p className="font-bold sm:mr-6 text-blue-800"></p>
                      </>
                    ) : (
                      <>
                        {tenthClassCertificate ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {tenthClassCertificate.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>10th class marksheet</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("tenthClassMarksheet")
                            ? "border-blue-900"
                            : tenthClassMarksheet
                              ? "border-green-500 "
                              : "border-red-500 "
                          }`}
                      >
                        {isFilePresent("tenthClassMarksheet") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {tenthClassMarksheet
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="tenthClassMarksheet"
                        onChange={(e) => {
                          setTenthClassMarksheet(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("tenthClassMarksheet")}
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
                    {isFilePresent("tenthClassMarksheet") ? (
                      <></>
                    ) : (
                      <>
                        {tenthClassMarksheet ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {tenthClassMarksheet.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>12th class certificate</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("twelfthClassCertificate")
                            ? "border-blue-900"
                            : twelfthClassCertificate
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("twelfthClassCertificate") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {twelfthClassCertificate
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="twelfthClassCertificate"
                        onChange={(e) => {
                          setTwelfthClassCertificate(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("twelfthClassCertificate")}
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
                    {isFilePresent("twelfthClassCertificate") ? (
                      <></>
                    ) : (
                      <>
                        {twelfthClassCertificate ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {twelfthClassCertificate.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  
                  <span>12th class marksheet</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("twelfthClassMarksheet")
                            ? "border-blue-900"
                            : twelfthClassMarksheet
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("twelfthClassMarksheet") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {twelfthClassMarksheet
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="twelfthClassMarksheet"
                        onChange={(e) => {
                          setTwelfthClassMarksheet(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("twelfthClassMarksheet")}
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
                    {isFilePresent("twelfthClassMarksheet") ? (
                      <></>
                    ) : (
                      <>
                        {twelfthClassMarksheet ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {twelfthClassMarksheet.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>IELTS/TOEFL/PTE/DUOLINGO (Academic)</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("ieltsToeflPteDuolingo")
                            ? "border-blue-900"
                            : ieltsToeflPteDuolingo
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("ieltsToeflPteDuolingo") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {ieltsToeflPteDuolingo
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="ieltsToeflPteDuolingo"
                        onChange={(e) => {
                          setIeltsToeflPteDuolingo(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("ieltsToeflPteDuolingo")}
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
                    {isFilePresent("ieltsToeflPteDuolingo") ? (
                      <></>
                    ) : (
                      <>
                        {ieltsToeflPteDuolingo ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {ieltsToeflPteDuolingo.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Graduate Certificate</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("graduateCertificate")
                            ? "border-blue-900"
                            : graduateCertificate
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("graduateCertificate") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {graduateCertificate
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="graduateCertificate"
                        onChange={(e) => {
                          setGraduateCertificate(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("graduateCertificate")}
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
                    {isFilePresent("graduateCertificate") ? (
                      <></>
                    ) : (
                      <>
                        {graduateCertificate ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {graduateCertificate.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>
                    All Under-graduate Official Marksheet (Semester-wise or
                    Year-wise)
                  </span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("underGraduateOfficialMarksheet")
                            ? "border-blue-900"
                            : underGraduateOfficialMarksheet
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("underGraduateOfficialMarksheet") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {underGraduateOfficialMarksheet
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="underGraduateOfficialMarksheet"
                        onChange={(e) => {
                          setUnderGraduateOfficialMarksheet(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent(
                          "underGraduateOfficialMarksheet"
                        )}
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
                    {isFilePresent("underGraduateOfficialMarksheet") ? (
                      <></>
                    ) : (
                      <>
                        {underGraduateOfficialMarksheet ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {underGraduateOfficialMarksheet.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Post-Graduation mark sheet</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("postGraduationMarksheet")
                            ? "border-blue-900"
                            : postGraduationMarksheet
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("postGraduationMarksheet") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {postGraduationMarksheet
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="postGraduationMarksheet"
                        onChange={(e) => {
                          setPostGraduationMarksheet(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("postGraduationMarksheet")}
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
                    {isFilePresent("postGraduationMarksheet") ? (
                      <></>
                    ) : (
                      <>
                        {postGraduationMarksheet ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {postGraduationMarksheet.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Post-Graduation Degree</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("postGraduationDegree")
                            ? "border-blue-900"
                            : postGraduationDegree
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("postGraduationDegree") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {postGraduationDegree
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="postGraduationDegree"
                        onChange={(e) => {
                          setPostGraduationDegree(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("postGraduationDegree")}
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
                    {isFilePresent("postGraduationDegree") ? (
                      <></>
                    ) : (
                      <>
                        {postGraduationDegree ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {postGraduationDegree.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Statement of Purpose (SOP)</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("statementOfPurpose")
                            ? "border-blue-900"
                            : statementOfPurpose
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("statementOfPurpose") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {statementOfPurpose
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="statementOfPurpose"
                        onChange={(e) => {
                          setStatementOfPurpose(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("statementOfPurpose")}
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
                    {isFilePresent() ? (
                      <></>
                    ) : (
                      <>
                        {statementOfPurpose ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {statementOfPurpose.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Letter of Recommendations (LOR)</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("letterOfRecommendations")
                            ? "border-blue-900"
                            : letterOfRecommendations
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("letterOfRecommendations") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {letterOfRecommendations
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="letterOfRecommendations"
                        onChange={(e) => {
                          setLetterOfRecommendations(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("letterOfRecommendations")}
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
                    {isFilePresent("letterOfRecommendations") ? (
                      <></>
                    ) : (
                      <>
                        {letterOfRecommendations ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {letterOfRecommendations.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Work experience certificates</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("workExperienceCertificate")
                            ? "border-blue-900"
                            : workExperienceCertificate
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("workExperienceCertificate") ? (
                          "Uploaded"
                        ) : (
                          <>
                            {workExperienceCertificate
                              ? "Document Attached"
                              : "Upload Document"}
                          </>
                        )}
                      </span>
                      <input
                        type="file"
                        name="workExperienceCertificate"
                        onChange={(e) => {
                          setWorkExperienceCertificate(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={isFilePresent("workExperienceCertificate")}
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
                    {isFilePresent("workExperienceCertificate") ? (
                      <></>
                    ) : (
                      <>
                        {workExperienceCertificate ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {workExperienceCertificate.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="addit-wrap">
            <div className="addit-doc">
              <span>Additional Document</span>
              <span>+</span>
            </div>
          </div>

          <div className="school-cert">
            <div className="head">
              <h2>Background Certificate</h2>
            </div>

            <div className="mx-[41px] my-[17px]">
              <div className="items-center bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.25)] mt-[15px] pt-3 pb-2 px-[18px] rounded-[10px]">
                <div className="flex justify-between items-center">
                  <span>Current Government ID/Passport</span>
                  <div className="w-[174px] h-10 relative">
                    <label className="w-full h-full">
                      <span
                        className={`justify-center 
                        flex items-center
                        border border-solid
                        text-xs cursor-pointer
                        absolute bg-white px-[31px] py-3 font-semibold rounded-[10px] inset-0
                        ${isFilePresent("passport") || isFilePresent("aadhar")
                            ? "border-blue-900"
                            : governmentIdOrPassport
                              ? "border-green-500"
                              : "border-red-500"
                          }`}
                      >
                        {isFilePresent("passport") ||
                          isFilePresent("aadhar") ? (
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
                        name="governmentIdOrPassport"
                        onChange={(e) => {
                          setGovernmentIdOrPassport(e.target.files[0]);
                          setError("");
                          setSuccess("");
                        }}
                        accept=".pdf, .png, .jpg"
                        className="hidden"
                        disabled={
                          isFilePresent("passport") || isFilePresent("aadhar")
                        }
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
                    {isFilePresent("passport") || isFilePresent("aadhar") ? (
                      <></>
                    ) : (
                      <>
                        {governmentIdOrPassport ? (
                          <p className=" font-bold sm:mr-6 text-green-600">
                            {" "}
                            {governmentIdOrPassport.name}
                          </p>
                        ) : (
                          <p className=" text-[13px] leading-6 text-[#A7A9AC] ml-[19px]">
                            Format Accepted. PDF, PNG, JPG
                          </p>
                        )}
                      </>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <Link to="/student/dashboard/admission/application-status/payment"> */}
          <button className="save" type="submit">
            Save Changes
          </button>
          {error && (
            <div className=" my-2 ml-4 capitalize text-red-600 font-bold">
              {error}
            </div>
          )}
          {success && (
            <h2 className="my-2 ml-4 text-green-600 font-bold">{success}</h2>
          )}
          {/* </Link> */}
        </form>
      </div>
    </Layout>
  );
};

export default ProfDocuments;
