import React from "react";

const Card = ({name, username, id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt="..."/>
            <div>
                <h1>{name}</h1>
                <p>{username}</p>
            </div>
            </div>
        </div>
        
    );
}
export default Card;