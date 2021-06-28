import Graph from './Graph'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Dashboard</li>
                    <li>Search</li>
                    <li>All</li>
                    <li>High Priority</li>
                    <li>Settings</li>
                    <li>Logout</li>
                    <li>Add</li>
                    <li>Calendar</li>
                </ul>
            </nav>
            <div>


                <h2>Tasks Stats</h2>
                <p>Completed</p>
                <p>Total</p>
                <div><Graph /></div>
                <hr />
                <ul>
                    <li><strong>High Priority</strong></li>
                    <li>Todo 1</li>
                    <li>Todo 2</li>
                    <li>Todo 3</li>
                    <li>Todo 4</li>
                    <li>Todo 5</li>
                </ul>
                <ul>
                    <li><strong>Low Priority</strong></li>
                    <li>Todo 1</li>
                    <li>Todo 2</li>
                    <li>Todo 3</li>
                    <li>Todo 4</li>
                    <li>Todo 5</li>
                </ul>
                <ul>
                    <li><strong>Completed</strong></li>
                    <li>Todo 1</li>
                    <li>Todo 2</li>
                    <li>Todo 3</li>
                    <li>Todo 4</li>
                    <li>Todo 5</li>
                </ul>
            </div>

        </div>
    )
}

export default Dashboard
