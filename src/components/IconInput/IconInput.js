import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    icon:16,
    fontSize: 14/16,
    borderBottom: "1px solid rgba(0, 0, 0, 1)",
    gap: "6px",
    padding: "4px 0px" ,
  },
  large: {
    icon: 24,
    fontSize: 18/16,
    borderBottom: "2px solid rgba(0, 0, 0, 1)",
    gap: "12px",
    padding: "8px 0px",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
const style = STYLES[size];
if(!style){
  throw new Error (`${size} prop for size is not valid`)
}

  return <Wrapper style={
    {"--width":width +"px",
    "--font-size":style.fontSize+"rem",
    "--padding":style.padding,
    "--border-bottom":style.borderBottom,
    "--gap":style.gap,
    }}
    for={label}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon id={icon} size={style.icon} strokeWidth = "2"></Icon>
    <TextInput id={label} type="text" placeholder={placeholder}></TextInput>
  </Wrapper>;
};

export default IconInput;

const Wrapper = styled.label`
  width:var(--width);
  display:flex;
  align-items: center;
  gap:var(--gap);
  border-bottom: var(--border-bottom);
  padding: var(--padding);
  color: ${COLORS.gray700};
  &:hover{
    color: ${COLORS.black};
  }

  &:focus-within{
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 5px;
  }
  
`

const TextInput = styled.input`
  border:none;
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;

  &:focus{
    outline:none;
  }

  &::placeholder{
    color:${COLORS.gray500};
    font-weight: 400;
  }

`