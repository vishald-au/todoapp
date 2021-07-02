import Calendar from 'react-calendar';
import React, { useState } from 'react';

const CalendarPage = () => {

    const [value, onChange] = useState(new Date())


    return (
        <div className='p-5 calPage'>
           

            <Calendar
                            onChange={onChange}
                            value={value}
                            className='calStyles'
                        />
        </div>
    )
}

export default CalendarPage
