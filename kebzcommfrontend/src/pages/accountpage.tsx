import { User } from "../types";
import { getUserById } from "../api";
import { AccountCard } from "../components/accountcard";
import React, { useEffect, useState } from "react";


const AccountPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const fetchedUser = await getUserById(sessionStorage.getItem('userId'));
        setUser(fetchedUser || null);
      }
    
      return () => {
        fetchData()
      }
    }, [])
    
    if (!user){
        return <div>Loading...</div>;
    }
    return (
      <div className="container mt-4">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header"><h2>Account Information</h2></div>
                      <div className="card-body">
                          <AccountCard {...user} />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default AccountPage;