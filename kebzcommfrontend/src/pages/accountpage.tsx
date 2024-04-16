import { useParams } from "react-router-dom";
import { User } from "../types";
import { getUserById } from "../api";
import { AccountCard } from "../components/accountcard";
import React, { useEffect, useState } from "react";


const AccountPage: React.FC = () => {
    const {userId} = useParams<{userId: string}>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const fetchedUser = await getUserById(sessionStorage.getItem('userId'));
        console.log('fet ' + fetchedUser)
        setUser(fetchedUser || null);
      }
    
      return () => {
        fetchData()
      }
    }, [userId])
    
    if (!user){
        return <div>Loading...</div>;
    }
    return (
      <div className="container mt-4">
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header">Account Information</div>
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