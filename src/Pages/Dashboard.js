import Graph from './Graph'
import Sidebar from './Sidebar'
import Recent from './Recent'

const Dashboard = () => {
    return (
        <div className='frame'>
            <Sidebar />
            <div className='frame__main'>
                <Graph />
                <Recent />
            </div>
        </div>
    )
}

export default Dashboard
