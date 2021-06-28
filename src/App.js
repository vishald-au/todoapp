import { Provider } from 'react-redux'
import store from './store'
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">

      <Provider store={store} >
        <Home />
      </Provider>


    </div>
  );
}

export default App;
