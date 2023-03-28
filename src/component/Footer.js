import './Footer.css';

function Footer() {

    return (
        <div className="footermain">

            <div className="card text-center">
                <div className="card-header">
                    <b> FOR<span>-EVER</span> </b>
                </div>
                <div className="card-body">
                    <h5 className="card-title">FOR<span>-EVER</span> THE SHOPPING DESTINATION</h5>
                    <p className="card-text">W-44 , Lawgarden , Near- Ahmedabad Shopping Center, Ahmedabad, Gujarat- 380006</p>
                    <p className="card-text">Email : forever@gmail.com  |  Contact : 9876543210 </p>
                    <a href="#" className="btn btn-primary footericon"><i class="fa fa-facebook"></i></a>
                    <a href="#" className="btn btn-primary footericon"><i class="fa fa-instagram"></i></a>
                    <a href="#" className="btn btn-primary footericon"><i class="fa fa-whatsapp"></i></a>
                    <a href="#" className="btn btn-primary footericon"><i class="fa fa-pinterest"></i></a>
                    <a href="#" className="btn btn-primary footericon"><i class="fa fa-twitter"></i></a>

                </div>
                <div className="card-footer text-muted">
                    © 2019 - 2023  FOR<span>-EVER</span> Fashion Pvt. Ltd. All Rights Reserved
                </div>
            </div>
        </div>
    );

}

export default Footer;