import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css';
import AddFlights from './addFlights';
import ViewFlights from './viewFlights';
import AddBooking from './AddBooking';

export default function Container() {
    let [state, setState] = useState(1);
    const handleClick = (arg) => {
        setState(arg);
    }

    return (
        <div className='container bg-white bg-opacity-50 row p-2 mt-5'>
            <div className="sidebar col-md-2">
                <button type="button" className="btn btn-primary rounded-pill sidebar-btn mb-1" onClick={() => handleClick(0)}>Add Flights</button>
                <button type="button" className="btn btn-primary rounded-pill sidebar-btn mb-1" onClick={() => handleClick(1)}>View Flight Detail</button>
                <button type="button" className="btn btn-primary rounded-pill sidebar-btn mb-1" onClick={() => handleClick(2)}>Booking</button>
            </div>
            <div className="col-md-10 bg-secondary bg-opacity-25 overflow-auto" id='content' style={{'maxHeight': '88vh' }}>
                {state === 0 && <AddFlights />}
                {state === 1 && <ViewFlights />}
                {state ===2 && <AddBooking />}
            </div>
        </div>
    )
}