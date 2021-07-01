import Main from './Main'
import List from './List'
import Add from './Add'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const ScrollPages = ({ Route, NavLink }) => {

    axios.defaults.baseURL = 'http://localhost:5000'

    const [todoData, setTodoData] = useState(false)
    const [isLoading, setLoading] = useState(true)



    useEffect(() => {
        axios.get('/todos').then(
            (res) => {
                console.log(res.data);
                setTodoData(res.data);
                setLoading(false);
            }
        )
    }, [])

    if (isLoading) {
        return <>Loading...</>
    }

    const allValues = {
        all: todoData.length,
        high: todoData.filter((highitem) => highitem.priority == 2).length,
        med: todoData.filter((highitem) => highitem.priority == 1).length,
        low: todoData.filter((highitem) => highitem.priority == 0).length,
        comp: todoData.filter((highitem) => highitem.status == 1).length
    }

    return (
        <>
            {/*  <button onClick={getTodo}>GET DATA</button> */}
            <Route path='/all'>
                <List NavLink={NavLink} todoData={todoData} allValues={allValues} />
            </Route>
            <Route path='/add'>
                <Add />
            </Route>
            <Route path='/priority'>
                Priority
            </Route>
            <Route path='/search'>
                Search
            </Route>
            <Route path='/calendar'>
                Calendar
            </Route>
            <Route path='/profile'>
                Profile
            </Route>
            <Route path='/settings'>
                Settings
            </Route>
            <Route exact path='/'>
                <Main todoData={todoData} allValues={allValues} />
            </Route>
        </>
    )
}

export default ScrollPages
