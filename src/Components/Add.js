import axios from 'axios';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import QuickGraph from './QuickGraph'

const Add = ({getData, allValues}) => {

    const [value, onChange] = useState(new Date())
    const [inputTask, setInputTask] = useState()
    const [inputDetails, setInputDetails] = useState()
    const [inputPriority, setInputPriority] = useState(1)
    const [inputStatus, setInputStatus] = useState(0)

    const handleSubmit = (e) => {
      e.preventDefault();
      const allData = {
        title: inputTask,
        details: inputDetails,
        priority: inputPriority,
        status: inputStatus,
        duedate: value,
      };
      /* axios.post('/todos', allData).then(
            (res) => {
                console.log('posted')
                getData();
                setInputStatus('')
                setInputPriority('')
                setInputDetails('')
                setInputTask('')
            }
        ) */
    }




    return (
        <div className='addForm'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 exPadding seperator'>
                        <input className='defaultInput' type='text' placeholder='Task' onChange={(e) => setInputTask(e.target.value)} value={inputTask} required />
                        <textarea type='text' placeholder='Details' onChange={(e) => setInputDetails(e.target.value)} value={inputDetails} required />
                        <input className='submitBtn2' type='submit' value='Save' />
                    </div>
                    <div className='col-sm-12 col-md-3 exPadding'>
                        <div className='manageCal'><Calendar
                            onChange={onChange}
                            value={value}
                            className='calStyles'
                        /></div>
                        <div className='rangeBox'>
                            Priority
                            <div className='rangeFlex'>
                                <div>low</div>
                                <div>med</div>
                                <div>high</div>
                            </div>
                            <input type='range' className='defaultInput rangeInput' min='0' max='2' step='1' onChange={(e) => setInputPriority(e.target.value)} value={inputPriority} />
                        </div>
                        <div className='rangeBox'>
                            Status
                            <div className='rangeFlex'>
                                <div>Todo</div>
                                <div>Complete</div>
                            </div>
                            <input type='range' className='defaultInput rangeInput1' min='0' max='1' step='1' onChange={(e) => setInputStatus(e.target.value)} value={inputStatus} />
                        </div>
                    </div>
                    
                    <div className='col-sm-12 col-md-4'>
                        <QuickGraph allValues={allValues} />
                    </div>
                    <div className='col-sm-12 col-md-2 text-center'></div>
                    {/* <div className='col-sm-12 text-center'>
                        <input className='submitBtn' type='submit' value='+' />
                    </div> */}
                </div>
            </form>

            {/* <ul className='list-group'>
                <li className='list-group-item bg-dark text-light'>Title: {inputTask}</li>
                <li className='list-group-item bg-dark text-light'>Details: {inputDetails}</li>
                <li className='list-group-item bg-dark text-light'>Date: {value.toLocaleString()}</li>
                <li className='list-group-item bg-dark text-light'>Priority: {inputPriority == 2 ? 'High' : inputPriority == 1 ? 'Med' : 'Low'}</li>
                <li className='list-group-item bg-dark text-light'>Status: {inputStatus == 1 ? 'Complete' : 'Todo'}</li>
            </ul> */}

        </div>
    )
}

export default Add
