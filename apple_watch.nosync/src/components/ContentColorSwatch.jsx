"use client";
import { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from 'next/image';
import mint from "./../../public/mint.png"
import navy from "./../../public/navy.png"
import ocean from "./../../public/ocean.png"

const ContentColorSwatch = () => {
//State til at vide den valgte farve
const [selectedColor, setSelectedColor] = useState(mint);

//Ændre farven på uret
const handleColorChange = (color) =>{
    setSelectedColor(color);
};

    return(
     <div className="ContentColorSwatch">
        <div className="content_ur">
        <Image src={selectedColor} alt="Ur" width={300} height={300} />
        <div>
        <div className="cirkel_navy" onClick={() => handleColorChange(navy)}></div>
        <BsThreeDotsVertical />
        <div className="cirkel_blue" onClick={() => handleColorChange(mint)}></div>
        <BsThreeDotsVertical />
        <div className="cirkel_pink" onClick={() => handleColorChange(ocean)}></div>
        </div>
        </div>
    </div>
)};

 
export default ContentColorSwatch;