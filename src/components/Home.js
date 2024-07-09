import Nav from "./nav";
import Header from "./header";
import './Home.css';
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <main class="home-container">
            <article class="pages">
                <section class="book-online">
                    <hr />
                    <h2>Reserve Table</h2>
                    <hr />
                    <p>Booking a table has never been easier. <br />Try out our new online table reservation system today.</p>
                    <a href='/booking' class="reserve-button">Reserve a Table</a>
                </section>
                <section class="food-imageone">
                    <img src="pastah.jpg" alt="image of Mediterranean pasta dish" />
                </section>
                <section class="food-imagetwo">
                    <img src="breadh.jpg" alt="image of Brushetta" />
                </section>
                <section class="menu">
                    <hr />
                    <h2>Our Menu</h2>
                    <hr />
                    <p>Get a taste of what we have to offer. <br />Our menu features a variety of Mediterranean cuisines <br />with a modern twist.</p>
                    <a href='/confirmed' class="menu-button">View Our Menu</a>
                </section>
            </article>
        </main>
        </>
    )
}
export default Home;