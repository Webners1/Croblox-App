import React from 'react'
import styled from 'styled-components'
// import Svg from '../Svg'
import { SvgProps } from '../types'

const NoAvatar = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 8px;
`;

const Icon: React.FC<SvgProps> = (props) => {
  // const theme = useTheme()
  // const primaryColor = theme.isDark ? '#3C3742' : '#e9eaeb'
  // const secondaryColor = theme.isDark ? '#666171' : '#bdc2c4'

  return (
    <NoAvatar>
      BLOXSWAP
    </NoAvatar>
  )
}

export default Icon
