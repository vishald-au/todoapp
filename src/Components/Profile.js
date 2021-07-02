import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from '../userSlice';


const Profile = () => {

    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)



    return (
        <div className='p-5 cardArea'>
            <ul>
                <li>
                   
                    <div className='p-2'><img src={userData.imageUrl} className='img-rounded' alt={userData.name} /></div>
                    <div className='p-2'>
                        <h5>{userData.name}</h5>
                        <small className='text-mute'>{userData.email}</small>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Profile
