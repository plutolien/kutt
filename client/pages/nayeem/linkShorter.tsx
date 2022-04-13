import React from 'react';
import styled from 'styled-components';
import LinkShorterHeader from "../../components/nayeem/LinkShorterHeader";
import Container from "../../components/nayeem/Container";

const StyledLinkShorter = styled.div`
    background: #FFFFFF;
    padding-bottom: 225px;
`;
const StyledLinkShorterTitle = styled.div`
  margin-top: 80px;
  h1 {
     margin: 0;
    margin-bottom: 40px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #1D2736;
    text-align: center;
    span {
        color: #F0998D;
    }
  }
`;
const StyledLinkShorterForm = styled.div`
  width: 774px;
  margin: auto;
  .longUrlInput {
    input {
        width: 774px;
        height: 60px;
        left: 333px;
        background: #FFFFFF;
        border: 1px solid #DFE8FA;
        box-sizing: border-box;
        border-radius: 15px;
        padding: 24px 14px;
        margin-bottom: 12px;
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #677487;
    }
  }
`;

const StyledAdvanceOption = styled.div`
  input {
    background: red;
  }
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #677487;
  }
`;

const StyledInput = styled.div`
  display: inline-block;
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
        width: 242px;
        height: 60px;
        background: #FFFFFF !important;
        border: 1px solid #DFE8FA;
        box-sizing: border-box;
        border-radius: 15px;
        padding: 23px 14px;
        margin-right: 24px;
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #677487;
        outline: none;
    }
    input.last {
        margin-right: 0;
    }
`;

const StyledDescriptionInput = styled.div`
  display: inline-block;
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
        width: 508px;
        height: 60px;
        background: #FFFFFF !important;
        border: 1px solid #DFE8FA;
        box-sizing: border-box;
        border-radius: 15px;
        padding: 23px 14px;
        margin-right: 24px;
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #677487;
        outline: none;
    }
    
    input.last {
        margin-right: 0;
    }
`;

const StyledShortenedLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 115px;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #1D2736;
  }
  .actions {
    .container {
      margin-right: 40px;
    }
    input {
      
    }
    span {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 29px;
        color: #677487;
    }
  }
`;



 const linkShorter = () => {
     return(
        <div>
            <StyledLinkShorter>
                <LinkShorterHeader/>
                <StyledLinkShorterForm>
                    <StyledLinkShorterTitle>
                        <h1>your links. <span>made shrt.</span> </h1>
                    </StyledLinkShorterTitle>
                    <div className="longUrlInput">
                        <input type="text" placeholder="Paste your long URL"/>
                    </div>
                    <StyledAdvanceOption>
                        <label className="container">
                            <input type="checkbox"/>
                            <span>Show advance options</span>
                        </label>
                    </StyledAdvanceOption>
                    <StyledInput>
                        <div className="label">
                            Domain
                        </div>
                        <input type="password" placeholder='Password'/>
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            /
                        </div>
                        <input type="password" placeholder='Custom Adsress..'/>
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            Password
                        </div>
                        <input type="password" placeholder='Password..' className={"last"}/>
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            Expire in
                        </div>
                        <input type="password" placeholder='Time in minutes'/>
                    </StyledInput>
                    <StyledDescriptionInput>
                        <div className="label">
                            Descriptions
                        </div>
                        <input type="password" placeholder='Descriptions...' className={"last"}/>
                    </StyledDescriptionInput>
                </StyledLinkShorterForm>

                <Container>
                    <StyledShortenedLink>
                        <p>Recent shortened links</p>
                        <div className="actions">
                            <label className="container">
                                <input type="checkbox"/>
                                <span>All links</span>
                            </label>
                            <StyledInput>
                                <input type="password" placeholder='Search...'/>
                            </StyledInput>
                        </div>
                    </StyledShortenedLink>
                </Container>
            </StyledLinkShorter>
        </div>
     );
}

export default linkShorter;
