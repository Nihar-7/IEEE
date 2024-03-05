import React from 'react';

const AdminD = () => {
    return (
        <>

            <div className='contaner p-5'>

                <table class="table table-striped ">

                
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Domain</th>
                                <th scope="col">Author</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><a href="/"><i class="fa-solid fa-eye fa-2x"></i></a></th>
                                <td>Healthcare</td>
                                <td>Harry</td>
                                <td>25-10-16</td>
                            </tr>
                            <tr>
                            <th scope="row"><a href="/"><i class="fa-solid fa-eye fa-2x"></i></a></th>
                                <td>Technology</td>
                                <td>Ron</td>
                                <td>27-1016</td>
                            </tr>
                            <tr>
                            <th scope="row"><a href="/"><i class="fa-solid fa-eye fa-2x"></i></a></th>
                                <td>Robotics</td>
                                <td>Hermione</td>
                                <td>28-10-16</td>
                            </tr>
                        </tbody>
                    </table>

    
            </div>

        </>
    );
}



export default AdminD;