import React, { useState } from 'react';
import Moment from 'react-moment';
import Calendar from 'react-calendar';
import axios from 'axios';
import Popup from './Popup'
import { GoCheck } from 'react-icons/go'

const CalendarPage = ({ todoData, getData }) => {

    const [showPop, setShowPop] = useState(false)
    const [value, onChange] = useState(new Date())
    const [popData, setPopData] = useState([])

    const openPop = (item) => {
        setShowPop(true)
        setPopData({
            title: item.title,
            details: item.details,
            priority: item.priority,
            status: item.status,
            duedate: item.duedate
        })
    }
    const closePop = () => {
        setShowPop(false)
    }


    const filterComplete = () => {
        return todoData.filter(
            (item) =>
                item.status == 0 &&
                item.duedate == value.toDateString()
        )
    }


    const handleStatus = (item) => {
      /* axios.put('/todos/' + item.id, {
            title: item.title,
            details: item.details,
            priority: item.priority,
            status: item.status == 0 ? 1 : 0,
            duedate: item.duedate
        }).then(
            (res) => {
                getData();
                console.log('success');
            }
        ) */
      getData();
    }




    return (
        <div className='listingArea'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 p-4'>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            className='calStyles'
                        />
                    </div>
                    <div className='col-sm-12 col-md-6 maxWidthTable'>
                        <table className='table table-dark'>
                            <thead>
                                <tr className='modifyHead'>

                                    <th scope='col'>Todo - {value.toDateString()}</th>


                                </tr>
                            </thead>
                            <tbody className='modifyTable'>
                                {filterComplete(todoData).map(item => (

                                    <tr onDoubleClick={() => openPop(item)} key={item.id} className={item.status === 1 && 'bg-new'} >
                                        <td className='modifyTableTD'>{item.priority == 2 ? <span className='priorityBasic pb-high'>H</span> : (item.priority == 1) ? <span className='priorityBasic pb-med'>M</span> : <span className='priorityBasic pb-low'>L</span>}</td>
                                        <td scope='col-6'>#{item.id} {item.title}</td>
                                        <td><Moment date={item.duedate} fromNow /></td>
                                        <td className='text-right newHover'><button onClick={() => handleStatus(item)} className='markButton'><GoCheck /></button></td>
                                    </tr>


                                ))}


                            </tbody>
                        </table>
                    </div>
                    <Popup showPop={showPop} popData={popData} closePop={closePop} Moment={Moment} />


                </div>
            </div>
        </div>
    )
}

export default CalendarPage
