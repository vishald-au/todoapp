import Sidebar from './Sidebar'
import ScrollPages from './ScrollPages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className='frame'>
            <Router>
                <Sidebar NavLink={NavLink} />
                <div className='frame__main'>
                    <Switch>
                        <ScrollPages Route={Route} NavLink={NavLink} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Dashboard
