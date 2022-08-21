import React from 'react';
import { useEffect, useState } from 'react';

import gearIcon from "../../icon/gear-solid.svg"
import bellIcon from "../../icon/bell-solid.svg"
import userIcon from '../../icon/user.png'
import Reminder from "./reminder/reminder";
import Tracking from "./tracking/tracking";
import Note from "./note/note";
import Progress from "./progress/progress";
import Calendar from "./calendar/calendar";


import "./mainPage.css"

const MainPage = () => {
    const [assignments, setAssigments] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);
    let [err, setErr] = useState(null);


    const getData = async () => {
        await fetch('/assignment')
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Server responds with error");
                }
                return res.json();
            })
            .then(resdata => {
                setIsLoaded(true);
                setAssigments(resdata);
            }, err => {
                setErr(err);
                setIsLoaded(true);
            })
    };

    useEffect(() => {
        getData()
    }, [])
    
    if (err) {
        return <div>Error: {err.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className="mainPage">
                <div className="header">
                    <div className="header-left">
                        <h3>Hello Son, Welcome back</h3>
                        <h1>Your Assignment Dashboard</h1>
                    </div>
                    <div className="header-right">
                        <img src={bellIcon} alt="bell icon" className="bellIcon"></img>
                        <img src={gearIcon} alt="gear icon" className="gearIcon"></img>
                        <img src={userIcon} alt="user icon" className="userIcon"></img>
                    </div>
                </div>
                <Reminder assignments={assignments} />
                <Tracking assignments={assignments} />
                <Note assignments={assignments} />
                <Progress assignments={assignments} />
                <Calendar assignments={assignments} />
            </div>

        );
    }
}

export default MainPage;