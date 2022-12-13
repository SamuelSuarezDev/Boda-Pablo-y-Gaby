import React, { useEffect, useState } from "react";
import { ButtonLogin } from "../ButtonLogin/ButtonLogin";
import MessageIcon from "../../assets/messageIcon.svg";
import { useAuth } from "../../context/AuthContext";
import TemporaryDrawer from "../Drawer/Drawer";
import { CardComments } from "../CardComments/CardComments";
import { getItemsByCondition } from "../../hook/useNotes";

export const Message = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [info, setInfo] = useState("");
  const { userConfig, logOut } = useAuth();

  const handleInformation = async() =>{
    const result = await getItemsByCondition()
    setInfo(result)
  }
  
    useEffect(() => {
        handleInformation()
        console.log('result',info)
    }, [])
    

  return (
    <>
    <CardComments  />
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
    </>
  );
};
