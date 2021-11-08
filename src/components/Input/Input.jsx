import {useState} from "react";
import {isNonNegativeInteger, isRowsAndColsLessThan, isValid2dArray,} from "../../helper/ValidateInput";
import "./Input.css";

export default function Input({createNewPlane}) {
    const [seats, setSeats] = useState("");
    const [passengers, setPassengers] = useState("");
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const passenger = +passengers;
        const bracketsRegex = /(\[*\]*)/g;
        const seat = seats.split(/\s*]\s*,\s*\[\s*/).map((ele) => {
            const arr = ele.replace(bracketsRegex, "").split(",");
            return [+arr[0], +arr[1]];
        });
        if (!formIsValid(seat, passenger)) {
            return;
        }
        createNewPlane(seat, passenger);
        setModal(!modal);
    };

    const formIsValid = (seat, passenger) => {
        if (!isNonNegativeInteger(passenger)) {
            setError({error: "Passengers must be at least 0."});
            return false;
        }
        if (!isValid2dArray(seat, isRowsAndColsLessThan, 5, 100) || seat.length >= 5) {
            setError({
                error: "Seats must be a valid array according to above rules.",
            });
            return false;
        }
        setError({error: null});
        return true;
    };

    const modalHandler = () => {
        setModal(!modal);
        setError({error: null});
    };

    return (
        <div className="input">
            <button onClick={modalHandler}>Create New Airplane Seating</button>
            {modal && (
                <div className="modalShow">
                    <form>
                        <h2>Create New Airplane Seating</h2>
                        <h3>Approach Use:</h3>
                        <ul>
                            <li>Always seat passengers starting from the front row to back,
                                starting from the left to the right
                            </li>
                            <li>Filling aisle seats first followed by window seats followed by center
                                seats (any order in center seats)
                            </li>
                        </ul>
                        <label>Seats [Row, Column]</label>
                        <input
                            type="text"
                            placeholder="[3, 2], [4, 3], [2, 3], [3, 4]"
                            required
                            value={seats}
                            onChange={(e) => setSeats(e.target.value)}
                        />
                        <label>No. of Passengers</label>
                        <input
                            type="number"
                            placeholder="20"
                            required
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                        />
                        <button onClick={handleSubmit}>Create</button>
                        <button onClick={modalHandler} className="cancel">
                            Cancel
                        </button>
                        {error ? error.error !== null && (
                            <div className="errorMsg">
                                <p>{error.error}</p>
                            </div>
                        ) : null}
                    </form>
                </div>
            )}
        </div>
    );
}
