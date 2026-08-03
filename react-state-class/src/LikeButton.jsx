import { useState } from "react";

export default function LikeButton() {
    let [isLike, setIsLike] = useState(false);

    let toggle = () => {
        setIsLike(!isLike); // the value of state variabld is updated at render state 
    };
    let likeStyle = {color:"red"};

    return (
        <p onClick={toggle} style={{cursor:"pointer"}}>
           <i className={isLike ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={likeStyle}></i>
        </p>
    );
}