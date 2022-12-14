import "./styled.css";
import { useState, useRef } from "react";
import Flowers from "../../assets/Flowers.png";
function Hero() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const countDate = new Date("01/15/2023 4:00 PM").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = countDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  });
  return (
    <>
      <div className="container">
        <div id="image" className="container-images">
          <img
            src="https://i.postimg.cc/Zq9rP0bH/Whats-App-Image-2022-12-02-at-10-58-11-AM-1.jpg"
            alt=""
            className="background one"
          />

          <img
            src="https://i.postimg.cc/nhS4QqJM/Whats-App-Image-2022-12-02-at-10-58-11-AM.jpg"
            alt=""
            className="background two"
          />
          <img
            src="https://i.postimg.cc/fbJsQQvj/Whats-App-Image-2022-12-02-at-10-58-12-AM.jpg"
            alt=""
            className="background three"
          />
        </div>
        <div className="header-info">
          <p className="title-names">
            Pablo <br /> & <br />
            Gabriela
          </p>
          <p className="subtitle invite">
            Te invitamos a compartir la alegria de unir nuestras vidas
          </p>
          <p className="day">Para este día faltan:</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="date">
              <p>{timerDays}</p>
              <p>Días</p>
            </div>
            <div className="date">
              <p>{timerHours}</p>
              <p>Horas</p>
            </div>
            <div className="date">
              <p>{timerMinutes}</p>
              <p>Minutos</p>
            </div>
            <div className="date">
              <p>{timerSeconds}</p>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      </div>
      <img className="flower" src={Flowers} alt="flores" />
    </>
  );
}

export default Hero;
