import Moment from 'react-moment';

const Recent = ({ todoData, allValues }) => {



    return (
        <div className='recent_activity'>
            {todoData && <div className='row'>
                <div className='col-sm-12 col-md-4 priorityStuff'>
                    <ul className='list-group mb-2 list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>High Priority</strong><span className='badge bg-danger rounded-pill'>{allValues.high}</span></li>

                        {todoData.filter((highitem) => highitem.priority === 2).map((filterHighList, i) => (
                            i < 5 ?
                                <li key={filterHighList.id} className='list-group-item bg-dark link-light list-group-item-action'>{filterHighList.title} <span><Moment date={filterHighList.duedate} fromNow /></span></li> : ''
                        ))}
                    </ul>
                </div>
                <div className='col-sm-12 col-md-4 priorityStuff'>
                    <ul className='list-group mb-2 list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>Med Priority</strong><span className='badge bg-info rounded-pill'>{allValues.med}</span></li>
                        {todoData.filter((meditem) => meditem.priority === 1).map((filterMedList, x) => (
                            x < 5 ?
                                <li key={filterMedList.id} className='list-group-item bg-dark link-light list-group-item-action'>{filterMedList.title}<span><Moment date={filterMedList.duedate} fromNow /></span></li> : ''
                        ))}
                    </ul>
                </div>
                <div className='col-sm-12 col-md-4 priorityStuff2'>
                    <ul className='list-group list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>Completed</strong><span className='badge bg-success rounded-pill'>{allValues.comp}</span></li>
                        {todoData.filter((compitem) => compitem.status === 1).map((filterCompList, y) => (
                            y < 5 ?
                                <li key={filterCompList.id} className='list-group-item bg-dark link-light list-group-item-action'>{filterCompList.title}</li> : ''
                        ))}
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Recent
