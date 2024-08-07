import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaArrowRight } from "react-icons/fa";


import Courses from "../../../../static/assets/img/account/dashboard/top5Courses.png";
import Countries from "../../../../static/assets/img/account/dashboard/top5countries.png";


import webinarImg from "../../../../static/assets/img/account/dashboard/webinarimg.png";
// import uniImage from "../../../../static/assets/img/account/dashboard/university-img.png";
import Oxford from "../../../../static/assets/img/account/dashboard/oxford.png";
import BannarImg from "../../../../static/assets/img/account/dashboard/bannerBG.png";



import Layout from "../../layout/Layout.jsx";

import "../../../../static/assets/css/account/pages/UniversityDashboard.css";

// import Navbar from "../Navbar/Navbar";




const upcomingWebinars = [
  {
    id: 1,
    title: "How to Enroll in our University as a foreign student",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ",
    img: webinarImg,
    category: "upcoming",
  },
  {
    id: 2,
    title: "How to Enroll in our University as a foreign student",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ",
    img: webinarImg,
    category: "upcoming",
  },
];

const pastWebinars = [
  {
    id: 3,
    title: "How to Enroll in our University as a foreign student1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ",
    img: webinarImg,
    category: "past",
  },
  {
    id: 4,
    title: "How to Enroll in our University as a foreign student2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt vulputate augue eget sit dolor aliquet a, et. Etiam tincidunt facilisis egestas eu aliquam sodales semper. Venenatis tincidunt malesuada pretium hendrerit ",
    img: webinarImg,
    category: "past",
  },
];


function WebinarDash({ title, desc, img }) {
  return (
    <div className='max-w-[360px] xl:max-w-sm'>
      <img src={img} alt="/" className='rounded-lg cursor-pointer shadow-md' />
      <h3 className='font-semibold py-4 text-[#0D2C58]'>{title}</h3>
      <p className='text-[#C4C4C4] text-xs'>{desc}</p>
    </div>
  )
}

const Webinar = () => {
  const [items, setItems] = useState(upcomingWebinars);
  const [active, setActive] = useState("Upcoming");

  const handlePast = () => {
    setItems(pastWebinars);
    setActive("Past");
  };
  const handleUpcoming = () => {
    setItems(upcomingWebinars);
    setActive("Upcoming");
  };

  return (
    <div className="py-20 w-[95%] lg:w-[80%] mx-auto">
      <h3 className="text-xl font-bold pb-3 uppercase Roboto">Webinar</h3>

      <div className="py-7 ">
        <div className="flex gap-10 font-bold md:w-[70%] leading-4 text-sm md:text-lg">
          <button
            onClick={() => handlePast()}
            className={
              active === "Past"
                ? "text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]"
                : "text-black"
            }
          >
            Past
          </button>

          <button
            onClick={() => handleUpcoming()}
            className={
              active === "Upcoming"
                ? "text-[#0D2C58] border-spacing-4 border-b-4 border-[#0D2C58]"
                : "text-black"
            }
          >
            Upcoming
          </button>
        </div>
      </div>

      <div className="flex gap-20">
        {items.map((items) => (
          <WebinarDash key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};



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


function Top5Section() {
  const top5Courses = ['International Law', 'Microbiology', 'Computer Sciences', 'Sociology', 'Medicine and Surgery'];
  const top5School = ['University of London', 'University of Milan', 'University of Toronto', 'Havard University', 'Oxford University'];
  const top5Countries = ['India', 'France', 'Poland', 'Italy', 'United Kingdom'];
  const colours = ["#705FFF", "#1ACFB0", "#F84B77", "#4E49A5", "#E64421"];
  return (
    <div className="w-full text-white bg-[#0D2C58] my-20 py-16">
      <div className="flex flex-col gap-20 px-20">
        <div className="w-[60%]">
          <p className="font-semibold text-xl text-center">Top 5 courses</p>
          <div className="flex pt-4">
            <img src={Courses} alt="" className="w-[250px] mr-10" />
            <ul className="uppercase tracking-wider flex flex-col gap-3">
              {top5Courses.data?.map((item, index) => {
                const bgColor = colours[index];
                return (
                  <li key={index} className="flex items-center">
                    <span
                      className="mr-3 w-[11px] h-[11px] rounded-[50%] inline-block"
                      style={{ backgroundColor: `${bgColor}` }}
                    >
                      &nbsp;
                    </span>
                    {item.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-[60%] self-end">
          <p className="font-semibold text-xl text-center">Top 5 countries</p>
          <div className="flex flex-row-reverse pt-4">
            <img src={Countries} alt="" className="w-[250px] mr-10" />
            <ul className="uppercase tracking-wider flex flex-col gap-3">
              {top5Countries.data?.map((item, index) => {
                const bgColor = colours[index];
                return (
                  <li key={index} className="flex items-center">
                    <span
                      className="mr-3 w-[11px] h-[11px] rounded-[50%] inline-block"
                      style={{ backgroundColor: `${bgColor}` }}
                    >
                      &nbsp;
                    </span>
                    {item.item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}




function CommissionsChart({ applications, applicationsSuccess }) {
  const givenCommission =
    applications?.data?.filter((com) => com.commission === "given").length || 0;
  const pendingCommission =
    applications?.data?.filter((com) => com.commission === "pending").length ||
    0;
  const totalCommissions = applications?.data?.length || 0;

  const round = (num) => Math.round(num * 100) / 100;

  const receivedPercent = round((givenCommission * 100) / totalCommissions);
  const pendingPercent = round((pendingCommission * 100) / totalCommissions);
  const totalCommissionPercent = 100;

  const data1 = {
    datasets: [
      {
        data: [totalCommissionPercent],
        backgroundColor: ["#0D2C58", "#89969F"],
        cutout: 80,
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [receivedPercent, 100 - receivedPercent],
        backgroundColor: ["#0D2C58", "#89969F"],
        cutout: 80,
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  const data3 = {
    datasets: [
      {
        data: [pendingPercent, 100 - pendingPercent],
        backgroundColor: ["#0D2C58", "#89969F"],
        cutout: 80,
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };

  return (
    <div className="grid grid-cols-3 gap-10 py-8">
      <Link
        to="/commissions"
        state={{ filter: "all" }}
        className="border-2 border-[#002151] rounded-2xl p-4 flex flex-col items-center justify-center"
      >
        <DoughnutChart data={data1}>
          <p className="absolute">{totalCommissions} Commissions</p>
        </DoughnutChart>

        <p className="chart-text text-[#002151] text-center mt-2 font-semibold">
          Total Commission
        </p>
      </Link>

      <Link
        to="/commissions"
        state={{ filter: "given" }}
        className="border-2 border-[#002151] rounded-2xl p-4 flex flex-col items-center justify-center"
      >
        <DoughnutChart data={data2}>
          <p className="absolute">{givenCommission} Commissions</p>
        </DoughnutChart>{" "}
        <p className="chart-text text-[#002151] text-center mt-2 font-semibold">
          Commission Given
        </p>
      </Link>

      <Link
        to="/commissions"
        state={{ filter: "pending" }}
        className="border-2 border-[#002151] rounded-2xl p-4 flex flex-col items-center justify-center"
      >
        <DoughnutChart data={data3}>
          <p className="absolute">{pendingCommission} Commissions</p>
        </DoughnutChart>{" "}
        <p className="chart-text text-[#002151] text-center mt-2 font-semibold">
          Commission Pending
        </p>
      </Link>
    </div>
  );
}




function AppChart({ applications, applicationsSuccess }) {
  const acceptedApplication =
    applications?.data?.filter((item) => item.status === "accepted").length ||
    0;
  const pendingApplication =
    applications?.data?.filter((item) => item.status === "pending").length || 0;
  const rejectedApplication =
    applications?.data?.filter((item) => item.status === "rejected").length ||
    0;
  const studentLength = applications?.data?.length || 0;

  const round = (num) => Math.round(num * 100) / 100;

  const accepted = round((acceptedApplication * 100) / studentLength);
  const pending = round((pendingApplication * 100) / studentLength);
  const rejected = round((rejectedApplication * 100) / studentLength);

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
    <div>
      <div className="grid grid-cols-3  gap-10 px-20">
        <Link to="/applications/accepted">
          <div className="bg-[#0D2C58] rounded-2xl p-4 flex flex-col items-center py-6 justify-center">
            <DoughnutChart data={data1}>
              <p className="absolute text-white">
                {studentLength} Applications
              </p>
            </DoughnutChart>

            <p className="chart-text text-center mt-2 text-white">
              {acceptedApplication} Accepted
            </p>
          </div>
        </Link>

        <Link to="/applications/rejected">
          <div className="bg-[#0D2C58] rounded-2xl p-4 flex flex-col items-center py-6 justify-center">
            <DoughnutChart data={data2}>
              <p className="absolute text-white">
                {studentLength} Applications
              </p>
            </DoughnutChart>{" "}
            <p className="chart-text text-center mt-2 text-white">
              {rejectedApplication} Rejected
            </p>
          </div>
        </Link>

        <Link to="/applications/pending">
          <div className="bg-[#0D2C58] rounded-2xl p-4 flex flex-col items-center py-6 justify-center">
            <DoughnutChart data={data3}>
              <p className="absolute text-white">
                {studentLength} Applications
              </p>
            </DoughnutChart>{" "}
            <p className="chart-text text-center mt-2 text-white">
              {pendingApplication} Pending
            </p>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-end px-20 capitalize font-semibold py-6">
        <Link
          to="/applications"
          state={{ filter: "all" }}
          className="flex items-center gap-2"
        >
          See all <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}






function Hero() {
  return (
    <div
      className="Uni-intro flex items-center justify-center"
      style={{
        backgroundImage: `url(${BannarImg})`,
        backgroundPosition: "0 -100px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[80%] flex text-white items-center justify-between py-0">
        <div className="leading-8 flex gap-16 items-center">
          <div className="w-[150px] h-[150px]">
            <img
              src={Oxford}
              alt="uni-logo"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="w-[400px]">
            <h2 className="text-2xl lg:text-4xl tracking-wide"></h2>
            <p>ADDRESS</p>
            <button className="text-center px-16 py-2 bg-white text-[#0d2c58] rounded-3xl mt-4 font-medium">
              Exclusive
            </button>
          </div>
        </div>
        <div className="w-[2px] h-[300px] bg-white"></div>
        <div className="flex flex-wrap gap-3 xl:gap-20 2xl:gap-40">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold">Contact Person</h3>
              <p className="text-sm">contact_person</p>
            </div>
            <div>
              <h3 className="font-bold">Contract Renewal</h3>
              <p className="text-sm">
                contract_renewal
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-bold">Contract Date</h3>
              <p className="text-sm">
                contract_date
              </p>
            </div>
            <div>
              <h3 className="font-bold">Manager</h3>
              <p className="text-sm">Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






function UniversityDashboard({
  universityProfile,
  profileSuccess,
  applications,
  applicationsSuccess,
}) {
  return (
    <Layout>

      <div className="page">

      <div className="w-[100%] relative" style={{ margin: '86px 0px 0px' }}>
        <div className="w-[83%] absolute pb-40 p-8 right-0 footerbottom overflow-hidden">
          <Hero
            universityProfile={universityProfile}
            profileSuccess={profileSuccess}
          />

          <div className="flex items-center justify-end px-20 my-6">
            <div>
              <h3 className="uni-webinar-title">Webinars</h3>
              <div className="flex gap-6 mt-6">
                <Link
                  to="/past-webinars"
                  className=" w-[200px] p-4 shadow-[0_0_10px_#b3b1b1] rounded-lg flex flex-col justify-between"
                >
                  <p className="webinar-title text-xl font-semibold">
                    Past Webinars
                  </p>
                  <p className="webinar-num flex justify-end">+20</p>
                </Link>

                <Link
                  to="/upcoming-webinars"
                  className="flex flex-col justify-between w-[200px] p-4 shadow-[0_0_10px_#b3b1b1] rounded-lg"
                >
                  <p className="webinar-title text-xl font-semibold">
                    Upcoming Webinars
                  </p>
                  <p className="webinar-num flex justify-end">+15</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="applications">
            <h3 className="title">Application Received</h3>
          </div>

          <AppChart
            applications={applications}
            applicationsSuccess={applicationsSuccess}
          />
          <Top5Section />
          <Webinar />

          
          
            <p className="text-2xl font-semibold">COMMISSION QUATERLY</p>

            <CommissionsChart
              applications={applications}
              applicationsSuccess={applicationsSuccess}
            />
         
        </div>
      </div>
      </div>
    </Layout>

  );
}

export default UniversityDashboard;

