import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";


const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function (){
        return (s = s * a % m) /m;
    }
}
const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i =17; i <=23; i ++) {
        if (random() < .5){
            result.push(i + ':00');
        }
        if (random() > .5){
            result.push(i + ':30');
        }
    }
    return result;
}

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))};
    }

test("Renders the BookingForm heading", () => {
    render(<BookingForm times={fetchAPI()} />);
    const headingElement = screen.getByText("Choose a date");
    expect(headingElement).toBeInTheDocument();
  });

