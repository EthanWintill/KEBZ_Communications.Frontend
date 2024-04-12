import React from "react";
import { User } from "../types";

export const AccountCard: React.FC<User> = (user) => {
    return (
        <>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </>
    );
}