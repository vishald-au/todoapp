import React from 'react'

const Popup = ({ showPop, popData, closePop, Moment }) => {
    return (
        <>
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
        </>
    )
}

export default Popup
