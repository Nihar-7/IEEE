import React from 'react';


const ReviewerPeer = () => {
    return (
        <>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 className="text-body-emphasis">Peer Screening</h1>
                    <div className="form-floating my-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="number" className="form-control" id="floatingMarks" />
                        <label for="floatingMarks">Marks</label>



                    </div>

                    <div className="form-floating my-3 d-flex">
                
                        <div className="my-3">
                            <div className="form-check">
                                <label className="form-check-label " for="rec">Recommend</label>
                                <input id="rec" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label mx-5" for="notrec">Not Recommend</label>
                                <input id="notrec" name="paymentMethod" type="radio" className="form-check-input" required="" />
                            </div>
                        </div>
                     </div>
                            <div className="m-5 d-flex justify-content-center">
                        <button type='submit' className='btn btn-secondary w-50'>submit</button>
                        </div>
                    </div>
                </div>

            </>
            );
}

            export default ReviewerPeer;