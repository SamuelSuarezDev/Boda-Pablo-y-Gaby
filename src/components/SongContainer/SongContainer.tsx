import React from "react";
import Logo from "../../assets/Logo.png";
import { Player } from "../Player/Player";

export const SongContainer = () => {
  return (
    <div className="song-container">
      <img src={Logo} alt="" />
      <p className="title">Nuestra canción</p>
      <p className="subtitle">Dale play a nuestra cancion</p>
      <Player />
    </div>
  );
};
