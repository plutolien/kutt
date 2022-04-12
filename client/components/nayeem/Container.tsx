import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    padding: 0 140px;
`;

interface ContainerProps {

}

const Container: React.FC<ContainerProps> = (props) => {
    return(
        
            <StyledContainer>
                {props.children}
            </StyledContainer>
        
    );
}

export default Container;