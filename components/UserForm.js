import React from 'react';


const UserForm = () => {
    return (
        <>

            <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5">Upload your Paper here...</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body py-0">
                            <form className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">
                                    <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-text">Author</div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input> */}
                                    <label className="visually-hidden" for="inlineFormInputGroupEmail">Email</label>
                                    <div className="input-group">
                                        <div className="input-group-text">Email</div>
                                        <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="Email" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Sector</option>
                                            <option value="1">Healthcare</option>
                                            <option value="2">Technology</option>
                                            <option value="3">Cloud</option>
                                            <option value="4">Banking</option>
                                            <option value="5">Machine Learning</option>
                                            <option value="6">Robotics</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 mb-4 mt-0">
                                    
                                        <label for="formFile" className="form-label mx-2 ">Upload Paper</label>
                                        <input className="form-control" type="file" id="formFile" />
                            
                                </div>



                                <div className="col-12 mt-2">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>


                            {/* <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p> */}
                        </div>

                    </div>
                </div>
            </div>





        </>
    );
}


export default UserForm;