import React from "react";
import styled from "@emotion/styled";
import { Modal, Box, Typography, Buton } from "@mui/material";
import ReactPlayer from 'react-player'
import video from '../../assets/video/y2mate.com - let the wookie win_480p.mp4'
import "./modal.css";

export const Portal = ({ closeModal }) => {
         return (
           <>
             <div className="modal">
               <div className="content">
                 <button onClick={() => closeModal(false)}> X </button>
                 <div className="title">titulo</div>
                 <div className="body"> 
                   <ReactPlayer
                     className="video"
                     url="https://youtu.be/mO6M4ngKRp0"
                     controls
                   />
                 </div>
                 <div className="footer">descripcion</div>
               </div>
             </div>
           </>
         );
       };
