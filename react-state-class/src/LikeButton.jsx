import { useState } from "react";

export default function LikeButton() {
    let [isLike, setIsLike] = useState(false);

    let toggle = () => {
        setIsLike(!isLike);
    };

    return (
        <p onClick={toggle} style={{cursor:"pointer"}}>
            <i className={isLike ? "fa-regular fa-heart" : "fa-solid fa-heart"}></i>
        </p>
    );
}