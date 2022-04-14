import React from 'react';
import styled from 'styled-components';
import Header from '../components/custom/Header';
import LinkShorterHeader from "../components/custom/LinkShorterHeader";
import Container from "../components/custom/Container";
import SingleSetting from "../components/custom/SingleSetting";
import { useStoreState } from "../store";
import SettingsDomain from '../components/custom/SettingsDomain';
import SettingsApi from '../components/custom/SettingsApi';
import SettingsPassword from '../components/custom/SettingsPassword';
import SettingsChangeEmail from '../components/custom/SettingsChangeEmail';
import SettingsDeleteAccount from '../components/custom/SettingsDeleteAccount';

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


const Settings = () => {
  const email = useStoreState(s => s.auth.email);

  return (
    <div>
      <StyledSettings>
        <LinkShorterHeader />
        <Container>
          <StyledContentContainer>
            <StyledGretings>
              <h4>Welcome,{" "} {email}</h4>
            </StyledGretings>

            <SettingsDomain />
            <SettingsApi />
            <SettingsPassword />
            <SettingsChangeEmail />
            <SettingsDeleteAccount />
          </StyledContentContainer>
        </Container>
      </StyledSettings>
    </div>
  );
}

export default Settings;
