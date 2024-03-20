import React, { useState } from "react";
import smartHomeData from "../../smartHomeData";

export const Light = ({name, state}) => {

    const [isOn, setIsOn] = useState(state)

    const handleClick = () => {
        setIsOn(!isOn)
    }

    return(
        <>

    <div className="light" key={name} onClick={handleClick}>
    <div className="light__icon" >
        <img  src={isOn? require("./images/light-on.svg") : require("./images/light-off.svg")}></img>
    </div>
    <div className="light__name">
        {name}
    </div>

</div>
    </>

    )

}

/*
const [isOn, setIsOn] = useState(false)
    const handleClick = () => {
        setIsOn(!isOn)
    }
    
return(
    <>
    <div className="lights" >

{light.map((l) => (
    <div className="light" key={l.name} onClick={() => handleClick}>
    <div className="light__icon" >
        <img  src={isOn? require("./images/light-on.svg") : require("./images/light-off.svg")}></img>
    </div>
    <div className="light__name">
        {l.name}
    </div>
</div>
))}

</div>
    </>
)
*/