import React from 'react';
import styled from 'styled-components';
import Container from "./Container";
import Link from "next/link";

const StyledHeader = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //background: #fff;
        display: flex;
        align-items: center;
        .logo {
            cursor: pointer;
            
            img {
                width: 130px;
                height: 32px;
            }
        }
    
    .actions {
        .logout-btn {
            display: inline-block;
            button {
                background: transparent;
                color: #FD7461;
                border : none;
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
                color: #1D2736;
                cursor: pointer;

            }
        }
        .settings-btn {
            margin-left: 32px;
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

const LinkShorterHeader = () => {
    return(
        <div>
            <Container>
                <StyledHeader>
                    <div className="logo">
                    <Link href="/">
                        <img src={'/nayeem/images/logo.png'} alt="" />
                        </Link>
                    </div>

                    <div className="actions">
                        <div className="logout-btn">
                            <button>Log out</button>
                        </div>
                        <div className="settings-btn">
                            <button>Settings</button>
                        </div>
                    </div>
                </StyledHeader>
            </Container>
            
        </div>
    );
}

export default LinkShorterHeader;
