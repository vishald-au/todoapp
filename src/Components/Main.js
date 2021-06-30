import Graph from './Graph'
import Recent from './Recent'

const Main = ({ todoData }) => {




    return (
        <>
            <Graph />
            <Recent todoData={todoData} />
        </>
    )
}

export default Main
