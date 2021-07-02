import { GoCheck } from 'react-icons/go'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useState } from 'react';
import Moment from 'react-moment';
import QuickGraph from './QuickGraph'
import axios from 'axios';



const List = ({ todoData, allValues, getData }) => {

    const [ showPop, setShowPop ] = useState(false)

    const [ popData, setPopData] = useState([])

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
                item.status == 0
        )
    }
    const filterComplete2 = () => {
        return todoData.filter(
            (item) =>
                item.status == 1
        )
    }

    const handleStatus = (item) => {
        axios.put('/todos/' + item.id, {
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
        )
    }


 

    return (
        <div className='listingArea'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 maxWidthTable'>
                        <table className='table table-dark'>
                            <thead>
                                <tr className='modifyHead'>

                                    <th scope='col'>Todo</th>


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
                    <div className='col-sm-12 col-md-4 maxWidthTable2'>
                        <table className='table table-dark'>
                            <thead>
                                <tr className='modifyHead'>


                                    <th scope='col'>Complete</th>


                                </tr>
                            </thead>
                            <tbody className='modifyTable'>
                                {filterComplete2(todoData).map(item => (

                                    <tr onDoubleClick={() => openPop(item)} key={item.id} className={item.status == 1 && 'bg-new'} >

                                        <td scope='col-6'>#{item.id} {item.title} <button  onClick={() => handleStatus(item)} className='assignBack'><RiArrowGoBackFill /></button></td>
                                        

                                    </tr>


                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <QuickGraph allValues={allValues} />
                    </div>

                    <div className={showPop == true ? 'modal bg-blur active' : 'modal bg-blur'} tabindex='-1'>
                        <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content bg-light text-dark'>
                            <div className='modal-header'>
                                <h5 className='modal-title'>{popData.title}</h5>
                                <button onClick={() => closePop()} type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </div>
                            <div className='modal-body'>
                                <p>{popData.details}</p>
                            </div>
                            <div class="modal-footer">
                            <span className='badge bg-danger custFont'><Moment date={popData.duedate} fromNow /></span>
                            </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default List 