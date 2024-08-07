import Layout from "../../../layout/Layout";
import "../../../../../static/assets/css/account/pages/Inbox.css";

import Gather from "../../../../../static/assets/img/account/dashboard/gather.svg";
import Articleimage from "../../../../../static/assets/img/account/dashboard/studentprofile/article-image.svg"
import Unimage from "../../../../../static/assets/img/account/dashboard/studentprofile/uni-i-img.png"



const Inbox = () => {
  return (
    <Layout>
      <div className="inbox-page">
        <div className="inbox-wrapper">
          <div className="left">
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
            <div className="uni-inbox">
              <div className="uni-i-img">
                <img src={Unimage} alt="university-inbox" />
              </div>
              <div className="side">
                <h1>Indian University</h1>
                <p>
                  We are excited to inform you that you have been shortlisted to
                  study computer engineering
                </p>
                <p>in Indian university...</p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="article-card">
              <div className="article-img">
                <img src={Articleimage} alt="article" className="pt-6" />
              </div>

              {/* <div className="article-text"> */}
              <span>We help keep you up to date on your</span>
              <span className="pb-3">application</span>
              {/* </div> */}

              <button className="bg-[#0D2C58] w-[80%] mx-auto text-white rounded-lg py-3">
                Get Connected
              </button>
            </div>
            <div className="below">
              <br />
              <div className="w-[148px] h-[150px] mx-auto mt-[23px] mb-[17px]">
                <img src={Gather} alt="gather" />
              </div>
              <p className="pb-3">
                Join our live webinar section to guide you on your application
                process
              </p>
              <button className="bg-[#0D2C58] w-[80%] mx-auto ml-11 text-white rounded-lg py-3">
                Get Connected
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inbox;
