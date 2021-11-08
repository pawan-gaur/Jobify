import {useEffect, useState} from "react";
import Input from "./components/Input/Input";
import Seat from "./components/Seat/Seat";
import AirplaneSeating from "./helper/AirplaneSeating";
import {inputPassengers, inputSeats} from "./InputData";

import './App.css';

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
            <div className="container">
                <h1>Airplane Seating Algorithm</h1>
                <Input createNewPlane={createNewPlane}/>
                <Seat data={data}/>
            </div>
        </div>
    );
}

export default App;
