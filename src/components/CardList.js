import React from "react";
import Card from './Card';
const CardList = ({image}) => {
    const cardComponent = image.map((user,i) => {
        return <Card key={i} id={image[i].id} name={image[i].name} username={image[i].username}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    )
}
export default CardList;