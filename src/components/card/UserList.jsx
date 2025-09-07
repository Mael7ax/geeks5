import React from "react";
import users from "../../data/data.json";
import  {Card} from ".//Card.jsx";
import "./Card.css"

export const UserList = () => {
    return (
        <div className="card-list">
            {
                users.map(user => (
                <Card key={user.id} user={user} />
            ))
            }
        </div>
    );
};