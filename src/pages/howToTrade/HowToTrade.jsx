import React from "react";
import "./HowToTrade.css";
import finalimg from "../../assets/final-image.png";
import downlaodimg from "../../assets/download.png";
import opinion from "../../assets/opinion.svg";
import trade from "../../assets/trade.svg";
import earn from "../../assets/earn.svg";
import img1 from "../../assets/img-1.png"
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import thumbs from "../../assets/thumbs.png"
import whyus from "../../assets/whyus.png"
const HowToTrade = () => {
  return (
    <div>
      <section className="p-home">
        <div className="how-to-trade-container">
          {/* top */}
          <div className="page-top">
            <div className="page-top-text-side">
              <div className="text-1">
                <span>Earn</span> From Your <br /> Skills
              </div>
              <div className="text-2">
                <span>Analyze.</span>
                <span>Apply TakTik.</span>
                <span>Earn</span>
              </div>
              <div className="get-app-link-input">
                <input
                  placeholder="+91 | Enter Mobile Number"
                  className="phone-number-input"
                ></input>
                <button className="getapplink-button">Get App Link</button>
              </div>
              <div className="download-text">
                <img className="download-image" src={downlaodimg} />
                <div className="availablity-info">
                  Available for <span>Ios&Android</span>
                </div>
              </div>
            </div>
            <div className="page-top-image-side">
              <img className="final-image" src={finalimg} />
            </div>
          </div>

          <div className="page-middle-1">
            <div className="page-middle-items">
              <img src={opinion}></img>
              <div className="mid-font-1">Have An Opinion?</div>
              <div className="bottom-font">
                Select the event and purchase share of <br /> your future
                prediction
              </div>
            </div>
            <div className="page-middle-items">
              <img src={trade}></img>
              <div className="mid-font-2">Trade on Local to Global events</div>
              <div className="bottom-font">
                Buy or sell your positions while <br /> the market is in
                progress
              </div>
            </div>
            <div className="page-middle-items">
              <img src={earn}></img>
              <div className="mid-font-3">Earn from what you know</div>
              <div className="bottom-font">
                Earn by making an early exit or wait for <br /> the event
                outcome and if your position <br />
                wins you make money
              </div>
            </div>
          </div>

          <div className="page-bottom">
            <div className="background-how-to-trade">
              <div className="title-how-to-trade">How To Trade on TakTik?</div>

              <div className="app-images-1">
                <img className="app-image" src={img1} />
                <div className="text-material">
                  <div className="kal">
                    <div>
                      Predict the outcome & TakTik to maximize your earnings
                    </div>
                    <img className="thumb-img" src={thumbs}></img>
                  </div>
                </div>
              </div>

              <div className="app-images-2">
                <div className="text-material-1">
                  <div>Purchase the shares of predicted outcome</div>
                  <div>
                    Click on the option and set the Quantity, Price and Swip
                    right to Buy
                  </div>
                </div>
                <img className="app-image-2" src={img2}></img>
              </div>

              <div className="app-images-3">
                <img className="app-image" src={img3}></img>
                <div className="text-material-3">
                  <div>Awaits results, Earn & Withdraw profits</div>
                  <div>
                    If your option is correct after the settlement period, your
                    earning will be added to your wallet
                  </div>
                  <div>You can instantly withdraw using UPI</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="why-us">
            <div className="why-us-title">Why Trust Us?</div>
            <img className="trust-us" src={whyus}></img>
          </div> */}

          <div className="page-middle-1">
            <div className="page-middle-items">
              <img src={opinion}></img>
              <div className="mid-font-1">Have An Opinion?</div>
              <div className="bottom-font">
                Select the event and purchase share of <br /> your future
                prediction
              </div>
            </div>
            <div className="page-middle-items">
              <img src={trade}></img>
              <div className="mid-font-2">Trade on Local to Global events</div>
              <div className="bottom-font">
                Buy or sell your positions while <br /> the market is in
                progress
              </div>
            </div>
            <div className="page-middle-items">
              <img src={earn}></img>
              <div className="mid-font-3">Earn from what you know</div>
              <div className="bottom-font">
                Earn by making an early exit or wait for <br /> the event
                outcome and if your position <br />
                wins you make money
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
};

export default HowToTrade;
