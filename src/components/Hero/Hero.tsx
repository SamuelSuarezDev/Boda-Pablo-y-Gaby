import "./styled.css";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div id="image" className="container-images">
          <img
            src="https://i.postimg.cc/15LcYx3y/Whats-App-Image-2022-12-02-at-10-58-12-AM-1.jpg"
            alt=""
            className="background one"
          />

          <img
            src="https://i.postimg.cc/yd87qb8N/Whats-App-Image-2022-12-02-at-10-58-12-AM-3.jpg"
            alt=""
            className="background two"
          />

          <img
            src="https://i.postimg.cc/vmQs9N9v/Whats-App-Image-2022-12-02-at-10-58-13-AM.jpg"
            alt=""
            className="background three"
          />
        </div>
        <div className="header-info">
          <p className="title-names">
            Pablo <br /> & <br />
            Gabriela
          </p>
          <p className="subtitle">
            Te invitamos a compartir la alegria de unir nuestras vidas
          </p>
          <p className="day">Para este día faltan:</p>
          {/*       <CountDownTimer />
           */}{" "}
        </div>
      </div>
      <img
        className="flowers"
        src="https://i.postimg.cc/jdnwkZ2T/Blue-Violet-Watercolour-Flowers-Wedding-Invitation-1.png"
        alt="flores"
      />
    </>
  );
};

export default Hero;
