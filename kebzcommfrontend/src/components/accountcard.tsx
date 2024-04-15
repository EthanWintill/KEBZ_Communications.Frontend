// import React from "react";
// import { User } from "../types";

// export const AccountCard: React.FC<User> = (user) => {
//     return (
//         <>
//             <h1>{user.firstName} {user.lastName}</h1>
//             <p>{user.username}</p>
//             <p>{user.email}</p>
//         </>
//     );
// }



import React, { useState } from "react";
import { User } from "../types";
import { updateUser } from "../api";


export const AccountCard: React.FC<User> = (user) => {
    const [editedUser, setEditedUser] = useState<User>(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, e.g., send editedUser to the server
        console.log("Edited user:", editedUser);
        updateUser(editedUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={editedUser.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={editedUser.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={editedUser.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AccountCard;
