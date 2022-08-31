import React from "react";
import "./HowToTrade.css";
import { useNavigate } from "react-router-dom";

import apk from "../../assets/taktik.apk"
//Images

import sun from "../../assets/gifs/animation_500_l798wqef.gif";
import weather from "../../assets/gifs/animation_500_l7995k5y.gif";
import downlaodimg from "../../assets/download.png";
import opinion from "../../assets/opinion.svg";
import trade from "../../assets/trade.svg";
import earn from "../../assets/earn.svg";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import thumbs from "../../assets/thumbs.png";
import secure from "../../assets/secure.png";
import privacy from "../../assets/trust.png";
import trust from "../../assets/trust1.png";


//Componenets
import Faq1 from "../../components/faq/Faq";
import HowToTradeMob from "../../components/howToTrade/HowToTradeMob";

const HowToTrade = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/download");
  };

  return (
    <div>
      <section className="p-home">
        <div className="how-to-trade-container">
          {/* top */}
          <div className="page-top">
            <div className="page-top-text-side">
              <div className="text-1">
                <span>Earn</span> From Your Skills
              </div>
              <div className="text-2">
                <span>Analyze.</span>
                <span>Apply TakTik.</span>
                <span>Earn</span>
              </div>
              <div className="download-text">
                <a
                  href={apk}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  onClick={handleClick}
                >
                  <img className="download-image" src={downlaodimg} alt="" />
                </a>

                <div className="availablity-info">
                  Available for <a href="/">Android</a>
                </div>
              </div>
            </div>
            <div className="page-top-image-side">
              <img className="weather" src={weather} alt="" />
              <img className="sun" src={sun} alt="" />
            </div>
          </div>

          <div className="page-middle-1">
            <div className="page-middle-items">
              <img src={opinion} alt=""></img>
              <div className="mid-font-1">Have An Opinion?</div>
              <div className="bottom-font">
                Select the event and purchase share of your future prediction
              </div>
            </div>
            <div className="page-middle-items">
              <img src={trade} alt=""></img>
              <div className="mid-font-2">Trade on Local to Global events</div>
              <div className="bottom-font">
                Buy or sell your positions while the market is in progress
              </div>
            </div>
            <div className="page-middle-items">
              <img src={earn} alt=""></img>
              <div className="mid-font-3">Earn from what you know</div>
              <div className="bottom-font">
                Earn by making an early exit or wait for the event outcome and
                if your position wins you make money
              </div>
            </div>
          </div>

          <div className="page-bottom-mobile">
            <HowToTradeMob />
          </div>

          <div className="page-bottom">
            <div className="background-how-to-trade">
              <div className="title-how-to-trade">How To Trade on TakTik?</div>

              <div className="howtotrade-container">
                <div className="colummn-1">
                  <img className="app-image" src={img1} alt="" />

                  <div className="text-material-1">
                    <br />
                    <div className="bold-text">
                      Purchase the shares of predicted outcome
                    </div>
                    <br />
                    <div className="small-text">
                      Click on the option and set the <br /> Quantity, Price and
                      Swip right to Buy
                    </div>
                  </div>

                  <img className="app-image" src={img3} alt=""></img>
                </div>
                <div className="lines">
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <div className="line-3"></div>
                </div>
                <div className="colummn-2">
                  <div className="text-material">
                    <div className="bold-text">
                      Select an event based on your expertise
                    </div>
                    <br />
                    <div className="small-text">
                      Predict the outcome & TakTik to <br /> maximize your
                      earnings
                    </div>
                    <img className="thumb-img" src={thumbs} alt=""></img>
                  </div>

                  <img className="app-image" src={img2} alt=""></img>

                  <div className="text-material-3">
                    <div className="bold-text">
                      Awaits results, Earn & Withdraw profits
                    </div>
                    <br />
                    <div className="small-text">
                      If your option is correct after the settlement period,
                      your earning will be added to your wallet <br />
                      <br />
                      You can instantly withdraw using UPI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-section">
            <Faq1 />
            <div className="button-bar">
              <a
                href="/faq"
                className="project-button dark-btn"
                rel="noreferrer"
                target="_blank"
              >
                If you Have any further questions check here
              </a>
            </div>
          </div>

          <div className="page-middle-2">
            <div className="why-us-title">Why Trust Us?</div>
            <div className="trust-items">
              <div className="page-middle-items">
                <img className="trust-us-images" src={secure} alt=""></img>
                <div className="mid-font-1">Secure</div>
                <div className="bottom-font">
                  All transactions here are SSL encrypted
                </div>
              </div>
              <div className="page-middle-items">
                <img className="trust-us-images" src={privacy} alt=""></img>
                <div className="mid-font-2">Privacy</div>
                <div className="bottom-font">
                  We respect the value of your data and do not share with anyone
                  without your consent
                </div>
              </div>
              <div className="page-middle-items">
                <img className="trust-us-images" src={trust} alt=""></img>
                <div className="mid-font-3">Trust</div>
                <div className="bottom-font">
                  We are group of IITians, building this platform passionately
                  for you. You can reach the founder at
                  meetmanish@applytaktik.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToTrade;
