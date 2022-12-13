import React from "react";
import imageOne from "../../assets/image00001.jpeg";
import imageTwo from "../../assets/image00002.jpeg";
import imageThree from "../../assets/image00003.jpeg";
import imageFour from "../../assets/image00004.jpeg";
import imageFive from "../../assets/image00005.jpeg";
import imageSix from "../../assets/image00006.jpeg";
import imageSeven from "../../assets/image00007.jpeg";
import imageEight from "../../assets/image00008.jpeg";
import imageNine from "../../assets/image00009.jpeg";
import imageTen from "../../assets/image00010.jpeg";
import "./styled.css";
export const Moments = () => {
  return (
    <div className="moments-content">
      <p className="title">Nuestros Momentos Juntos</p>
      <div className="image-content">
          <img src={imageOne} alt="" />
          <img src={imageTwo} alt="" />
          <img src={imageTwo} alt="" />
          <img src={imageTwo} alt="" />
          <img src={imageTwo} alt="" />
      </div>
    </div>
  );
};
