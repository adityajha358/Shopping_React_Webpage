import './Navdown.css';

function Navdown() {

    return (
        <div className='Navdownmain container-fluid'>

            <div className="row">
                <div className="card col-md-6 " id="maincarddiv2">
                    <div className='container-fluid'>
                        <div className="row">

                            <div className="card col-md-3">
                                <img src="images/men.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/women.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/kid.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/home.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="card col-md-6 " id="maincarddiv">
                    <div className='container-fluid'>
                        <div className="row">

                            <div className="card col-md-3 ">
                                <img src="images/luxe.avif " className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/revolve.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/globalnav.avif" className="card-img-top cardimgnav" alt="..." />

                            </div>

                            <div className="card col-md-3">
                                <img src="images/revolve.avif" className="card-img-top cardimgnavh" alt="..." />

                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Navdown;