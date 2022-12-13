import React from "react";
import Smoke from "../../assets/Smoke.png";
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
    <>
      <img className="humo" src={Smoke} alt="" />
      <div className="moments-content">
        <p className="title">Nuestros Momentos Juntos</p>
        <div className="image-content">
          <img className="image-gallery" src={imageOne} alt="" />
          <img className="image-gallery" src={imageTwo} alt="" />
          <img className="image-gallery" src={imageThree} alt="" />
          <img className="image-gallery" src={imageFour} alt="" />
          <img className="image-gallery" src={imageFive} alt="" />
          <img className="image-gallery" src={imageSix} alt="" />
          <img className="image-gallery" src={imageSeven} alt="" />
          <img className="image-gallery" src={imageEight} alt="" />
          <img className="image-gallery" src={imageNine} alt="" />
          <img className="image-gallery" src={imageTen} alt="" />
        </div>
        <img className="humo left bottom" src={Smoke} alt="" />
      </div>
    </>
  );
};
