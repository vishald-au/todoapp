
const Recent = ({ todoData }) => {

    /* const totalCount = todoData.length
    const highCount = todoData.filter((highitem) => highitem.priority == 2).length
    const medCount = todoData.filter((highitem) => highitem.priority == 1).length
    const compCount = todoData.filter((highitem) => highitem.status == 1).length */


    return (
        <div className='recent_activity'>
            {todoData && <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <ul className='list-group mb-2 list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>High Priority</strong><span className='badge bg-danger rounded-pill'>14</span></li>

                        {todoData.filter((highitem) => highitem.priority == 2).map((filterHighList, i) => (
                            i < 5 ?
                                <li key={filterHighList.id} className='list-group-item bg-dark link-light list-group-item-action'>{filterHighList.title}</li> : ''
                        ))}
                    </ul>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <ul className='list-group mb-2 list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>Med Priority</strong><span className='badge bg-info rounded-pill'>14</span></li>
                        {todoData.filter((meditem) => meditem.priority == 1).map((filterMedList, x) => (
                            x < 5 ?
                                <li key={filterMedList.id} className='list-group-item bg-dark link-light list-group-item-action'>{filterMedList.title}</li> : ''
                        ))}
                    </ul>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <ul className='list-group list-group-item-action fontCtrl'>
                        <li className='list-group-item disabled bg-dark d-flex justify-content-between align-items-center'><strong>Completed</strong><span className='badge bg-success rounded-pill'>14</span></li>
                        {todoData.filter((compitem) => compitem.status == 1).map((filterCompList, y) => (
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
