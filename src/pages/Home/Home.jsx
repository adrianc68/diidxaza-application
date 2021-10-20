import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'
import Login from '../InitialInteraction/Login/Login'

export default function Home() {

    // const [token, setToken] = useState();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }

    return (
        <div className="home-main-container">
            <Topbar/>
            <Sidebar/>
            <div className="d"></div>
        </div>
    )
}
