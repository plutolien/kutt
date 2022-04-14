import { CopyToClipboard } from "react-copy-to-clipboard";
import { Flex } from "reflexbox/styled-components";
import React, { FC, useState } from "react";
import styled from "styled-components";

import { useStoreState, useStoreActions } from "../../store";
import { useCopy, useMessage } from "../../hooks";
import { errorMessage } from "../../utils";
import { Colors } from "../../consts";
import Animation from "../Animation";
import { Button } from "../Button";
import Text, { H2 } from "../Text";
import { Col } from "../Layout";
import ALink from "../ALink";
import Icon from "../Icon";

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

const ApiKey = styled(Text).attrs({
    mt: [0, "2px"],
    fontSize: [15, 16],
    bold: true
})`
    border-bottom: 1px dotted ${Colors.StatsTotalUnderline};
    cursor: pointer;
    word-break: break-word;
  
    :hover {
      opacity: 0.8;
    }
  `;

const SettingsApi = () => {
    const [copied, setCopied] = useCopy();
    const [message, setMessage] = useMessage(1500);
    const [loading, setLoading] = useState(false);
    const apikey = useStoreState(s => s.settings.apikey);
    const generateApiKey = useStoreActions(s => s.settings.generateApiKey);

    const onSubmit = async () => {
        if (loading) return;
        setLoading(true);
        await generateApiKey().catch(err => setMessage(errorMessage(err)));
        setLoading(false);
    };

    return (
        <>
            <StyledSection>
                <div className="setting-content">
                    <h4>API</h4>
                    <p>you can set a custom domain for your short URLs, so instead of /shortcut you can have
                        example.com/shorturl
                        Point your domain A record 192.64.116.170 then add the domain via form below:
                    </p>
                    <div className="api">
                        <div className="circle"> </div>
                        {apikey && (
                            <Flex alignItems={["flex-start", "center"]} my={3}>
                                {copied ? (
                                    <Animation offset="10px" duration="0.2s">
                                        <Icon
                                            size={[23, 24]}
                                            py={0}
                                            px={0}
                                            mr={2}
                                            p="3px"
                                            name="check"
                                            strokeWidth="3"
                                            stroke={Colors.CheckIcon}
                                        />
                                    </Animation>
                                ) : (
                                    <Animation offset="-10px" duration="0.2s">
                                        <CopyToClipboard text={apikey} onCopy={setCopied}>
                                            <Icon
                                                as="button"
                                                py={0}
                                                px={0}
                                                mr={2}
                                                size={[23, 24]}
                                                p={["4px", "5px"]}
                                                name="copy"
                                                strokeWidth="2.5"
                                                stroke={Colors.CopyIcon}
                                                backgroundColor={Colors.CopyIconBg}
                                            />
                                        </CopyToClipboard>
                                    </Animation>
                                )}
                                <CopyToClipboard text={apikey} onCopy={setCopied}>
                                    <ApiKey>{apikey}</ApiKey>
                                </CopyToClipboard>
                            </Flex>
                        )}
                    </div>
                    <div className="generateKey-btn">
                        <button onClick={onSubmit}>{loading ? "Generating..." : apikey ? "Regenerate" : "Generate"} Key</button>

                        <Text fontSize={15} mt={3} color={message.color}>
                            {message.text}
                        </Text>
                    </div>
                </div>
            </StyledSection>
        </>
    );
};

export default SettingsApi;