import './Footeru.css';

function Footeru() {

    return (
        <div className="">

            <div className="container-fluid Footeru-main">
                <div className="row">
                    <div className="col-md-4 storeimg">
                        <h6>DOWNLOAD OUR APP</h6>
                        <img src="images/playstore.jpeg" className="img-thumbnail footeruimg" alt="..." />
                        <img src="images/appstore.webp" className="img-thumbnail footeruimg" alt="..." />
                    </div>


                    <div className="col-md-4">
                        <div className="subscribe"><h5 class="title">SUBSCRIBE TO NEWSLETTER</h5>
                            <div className="footerformparent">
                                <form className="ft-form">
                                    <input className="ft-input" placeholder="enter your email" />
                                    <button className="ft-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-4 footerpara">
                        <h5>FOR QUERIES</h5>
                        <p>9876543210 | support@forever.com</p>
                        <p>(Monday to Saturday, 10AM - 7PM)</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footeru;