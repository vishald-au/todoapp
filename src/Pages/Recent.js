import React from 'react'

const Recent = () => {
    return (
        <div className='recent_activity'>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <ul class="list-group mb-2 list-group-item-action">
                        <li class="list-group-item disabled bg-dark d-flex justify-content-between align-items-center"><strong>High Priority</strong><span class="badge bg-danger rounded-pill">14</span></li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 1</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 2</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 3</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 4</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 5</li>
                    </ul>

                </div>
                <div className='col-sm-12 col-md-4'>
                    <ul class="list-group mb-2 list-group-item-action">
                        <li class="list-group-item disabled bg-dark d-flex justify-content-between align-items-center"><strong>Low Priority</strong><span class="badge bg-info rounded-pill">14</span></li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 1</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 2</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 3</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 4</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 5</li>
                    </ul>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <ul class="list-group list-group-item-action">
                        <li class="list-group-item disabled bg-dark d-flex justify-content-between align-items-center"><strong>Completed</strong><span class="badge bg-success rounded-pill">14</span></li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 1</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 2</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 3</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 4</li>
                        <li class="list-group-item bg-dark link-light list-group-item-action">Todo 5</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Recent
