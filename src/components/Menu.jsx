import './menu.css'

const Menu = () => {
    return (
        <>
            <section id="menu" className="menu">

                <div className="container">

                    <div className="section-title">
                        <h2>Check our tasty <span>Menu</span></h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="menu-flters">
                                <li data-filter="*" className="filter-active">Show All</li>
                                <li data-filter=".filter-starters">Starters</li>
                                <li data-filter=".filter-salads">Salads</li>
                                <li data-filter=".filter-specialty">Specialty</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row menu-container" style={{ position: 'relative', height: '675px' }}>

                        <div className="col-lg-6 menu-item filter-starters" style={{ position: 'absolute', left: '0px', top: '0px' }}>
                            <div className="menu-content">
                                <a href="#">Lobster Bisque</a><span>$5.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty" style={{ position: 'absolute', left: '0px', top: '75px' }}>
                            <div className="menu-content">
                                <a href="#">Bread barrel</a><span>$6.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-starters" style={{ position: 'absolute', left: '0px', top: '150px' }}>
                            <div className="menu-content">
                                <a href="#">Crab Cake</a><span>$7.95</span>
                            </div>
                            <div className="menu-ingredients">
                                A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads" style={{ position: 'absolute', left: '0px', top: '225px' }}>
                            <div className="menu-content">
                                <a href="#">Caesar Selections</a><span>$8.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty" style={{ position: 'absolute', left: '0px', top: '300px' }}>
                            <div className="menu-content">
                                <a href="#">Tuscan Grilled</a><span>$9.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-starters" style={{ position: 'absolute', left: '0px', top: '375px' }}>
                            <div className="menu-content">
                                <a href="#">Mozzarella Stick</a><span>$4.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Lorem, deren, trataro, filede, nerada
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads" style={{ position: 'absolute', left: '0px', top: '450px' }}>
                            <div className="menu-content">
                                <a href="#">Greek Salad</a><span>$9.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Fresh spinach, crisp romaine, tomatoes, and Greek olives
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-salads" style={{ position: 'absolute', left: '0px', top: '525px' }}>
                            <div className="menu-content">
                                <a href="#">Spinach Salad</a><span>$9.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                            </div>
                        </div>

                        <div className="col-lg-6 menu-item filter-specialty" style={{ position: 'absolute', left: '0px', top: '600px' }}>
                            <div className="menu-content">
                                <a href="#">Lobster Roll</a><span>$12.95</span>
                            </div>
                            <div className="menu-ingredients">
                                Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Menu