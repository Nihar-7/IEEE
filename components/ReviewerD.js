import React from 'react';

const ReviewerD = () => {
    return (
        <>
            <div className=" p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container d-flex flex-column align-items-center py-5">
                    <h1 className="display-5 fw-bold">Welcome to IEEE</h1>
                    <p className="col mt-5 fs-4">Enter Application Number</p>
                    <div className="mb-3">

                        <input type="number" className="form-control" id="exampleInputNumber" />
                    </div>
                    <button className="btn btn-primary btn-lg w-25" type="button">Start</button>
                </div>
            </div>


        </>

    );
}


export default ReviewerD;