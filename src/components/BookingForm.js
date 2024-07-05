import React, {useState} from 'react';
import Header from './header';

function BookingForm(props){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    return(
        <>
        <Header />
        <div class="image-background">
        <div class="form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose a date</label>
            <input type="date" name="res-date" id="res-date" required value={date} onChange={(e) => handleChange(e.target.value)}/>
            <label htmlFor="res-time">Choose a time</label>
            <select name="res-time" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
               <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key= {availableTimes}>{availableTimes}</option>})}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" required placeholder="1" min='1' max='10' id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <input class="submit-button" type="submit" value="Make Your Reservation"/>

        </form>
        </div>
        </div>
        </>
    );
};

export default BookingForm;