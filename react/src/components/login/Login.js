import React, { useState } from 'react'
import { useHistory } from 'react-router'
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookies'
import './login.css'


const Login = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({})

    const changeField = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    // const submit = (e) => {
    //     e.preventDefault();
    //     history.push('/home')
    // }

    const responseGoogle = (response) => {
        console.log('responseGoogle',response);
        if (response.tokenId) {
            cookie.save('token', response.tokenId);
            history.push('/home')
        }
    }

    return (
        <div className="loginComponent">
            <div className="loginBox">
                {/* <form>
                    <div class="mb-3">
                        <input onChange={changeField} value={formValues.username} name="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuario" />
                    </div>
                    <div class="mb-3">
                        <input onChange={changeField} value={formValues.password} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="contraseña" />
                    </div>
                    <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                </form> */}
                {/* <div className="content unauthorized">
                    <div className="content-bottom">
                        <a class="github" href={`https://github.com/login/oauth/authorize?client_id=${client_id}`}>SIGN IN WITH GITHUB</a>
                        <img width="50" height="50" class="img-github" src={require('./github.png').default} />
                        <p className="sign-in-text">in order to get started</p>
                    </div>
                </div> */}
                <GoogleLogin
                    clientId="36293167140-k0qh40m2vhcl66hsdmouhnbstg23c84s.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    )
}

export default Login
