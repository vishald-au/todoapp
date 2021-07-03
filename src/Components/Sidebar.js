import { MdDashboard } from 'react-icons/md'
import { VscListSelection, VscAdd, VscSettings } from 'react-icons/vsc'
import { RiSearchLine } from 'react-icons/ri'
import { FiLock } from 'react-icons/fi'
import { selectUserData, setSignedIn, setUserData } from '../userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { MdChangeHistory } from 'react-icons/md'

const Sidebar = ({ NavLink }) => {

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
                    <button className='d-block p-3 link-light text-decoration-none logo-area'><img className='imgLogo' src='./img/t-logo.png' alt='Logo' /></button>
                    <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                        <li className='nav-item'><NavLink exact to="/" activeClassName='active' className='nav-link py-3 border-bottom'><MdDashboard /></NavLink></li>
                        <li className='nav-item'><NavLink exact to="/all" activeClassName='active' className='nav-link py-3 border-bottom'><VscListSelection /></NavLink></li>
                        <li className='nav-item'><NavLink exact to="/priority" activeClassName='active' className='nav-link py-3 border-bottom'><MdChangeHistory /></NavLink></li>
                        <li className='nav-item'><NavLink exact to="/add" activeClassName='active' className='nav-link py-3 border-bottom'><VscAdd /></NavLink></li>
                        <li className='nav-item'><NavLink exact to="/search" activeClassName='active' className='nav-link py-3 border-bottom'><RiSearchLine /></NavLink></li>
                        {/* <li className='nav-item'><NavLink exact to="/calendar" activeClassName='active' className='nav-link py-3 border-bottom'><HiOutlineCalendar /></NavLink></li> */}
                    </ul>
                    <div className='dropdown border-top text-center'>
                        <NavLink exact to="/profile" activeClassName='active' className='nav-link py-3 nav-profile'><img src={userData ? userData.imageUrl : 'https://github.com/mdo.png'} alt={userData ? userData.imageUrl : 'Profile Img'} width='24' height='24' className='rounded-circle' /></NavLink>
                        <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
                            <li className='nav-item'><NavLink exact to="/settings" activeClassName='active' className='nav-link py-3 border-top'><VscSettings /></NavLink></li>
                            <li className='nav-item'><button onClick={handleLogout} className='nav-link py-3 border-top'><FiLock /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar