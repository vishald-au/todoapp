import Graph from './Graph'
import Recent from './Recent'

const Main = ({ todoData, allValues }) => {




    return (
        <>
            <Graph allValues={allValues} />
            <Recent todoData={todoData} allValues={allValues} />
        </>
    )
}

export default Main
