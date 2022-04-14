import { useFormState } from "react-use-form-state";
import { Flex } from "reflexbox/styled-components";
import React, { FC, useState } from "react";
import styled from "styled-components";
import getConfig from "next/config";

import { useStoreState, useStoreActions } from "../../store";
import { Domain } from "../../store/settings";
import { errorMessage } from "../../utils";
import { useMessage } from "../../hooks";
import Text, { H2, Span } from "../Text";
import { Colors } from "../../consts";
import { TextInput } from "../Input";
import { Button } from "../Button";
import { Col } from "../Layout";
import Table from "../Table";
import Modal from "../Modal";
import Icon from "../Icon";
import SingleSetting from "./SingleSetting";


const StyledContainer = styled.div`
    padding: 0 140px;
`;

const StyledSection = styled.form`
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

const { publicRuntimeConfig } = getConfig();

const Th = styled(Flex).attrs({ as: "th", py: 3, px: 3 })`
  font-size: 15px;
`;
const Td = styled(Flex).attrs({ as: "td", py: 12, px: 3 })`
  font-size: 15px;
`;

const SettingsDomain = () => {
    const { saveDomain, deleteDomain } = useStoreActions(s => s.settings);
    const [domainToDelete, setDomainToDelete] = useState<Domain>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const domains = useStoreState(s => s.settings.domains);
    const [message, setMessage] = useMessage(2000);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [formState, { label, text }] = useFormState<{
        address: string;
        homepage: string;
    }>(null, { withIds: true });

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            await saveDomain(formState.values);
        } catch (err) {
            setMessage(err?.response?.data?.error || "Couldn't add domain.");
        }
        formState.clear();
        setLoading(false);
    };

    const closeModal = () => {
        setDomainToDelete(null);
        setModal(false);
    };

    const onDelete = async () => {
        setDeleteLoading(true);
        await deleteDomain(domainToDelete.id).catch(err =>
            setMessage(errorMessage(err, "Couldn't delete the domain."))
        );
        setMessage("Domain has been deleted successfully.", "green");
        closeModal();
        setDeleteLoading(false);
    };

    return (
        <>
            {domains.length > 0 && (
                <Table my={3} scrollWidth="550px">
                    <thead>
                        <tr>
                            <Th width={2 / 5}>Domain</Th>
                            <Th width={2 / 5}>Homepage</Th>
                            <Th width={1 / 5}></Th>
                        </tr>
                    </thead>
                    <tbody>
                        {domains.map(d => (
                            <tr key={d.address}>
                                <Td width={2 / 5}>{d.address}</Td>
                                <Td width={2 / 5}>
                                    {d.homepage || publicRuntimeConfig.DEFAULT_DOMAIN}
                                </Td>
                                <Td width={1 / 5} justifyContent="center">
                                    <Icon
                                        as="button"
                                        name="trash"
                                        stroke={Colors.TrashIcon}
                                        strokeWidth="2.5"
                                        backgroundColor={Colors.TrashIconBg}
                                        py={0}
                                        px={0}
                                        size={[23, 24]}
                                        p={["4px", "5px"]}
                                        onClick={() => {
                                            setDomainToDelete(d);
                                            setModal(true);
                                        }}
                                    />
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            <StyledSection onSubmit={onSubmit}>
                <div className="setting-content">
                    <h4>Custom Domain</h4>
                    <p>
                        {`you can set a custom domain for your short URLs, so instead of ${publicRuntimeConfig.DEFAULT_DOMAIN}/shortcut you can have example.com/shorturl Point your domain A record                                  192.64.116.170 then add the domain via form below:`}
                    </p>
                    <StyledInput>
                        <div className="label"> Domain </div>
                        <input type="text" placeholder={"example.com"} {...text("address")} />
                    </StyledInput>
                    <StyledInput>
                        <div className="label">
                            Homepage (Optional)
                        </div>
                        <input type="text" placeholder={"homepage URL"} className="last"  {...text("homepage")} />
                    </StyledInput>

                    <Text color={message.color}>{message.text}</Text>

                    <div className="setDomain-btn">
                        <button onClick={onSubmit}>Set Domain</button>
                    </div>
                </div>
            </StyledSection>

            <Modal id="delete-custom-domain" show={modal} closeHandler={closeModal}>
                <H2 mb={24} textAlign="center" bold>
                    Delete domain?
                </H2>
                <Text textAlign="center">
                    Are you sure do you want to delete the domain{" "}
                    <Span bold>"{domainToDelete && domainToDelete.address}"</Span>?
                </Text>
                <Flex justifyContent="center" mt={44}>
                    {deleteLoading ? (
                        <>
                            <Icon name="spinner" size={20} stroke={Colors.Spinner} />
                        </>
                    ) : (
                        <>
                            <Button color="gray" mr={3} onClick={closeModal}>
                                Cancel
                            </Button>
                            <Button color="red" ml={3} onClick={onDelete}>
                                <Icon name="trash" stroke="white" mr={2} />
                                Delete
                            </Button>
                        </>
                    )}
                </Flex>
            </Modal>
        </>
    );
};

export default SettingsDomain;