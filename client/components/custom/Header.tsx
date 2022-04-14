import React from 'react';
import styled from 'styled-components';
import Container from "./Container";
import Link from "next/link";

const StyledHeader = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    .wrapper {
        display: flex;
        align-items: center;
        .logo {
            img {
                width: 130px;
                height: 32px;
            }
        }
        .nav {
            margin-left: 80px;
            .menu-list {
                ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    li {
                        padding-right: 40px;
                        display: inline-block;
                        cursor: pointer;

                        a {
                            text-decoration: none;
                            color: #1D2736;
                            font-family: Poppins;
                            font-size: 14px;
                            line-height: 22.4px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    
    .actions {
        .signup-btn {
            display: inline-block;
            button {
                background: #FFF0EC;
                color: #FD7461;
                border : none;
                border-radius: 50px;
                height: 50px;
                width: 109px;
                font-family: Poppins;
                font-weight: 500;
                font-size: 16px;
                Line-height: 25.6px;
                cursor: pointer;

            }
        }
        .login-btn {
            margin-left: 16px;
            display: inline-block;
            button {
                background: #F0998D;
                color: #fff;
                border : none;
                border-radius: 50px;
                height: 50px;
                width: 109px;
                font-family: Poppins;
                font-weight: 500;
                font-size: 16px;
                Line-height: 25.6px;
                cursor: pointer;
            }
        }
    }
`;

const Header = () => {
    return (
        <div>
            <Container>
                <StyledHeader>
                    <div className="wrapper">
                        <div className="logo">
                            <Link href="/">
                                <img src={'/nayeem/images/logo.png'} alt="" />
                            </Link>
                        </div>

                        <div className="nav">
                            <div className="menu-list">
                                <ul>
                                    <li> <a href="#">Github</a> </li>
                                    <li> <a href="#">Report</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <div className="signup-btn">
                            <button>Sign up</button>
                        </div>
                        <div className="login-btn">
                            <button>Login</button>
                        </div>
                    </div>
                </StyledHeader>
            </Container>

        </div>
    );
}

export default Header;
