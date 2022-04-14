import React, { useEffect, useState } from "react";
import { useFormState } from "react-use-form-state";
import styled from 'styled-components';
import Header from '../components/custom/Header';
import { useStoreState, useStoreActions } from "../store";
import { APIv2, DISALLOW_REGISTRATION } from "../consts";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import emailValidator from "email-validator";
import Text, { H2 } from "../components/Text";


const StyledLoginForm = styled.form`
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
            cursor: pointer;
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
            cursor: pointer;
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
  const { isAuthenticated } = useStoreState(s => s.auth);
  const login = useStoreActions(s => s.auth.login);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState({ login: false, signup: false });
  const [formState, { email, password, label }] = useFormState<{
    email: string;
    password: string;
  }>(null, { withIds: true });

  useEffect(() => {
    if (isAuthenticated) Router.push("/");
  }, [isAuthenticated]);

  function onSubmit(type: "login" | "signup") {
    return async e => {
      e.preventDefault();
      const { email, password } = formState.values;

      if (loading.login || loading.signup) return null;

      if (!email) {
        return setError("Email address must not be empty.");
      }

      if (!emailValidator.validate(email)) {
        return setError("Email address is not valid.");
      }

      if (password.trim().length < 8) {
        return setError("Password must be at least 8 chars long.");
      }

      setError("");

      if (type === "login") {
        setLoading(s => ({ ...s, login: true }));
        try {
          await login(formState.values);
          Router.push("/");
        } catch (error) {
          setError(error.response.data.error);
        }
      }

      if (type === "signup" && !DISALLOW_REGISTRATION) {
        setLoading(s => ({ ...s, signup: true }));
        try {
          await axios.post(APIv2.AuthSignup, { email, password });
          setVerifying(true);
        } catch (error) {
          setError(error.response.data.error);
        }
      }

      setLoading({ login: false, signup: false });
    };
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
      <StyledLoginForm onSubmit={onSubmit("login")}>
        <Header />
        <div className="form-wrapper">
          <h1 className='form-title'>Login</h1>
          <StyledInput>
            <div className="label">
              Email Address
            </div>
            <input type="text" placeholder='Enter your email address..' {...email("email")} />
          </StyledInput>
          <StyledInput>
            <div className="label">
              Password
            </div>
            <input type="password" placeholder='Password' {...password("password")} />
          </StyledInput>
          <StyledForgetPass>
            <div className="forget-pass">
              <Link href="/reset-password">Forget Password?</Link>
            </div>
          </StyledForgetPass>

          <Text color="red" mt={1} normal>
            {error}
          </Text>

          <StyledLoginActionButtons>
            <div className="register">
              <button onClick={onSubmit("signup")}>Register</button>
            </div>
            <div className="login">
              <button onClick={onSubmit("login")}>Login</button>
            </div>
          </StyledLoginActionButtons>
        </div>
      </StyledLoginForm>
    </div>
  );
}

export default Login;
