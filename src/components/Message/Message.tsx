import React, { useEffect, useState } from "react";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import MessageIcon from "../../assets/messageIcon.svg";
import { useAuth } from "../../context/AuthContext";
import TemporaryDrawer from "../Drawer/Drawer";
import { CardComments } from "../CardComments/CardComments";
import { getItemsByCondition } from "../../hook/useNotes";
import { Comment } from "./Components/Comment";
import { db } from "../../config/firebase";

export const Message = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [info, setInfo] = useState("");
  const { userConfig, logOut } = useAuth();
  return (
    <>
      <CardComments />
      <p>ggg</p>
      {userConfig ? (
        <div
          onClick={() => setShowDrawer(!showDrawer)}
          style={{
            backgroundColor: "#D0E3FF",
            width: "261px",
            height: " 43px",
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0E4CAA",
          }}
        >
          <img
            src={MessageIcon}
            alt="carta"
            width={16}
            height={16}
            style={{ marginRight: "15px" }}
          />
          Enviar Mensaje
        </div>
      ) : (
        <ButtonLogin />
      )}
      {showDrawer && (
        <TemporaryDrawer
          open={showDrawer}
          setShowDrawer={setShowDrawer}
          userConfig={userConfig}
          logOut={logOut}
        />
      )}
      <Comment
        name="Pepito Pérez"
        comment="Feliz"
        src="data:image/jpeg;base64,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"
      ></Comment>
    </>
  );
};
