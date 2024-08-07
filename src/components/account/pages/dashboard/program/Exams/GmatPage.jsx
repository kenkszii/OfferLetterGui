import Layout from "../../../../layout/Layout"

import Articleimage from "../../../../../../static/assets/img/account/dashboard/studentprofile/article-image.svg";
import Video from "../../../../../../static/assets/img/account/dashboard/video.png";
import Vidimage from "../../../../../../static/assets/img/account/dashboard/vid-image.png";


function GmatPage() {
  return (
    <Layout>
      <div className="flex justify-center items-center w-full bg-white pt-14">
      <div className="flex justify-end w-[90%] mt-16 pb-16">
      <div className="gmat-page w-[80%] mt-4">

        <h1 className="text-center font-bold text-lg pb-12">
          GMAT online learning provide you useful materials to help you get
          started
        </h1>

        <div className="pb-10">
          <p className="md:ml-12 pb-3 font-bold text-[#0D2C58] text-2xl w-16 mb-3">Article</p>
          <div className="md:flex md:justify-around">

            <div className="mb-5 md:mb-0 md:w-[28%] w-full h-[300px] flex justify-center items-center flex-col bg-[#EFF8FF] rounded-lg">
              <div className="w-[175px] h-[175px]">
                <img src={Articleimage} alt="article" />
              </div>
              <div className="px-3">
                <p>
                  12 tips to help you prepare for your
                </p>

                <p>
                  GMAT exam
                </p>
              </div>
            </div>

            <div className="mb-5 md:mb-0 md:w-[28%] w-full h-[300px] flex justify-center items-center flex-col bg-[#EFF8FF] rounded-lg">
              <div className="w-[175px] h-[175px]">
                <img src={Articleimage} alt="article" />
              </div>
              <div className="px-3">
                <p>
                  12 tips to help you prepare for your
                </p>

                <p>
                  GMAT exam
                </p>
              </div>
            </div>

            <div className="mb-5 md:mb-0 md:w-[28%] w-full h-[300px] flex justify-center items-center flex-col bg-[#EFF8FF] rounded-lg">
              <div className="w-[175px] h-[175px]">
                <img src={Articleimage} alt="article" />
              </div>
              <div className="px-3">
                <p>12 tips to help you prepare for your</p>
                <p>GMAT exam</p>
              </div>
            </div>

          </div>
        </div>

        <div className="gmat-videos pb-5">
          <p className="md:ml-12 pb-3 font-bold text-[#0D2C58] text-2xl w-16 mb-3">Videos</p>

          <div className="md:flex md:justify-around">

            <div className="bg-[#EFF8FF] w-full md:w-[28%] h-auto flex flex-col rounded-lg mb-4 md:mb-0">
              <div className="h-[230px] rounded-xl">
                <img src={Video} alt="/" className="object-cover mt-0" />
              </div>
              <div className="flex justify-between items-end py-5 px-4">
                <div className="flex items-center">
                  <img
                    src={Vidimage}
                    alt="vid-image"
                    className="w-[20px] h-[20px] object-contain"
                  />
                  <h5 className="text-lg">Eduglobal</h5>
                </div>
                <h6 className="text-xs">2000 views</h6>
              </div>
            </div>

            <div className="bg-[#EFF8FF] w-full md:w-[28%] h-auto flex flex-col rounded-lg mb-4 md:mb-0">
              <div className="h-[230px] rounded-xl">
                <img src={Video} alt="/" className="object-cover mt-0" />
              </div>
              <div className="flex justify-between items-end py-5 px-4">
                <div className="flex items-center">
                  <img
                    src={Vidimage}
                    alt="vid-image"
                    className="w-[20px] h-[20px] object-contain"
                  />
                  <h5 className="text-lg">Eduglobal</h5>
                </div>
                <h6 className="text-xs">2000 views</h6>
              </div>
            </div>

            <div className="bg-[#EFF8FF] w-full md:w-[28%] h-auto flex flex-col rounded-lg mb-4 md:mb-0">
              <div className="h-[230px] rounded-xl">
                <img src={Video} alt="/" className="object-cover mt-0" />
              </div>
              <div className="flex justify-between items-end py-5 px-4">
                <div className="flex items-center">
                  <img
                    src={Vidimage}

                    alt="vid-image"
                    className="w-[20px] h-[20px] object-contain"
                  />
                  <h5 className="text-lg">Eduglobal</h5>
                </div>
                <h6 className="text-xs">2000 views</h6>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>



      </div>
    </Layout>
  )
}

export default GmatPage
