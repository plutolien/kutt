import { useFormState } from "react-use-form-state";
import React, { FC, useState } from "react";
import getConfig from "next/config";
import Router from "next/router";
import axios from "axios";

import { getAxiosConfig } from "../../utils";
import { Col, RowCenterV, RowCenterH } from "../Layout";
import Text, { H2, Span } from "../Text";
import { useMessage } from "../../hooks";
import { TextInput } from "../Input";
import { APIv2, Colors } from "../../consts";
import { Button } from "../Button";
import Icon from "../Icon";
import Modal from "../Modal";
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

const { publicRuntimeConfig } = getConfig();

const SettingsDeleteAccount = () => {
    const [message, setMessage] = useMessage(1500);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [formState, { password, label }] = useFormState<{ accpass: string }>(
        null,
        {
            withIds: true
        }
    );

    const onSubmit = async e => {
        e.preventDefault();
        if (loading) return;
        setModal(true);
    };

    const onDelete = async e => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            await axios.post(
                `${APIv2.Users}/delete`,
                { password: formState.values.accpass },
                getAxiosConfig()
            );
            Router.push("/logout");
        } catch (error) {
            setMessage(error.response.data.error);
        }
        setLoading(false);
    };

    return (
        <>
            <StyledSection>
                <div className="setting-content">
                    <h4>Delete Account</h4>
                    <p>Delete your account from {publicRuntimeConfig.SITE_NAME}</p>
                    <StyledInput>
                        <div className="label">
                            Password
                        </div>
                        <input type="password" placeholder="Password.." {...password("accpass")} />
                    </StyledInput>
                    <div className="delete-btn">
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </StyledSection>

            <Modal
                id="delete-account"
                show={modal}
                closeHandler={() => setModal(false)}
            >
                <>
                    <H2 mb={24} textAlign="center" bold>
                        Delete account?
                    </H2>
                    <Text textAlign="center">
                        All of your data including your <Span bold>LINKS</Span> and{" "}
                        <Span bold>STATS</Span> will be deleted.
                    </Text>
                    <RowCenterH mt={44}>
                        {loading ? (
                            <>
                                <Icon name="spinner" size={20} stroke={Colors.Spinner} />
                            </>
                        ) : message.text ? (
                            <Text fontSize={15} color={message.color}>
                                {message.text}
                            </Text>
                        ) : (
                            <>
                                <Button color="gray" mr={3} onClick={() => setModal(false)}>
                                    Cancel
                                </Button>
                                <Button color="red" ml={3} onClick={onDelete}>
                                    <Icon name="trash" stroke="white" mr={2} />
                                    Delete
                                </Button>
                            </>
                        )}
                    </RowCenterH>
                </>
            </Modal>
        </>
    );
};

export default SettingsDeleteAccount;