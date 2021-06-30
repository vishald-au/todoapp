import { BiCheck, BiCheckDouble } from 'react-icons/bi'
import { MdChangeHistory } from 'react-icons/md'

import { useState } from 'react';

const List = () => {

    const [allData, setAllData] = useState([
        {
            id: 1,
            title: 'Have a master list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 2,
            title: 'Have a top three',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 3,
            title: 'Break it down and be specific',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 1,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 4,
            title: 'Be intentional with unfinished tasks',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 5,
            title: 'Plan to plan',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 6,
            title: 'Consider an if list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 1,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 7,
            title: 'Have a master list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 8,
            title: 'Have a top three',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 9,
            title: 'Break it down and be specific',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 10,
            title: 'Be intentional with unfinished tasks',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 11,
            title: 'Plan to plan',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 12,
            title: 'Consider an if list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 1,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 13,
            title: 'Have a master list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 14,
            title: 'Have a top three',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 15,
            title: 'Break it down and be specific',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 2,
            status: 0,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 16,
            title: 'Be intentional with unfinished tasks',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 17,
            title: 'Plan to plan',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        },
        {
            id: 18,
            title: 'Consider an if list',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            priority: 0,
            status: 1,
            duedate: '2022-04-23T18:25:43.511Z'
        }
    ])

    const handleStatus = (id) => {
        console.log(id)
    }

    /*    const toggleReminder = (id) => {
           setTasks(tasks.map((task) => 
           task.id === id ? { ...task, reminder: !task.reminder } : task))
         }
    */

    return (
        <div className='listingArea'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    {/*  <th scope='col'>Priority</th> */}
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Desc</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allData.map(item => (
                                    <tr key={item.id} className={item.status == 1 && 'bg-success'}>
                                        <th scope='row'>{item.id}</th>

                                        <td>{item.title}</td>
                                        <td>{item.duedate}</td>
                                        <td>{item.details}</td>

                                        <td className={item.priority == 2 ? 'bg-danger text-center' : 'text-center'}>{item.priority == 2 ? <MdChangeHistory /> : (item.priority == 1) ? 'Med' : 'Low'}</td>
                                        <td className='text-center' >{item.status == 1 ? <BiCheckDouble /> :
                                            <button className='btnStatus' onClick={() => handleStatus(item.id)} >
                                                <BiCheck /></button>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List 