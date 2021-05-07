/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const styleWrapper = {
  small:{
    "--height": "8px",
    "--border-radius": "4px",
    "--padding":"0"
  },
  medium:{
    "--height": "12px",
    "--border-radius": "4px",
    "--padding":"0"
  },
  large:{
    "--height": "24px",
    "--border-radius": "8px",
    "--padding":"4px"
  }
}

const ProgressBar = ({ value, size }) => {
    if(value<0 || value >100){
    throw new Error("value should be within 0 and 100");
  }
  const wrapperStyle = styleWrapper[size]

  if(!wrapperStyle){
    throw new Error (`size prop not valid, ${size}, you need to chose a valid one`)
  }
    return <Wrapper style={wrapperStyle}>
    <Progress
      value={value}
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin="0" 
      aria-valuemax="100">
    </Progress>
  </Wrapper>;
};

const Wrapper = styled.div`
  height: var(--height);
  border-radius:var(--border-radius);
  padding:var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Progress = styled.div`
  background-color:${COLORS.primary};
  height:100%;
  width:${props=>props.value}%;
  border-top-left-radius:4px;
  border-bottom-left-radius:4px;
  border-top-right-radius: ${props=>props.value>98 ? 4: 0 }px;
  border-bottom-right-radius: ${props=>props.value>98 ? 4: 0 }px;
`



export default ProgressBar;

// import React from 'react';
// import styled from 'styled-components';
// import { NoEmitOnErrorsPlugin } from 'webpack';

// import { COLORS } from '../../constants';
// import VisuallyHidden from '../VisuallyHidden';



// const ProgressBar = ({ value, size }) => {


  


// const Wrapper = styled.div`
//   width: 370px;
//   height: 12px;
//   border: 0px solid ${COLORS.transparentGray15};
//   border-radius:8px;
//   padding:0;
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   padding:0;
// `

// const Progress = styled.div`
//   background-color:${COLORS.primary};
//   height:100%;
//   width:${props=>props.value}%;
//   border-top-left-radius:12px;
//   border-bottom-left-radius:12px;
// `

// export default ProgressBar;