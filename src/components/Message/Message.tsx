import React, { useEffect, useState } from "react";
import MessageIcon from "../../assets/messageIcon.svg";
import { useAuth } from "../../context/AuthContext";
import { CardComments } from "../CardComments/CardComments";
import { createItem } from "../../hook/useNotes";

export const Message = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = () => {
    createItem({
      message: message,
      name: name,
      visible: true,
    });
    console.log("hecho");
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p className="subtitle">Dejanos tus mejores deseos</p>
      <input
        type="text"
        placeholder="Nombre"
        onChange={(event) => setName(event.target.value)}
        style={{
          width: "75%",
          padding: "15px",
          border: "none",
          borderRadius: "6px",
          fontFamily: "Inria Serif",
        }}
      />
      <textarea
        placeholder="Escribe tu mensaje..."
        onChange={(event) => setMessage(event.target.value)}
        style={{
          width: "75%",
          height: "30vh",
          marginTop: "5%",
          padding: "15px",
          border: "none",
          borderRadius: "6px",
          marginBottom: "8%",
          fontFamily: "Inria Serif",
        }}
      />
      <div
        onClick={handleSubmit}
        style={{
          backgroundColor: "#D0E3FF",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#0E4CAA",
          width: "70%",
          padding: "15px",
        }}
      >
        Enviar Mensaje
      </div>
    </div>
  );
};
