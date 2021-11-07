import { Component } from 'react'


import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'
import Button from '../../components/Button/Button'

import DeleteAccount from '../../components/ownuser/DeleteAccount/DeleteAccount';
import UserReports from '../../components/admin/userreports/UserReports';
import Modal from '../../components/modal/Modal';
import BlockUser from '../../components/admin/blockuser/BlockUser';
import UnblockUser from '../../components/admin/unblockuser/UnblockUser';
import Forum from '../Forum/Forum'
import CheckProgress from '../../components/ownuser/CheckProgress/CheckProgress';
import UserProfile from '../UserProfile/UserProfile'
import Login from '../InitialInteraction/Login/Login'

import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';


export default class Home extends Component {
    state = {
        isVisible: false,
    }
    // contentContainer = document.querySelector('userprofile-home-container');


    render() {
        return (
            <div className="home-main-container">
                <div className="topbar-home-container">
                    <Topbar>
                        <div className="home-userprofile">

                            {/* <Button styleName="text-button" text="Angel Adrian Camal Garcia"
                                onClick={() => this.setState({ isVisible: true })}
                            ></Button> */}

                            <Button styleName="text-button" text="Angel Adrian Camal Garcia"
                                onClick={() => this.setState({ isVisible: true })}
                            ></Button>



                        </div>
                    </Topbar>
                </div>
                <div className="sidebar-home-container">
                    <Sidebar />
                </div>
                <div className="userprofile-home-container">


                    {/* <Forum></Forum> */}
                    
                    {/* { ReactDOM.createPortal(<CheckProgress/>, this.contentContainer )} */}
                    {this.state.isVisible ? <UserProfile /> : null}
                    {/* <UserProfile></UserProfile> */}
                    {/* <CheckProgress/>*/}
                </div>
            </div>
        )
    }
}
