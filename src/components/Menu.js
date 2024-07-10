import './Menu.css'

function Menu (){
    return(
        <>
        <main class="menu-container">
        <header class="header-menu">
        <h1>Our</h1>
        <h2>Favorites</h2>
        </header>
        <article class="menu-items">
            <section>
                <img src="pastah.jpg" alt="pasta dish" />
                <h3>Pasta</h3>
                <h4>$12.99</h4>
            </section>
            <section>
                <img src="saladh.jpg" alt="salad dish" />
                <h3>Salad</h3>
                <h4>$9.99</h4>
            </section>
            <section>
                <img src="breadh.jpg" alt="brushetta dish" />
                <h3>Brushetta</h3>
                <h4>$7.99</h4>
            </section>
        </article>
        </main>
        </>
    )
}

export default Menu