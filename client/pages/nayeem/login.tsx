import React from 'react';
import styled from 'styled-components';
import Header from '../../components/core/Header';

const StyledLoginForm = styled.div`
    padding-bottom: 225px;
    background: #FFFFFF;
    .form-wrapper {
        padding-top: 60px;
        margin: auto;
        width: 464px;

        h1.form-title {
            margin: 0;
            padding: 0;
            color: #1D2736;
            text-align: center;
            font-size: 48px;
            font-family: "Poppins";
            font-weight: 700;
            line-height: 52.8px;
            letter-spacing: -3px; 
            margin-bottom: 40px;
        }
    }
`;

const StyledInput = styled.div`
    margin-top: 32px;
    .label {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        color: #677487;
        text-align: left;
        padding-bottom: 8px; 
    }
    input {
        width: 464px;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid #DFE8FA;
        box-sizing: border-box;
        border-radius: 15px;
        padding: 23px 14px;
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #1D2736;
        outline: none;
    }
`;

const StyledForgetPass = styled.div`
    .forget-pass {
        margin-top: 12px; 
        text-align: right !important;
        a {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 29px;
            text-decoration-line: underline;
            color: #F0998D;
        }
    }
    
`;

const StyledLoginActionButtons = styled.div`
    margin-top: 50px;
    display flex;
    justify-content: space-between;
    .register {
        button {
            width: 152px;
            height: 59px;
            background: #FFF0EC;
            border-radius: 15px;
            border: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            color: #F0998D;
        }
    }
    .login {
        button {
            width: 152px;
            height: 59px;
            background: #F0998D;
            border-radius: 15px;
            border: none;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            color: #FFFFFF;
        }
    }
    
`;

 const Login = () => {
     return(
        <div>
            <StyledLoginForm>
            <Header/>
                <div className="form-wrapper">
                    <h1 className='form-title'>Login</h1>
                    <StyledInput>
                        <div className="label">
                            Email Address
                        </div>
                        <input type="text" placeholder='Enter your email address..'/>
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            Password
                        </div>
                        <input type="password" placeholder='Password'/>
                    </StyledInput>
                    <StyledForgetPass>
                        <div className="forget-pass">
                            <a href="#">Forget Password?</a>
                        </div>
                    </StyledForgetPass>
                    <StyledLoginActionButtons>
                        <div className="register">
                            <button>Register</button>
                        </div>
                        <div className="login">
                            <button>Login</button>
                        </div>
                    </StyledLoginActionButtons>
                </div>
            </StyledLoginForm>
        </div>
     );
}

export default Login;
