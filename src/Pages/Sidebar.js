import { MdDashboard } from 'react-icons/md'
import { VscListSelection, VscAdd, VscSettings } from 'react-icons/vsc'
import { FcHighPriority } from 'react-icons/fc'
import { RiSearchLine, RiHomeFill } from 'react-icons/ri'
import { FiLock } from 'react-icons/fi'
import { HiOutlineCalendar } from 'react-icons/hi'
import { selectUserData, setSignedIn, setUserData } from '../userSlice'
import { useSelector, useDispatch } from 'react-redux'

const Sidebar = () => {

    const dispatch = useDispatch()
    const userData = useSelector(selectUserData);

    const handleLogout = () => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    return (

        <div className='sidebar'>
            <div className='mainSidebar'>
                <div className='d-flex flex-column flex-shrink-0 bg-dark ctrl-width'>
                    <button className='d-block p-3 link-light text-decoration-none logo-area'><RiHomeFill /></button>
                    <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                        <li className='nav-item'><button className='nav-link active py-3 border-bottom'><MdDashboard /></button></li>
                        <li className='nav-item'><button className='nav-link py-3 border-bottom'><VscListSelection /></button></li>
                        <li className='nav-item'><button className='nav-link py-3 border-bottom'><FcHighPriority /></button></li>
                        <li className='nav-item'><button className='nav-link py-3 border-bottom'><VscAdd /></button></li>
                        <li className='nav-item'><button className='nav-link py-3 border-bottom'><RiSearchLine /></button></li>
                        <li className='nav-item'><button className='nav-link py-3 border-bottom'><HiOutlineCalendar /></button></li>
                    </ul>
                    <div className='dropdown border-top'>
                        <button className='nav-link py-3 nav-profile'><img src={userData ? userData.imageUrl : 'https://github.com/mdo.png'} width='24' height='24' className='rounded-circle' /></button>
                        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                            <li className='nav-item'><button className='nav-link py-3 border-top'><VscSettings /></button></li>
                            <li className='nav-item'><button onClick={handleLogout} className='nav-link py-3 border-top'><FiLock /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar