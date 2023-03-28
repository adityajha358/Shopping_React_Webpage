
import './Sixthsection.css';

function Sixthsection() {

    return (
        <div className="Sixthmain container-fluid">

            <p className="row">
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">50% off Indian Make </a>
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">20% off Mens Product</a>
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">30% off Mens Product</a>
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">10% off Kids Product</a>
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">15% off International</a>
                <a className="btn btn-primary col-md-2 togglebtn" data-bs-toggle="collapse" href="#multiCollapseExample6" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comming Soon</a>

                {/* <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 1 elements</button>
                <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 2 elements</button>
                <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 3 elements</button>
                <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 4 elements</button>
                <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 5 elements</button>
                <button className="btn btn-primary col-md-2" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle 6 elements</button>
                 */}
            </p>

            <div className="row">
                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="card card-body">
                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample3">
                        <div className="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>


                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample4">
                        <div className="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>


                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample5">
                        <div className="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

                <div className="col col-md-2">
                    <div className="collapse multi-collapse" id="multiCollapseExample6">
                        <div className="card card-body">
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Sixthsection;