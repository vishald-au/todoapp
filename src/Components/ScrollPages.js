import Main from './Main'
import List from './List'
import Add from './Add'
import axios from 'axios'
import React, { useState, useEffect } from 'react';

const ScrollPages = ({ Route }) => {

    axios.defaults.baseURL = 'http://localhost:5000'

    const [todoData, setTodoData] = useState()

    const getTodo = () => {
        axios.get('/todos').then(
            (res) => {
                console.log(res.data);
                setTodoData(res.data);
            }
        )
    }

    useEffect(() => {
        getTodo()
    }, [])




    return (
        <>
            {/*  <button onClick={getTodo}>GET DATA</button> */}
            <Route path='/all'>
                <List />
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
                <Main todoData={todoData} />
            </Route>
        </>
    )
}

export default ScrollPages
