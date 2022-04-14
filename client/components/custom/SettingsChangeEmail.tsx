import { useFormState } from "react-use-form-state";
import React, { FC, useState } from "react";
import { Flex } from "reflexbox";
import axios from "axios";

import { getAxiosConfig } from "../../utils";
import { useMessage } from "../../hooks";
import { APIv2 } from "../../consts";
import { TextInput } from "../Input";
import Text, { H2 } from "../Text";
import { Button } from "../Button";
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

const SettingsChangeEmail = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useMessage(5000);
    const [formState, { password, email, label }] = useFormState<{
        changeemailpass: string;
        changeemailaddress: string;
    }>(null, {
        withIds: true
    });

    const onSubmit = async e => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const res = await axios.post(
                APIv2.AuthChangeEmail,
                {
                    password: formState.values.changeemailpass,
                    email: formState.values.changeemailaddress
                },
                getAxiosConfig()
            );
            setMessage(res.data.message, "green");
        } catch (error) {
            setMessage(error?.response?.data?.error || "Couldn't send email.");
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
                            Password
                        </div>
                        <input type="password" placeholder={"Password"} {...password("changeemailpass")} />
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            New email address
                        </div>
                        <input type="text" placeholder={"example@mail.co"} className="last" {...email("changeemailaddress")} />
                    </StyledInput>
                    <div className="setDomain-btn">
                        <button onClick={onSubmit}>{loading ? "Sending..." : "Update"}</button>
                    </div>
                </div>

                <Text fontSize={15} color={message.color} mt={3}>
                    {message.text}
                </Text>
            </StyledSection>
        </>
    );
};

export default SettingsChangeEmail;