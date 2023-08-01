import { useState } from "react"
import partySizeDropDown from "./partySizeDropDown"

function ReservationForm () {
    const [selectedPartySize, setSelectedPartySize] = useState(null);
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
            <PartySizeDropdown selectedPartySize={selectedPartySize} onChange={handlePartySizeChange} />


            <button>Find a time</button>


        </div>
        </>
    )

}

export default ReservationForm
