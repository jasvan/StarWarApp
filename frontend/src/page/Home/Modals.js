import React, {useState} from "react";
//import { height, style } from "@mui/system";
import { Modal, Button, Box } from "@mui/material";

const Modals = (props) => {
  const { data1 } = props;

  const [ modal, setModal ] = useState( false );
  

  const abrirCerrarModal = () =>
  {
    setModal( !modal );
  };

  
  return (
    <>
      <Button  onClick={()=>abrirCerrarModal()}>modal</Button>;
      <Modal
        open={ modal }
        onClose={ abrirCerrarModal }>        
      </Modal>
    </>
  );
}
 
 
 export default Modals;