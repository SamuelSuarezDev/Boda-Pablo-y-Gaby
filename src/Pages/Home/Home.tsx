/* eslint-disable no-restricted-globals */
import "./styled.css";

import Smoke from "../../assets/Smoke.png";
import Hero from "../../components/Hero/Hero";
import Flores from "../../assets/Flores.png";
import { Date } from "../../components/Date/Date";
import { Divider } from "../../components/Divider/Divider";
import { History } from "../../components/History/History";
import { Message } from "../../components/Message/Message";
import { Moments } from "../../components/Moments/Moments";
import { Versicle } from "../../components/Versicle/Versicle";
import { ReactComponent as Chat } from "../../assets/Chat.svg";
import { ReactComponent as Email } from "../../assets/Mail.svg";
import { Ubication } from "../../components/Ubication/Ubication";
import { DressCode } from "../../components/DressCode/DressCode";
import { ReactComponent as Mail } from "../../assets/MailClosed.svg";
import { ReactComponent as Location } from "../../assets/Location.svg";
import { ParentsInfo } from "../../components/ParentsInfo/ParentsInfo";
import { ContainerCards } from "../../components/ContainerCards/ContainerCards";
import { SongContainer } from "../../components/SongContainer/SongContainer";
import { SectionAction } from "../../components/SectionAction/SectionAction";

export const Home = () => {
  const confirmButton = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href =
      "https://api.whatsapp.com/send?phone=+573058157722&text=Hola me gustaría confirmar mi asistencia, mi nombre es {nombre}";
  };
  return (
    <>
      {innerWidth < 700 ? (
        <>
          <Hero />
          <SongContainer />
          <History />
          <ContainerCards />
          <Divider />
          <ParentsInfo />
          <div
            style={{
              margin: "12% 0 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider />
          </div>
          <Moments />
          <Versicle />
          <Date />
          <Ubication iconButton={<Location />} />
          <div
            style={{
              margin: "15% 0 0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider />
          </div>
          <DressCode />
          <SectionAction
            title="Asistencia"
            text="Para nosotros es muy importante contar con tu compañia."
            buttonText="Confirmar"
            iconButton={<Chat />}
            button={true}
            onClick={confirmButton}
            smoke
          />
          <div
            style={{
              width: "100%",
              textAlign: "center",
              margin: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                width: "100%",
                fontFamily: " Tangerine, cursive",
                fontSize: "36px",
                margin: "40px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mail width={"30px"} height={"25px"} />
              <span>Lluvia de sobres</span>
            </p>
            <img
              src={Flores}
              alt=""
              style={{ width: "100px", transform: "rotate(70deg)" }}
            />
          </div>
          <footer>
            <p className="title credits">Created by SamuelSuarezDev</p>
          </footer>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="title">Página exclusiva para dispositivos móbiles</p>
        </div>
      )}
    </>
  );
};

export default Home;
