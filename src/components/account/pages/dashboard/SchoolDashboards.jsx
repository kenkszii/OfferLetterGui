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
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";

import Layout from "../../layout/Layout";
import Oxford from "../../../../static/assets/img/account/dashboard/oxford.png";
import Countries from "../../../../static/assets/img/account/dashboard/top5Countries.png";
import Schools from "../../../../static/assets/img/account/dashboard/top5Schools.png";
import webinarImg from "../../../../static/assets/img/account/dashboard/webinarimg.png";
import BannarImg from "../../../../static/assets/img/account/dashboard/bannerBG.png";



function DoughnutChart({ children, data }) {
  Chart.register(ArcElement);

  return (
    <div
      className={
        "relative flex items-center justify-center font-semibold w-[200px] h-[200px]"
      }
    >
      <Doughnut data={data} />
      {children}
    </div>
  );
}

function DashWebinarItem({ title, desc, img }) {
  return (
    <div className='max-w-[360px] xl:max-w-sm'>
      <img src={img} alt="/" className='rounded-lg cursor-pointer shadow-md' />
      <h3 className='font-semibold py-4 text-[#0D2C58]'>{title}</h3>
      <p className='text-[#C4C4C4] text-xs'>{desc}</p>
    </div>
  )
}


function SchoolDashboard() {

  const upcomingWebinars = [
    {
      id: 1,
      title: 'How to Enroll in our University as a foreign student',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ',
      img: webinarImg,
      category: 'upcoming'
    },
    {
      id: 2,
      title: 'How to Enroll in our University as a foreign student',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ',
      img: webinarImg,
      category: 'upcoming'
    },
  ]
  const pastWebinars = [
    {
      id: 3,
      title: 'How to Enroll in our University as a foreign student1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ',
      img: webinarImg,
      category: 'past'
    },
    {
      id: 4,
      title: 'How to Enroll in our University as a foreign student2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ',
      img: webinarImg,
      category: 'past'
    }
  ]
  const [items, setItems] = useState(upcomingWebinars);
  const [active, setActive] = useState('Upcoming');

  const filterPastItem = () => {
    setItems(pastWebinars);
    setActive('Past')
  }
  const filterUpcomingItem = () => {
    setItems(upcomingWebinars);
    setActive('Upcoming')
  }

  const colours = ['#705FFF', '#1ACFB0', '#F84B77', '#4E49A5', '#E64421']
  const top_course = ["Law", "Computer science",
    "Law", "Pharmacy", "Physics"]
  const top5Colleges = ["UNIVERSITY OF LONDON", " UNIVERSITY OF MILAN",
    "UNIVERSITY OF TORONTO", "HAVARD UNIVERSITY", "OXFORD UNIVERSITY"]

  const top_countries = ["AUSTRALIA", "INDIA",
    "NIGERIA", "UNITED KINGDOM", "USA"]


  const round = (num) => Math.round(num * 100) / 100;

  const accepted = round(40);
  const pending = round(50);
  const rejected = round(60);

  const data1 = {
    labels: ["green", "white"],
    datasets: [
      {
        data: [accepted, 100 - accepted],
        backgroundColor: ["#009006", "#FFFFFF"],
        borderRadius: 5,
        borderWidth: 0,
        cutout: 80,
      },
    ],
  };

  const data2 = {
    labels: ["red", "white"],
    datasets: [
      {
        data: [rejected, 100 - rejected],
        backgroundColor: ["#FF0000", "#FFFFFF"],
        borderRadius: 5,
        borderWidth: 0,
        cutout: 80,
      },
    ],
  };

  const data3 = {
    labels: ["yellow", "white"],
    datasets: [
      {
        data: [pending, 100 - rejected],
        backgroundColor: ["#F1FF50", "#FFFFFF"],
        borderRadius: 5,
        borderWidth: 0,
        cutout: 80,
      },
    ],
  };


  return (
    <Layout>
      <div className="w-full banner">
        <div className="w-[100%] relative" style={{ margin: '86px 0px 0px' }}>
          <div className="w-[83%] absolute pb-40 p-8 right-0 footerbottom overflow-hidden">

            {/* Banner  */}
            
              <div
                className="flex items-center justify-center"
                style={{
                  backgroundImage: `url(${BannarImg})`,
                  backgroundPosition: "0 -100px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="w-[80%] flex text-white items-center justify-between py-0">
                  <div className="leading-8 flex gap-16 items-center">
                    <div className="w-96 rounded-[50%] bg-slate-500" style={{ width: '15rem' }}>
                      <img src={Oxford} nalt="uni-logo" className="object-contain w-[100%] h-[100%] rounded-[50%]" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-4xl tracking-wide">
                        Mr Sing
                      </h2>
                      <p>1/21/1991</p>
                      <p className="text-center px-4 py-2 text-xs font-semibold bg-white text-[#0d2c58] rounded-3xl mt-4">
                        Exclusive
                      </p>
                    </div>
                  </div>
                  <div className="w-[2px] h-[300px] bg-white"></div>
                  <div className="flex flex-wrap gap-3 xl:gap-20 2xl:gap-40">
                    <div className="flex flex-col gap-5">
                      <div>
                        <h3 className="font-bold">Contact Person</h3>
                        <p className="text-sm">1/21/1994</p>
                      </div>
                      <div>
                        <h3 className="font-bold">Contract Renewal</h3>
                        <p className="text-sm">
                          1/21/1994
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div>
                        <h3 className="font-bold">Contract Date</h3>
                        <p className="text-sm">
                          1/21/1994
                        </p>
                      </div>
                      <div>
                        <h3 className="font-bold">Manager</h3>
                        <p className="text-sm">17/7/228</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <Link
                  to={"/register-student"}
                  className="px-5 py-3 bg-[#0d2c58] text-white rounded-lg"
                >
                  Create New Application
                </Link>
              </div>

              <div className="w-[80%] mx-auto">
                <div className="w-[40%] xl:w-[28%] float-right">
                  <h2 className="text-[#0d2c58] text-xl font-bold text-center pb-7">
                    Webinars
                  </h2>
                  <div className="flex gap-6">
                    <Link to="/past-webinars">
                      <div className="block w-[10rem] h-20 pl-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 relative">
                        <h5 className="mb-2 text-[16px] tracking-tight text-gray-900 w-[40%]">
                          Past Webinars
                        </h5>
                        <p className="font-normal text-gray-700 absolute bottom-2 right-2">
                          +20
                        </p>
                      </div>
                    </Link>
                    <Link to="/upcoming-webinars">
                      <div className="block w-[10rem] h-20 pl-8 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 relative">
                        <h5 className="mb-2 text-[16px] tracking-tight text-gray-900 w-[40%]">
                          Upcoming Webinars
                        </h5>
                        <p className="font-normal text-gray-700 absolute bottom-2 right-2">
                          +15
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>


              {/* Chart */}
              <div className="py-40 px-20">
                <h3 className="text-xl font-bold pb-10">Applications Received</h3>
                <div className="grid grid-cols-3 gap-10 ">
                  <Link
                    to="/applications/accepted"
                    className="bg-[#002151] p-10 flex flex-col items-center justify-center rounded-lg"
                  >
                    <DoughnutChart data={data1}>
                      <p className="absolute text-white">{100} Applications</p>
                    </DoughnutChart>
                    <p className="text-white text-center mt-6 font-semibold text-2xl">
                      {10} Accepted
                    </p>
                  </Link>
                  <Link
                    to="/applications/rejected"
                    className="bg-[#002151] p-10 flex flex-col items-center justify-center rounded-lg"
                  >
                    <DoughnutChart data={data2}>
                      <p className="absolute text-white">{100} Applications</p>
                    </DoughnutChart>
                    <p className="text-white text-center mt-6 font-semibold text-2xl">
                      {10} Rejected
                    </p>
                  </Link>
                  <Link
                    to="/applications/pending"
                    className="bg-[#002151] p-10 flex flex-col items-center justify-center rounded-lg"
                  >
                    <DoughnutChart data={data3}>
                      <p className="absolute text-white"> {100} Applications</p>
                    </DoughnutChart>
                    <p className="text-white text-center mt-6 font-semibold text-2xl">
                      {10} Pending
                    </p>
                  </Link>
                </div>
                <div className="flex justify-end mt-4">
                  <Link
                    to="/applications"
                    state={{ filter: "all" }}
                    className="flex items-center gap-4"
                  >
                    All applications <FaArrowRight />
                  </Link>
                </div>
              </div>


              {/* <Top5Stats /> */}
              <div className='w-full text-white bg-[#0D2C58] my-20 py-16'>
                <div className='w-[80%] mx-auto'>
                  <div className='w-[70%] xl:w-[45%]'>
                    <p className='font-semibold text-xl text-center'>Top 5 courses</p>
                    <div className='flex pt-4'>
                      <img src={Schools} alt="" className='w-[30%] mr-10' />
                      <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top_course.map((item, index) => {
                          const bgColor = colours[index];
                          return (
                            <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{ backgroundColor: `${bgColor}` }}>&nbsp;</span>{item}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className='w-[55%] xl:w-[45%] float-right'>
                    <p className='font-semibold text-xl text-center'>Top 5 colleges</p>
                    <div className='flex pt-4'>
                      <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top5Colleges.map((item, index) => {
                          const bgColor = colours[index];
                          return (
                            <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{ backgroundColor: `${bgColor}` }}>&nbsp;</span>{item}</li>
                          )
                        })}
                      </ul>
                      <img src={Schools} alt="" className='w-[40%] ml-10' />
                    </div>
                  </div>



                  <div className='w-[55%] xl:w-[40%] pt-[30%] xl:pt-[25%]'>
                    <p className='font-semibold text-xl text-center'>Top 5 countries</p>
                    <div className='flex pt-4'>
                      <img src={Countries} alt="" className='w-[40%] mr-10' />
                      <ul className='uppercase tracking-wider flex flex-col gap-3'>
                        {top_countries.map((item, index) => {
                          const bgColor = colours[index];
                          return (
                            <li key={index} className='flex items-center'><span className='mr-3 w-[11px] h-[11px] rounded-[50%] inline-block' style={{ backgroundColor: `${bgColor}` }}>&nbsp;</span>{item}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              {/* <DashboardWebinar /> */}
              <div className='py-10 w-[95%] lg:w-[80%] mx-auto'>
                <h3 className='text-xl font-bold pb-3 uppercase'>Webinar</h3>

                <div className="py-7 ">
                  <ul className='flex justify-between w-[100%] font-bold md:w-[40%] leading-4 text-sm md:text-lg'>
                    <li>
                      <button
                        onClick={() => filterPastItem()}
                        className={active === 'Past' ? 'text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]' : 'text-black'}
                      >
                        Past
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => filterUpcomingItem()}
                        className={active === 'Upcoming' ? 'text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]' : 'text-black'}
                      >
                        Upcoming
                      </button>
                    </li>
                  </ul>
                </div>

                <div className='flex flex-wrap gap-16'>
                  {items.map((items) => <DashWebinarItem key={items.id} {...items} />)}
                </div>
              </div>


              {/* <DashCommission /> */}
              <div className="py-10 w-[95%] lg:w-[80%] mx-auto">
                <h3 className="text-xl font-bold pb-3 uppercase">COMMISSION QUARTERLY</h3>

                <div className="grid grid-cols-3 gap-10 ">
                  <Link
                    to="/commissions"
                    state={{ filter: "all" }}
                    className="border border-[#000] rounded-lg flex flex-col items-center justify-center p-4"
                  >
                    <DoughnutChart data={data1}>
                      <p className="absolute">{100} Commissions</p>
                    </DoughnutChart>
                    <p className="text-black text-center mt-6 font-semibold text-2xl">
                      Total Commission
                    </p>
                  </Link>
                  <Link
                    to="/commissions"
                    state={{ filter: "given" }}
                    className="border border-[#000] rounded-lg flex flex-col items-center justify-center p-4"
                  >
                    <DoughnutChart data={data2}>
                      <p className="absolute">{100} Commissions</p>
                    </DoughnutChart>
                    <p className="text-black text-center mt-6 font-semibold text-2xl">
                      Commission Received
                    </p>
                  </Link>
                  <Link
                    to="/commissions"
                    state={{ filter: "pending" }}
                    className="border border-[#000] rounded-lg flex flex-col items-center justify-center p-4"
                  >
                    <DoughnutChart data={data3} textDark={true}>
                      <p className="absolute">{100} Commissions</p>
                    </DoughnutChart>
                    <p className="text-black text-center mt-6 font-semibold text-2xl">
                      Commission pending
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default SchoolDashboard;
