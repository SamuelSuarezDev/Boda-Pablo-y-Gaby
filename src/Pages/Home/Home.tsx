import "./styled.css";

import Smoke from "../../assets/Smoke.png";
import Hero from "../../components/Hero/Hero";
import Divisor from "../../assets/Divisor.png";
import { Date } from "../../components/Date/Date";
import { Divider } from "../../components/Divider/Divider";
import { History } from "../../components/History/History";
import { Moments } from "../../components/Moments/Moments";
import { Versicle } from "../../components/Versicle/Versicle";
import { ReactComponent as Email } from "../../assets/Mail.svg";
import { Ubication } from "../../components/Ubication/Ubication";
import { DressCode } from "../../components/DressCode/DressCode";
import { ReactComponent as Location } from "../../assets/Location.svg";
import { ParentsInfo } from "../../components/ParentsInfo/ParentsInfo";
import { ContainerCards } from "../../components/ContainerCards/ContainerCards";
import { SongContainer } from "../../components/SongContainer/SongContainer";
import { SectionAction } from "../../components/SectionAction/SectionAction";

export const Home = () => {
  const confirmButton = () => {
    // eslint-disable-next-line no-restricted-globals
    location.href =
      "https://api.whatsapp.com/send?phone=+573126340605&text=Hola me gustaría confirmar mi asistencia, mi nombre es {nombre}";
  };
  return (
    <>
      <Hero />
      <SongContainer />
      <History />
      <ContainerCards />
      <Divider />
      <ParentsInfo />
      <Moments />
      <Versicle />
      <Date />
      <Ubication iconButton={<Location />} />
      <Divider />
      <DressCode />
      <SectionAction
        title="Asistencia"
        text="Para nosotros es muy importante contar con tu compañia."
        buttonText="Confirmar"
        iconButton={<Email />}
        button={true}
        onClick={confirmButton}
        smoke
      />
      <SectionAction title={"Luvia de sobres"} />
      <footer><p className="subtitle">Created by SamuelSuarezDev</p></footer>
    </>
  );
};

export default Home;
