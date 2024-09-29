import Main from './Main'
import List from './List'
import Add from './Add'
import Loading from './Loading'
import Profile from './Profile'
import Priority from './Priority'
import Search from './Search'
import Settings from './Settings'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { todos } from './todo.json';

const ScrollPages = ({ Route, NavLink }) => {
  // axios.defaults.baseURL = 'https://my-new-server-app.herokuapp.com/';

  const [todoData, setTodoData] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getData = () => {
    /* axios.get('/todos').then((res) => {
      setTodoData(res.data);
      setLoading(false);
    }); */
    setTodoData(todos);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const allValues = {
    all: todoData.length,
    high: todoData.filter((highitem) => highitem.priority === 2).length,
    med: todoData.filter((highitem) => highitem.priority === 1).length,
    low: todoData.filter((highitem) => highitem.priority === 0).length,
    comp: todoData.filter((highitem) => highitem.status === 1).length,
  };

  return (
    <>
      {/*  <button onClick={getTodo}>GET DATA</button> */}
      <Route path="/all">
        <List todoData={todoData} allValues={allValues} getData={getData} />
      </Route>
      <Route path="/add">
        <Add getData={getData} allValues={allValues} />
      </Route>
      <Route path="/priority">
        <Priority todoData={todoData} allValues={allValues} getData={getData} />
      </Route>
      <Route path="/search">
        <Search todoData={todoData} getData={getData} />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route exact path="/">
        <Main todoData={todoData} allValues={allValues} />
      </Route>
    </>
  );
};

export default ScrollPages
