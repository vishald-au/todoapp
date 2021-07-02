import { GoCheck } from 'react-icons/go'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react';
import Moment from 'react-moment';
import QuickGraph from './QuickGraph'
import axios from 'axios';



const List = ({ todoData, allValues, getData }) => {


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
                    {/* <div className='col-sm-12 col-md-12 p-3'>
                        <NavLink to="/add">
                            <div className='addHelpButton'><MdAdd /></div>
                        </NavLink>
                    </div> */}
                    <div className='col-sm-12 col-md-4 maxWidthTable'>
                        <table class="table table-dark">
                            <thead>
                                <tr className='modifyHead'>

                                    <th scope="col">Todo</th>


                                </tr>
                            </thead>
                            <tbody className='modifyTable'>
                                {filterComplete(todoData).map(item => (

                                    <tr onDoubleClick={() => handleStatus(item)} key={item.id} className={item.status === 1 && 'bg-new'} >
                                        <td className='modifyTableTD'>{item.priority == 2 ? <span className='priorityBasic pb-high'>H</span> : (item.priority == 1) ? <span className='priorityBasic pb-med'>M</span> : <span className='priorityBasic pb-low'>L</span>}</td>
                                        <td scope="col-6">#{item.id} {item.title}</td>
                                        <td><Moment date={item.duedate} fromNow /></td>
                                        <td className='text-right'><button className='markButton'><GoCheck /></button></td>
                                    </tr>


                                ))}


                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12 col-md-4 maxWidthTable2'>
                        <table class="table table-dark">
                            <thead>
                                <tr className='modifyHead'>


                                    <th scope="col">Complete</th>


                                </tr>
                            </thead>
                            <tbody className='modifyTable'>
                                {filterComplete2(todoData).map(item => (

                                    <tr onDoubleClick={() => handleStatus(item)} key={item.id} className={item.status == 1 && 'bg-new'} >

                                        <td scope="col-6">#{item.id} {item.title}</td>

                                    </tr>


                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12 col-md-4'>
                        <QuickGraph allValues={allValues} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List 