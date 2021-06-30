import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setSignedIn, setUserData } from '../userSlice';
import Dashboard from './Dashboard'

const Home = () => {

    const dispatch = useDispatch()
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)

    const responseGoogle = (res) => {
        console.log(res);
        dispatch(setSignedIn(true))
        dispatch(setUserData(res.profileObj))
    }


    const googleId = '425457352579-p6rkqogl5ldaha3837cm89ggri0t9t16.apps.googleusercontent.com'


    return (
        <>
            <Dashboard />
            {/*             {!isSignedIn ?
                <div className='home'><GoogleLogin
                    clientId={googleId}
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                /> </div> : <>
                    <Dashboard />
                </>
            } */}

        </>
    )
}

export default Home
