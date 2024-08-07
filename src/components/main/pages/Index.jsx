/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["OTechCup", "Kenkszii"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import React from "react";
import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";

import Layout from "../../layout/Layout.jsx";

import Image1 from "../../../static/assets/img/main/index/slider-image1.png";
import Image2 from "../../../static/assets/img/main/index/slider-image2.png";
import Image3 from "../../../static/assets/img/main/index/slider-image3.png";
import Webinarpic from "../../../static/assets/img/main/index/webinar-pic.png";
import Servicesmbbsindia from  "../../../static/assets/img/main/index/services-mbbs-india.png";
import Servicesmbbs from "../../../static/assets/img/main/index/services-mbbs.png";
import Testimonialpic1 from "../../../static/assets/img/main/index/testimonial-pic1.png";
import Testimonialpic2 from "../../../static/assets/img/main/index/testimonial-pic2.png";
import Testimonialpic3 from "../../../static/assets/img/main/index/testimonial-pic3.png";
import Arrow1 from "../../../static/assets/img/main/index/arrow1.svg";
import Arrow2 from "../../../static/assets/img/main/index/arrow2.svg";
import Dashline from "../../../static/assets/img/main/index/dashed-line.png";
import Bluecardimage2 from "../../../static/assets/img/main/index/blue-cardImage2.png";
import Bluecardimage1 from "../../../static/assets/img/main/index/blue-cardImage1.png";
import Bluecardimage3 from "../../../static/assets/img/main/index/blue-cardImage3.png";
import Circleimage from  "../../../static/assets/img/main/index/circle-image.png";
import Image5  from  "../../../static/assets/img/main/index/image5.png";
import Boy  from  "../../../static/assets/img/main/index/boy.png";
import Plane from "../../../static/assets/img/main/index/plane.png";
import Sphere from "../../../static/assets/img/main/index/sphere.png";
import University from "../../../static/assets/img/main/index/university.png";
import ComputerRoom from "../../../static/assets/img/main/index/computer-room.png";






function Index() {

  const [images, setImages] = useState([
    Image1,
    Image2,
    Image3,
  ]);
  const [slideImage, setSlideImage] = useState(1);

  function handleSwap(d) {
    if (d === 1) {
      const newImages = [...images];
      [newImages[0], newImages[1]] = [newImages[1], newImages[0]];
      setImages(newImages);
    } else {
      const newImages = [...images];
      [newImages[1], newImages[2]] = [newImages[2], newImages[1]];
      setImages(newImages);
    }
  }

  const webinarPics = [
    Webinarpic, 
    Servicesmbbsindia, 
    Servicesmbbs
  ];

  const [webinarSlider, setWebinarSlider] = useState(0);

  function handleSlideWebinar(n) {
    setWebinarSlider(n);
  }

  const testimonialPics = [
    Testimonialpic1, 
    Testimonialpic2,
    Testimonialpic3
  ];

  // create dummy testimonies
  const testimonyData = [
    {
      name: "Andrew Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Joshua Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Park Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
  ];

  // get elements
  const dotsEl = useRef(null);
  const testimoniesEl = useRef(null);

  // add bg to dot
  function setDot(index) {
    const dotEls = dotsEl.current.childNodes;
    dotEls.forEach((child) => {
      child.classList.remove("bg-[#0D2C58]");
      child.classList.add("bg-[#C4C4C4]");
    });
    dotEls[index].classList.add("bg-[#0D2C58]");
    dotEls[index].classList.remove("bg-[#C4C4C4]");
  }

  // translate element
  function translateX(index) {
    const testimonyEls = testimoniesEl.current.childNodes;
    testimonyEls.forEach((el) => {
      el.style.transform = `translateX(-${+index * 100}%)`;
    });
  }

  // handleDot when selected
  function handleDot(e) {
    const index = e.currentTarget.dataset.index;
    position = +index;
    setDot(position);
    translateX(position);
  }

  // handleSlide when clicked
  let position = 0;
  function handleSlide(e) {
    const direction = e.currentTarget.dataset.slide;
    const testimonyEls = testimoniesEl.current.childNodes;
    const max = testimonyEls.length - 1;

    if (direction === "right") {
      if (position >= max) return;
      position++;
      setDot(position);
      translateX(position);
    } else if (direction === "left") {
      if (position < 1) return;
      position--;
      setDot(position);
      translateX(position);
    }
  }

  // map through testimony data
  const testimony = testimonyData.map((testimony, i) => {
    const prev = i - 1 < 0 ? testimonyData.length - 1 : i - 1;
    const next = i + 1 > testimonyData.length - 1 ? 0 : i + 1;

    return (
      <div key={i} className="flex min-w-full justify-between">
        <button
          className="control prev w-[178px] relative hidden lg:block"
          onClick={handleSlide}
          data-slide="left"
        >
          <img
            className="h-full"
            src={testimonialPics[prev]}
            alt={`testimony 0${prev}`}
          />
          <div className="overlay flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0 bg-[#00749169]">
            <img src={Arrow2} alt="" />
          </div>
        </button>
        <div className="current flex items-center lg:w-[65%] shadow-[0_0_0_rgba(0,0,0,0.25)] border border-gray-100">
          <div className="image ">
            <img
              className="h-full"
              src={testimonialPics[i]}
              alt={`testimony 0${i}`}
            />
          </div>
          <div className="text-name w-3/4 p-8">
            <p className="text-base md:text-xl">{testimony.text}</p>
            <div className="user-name mt-4">
              <p className="text-[#0D2C58] font-semibold text-lg md:text-2xl">
                {testimony.name}
              </p>
            </div>
          </div>
        </div>
        <button
          className="control next w-[178px] relative hidden lg:block"
          onClick={handleSlide}
          data-slide="right"
        >
          <img
            className="h-full"
            src={testimonialPics[next]}
            alt={`testimony 0${next}`}
          />

          <div className="overlay flex flex-col items-center 
                justify-center absolute top-0 bottom-0 right-0 left-0 bg-[#00749169]"
            >

            <img src={Arrow1} alt="" />
            
          </div>
        </button>
      </div>
    );
  });

  const dots = testimonyData.map((dot, i) => (
    <button
      key={i}
      className={`dot w-[20px] h-[20px] rounded-full ${i === 0 ? "bg-[#0D2C58]" : "bg-[#C4C4C4]"
        } `}
      onClick={handleDot}
      data-index={i}
    />
  ));

  return (
    <Layout>
      <div className="homepage">
        <div className="flex flex-col justify-center text-white h-[500px] md:h-[600px] bg-[url(/src/static/assets/img/main/index/background_1.png)] bg-no-repeat bg-cover">
          <div className="lg:w-[54%] ml-4 md:ml-16">

            <h1 className="text-4xl font-bold text-white md:text-6xl">
              We create a brighter future to educate by bring great scholars
            </h1>

            <Link
              to={`/`}
              className="inline-block px-8 py-4 mt-6 text-xl font-semibold rounded-lg button bg__gradient md:text-2xl"
            >
              Profile Evaluation
            </Link>

          </div>
        </div>


        <article className="min-h-[1300px] md:min-h-[1100px] lg:min-h-[700px] flex flex-col gap-y-10 lg:flex-row lg:justify-between text-white bg-[url(/src/static/assets/img/main/index/blue_card.png)] bg-cover bg-no-repeat relative top-[-8rem] lg:top-[-5rem] py-48 md:py-40 px-4 md:px-8 lg:px-16">
          <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
            <h2 className="mb-4 text-4xl font-semibold text-center lg:text-left lg:text-5xl">
              Study Abroad
            </h2>

            <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
              Are you ready for an incredible adventure? Imagine studying in a
              different country, making new friends, and experiencing new cultures
              firsthand! Studying abroad is an amazing opportunity to learn about
              new cultures, meet new friends, and improve your language skills.
              Canada, Australia, USA, and UK are all excellent destinations for
              students looking to excel in their studies and embark on an adventure
              of a lifetime. With Offer Letter by your side, you'll have access to a
              wide range of educational opportunities and resources to help you
              achieve your goals. Get ready to discover new passions, make lifelong
              connections, and take your first step towards a bright future!
            </p>

            <a
              href="#learn-more"
              className="block px-16 py-4 text-lg text-black bg-white rounded-lg md:text-2xl"
            >
              Learn More
            </a>
          </div>

          <div className="lg:w-[50%] h-[300px] relative">
            <div className="absolute top-0 left-[10%] z-50">
              <img src={Dashline} alt="" />
            </div>

            <div className="absolute top-[10%] left-[5%]  z-50">
              <div className="bg-white text-black flex items-center round__bl__tr">
                <div>
                  <img src={Circleimage} alt="" />
                </div>
                <div style={{ margin: "10px 10px 20px 10px" }}>

                  <h4 className="text-sm font-semibold">
                    James Sam
                  </h4>

                  <p className="text-xs">
                    studying at the university of London
                  </p>

                </div>
              </div>
            </div>

            <img
              src={Bluecardimage2}
              alt=""
              className="absolute right-0 md:right-[10%] bottom-[10%] z-50"
            /> 

            <img
              src={Bluecardimage1}
              alt=""
              className="w-full md:w-auto absolute right-[0%] md:right-[27%] "
            />

            <img
              src={Bluecardimage3}
              alt=""
              className="absolute top-[70%] left-0 md:left-[5%]"
            />

            <div className="absolute bottom-[-20%] right-[10%]  z-50">

              <div className="bg-white text-black flex items-center round__bl__tr">
                <div>
                  <img src={Circleimage} alt="" />
                </div>
                <div style={{ margin: "10px 10px 20px 10px" }}>

                  <h4 className="text-sm font-semibold">
                    James Sam
                  </h4>

                  <p className="text-xs">
                    studying at the university of London
                  </p>
                  
                </div>
              </div>



            </div>
          </div>
        </article>
      </div>


      <section className="flex flex-col gap-20 lg:flex-row items-center lg:justify-between px-4 md:px-8 lg:px-16 pb-20">
        <div className="w-[95%] md:w-[80%] lg:w-[50%] bg__gradient shadow-[0_0_5px_rgba(0,0,0,0.36)] rounded-[32px] pt-16 pb-8 md:pt-24 lg:pt-20">
          <div className="flex items-center justify-center">
            <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px]">

              <img
                src={images[0]}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>
            <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px] scale-125">

              <img
                src={images[1]}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>
            <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px]">

              <img
                src={images[2]}
                alt=""
                className="w-full h-full object-cover"
              />

            </div>
          </div>
          <div className="dots flex items-center justify-center pt-10">
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={() => handleSwap(1)}
                className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#858484]"
              />

              <button
                type="button"
                className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#fff]"
              />

              <button
                onClick={() => handleSwap(-1)}
                type="button"
                className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#858484]"
              />

            </div>
          </div>
        </div>


        <div className="lg:w-[45%] flex flex-col items-center lg:items-start">

          <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
            Study MBBS Abroad
          </h2>

          <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
            Looking for a thrilling and rewarding career in the field of medicine?
            Studying MBBS abroad in countries like Russia, Kyrgyzstan, Kazakhstan,
            Philippines, or Bangladesh is a great opportunity to gain a
            world-class education in medicine and surgery. In Russia, you'll get
            to study in state-of-the-art facilities while immersing yourself in
            the country's rich culture. Kyrgyzstan, Kazakhstan, and Philippines
            offer affordable tuition fees and a chance to experience diverse and
            friendly communities. Bangladesh has top-ranked medical universities
            and a strong emphasis on research and innovation. With Offer Letter's
            guidance and support, you can make your dream of becoming a doctor a
            reality and make a significant impact on people's lives.
          </p>

          <a
            href="#learn-more"
            className="bg__gradient text-white text-lg md:text-2xl block px-16 py-4 rounded-lg"
          >
            Learn More
          </a>

        </div>
      </section>


      <article className="min-h-[1200px] md:min-h-[1000px] lg:min-h-[700px] flex flex-col gap-y-10 lg:flex-row lg:justify-between text-white bg__gradient py-48 md:py-40 px-4 md:px-8 lg:px-16">
        <div className="lg:w-[45%] flex flex-col items-center lg:items-start">

          <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
            Study in India
          </h2>

          <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
            Studying in India is an incredible opportunity to experience a diverse
            and fascinating culture, gain valuable skills, and pursue your
            academic goals.With over 35 million students enrolled in higher
            education institutions, India is home to one of the largest education
            systems in the world. Did you know that India is also the birthplace
            of the number system and the decimal point? India offers students the
            chance to study with outstanding academics, explore stunning
            landscapes, and experience a unique way of life. With hard work and
            determination, you can make your dreams of studying in India a reality
            and unlock a world of possibilities!
          </p>

          <a
            href="#learn-more"
            className="bg-white text-black text-lg md:text-2xl block px-16 py-4 rounded-lg"
          >
            Learn More
          </a>

        </div>

        <div className="lg:w-[50%] h-[300px] relative">
          <div className="absolute top-0 left-[10%] z-50">

            <img src={Dashline} alt="" />

          </div>
         

          <div className="absolute top-[10%] left-[5%]  z-50">
            <div className="bg-white text-black flex items-center round__bl__tr">
              <div>

                <img src={Circleimage} alt="" />

              </div>
              <div style={{ margin: "10px 10px 20px 10px" }}>

                <h4 className="text-sm font-semibold">
                  James Sam
                </h4>

                <p className="text-xs">
                  studying at the university of London
                </p>

              </div>
            </div>
          </div>

          <img
            src={Bluecardimage2}

            alt=""
            className="absolute right-0 md:right-[10%] bottom-[10%] z-50"
          />

          <img
            src={Bluecardimage1}
            alt=""
            className="absolute right-[10%] md:right-[27%]"
          />

          <img src={Bluecardimage3}
            alt=""
            className="absolute top-[70%] left-[5%]" />

          <div className="absolute bottom-[-20%] right-[10%]  z-50">
            <div className="bg-white text-black flex items-center round__bl__tr">
              <div>

                <img src={Circleimage} alt="" />

              </div>

              <div style={{ margin: "10px 10px 20px 10px" }}>

                <h4 className="text-sm font-semibold">
                  James Sam
                </h4>

                <p className="text-xs">
                  studying at the university of London
                </p>

              </div>
            </div>
          </div>
        </div>
      </article>


      <section className="flex flex-col lg:flex-row items-center gap-20 lg:justify-between px-4 md:px-8 lg:px-16 py-20 md:py-40">
        <div className="lg:w-[50%]">
          <div className="imageFive">

            <img img src={Image5} alt="" />

          </div>
        </div>

        <div className="lg:w-[46%] flex flex-col items-center lg:items-start">

          <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
            Study MBBS in India
          </h2>

          <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
            Did you know that India is home to some of the most prestigious
            medical colleges in the world? By studying MBBS in India, you can gain
            a competitive edge in your career while experiencing a rich and
            diverse culture. With a vast range of specializations to choose from
            and endless opportunities for hands-on experience, the sky's the limit
            for your future in medicine. With hard work and dedication, you can
            make your dreams of studying MBBS in India a reality and make a
            difference in the world of medicine. Get ready for an unforgettable
            adventure of learning and growth!.
          </p>

          <a
            href="#learn-more"
            className="bg__gradient text-white text-lg md:text-2xl block px-16 py-4 rounded-lg"
          >
            Learn More
          </a>

        </div>
      </section>


      <div className="flex flex-col lg:flex-row gap-20 lg:gap-0  items-center lg:justify-evenly px-4 md:px-8 lg:px-16 pb-20 lg:pb-40 text-[#0D2C58] font-bold">
        <div className="flex flex-col items-center justify-center gap-6">

          <img src={Boy} alt="" />

          <div>

            <h3 className="text-3xl  text-center">
              7000+
            </h3>

            <p className="text-2xl  text-center ">
              Students Trained
            </p>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">

          <img src={Plane} alt="" />

          <div>

            <h3 className="text-3xl  text-center">
              1000+
            </h3>

            <p className="text-2xl  text-center "> 
              Students Sent Abroad
            </p>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">

          <img src={Sphere}alt="" style={{ transform: "translateY(20px)" }} />

          <div>

            <h3 className="text-3xl  text-center">
              12
            </h3>

            <p className="text-2xl  text-center">
              Countries Around the 
              <br /> world
            </p>

          </div>
        </div>
      </div>


      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-20 flex-col lg:flex-row lg:justify-around px-4 md:px-8 lg:px-16 pb-20">
        <div className="bg-[#0D2C58] rounded-[30px] text-white">
          <div>

            <img src={University } alt="" className="w-full rounded-[30px]" />

          </div>

          <div className="px-4 pb-12 flex flex-col gap-4 py-6">

            <h3 className="text-xl md:text-2xl font-bold">
              Study In top universities around the world
            </h3>

            <p className="text-base md:text-xl">
              We believe in your dreams and we strive hard to make your dreams
              come true.
            </p>

          </div>
        </div>

        <div className="bg-[#0D2C58] text-white rounded-[30px]">
          <div>

            <img src={ComputerRoom} alt="" className="w-full rounded-[30px]" />

          </div>

          <div className="px-4 pb-12 flex flex-col gap-4 py-6">

            <h3 className="text-xl md:text-2xl font-bold">
              Meet Expert around the world
            </h3>

            <p className="text-base md:text-xl">
              great webinar with top expert to set and guide you on your career
              path.
              <span className="block mt-4">
                JOIN US NOW
              </span>
            </p>

          </div>
        </div>

        <div className="bg-[#0D2C58] text-white rounded-[30px]">
          <div>

            <img src={University} alt="" className="w-full rounded-[30px]" />

          </div>

          <div className="px-4 pb-12 flex flex-col gap-4 py-6">

            <h3 className="text-xl md:text-2xl font-bold">
              Study In top universities around the world
            </h3>

            <p className="text-base md:text-xl">
              We believe in your dreams and we strive hard to make your dreams
              come true.
            </p>

          </div>
        </div>
      </div>
      

      <div className="min-h-[900px] flex flex-col items-center gap-16 py-20 md:py-40 px-4 md:px-8 lg:px-16 bg-[url(/src/static/assets/img/main/index/webinar-card.png)]  bg-cover bg-no-repeat text-white">

        <h1 className="text-4xl md:text-5xl text-center font-semibold">
          Webinar Session
        </h1>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[50%]">

            <img src={webinarPics[webinarSlider]} alt="" />

            <div className="flex items-center justify-center py-6">
              <div className="flex items-center gap-4">

                <button
                  onClick={() => handleSlideWebinar(0)}
                  type="button"
                  className={`w-[24px] h-[24px] rounded-full ${webinarSlider === 0 ? "bg-white" : "bg-[#858484]"
                    }`}
                />

                <button
                  onClick={() => handleSlideWebinar(1)}
                  type="button"
                  className={`w-[24px] h-[24px] rounded-full ${webinarSlider === 1 ? "bg-white" : "bg-[#858484]"
                    }`}
                />

                <button
                  onClick={() => handleSlideWebinar(2)}
                  type="button"
                  className={`w-[24px] h-[24px] rounded-full ${webinarSlider === 2 ? "bg-white" : "bg-[#858484]"
                    }`}
                />

              </div>
            </div>
          </div>

          <div className="lg:w-[35%] flex flex-col items-center lg:items-start">

            <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
              How to submit a CV
            </h2>

            <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
              Having a good CV goes a long way in boosting your application, in
              this video you will learn certain criterias required to create and
              submit your the right way.
            </p>

            <a
              href="#"
              className="bg-white text-black text-lg md:text-2xl block px-16 py-4 rounded-lg"
            >
              Join Webinar
            </a>

          </div>
        </div>
      </div>


      <div className="flex flex-col gap-4 py-20 md:py-40 px-4 md:px-8 lg:px-16">

        <h1 className="text-4xl md:text-5xl text-center font-semibold">
          OUR TESTIMONY
        </h1>

        <div className="flex overflow-hidden" ref={testimoniesEl}>
          {testimony}
        </div>

        <div className="flex items-center justify-center gap-4" ref={dotsEl}>
          {dots}
        </div>

      </div>
    </Layout>
  );
};


export default Index;
