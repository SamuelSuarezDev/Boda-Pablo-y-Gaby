import Hero from "../../components/Hero/Hero";
import "./styled.css";
import { Smoke, Divisor } from "../../assets";
import CardBoyfriend from "../../components/CardBoyfriend/CardBoyfriend";
import { ParentsInfo } from "../../components/ParentsInfo/ParentsInfo";
export const Home = () => {
  return (
    <>
      <Hero />
      <div className="song-container">
        <p className="title">Nuestra canción</p>
        <p className="subtitle">Dale play a nuestra cancion</p>
      </div>
      <div className="history">
        <img className="humo" src={Smoke} alt="" />
        <p className="title">Nuestra historia</p>
        <p className="subtitle">
          Éramos niños cuando nos enamoramos, sín saber lo que era. ¡Quién diría
          que nuestros caminos se cruzarían 7 años después...! Y por la gracia
          de Dios está vez será para toda la vida. Un día dijimos sí para ser
          novios y hoy diremos sí en el altar para toda la vida y nos llamaremos
          esposos.
        </p>
      </div>
      <div className="cards-container">
        <CardBoyfriend
          image="https://i.ibb.co/KKTrmXx/Whats-App-Image-2022-12-01-at-8-48-06-PM.jpg"
          name="Pablo Rodríguez"
          phrase="Hoy con gran emoción, puedo decir que tendré la mujer más hermosa y valiosa de todas como compañera de vida, gracias a Dios, ella me dio un si como respuesta y aquí estamos, aquí empieza otra etapa de nuestra hermosa historia"
        />
        <img className="humo left" src={Smoke} alt="" />
        <CardBoyfriend
          image="https://i.ibb.co/ZfF133W/8dc284b7-22d5-4559-8ba4-15e56ee6aeb4.jpg"
          name="Gabriela González"
          phrase="Finalmente dije sí, porque no hay nada que yo quiera vivir con alguien que no sea Mi Pallis. Estoy lista para tener su apellido en mí nombre!"
        />
      </div>
      <div className="divider">
        <img src={Divisor} alt="" />
      </div>
      <ParentsInfo />
    </>
  );
};

export default Home;
