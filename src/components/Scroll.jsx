import React from "react";

function Scroll(props){
   return(
       <div style={{ overflowY:"scroll", border:"1px none black", padding:"1%", margin:"1%", height: "400px"}}>
           {props.children}
       </div>
   )
}

export default Scroll;