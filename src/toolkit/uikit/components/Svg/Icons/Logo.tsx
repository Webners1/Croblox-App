import React from 'react'
import styled from "styled-components";
// import Svg from '../Svg'
import { SvgProps } from '../types'

const BLOXSWAPLogo = styled.div`
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 2px 2px 2px #a1a1a1;
`;

const Icon: React.FC<SvgProps> = (props) => {  
  const textColor = '#000000'
  const bgColor = '#FFFFFF'
  return (
    <BLOXSWAPLogo style={{color: textColor, backgroundColor: bgColor}} {...props}>
      BLOXSWAP
    </BLOXSWAPLogo>
  )
}

export default Icon
