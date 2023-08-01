import { useState } from "react"
import PartySizeDropDown from "./PartySizeDropDown";

function ReservationForm () {
    const [selectedPartySize, setSelectedPartySize] = useState(2);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');

    const handlePartySizeChange = (option) => {
        setSelectedPartySize(option.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };


    return (
        <>
        <div>
            <h2>Make a reservation</h2>
            <PartySizeDropDown selectedPartySize={selectedPartySize} onChange={handlePartySizeChange} />


            <button>Find a time</button>
        </div>
        </>
    )

}

export default ReservationForm
