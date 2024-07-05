import BookingForm from "./BookingForm";
import React, {useState} from "react";

function Bookings(props){
    const [availableTimes, setAvailableTimes] = useState("")
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
        </>
    );
    }

export default Bookings;