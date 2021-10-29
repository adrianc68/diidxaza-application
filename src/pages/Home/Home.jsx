import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'
import Login from '../InitialInteraction/Login/Login'
import UserProfile from '../UserProfile/UserProfile'
import DeleteAccount from '../UserProfile/DeleteAccount/DeleteAccount' 
import Forum from '../Forum/Forum'


export default function Home() {


    // const [token, setToken] = useState();
    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }

    return (
        <div className="home-main-container">
            <div className="topbar-home-container">
                <Topbar />
            </div>
            <div className="sidebar-home-container">
                <Sidebar />
            </div>
            <div className="userprofile-home-container">
                {/* <UserProfile /> */}
                {/* <DeleteAccount/> */}
                <Forum></Forum>
            </div>
        </div>
    )
}
