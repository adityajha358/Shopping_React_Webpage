import './Card.css'

function Card() {

    return (
        <div className="container cardmain">


            <div className="Togglecardmain">
                <h3>BIG BRAND BIG DISCOUNT</h3>

                <button class="btn btn-primary btnthmain" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> Filter </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">

                        <h5 id="offcanvasRightLabel">Filter</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div className="collom">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Make in India</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">High to Low</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Low to High</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Only Mens Profuct</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Only Womens Product</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Only Kids Product</label>
                            </div>

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">New Arrivals</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Today's Deals & Discounts</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" for="flexSwitchCheckDefault">
                                        <label for="favcolor">Select your favorite color:</label>
                                        <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
                                    </label>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row cardrow1">
                <div className="card col-md-2">
                    <img src="images/forever.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/forever2.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/cider.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/j&j.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/lavanya.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/levis.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>
            </div>
            {/* Second line tsrat from here*/}

            <div className="row  cardrow2">
                <div className="card col-md-2">
                    <img src="images/j&j.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/nakd.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/puma.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/qrsvp.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/rare.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/titan.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>
            </div>
            {/* Third line tsrat from here*/}

            <div className="row  cardrow3">
                <div className="card col-md-2">
                    <img src="images/twenty.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/forever2.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/forever.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/adid.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/cider.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>

                <div className="card col-md-2">
                    <img src="images/likha.avif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">example </p>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Card;