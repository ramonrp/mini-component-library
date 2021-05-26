import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
    <NativeSelect value={value} onChange={onChange}>
      {children}
    </NativeSelect>
    <PresentationalBit>
      {displayedValue}
      <Icon id="chevron-down" size="24" strokeWidth="1"></Icon>
    </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position:relative;
  width: max-content;
`;



const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`
const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: ${16/16}rem;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 12px;
  display: flex;
  align-items: center;
  gap: 18px;

  ${NativeSelect}:focus + &{
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + &{
    color:${COLORS.black};
  }
`;

export default Select;
