import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../userSlice';
import Dashboard from './Dashboard'

const Home = () => {

    const dispatch = useDispatch()
    const isSignedIn = useSelector(selectSignedIn)
    //   const userData = useSelector(selectUserData)

    const responseGoogle = (res) => {
        console.log(res);
        dispatch(setSignedIn(true))
        dispatch(setUserData(res.profileObj))
    }
    const responseFail = (err) => {
        console.log(err);
    }


    const googleId = '496571883606-82lsm43keuqf673vrjdnrietll9lrl80.apps.googleusercontent.com'


    return (
        <>

            <Dashboard />


        </>
    )
}

export default Home
