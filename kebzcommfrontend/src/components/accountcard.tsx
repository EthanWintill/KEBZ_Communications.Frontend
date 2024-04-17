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

    return (<div className="container">
            <div className="row row justify-content-center">
                <h1> Edit Account Info</h1>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={editedUser.firstName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col">
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={editedUser.lastName}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-sm-2">Username:</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={editedUser.username}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group row" >
                            <label htmlFor="email" className="col-sm-2">Email:</label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={editedUser.email}
                                    className="form-control-plaintext col-sm-10"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-end">
                <div className="col-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div></div>
                        
                    </form>
                </div>
                <div className="col-2"></div>

            </div>
    </div>
    );
};

export default AccountCard;
