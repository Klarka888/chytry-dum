import React, { useState } from "react";
import { Lights } from "../Lights/Lights";
import './Dashboard.css'
import { Climate } from "../Climate/Climate";
import { Blinds } from "../blinds/Blinds";


export const Dashboard = ({data}) => {
    
   
    return(
        <>
        <Lights light={data.lights} key={data.lights} ></Lights>
        <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}></Climate>
        <Blinds blinds={data.blinds}></Blinds>
        </>
    )
}