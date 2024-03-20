import React, { useState } from "react";
import "./blinds.css"

export const Blinds = ({blinds}) => {
    const [isOpen, setIsOpen] = useState(blinds)
    const handleClick = () => {
setIsOpen(!isOpen)
isOpen? className.add("button button--active") : null
    }


    return(
        <>
        <div className="blinds">
				<div className="blinds__icon">
					
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className="button" onClick={handleClick} >Otevřeno</button>
					<button className={isOpen ? "button button--active": "button" } onClick={handleClick}>Zavřeno</button>
				</div>
			</div>
        </>
    )
}