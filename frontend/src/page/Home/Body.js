import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ChildGrid } from "./Grid";
import "./home.css";

import img1 from "../../img/jedy.png";
import img2 from "../../img/robot.png";
import img3 from "../../img/ovi.png";
import img4 from "../../img/keveka.png";
import img5 from "../../img/jabba.png";
import img6 from "../../img/personajes.jpg";
import img7 from "../../img/mago.png";
import { Portal } from "../modal/Portal";

export const Body = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="container">
        {openModal && <Portal closeModal={setOpenModal} />}
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          spacing={3}
        >
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img1}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img2}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img3}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img4}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img5}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img6}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            item
            md={3}
            s
            mall={3}
            xs={12}
            src={img7}
            onClick={() => {
              setOpenModal(true);
            }}
          ></ChildGrid>
          <ChildGrid
            nombre="Jabba"
            src={img5}
            data1={"https://www.youtube.com/watch?v=mO6M4ngKRp0"}
          />
        </Grid>
      </div>
    </>
  );
};
