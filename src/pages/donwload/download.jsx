import React, { useEffect } from "react";
import download1 from "../../assets/download/download-1.png";
import download2 from "../../assets/download/download-2.png";
import download3 from "../../assets/download/download-3.png";
import download4 from "../../assets/download/donwload-4.png";
import download5 from "../../assets/download/donwload-5.png";

import "./download.css";
const Download = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="download-container">
      <div className="points-container">
        <div className="image-container">
          <img className="img-2" src={download1} alt="" />
          <span>1. Tap on "Download anyway" to begin downloading the apk.</span>
        </div>
        <div className="image-container">
          <img className="img-3" src={download2} alt="" />
          <span>
            2. Once the download is complete, an installation prompt will
            appear.
          </span>
        </div>
        <div className="image-container">
          <img className="img-1" src={download3} alt="" />
          <span>
            3. Tap on "Install". Make sure you've allowed your browser as a
            trusted source in settings.
          </span>
        </div>
        <div className="image-container">
          <img className="img-1" src={download4} alt="" />
          <span>4. Wait until the app is installed.</span>
        </div>
        <div className="image-container">
          <img className="img-1" src={download5} alt="" />
          <span>
            5. Once installation is complete, tap "Open" to run the app.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Download;
