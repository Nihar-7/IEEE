import React from 'react';


const UserD = () => {
    return (
        <>
            <div class="container py-5 my-3">
                <div class="row flex-lg bg-light align-items-center g-5 py-5">

                    <div class="col-lg-10 ">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Apply for the Conference here</h1>
                        <p class="lead ">Don't miss the opportunity to be part of an enriching and intellectually stimulating conference experience</p>
                        <p class="lead">Submit your research paper today and your place on the global stage of academic excellence</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="btn btn-secondary btn-lg px-4 me-md-2">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-3'>
                {/* table */}

                <table className="table table-success table-striped">

                    <thead>
                        <tr>
                            <th scope="col">Peer review</th>
                            <th scope="col">Camera review </th>
                            <th scope="col">Presentation review</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recommended</td>
                            <td>Recommended</td>
                            <td>Recommended</td>
                            <th scope="row"><div class="spinner-grow text-success" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></th>
                        </tr>
                        <tr>
                            <td>Recommended</td>
                            <td>In Progress</td>
                            <td>Pending</td>
                            <th scope="row"><div class="spinner-grow text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></th>
                        </tr>
                        <tr>
                            <td>Recommended</td>
                            <td>not Recommended</td>
                            <td>Rejected</td>
                            <th scope="row"><div class="spinner-grow  text-danger" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></th>
                           
                        </tr>
                    </tbody>

                </table>

                {/* table */}

            </div>


        </>
    );
}



export default UserD;