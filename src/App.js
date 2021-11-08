import React, {useEffect, useState} from "react";
import Input from "./components/Input/Input";
import Seat from "./components/Seat/Seat";
import AirplaneSeating from "./helper/AirplaneSeating";
import {inputPassengers, inputSeats} from "./InputData";

import './App.css';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        createNewPlane(inputSeats, inputPassengers);
    }, []);

    const createNewPlane = (inputSeats, inputPassengers) => {
        const airplane = new AirplaneSeating(inputSeats, inputPassengers);
        const seatingData = airplane.autoAssignedSeats;
        setData(seatingData);
    };

    return (
        <div className="app">
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="others">
                    <h2>Airplane Seating Algorithm</h2>
                    <Input createNewPlane={createNewPlane}/>
                    <Seat data={data}/>
                </div>
            </div>
        </div>
    );
}

export default App;
