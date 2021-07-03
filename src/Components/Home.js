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


    const googleId = '496571883606-kpsmdtp5ua1m8n21ccak8q6nvnnlp8id.apps.googleusercontent.com'


    return (
        <>

            {!isSignedIn ?
                <div className='home'>

                    <img className='logoStyle' src='../img/t-logo.png' alt='Logo' />
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
