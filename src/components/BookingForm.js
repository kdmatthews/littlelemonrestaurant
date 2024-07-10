import React, {useState} from 'react';
import './BookingForm.css';
import Swal from 'sweetalert2';


function BookingForm(props){
    const [name, setName] = useState("");
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
        Swal.fire({
            title: "Thank you " + name + "!",
            text: "Your table is booked for " + date + ".",
            imageUrl: "saladh.jpg",
            confirmButtonText: "Confirm",
            confirmButtonColor: "#495E57",
          });
        props.submitForm(e);
    }
    return(
        <>
        <div class="booking-container">
        <div class="time-container">
            <h2> Time Open </h2>
            <h3>Monday-Friday</h3>
            <p>7am - 11am (breakfast)</p>
            <p>11am - 10pm (lunch/dinner)</p>
            <h3>Saturday and Sunday</h3>
            <p>9am - 1pm (brunch)</p>
            <p>1pm - 10pm (lunch/dinner)</p>
            <hr />
            <h4>Call Us: (123)867-5309</h4>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Book Reservation</h1>
            <div class="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" name="firstname" placeholder='Name' id="firstname" value={name} required onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-field">
            <label htmlFor="res-date">Choose a date</label>
            <input type="date" name="res-date" id="res-date" required value={date} onChange={(e) => handleChange(e.target.value)}/>
            </div>
           <div class="form-field">
           <label htmlFor="res-time">Choose a time</label>
            <select name="res-time" id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
               <option value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key= {availableTimes}>{availableTimes}</option>})}
            </select>
           </div>
           <div class="form-field">
           <label htmlFor="guests">Number of Guests</label>
            <input type="number" required placeholder="1" min='1' max='10' id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}/>
           </div>
            <div class="form-field">
            <label htmlFor="occasion">Occasion</label>
            <select name="occasion" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            </div>
            <input class="submit-button" type="submit" value="Submit"/>
        </form>
        </div>
        </>
    );
};

export default BookingForm;