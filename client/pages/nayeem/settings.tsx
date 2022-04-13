import React from 'react';
import styled from 'styled-components';
import Header from '../../components/nayeem/Header';
import LinkShorterHeader from "../../components/nayeem/LinkShorterHeader";
import Container from "../../components/nayeem/Container";
import SingleSetting from "../../components/nayeem/SingleSetting";

const StyledSettings = styled.div`
    background: #FFFFFF;
`;
const StyledContentContainer = styled.div`
    margin: auto;
    width: 880px;
`;
const StyledGretings = styled.div`
    margin-top: 60px;
    border-bottom: 1px solid #DFE8FA;
    padding-bottom: 24px;
    h4 {
        margin: 0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 31px;
        letter-spacing: -0.02em;
        color: #1D2736;
    }
`;
const StyledSection = styled.div`
    padding: 40px 0;
    border-bottom: 1px solid #DFE8FA;
    .setting-content {
      h4 {
        margin: 0;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: -0.02em;
        color: #1D2736;
        margin-bottom: 20px;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
        color: #1D2736;
      }
      .api {
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        .circle {
          width: 32px;
          height: 32px;
          background: #C4C4C4;
          border-radius: 50%;
          margin-right: 16px;
        }
        a {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 110%;
          text-decoration-line: underline;
          color: #1D2736;
        }
      }
      .setDomain-btn {
        button {
          width: 152px;
          height: 59px;
          border: none;
          background: #F0998D;
          box-shadow: 0px 16px 40px rgba(255, 188, 166, 0.33);
          border-radius: 15px;
          
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
          color: #FFFFFF;
        }
      }
      .delete-btn {
        display: inline-block;
        button {
          width: 152px;
          height: 59px;
          border: none;
          background: #FB6265;
          box-shadow: 0px 16px 40px rgba(255, 188, 166, 0.33);
          border-radius: 15px;          
          
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
          color: #FFFFFF;
        }
      }
      .passUpdate {
        display: inline-block !important;
      }
      .delete {
        display: inline-block !important;
        background: #FB6265 !important;
      }
      .generateKey-btn {
        button {
          width: 200px;
          height: 59px;
          border: none;
          background: #F0998D;
          box-shadow: 0px 16px 40px rgba(255, 188, 166, 0.33);
          border-radius: 15px;
          
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
          color: #FFFFFF;
        }
      }
    }
`;
const StyledInput = styled.div`
    display: inline-block;
    .label {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      color: #677487;
      margin-bottom: 8px;
    }
    input {
      width: 424px;
      height: 60px;
      background: #FFFFFF;
      border: 1px solid #DFE8FA;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 14px 24px;
      margin-right: 32px;
      
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      color: #677487;
      margin-bottom: 24px;
    }
    input.last {
      margin-right: 0px;
    }
`;

const Settings = () => {
    return (
        <div>
            <StyledSettings>
                <LinkShorterHeader/>
                <Container>
                    <StyledContentContainer>
                        <StyledGretings>
                            <h4>Welcome, it@snikpic.io</h4>
                        </StyledGretings>

                        <SingleSetting
                            setting_name={"Custom Domain"}
                            setting_description={"you can set a custom domain for your short URLs, so instead of /shortcut you can have example.com/shorturl Point your domain A record                                  192.64.116.170 then add the domain via form below:"}
                            first_input_label={"Domain"}
                            second_input_label={"Homepage (Optional)"}
                            first_input_placeholder={"example.com"}
                            second_input_placeholder={"homepage URL"}
                            button_text={"Set Domain"}
                        />

                        <StyledSection>
                            <div className="setting-content">
                                <h4>API</h4>
                                <p>you can set a custom domain for your short URLs, so instead of /shortcut you can have
                                    example.com/shorturl
                                    Point your domain A record 192.64.116.170 then add the domain via form below:
                                </p>
                                <div className="api">
                                    <div className="circle"> </div>
                                    <a href="">h~ty2iobn24u92748iohefoiujnfo249</a>
                                </div>
                                <div className="generateKey-btn">
                                    <button>Regenerate Key</button>
                                </div>
                            </div>
                        </StyledSection>

                        <StyledSection>
                            <div className="setting-content">
                                <h4>Change Password</h4>
                                <p>Enter a new password to change your current password</p>
                                <StyledInput>
                                    <div className="label">
                                        New Password
                                    </div>
                                    <input type="password" placeholder="New Password"/>
                                </StyledInput>
                                <div className="setDomain-btn passUpdate">
                                    <button>Update</button>
                                </div>
                            </div>
                        </StyledSection>

                        <SingleSetting
                            setting_name={"Change Password"}
                            setting_description={"Enter a new password to change your current password"}
                            first_input_label={"Password"}
                            second_input_label={"New email address"}
                            first_input_placeholder={"Password"}
                            second_input_placeholder={"example@mail.co"}
                            button_text={"Update"}
                        />

                        <StyledSection>
                            <div className="setting-content">
                                <h4>Delete Account</h4>
                                <p>Delete your account from</p>
                                <StyledInput>
                                    <div className="label">
                                        Password
                                    </div>
                                    <input type="password" placeholder="Password.."/>
                                </StyledInput>
                                <div className="delete-btn">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </StyledSection>

                    </StyledContentContainer>
                </Container>
            </StyledSettings>
        </div>
    );
}

export default Settings;
