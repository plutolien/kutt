import React from 'react';
import styled from 'styled-components';
import LinkShorterHeader from "../../components/core/LinkShorterHeader";
import Container from "../../components/core/Container";

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
  margin-bottom: 24px;
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

const StyledLinkShorterTable = styled.div`
  table {
    background: #FFFFFF;
    border: 1px solid #DFE8FA;
    box-sizing: border-box;
    border-radius: 15px;
    width: 100%;
    
    thead {
      tr {
        
        th {
           text-align: left;
           font-family: 'Poppins';
           font-style: normal;
           font-weight: 500;
           font-size: 14px;
           line-height: 25px;
           color: #1D2736;
           border-bottom: 1px solid #DFE8FA;
           padding: 20px;
        }
      }
    }
    tbody {
      tr {
        td:first-child {
          a {
            color: #41A1FA;
            text-decoration: none;
          }
          
        }
        td {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 25px;
          color: #677487;
          padding: 20px;
          .circle {
            width: 24px;
            height: 24px;
            background: #C4C4C4;
            border-radius: 50%;
            display: inline-block;
            margin-right: 5px;
          }
        }
      }
    }
  }
`;

const StyledLinkShorterPagination = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: right;
  align-items: center;
    .wrapper {
        .page-number {
            background: #FFFFFF;
            border: 1px solid #DFE8FA;
            box-sizing: border-box;
            border-radius: 12px;
            display: inline-block;
            margin-right: 12px;
            text-align: center;
            padding: 7px 11px;
            
            span {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 25px;
                color: #000000;
            }
        }
    }
    
    .pagination-action {
    margin-left: 40px;
       .prev {
          display: inline-block;
            button {
              width: 40px;
              height: 40px;
              background: #FFFFFF;
              border: 1px solid #DFE8FA;
              box-sizing: border-box;
              border-radius: 12px;
              span {
                font-weight: bold;
                color: #200E32;
                font-size: 15px;
              }
            }
       }
       .next {
         display: inline-block;
         margin-left: 12px;
            button {
              width: 40px;
              height: 40px;
              background: #FFFFFF;
              border: 1px solid #DFE8FA;
              box-sizing: border-box;
              border-radius: 12px;
              span {
                font-weight: bold;
                color: #200E32;
                font-size: 15px;
              }
            }
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

                    <StyledLinkShorterTable>
                        <table>
                            <thead>
                                <tr>
                                    <th>Original URL</th>
                                    <th>Created</th>
                                    <th>Short URL</th>
                                    <th>Views</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href=""> https://www.tokopedia.com/philips-estore/philips-digital-rice-c...</a></td>
                                    <td>25 Minutes</td>
                                    <td>snic.pik/j3EEk</td>
                                    <td>2 Views</td>
                                    <td>
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </StyledLinkShorterTable>

                    <StyledLinkShorterPagination>
                        <div className="wrapper">
                            <div className="page-number">
                                <span>10</span>
                            </div>
                            <div className="page-number">
                                <span>25</span>
                            </div>
                            <div className="page-number">
                                <span>50</span>
                            </div>
                        </div>
                        <div className="pagination-action">
                            <div className="prev">
                                <button>
                                    <img src={'/nayeem/icons/prev.png'} alt=""/>
                                </button>
                            </div>
                            <div className="next">
                                <button>
                                    <img src={'/nayeem/icons/next.png'} alt=""/>
                                </button>
                            </div>
                        </div>
                    </StyledLinkShorterPagination>
                </Container>
            </StyledLinkShorter>
        </div>
     );
}

export default linkShorter;
