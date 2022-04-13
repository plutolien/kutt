import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    padding: 0 140px;
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


interface ContainerProps {
    setting_name: string,
    setting_description: string,
    first_input_label: string,
    second_input_label: string,
    first_input_placeholder: string,
    second_input_placeholder: string,
    button_text: string;
}

const SingleSetting: React.FC<ContainerProps> = (props) => {
    return(
        <StyledSection>
            <div className="setting-content">
                <h4>{props.setting_name}</h4>
                <p>{props.setting_description}</p>
                <StyledInput>
                    <div className="label">
                        {props.first_input_label}
                    </div>
                    <input type="password" placeholder={props.first_input_placeholder}/>
                </StyledInput>
                <StyledInput>
                    <div className="label">
                        {props.second_input_label}
                    </div>
                    <input type="password" placeholder={props.second_input_placeholder} className="last"/>
                </StyledInput>
                <div className="setDomain-btn">
                    <button>{props.button_text}</button>
                </div>
            </div>
        </StyledSection>
    );
}

export default SingleSetting;