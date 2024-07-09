import Nav from "./nav";
import Header from "./header";
import './Home.css';

function Home(){
    return(
        <>
        <main class="home-container">
            <article class="about">
                <h1>About Us</h1>
                <p>We are a family owned <br />Mediterranean restaurant, <br />
                    focused on traditional recipes <br />served with a modern twist.</p>
            </article>
            <article class="pages">
                <section class="book-online">
                    <h2>Reserve Table</h2>
                    <p>Booking a table has never been easier. <br />Try out our new online table reservation system today.</p>
                    <button class="reserve-button">Reserve a Table</button>
                </section>
                <section class="food-imageone">
                    <img src="pastah.jpg" alt="image of Mediterranean pasta dish" />
                </section>
                <section class="food-image2">
                    <img src="breadh.jpg" alt="image of Brushetta" />
                </section>
                <section class="menu">
                    <h2>Our Menu</h2>
                    <p>Get a taste of what we have to offer. <br />Our menu features a variety of Mediterranean cuisines <br />with a modern twist.</p>
                    <button class="menu-button">View Our Menu</button>
                </section>
            </article>
        </main>
        </>
    )
}
export default Home;