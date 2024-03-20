import React, { useState } from "react";
//import './smartHomeData'

import './Lights.css'
import { Light } from "../light/Light";

export const Lights = ({light}) => {
    return(
<div className="lights" >

        {light.map((l) => (<Light name={l.name} state={l.state} key={l.name}></Light>) )}

</div>

       
    )
}