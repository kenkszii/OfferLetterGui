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
import { useNavigate } from "react-router-dom";
import { FaHeadset, FaUniversity, FaUserGraduate, FaFirstAid, } from "react-icons/fa";
import { MdOutlineSchool, MdEngineering } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Layout from "../../layout/Layout";


// import { useFetchApplicationQuery } from "../../../redux/features/admin/AdminApiSlice";


const data = [
  {
    name: "Aarav Uma",
    image: "/src/static/assets/img/account/dashboard/avatar-one.png",
    id: "22358752",
    gender: "Male",
    school: "University of Toronto",
    course: "Medcine",
    status: "accepted",
    manager: "Salassie Man",
    commission: "recieved"
  },
  {
    name: "Aarav Uma",
    image: "/src/static/assets/img/account/dashboard/avatar-one.png",
    id: "22358752",
    gender: "Male",
    school: "University of Toronto",
    course: "Medcine",
    status: "rejected",
    manager: "Salassie Man",
    commission: "pending"
  },
  {
    name: "Aarav Uma",
    image: "/src/static/assets/img/account/dashboard/avatar-one.png",
    id: "22358752",
    gender: "Male",
    school: "University of Toronto",
    course: "Medcine",
    status: "pending",
    manager: "Salassie Man",
    commission: "rejected"
  },
  {
    name: "Aarav Uma",
    image: "/src/static/assets/img/account/dashboard/avatar-one.png",
    id: "22358752",
    gender: "Male",
    school: "University of Toronto",
    course: "Medcine",
    status: "accepted",
    manager: "Salassie Man",
    commission: "recieved"

  },
  {
    name: "Aarav Uma",
    image: "/src/static/assets/img/account/dashboard/avatar-one.png",
    id: "22358752",
    gender: "Male",
    school: "University of Toronto",
    course: "Medcine",
    status: "pending",
    manager: "Salassie Man",
    commission: "recieved"
  },
]

function Course(props) {
  return (
    <div className="course-conts">
      <div className={props.grey ? "grey-cont" : "img-cont"}>
        <div className={props.grey ? "grey-icon" : "course-logo"} >
          {props.icon}
        </div>
      </div>
      <h3 className="course-title">{props.text}</h3>
    </div>
  );
};


ChartJS.register(ArcElement, Tooltip, Legend);
// import {Doughnut} from "pi"

const Piechart = (props) => {
  const data = {
    // labels: ["Red", "Blue"],
    datasets: [
      {
        data: props.data,
        backgroundColor: props.background,
        borderWidth: 0,
      },
    ],
  };

  const keyDetails = props.keyDetails.map((detail, i) => {
    const keyBorder =
      i > 0
        ? {
          border: `1px solid ${props.background[i - 1]}`,
          background: `${props.background[i - 1]}`,
        }
        : null;

    return (
      <div className="detail" key={i}>
        <div className={`key`} style={keyBorder}></div>
        <p>{detail}</p>
      </div>
    );
  });
  return (
    <div className="chart-cont">
      <div className="chart-title-stats">
        <h5 className="chart-title">{props.title}</h5>
        {props.stats && <p>{props.stats}</p>}
      </div>
      <div className="chart-box">
        <div className="pie-chart">
          <Pie data={data} />
        </div>
        <div className="chart-details">{keyDetails}</div>
      </div>
    </div>
  );
};
const Country = (props) => {
  return (
    <div className="country-cont">
      <div className="country-flag">
        <img src={props.flag} alt="Flag" className="flag" />
      </div>
      <p className="country-name">{props.name}</p>
    </div>
  );
};

const Videos = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="videos"
      onClick={() => navigate(`/webinar/${props.action}/${props.id}`)}
    >
      <div className="thumbnail">
        <img src={props.img} alt="VIDEOS" className="video" />
        <div className="date-cont">
          <p className="date">JAN 22</p>
        </div>
      </div>
      <div className="video-desc">
        <h3>How To Study Abroad </h3>
        <p>DR. Josh </p>
      </div>
    </div>
  );
};

function WebinarSession(props) {
  return (
    <div className="webinar-cont" onClick={props.handleClick}>
      <h5 className="title">{props.title}</h5>
      <p className="total">{props.total}</p>
    </div>
  );
};

function WebinarCountries() {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="webinar-session-text">Webinars</h2>
      <div className="past-upcomming-webinars-section">
        <WebinarSession
          title="Past Webinars"
          total="+22"
          handleClick={() => navigate("/past-webinars")}
        />
        <WebinarSession
          title="Upcoming Webinars"
          total="+15"
          handleClick={() => navigate("/upcoming-webinars")}
        />
      </div>
      <div className="curr-videos">
        <Videos img={"/src/static/assets/img/account/dashboard/video-image1.png"} action={"book"} id={"2344556"} />
        <Videos img={"/src/static/assets/img/account/dashboard/video-image1.png"} action={"watch"} id={"2344556"} />
      </div>
      <div className="top-countries" onClick={() => navigate("/top-countries")}>
        <h1 className="top-text">Top Countries</h1>
        <Country flag={"/src/static/assets/img/account/dashboard/flag-for-india.svg"} name="India" />
        <Country flag={"/src/static/assets/img/account/dashboard/flag-for-nigeria.svg"} name="Australia" />
        <Country flag={"/src/static/assets/img/account/dashboard/flag-for-canada.svg"} name="Nigeria" />
        <Country flag={"/src/static/assets/img/account/dashboard/flag-for-australia.svg"} name="Canada" />
        <Country flag={"/src/static/assets/img/account/dashboard/flag-for-united-states.svg"} name="United State of America" />
      </div>
      <div className="visa-statistic">
        <Piechart
          title="Commisions"
          keyDetails={[
            "Total Commision",
            "Commision Pending",
            "Commision given",
          ]}
          background={["#0263FF", "#FF7723"]}
          data={[9, 4]}
          className={["all", "pending", "accepted"]}
        />
      </div>
    </>
  );
};

// function Table(props) {
//   return (
//     <>
//       {" "}
//       <div className="applicant-cont" onClick={props.handleClick}>
//         <div className="dp-cont">
//           {props.image && (
//             <img
//               src={`http://ec2-34-227-15-84.compute-1.amazonaws.com/${props.image}`}
//               className="dp"
//               alt="DISPLAY-IMG"
//             />
//           )}
//           {props.name && <p className="paragraph name">{props.name}</p>}
//         </div>
//         {props.data &&
//           props.data?.map((data, i) => (
//             <p className="paragraph" key={i}>
//               {data}
//             </p>
//           ))}
//         {props.status && (
//           <p className={`paragraph status ${props.data?.status}`}>
//             {props.data?.status}
//           </p>
//         )}
//         {props.data?.commission && (
//           <p className={`paragraph status ${props.data?.commission}`}>
//             {props.data?.commission}
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

function Option(props) {
  return (
    <div className={`option-box ${props.className}`} onClick={props.onClick}>
      <div className="image-cont">
        <div className="icon">{props.icon}</div>
        <h3 className="text">{props.text}</h3>
      </div>
    </div>
  );
};


function Statistics() {
  const navigate = useNavigate();
  const topUnis = [
    "University of London",
    "University of Machester",
    "University of Torronto",
    "University of London",
    "University of Manchester",
  ];

  const topSchools = [
    "University of London",
    "University of Machester",
    "University of Torronto",
    "University of London",
    "University of Manchester",
  ];

  const unis = topUnis.map((uni, i) => (
    <div key={i}>
      <ul>
        <li>
          <span className="bullet">
            <img src="/src/static/assets/img/account/dashboard/bullet-point.svg" alt="bullet point" />
          </span>{" "}
          {uni}
        </li>
      </ul>
    </div>
  ));
  const schools = topSchools.map((school, i) => (
    <div key={i}>
      <ul>
        <li>
          <span className="bullet">
            <img src="/src/static/assets/img/account/dashboard/bullet-point.svg" alt="bullet point" />
          </span>{" "}
          {school}
        </li>
      </ul>
    </div>
  ));
  return (
    <div className="statistics-cont">
      <div
        className="stat top-uni"
        onClick={() => navigate("/top-universities")}
      >
        <h3>Top 5 Universities</h3>
        {unis}
      </div>
      <div className="stat top-schools">
        <h3>Top 5 Schools</h3>
        {schools}
      </div>
    </div>
  );
};

function AdminDashboard() {

  // const navigate = useNavigate();
  // const allApplicants = data?.data?.map((applicant, i) => {
  //   const { student, school, agent, program, status, universityName, _id } =
  //     applicant;
  //   const { firstName, lastName, avatar, gender } = student;
  //   const name = `${firstName} ${lastName}`;
  //   const image = avatar.file;
  //   const manager = school ? school.manager : agent ? agent.manager : name;

  //   return (
  //     <Table
  //       key={i}
  //       image={image}
  //       name={name}
  //       status={status}
  //       data={[_id, gender, universityName, program, manager, status]}
  //       handleClick={() => navigate(`/student-page/${_id}`)}
  //     />
  //   );
  // });

  return (
    <Layout>

      <section className="admin-dash">
        <div className="w-[100%] relative" style={{ margin: '86px 0px 0px' }}>
        <div className="w-[83%] absolute pb-40 p-8 right-0 footerbottom overflow-hidden">
            <div className="details-cont">
              <div className="detail-one">
                <div className="option">
                  <Option
                    icon={<FaUserGraduate />}
                    text="Students"
                    className="students"
                    onClick={() => navigate("/applicant-page")}
                  />
                  <Option
                    icon={<MdOutlineSchool />}
                    text="School"
                    className="school-box"
                    onClick={() => navigate("/schools-page")}
                  />
                  <Option
                    icon={<FaHeadset />}
                    text="Agents"
                    className="agents"
                    onClick={() => navigate("/agents-page")}
                  />
                  <Option
                    icon={<FaUniversity />}
                    text="Universities"
                    className="universities"
                    onClick={() => navigate("/universities-page")}
                  />
                </div>
                <h1 className="applicant-text">TOP APPLICATIONS</h1>
                <div className="applicant-dashboard-section">
                  <div className="top-applicants">{/* {allApplicants} */}</div>
                </div>
                <div
                  className="see-all-btn"
                  onClick={() => navigate("/applicant-page")}
                >
                  <span>See All</span>
                  <img src="/src/static/assets/img/account/dashboard/arrow1.svg" alt="arrow" />
                </div>
                <div
                  className="course-sections"
                  onClick={() => navigate("/top-courses")}
                >
                  <h3 className="course-text">Top 5 Courses</h3>
                  <div className="course-section">
                    <Course icon={<GoLaw />} text="Law" />
                    <Course icon={<FaUniversity />} text="Accounting" />
                    <Course icon={<IoLanguage />} text="Language" />
                    <Course icon={<MdEngineering />} text="Engineering" />
                    <Course icon={<FaFirstAid />} text="Medicine" />
                  </div>
                </div>
                <div className="Top-statistic">
                  <Statistics />
                </div>
              </div>

              <div className="detail-two">
                <WebinarCountries />
              </div>
            </div>
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default AdminDashboard;
