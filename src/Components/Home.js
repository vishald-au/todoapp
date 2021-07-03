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
    const responseFail = (err) => {
        console.log(err);
    }


    const googleId = '425457352579-p6rkqogl5ldaha3837cm89ggri0t9t16.apps.googleusercontent.com'


    return (
        <>

            {!isSignedIn ?
                <div className='home'>

                    <img className='logoStyle' src='../img/t-logo.png' />
                    <GoogleLogin
                        clientId={googleId}
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseFail}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                        className='googleStyle'
                        theme='light'
                    />

                </div> : <>
                    <Dashboard />
                </>
            }

        </>
    )
}

export default Home
