import { useFormState } from "react-use-form-state";
import { Flex } from "reflexbox/styled-components";
import React, { FC, useState } from "react";
import axios from "axios";

import { getAxiosConfig } from "../../utils";
import { useMessage } from "../../hooks";
import { TextInput } from "../Input";
import { APIv2 } from "../../consts";
import { Button } from "../Button";
import Text, { H2 } from "../Text";
import { Col } from "../Layout";
import Icon from "../Icon";
import styled from 'styled-components';

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
          cursor: pointer;
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
          cursor: pointer;
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
          cursor: pointer;
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


const SettingsPassword = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useMessage(2000);
    const [formState, { password, label }] = useFormState<{ password: string }>(
        null,
        { withIds: true }
    );

    const onSubmit = async e => {
        e.preventDefault();
        if (loading) return;
        if (!formState.validity.password) {
            return setMessage(formState.errors.password);
        }
        setLoading(true);
        setMessage();
        try {
            const res = await axios.post(
                APIv2.AuthChangePassword,
                formState.values,
                getAxiosConfig()
            );
            formState.clear();
            setMessage(res.data.message, "green");
        } catch (err) {
            setMessage(err?.response?.data?.error || "Couldn't update the password.");
        }
        setLoading(false);
    };

    return (
        <>
            <StyledSection>
                <div className="setting-content">
                    <h4>Change Password</h4>
                    <p>Enter a new password to change your current password</p>
                    <StyledInput>
                        <div className="label">
                            New Password
                        </div>
                        <input type="password" placeholder="New Password" {...password({
                            name: "password",
                            validate: value => {
                                const val = value.trim();
                                if (!val || val.length < 8) {
                                    return "Password must be at least 8 chars.";
                                }
                            }
                        })} />
                    </StyledInput>
                    <div className="setDomain-btn passUpdate">
                        <button onClick={onSubmit}>{loading ? "Updating..." : "Update"}</button>
                    </div>
                </div>

                <Text color={message.color} mt={3} fontSize={15}>
                    {message.text}
                </Text>
            </StyledSection>
        </>
    );
}

export default SettingsPassword;