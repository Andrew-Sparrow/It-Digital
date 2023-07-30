import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Flex } from './Flex';


const StyledButtonContainer = styled(Flex)`
  width: 300px;
  background-color: #2d6bbb;
  flex-wrap: wrap;
  align-content: center;

  & button:nth-last-child(1){
    margin-bottom: 0;
    margin-right: 0;
  }

  @media ${ props => props.theme.media.tablet } {
    width: 100%;
    justify-content: flex-start;
  }

  @media ${ props => props.theme.media.phone } {
    width: 100%;
  }
`;

const ButtonContainer = (props) => {
  const handleClickAdd = () => {
    alert('handleClickAdd');
  }

  const handleClickEdit = () => {
    alert('handleClickEdit');
  }

  const handleClickDelete = () => {
    alert('handleClickDelete');
  }

  return (
    <StyledButtonContainer>
      <Button $outlined color={'#fff'} $align='flex-end' onClick={handleClickAdd}>Add</Button>
      <Button $outlined color={'#fff'} $align='flex-end' onClick={handleClickDelete}>Delete</Button>
      <Button $outlined color={'#fff'} $align='flex-end' onClick={handleClickEdit}>Edit</Button>
    </StyledButtonContainer>
  )
}

export { ButtonContainer };
