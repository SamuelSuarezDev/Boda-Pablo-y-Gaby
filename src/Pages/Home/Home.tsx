import Hero from "../../components/Hero/Hero";
export const Home = () => {
  return (
    <>
      <Hero />
      <div className="song-container">
        <p className="title">Nuestra canción</p>
        <p className="subtitle">Dale play a nuestra cancion</p>
      </div>
      <div className="history">
        <p className="title">Nuestra historia</p>
        <p className="subtitle"></p>
      </div>
    </>
  );
};

export default Home;
