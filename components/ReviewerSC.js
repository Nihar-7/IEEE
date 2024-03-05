import React from 'react';




const ReviewerSC = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className="card-group d-flex flex-column">

                    <div className="card my-4 border-4">
                        <div className="card-body d-flex justify-content-between">
                            <h5 className="card-title">Peer Screening</h5>
                            <button className='btn btn-secondary'>Access</button>
                        </div>
                    </div>
                    <div className="card border-4 my-4 ">
                    <div className="card-body d-flex justify-content-between">
                            <h5 className="card-title">Camera Screening</h5>
                            <button className='btn btn-secondary'>Access</button>
                        </div>
                    </div>
                    <div className="card my-4 border-4" >
                    <div className="card-body d-flex justify-content-between">
                            <h5 className="card-title">Presentation Screening</h5>
                            <button className='btn btn-secondary'>Access</button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}


export default ReviewerSC;