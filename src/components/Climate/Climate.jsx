import React, { useState } from "react";
import smartHomeData from "../../smartHomeData";
import "./climate.css"

export const Climate = ({temperature, humidity}) => {
    const [teplota, setTeplota] = useState(temperature)
    const handleClick = (n) => {
        setTeplota(teplota + n)
    }

    return(
        <>
        <div className="climate">
				<div className="climate__icon">
                <img src={require("./images/temp.svg")}></img>
				</div>
				<div className="climate__content">
					<div className="climate__temperature">{teplota} &deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
				</div>
				<div className="climate__controls">
					<button className="button" onClick={() => handleClick(1)}>+</button>
					<button className="button" onClick={() =>handleClick(-1)}>-</button>
				</div>
			</div>
        
        </>
    )

}