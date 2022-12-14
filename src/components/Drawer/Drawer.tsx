import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { createItem } from "../../hook/useNotes";

export default function TemporaryDrawer({
  open,
  setShowDrawer,
  userConfig,
  logOut,
}: any) {
  const [values, setValues] = React.useState({
    message: "",
  });

  function handleChange(evt: any) {
    /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
    const { target } = evt;
    const { name, value } = target;

    /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
    const newValues = {
      ...values,
      [name]: value,
    };

    // Sincroniza el estado de nuevo
    setValues(newValues);
  }

  const handleSubmit = () => {
    createItem({
      message: values,
      name: userConfig.displayName,
      photo: userConfig.photoURL,
      visible: true,
    });
    setShowDrawer(!open);
  };

  return (
    <Drawer
      anchor={"bottom"}
      open={open}
      onClose={() => setShowDrawer(!open)}
      sx={{ borderTopLeftRadius: 18, borderTopRightRadius: 8 }}
    >
      <div style={{ height: "510px", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Button
            color="error"
            onClick={() => {
              logOut();
              setShowDrawer(!open);
            }}
          >
            Cerrar sesión
          </Button>
          <Button onClick={() => setShowDrawer(!open)}>x</Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar alt="perfil foto" src={userConfig?.photoURL} />
          <p style={{ textTransform: "lowercase" }}>
            Hola ✌🏽 {userConfig?.displayName}
          </p>
        </div>
        <textarea
          style={{ width: "90%", height: "300px" }}
          placeholder="Escribe tu mensaje..."
          id="message"
          name="message"
          onChange={handleChange}
          value={values.message}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Enviar mensaje
        </Button>
      </div>
    </Drawer>
  );
}
