// import React from "react";
// import { User } from "../types";




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
            <div className="row justify-content-center">
                <div className="col-10">
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
                        <div className="form-group row " >
                            <label htmlFor="username" className="col-sm-3">Username:</label>
                            <div className="col-sm-9">
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
                            <label htmlFor="email" className="col-sm-3">Email:</label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={editedUser.email}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row justify-content-end">
                <div className="col-3">
                        <button type="submit" className="btn btn-primary">Update</button>
                        </div></div>
                        
                    </form>
                </div>
            </div>
    </div>
    );
};

export default AccountCard;
