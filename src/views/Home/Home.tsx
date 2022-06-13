import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import LeosAudit from 'views/Home/components/LeosAudit'
import SaleAudit from 'views/Home/components/SaleAudit'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import ProgressBar from '@ramonak/react-progress-bar'
import LeosstakingBanner from 'views/Home/components/LeosstakingBanner'
import Web from 'web3'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'
import PropTypes from 'prop-types'
import './style.css'
import { useERC20 } from '../../hooks/useContract'

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 32px;
  text-align: center;
`
const StyledDiv = styled('div')`
  background-color: #bcbcbc;
  border-radius: 30px;
`



const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  const contractAddress = '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b'
  const totalCollectionContract = useERC20(contractAddress)
// let[totalCollection,setTotalCollection] = React.useState(0)
  const totalCap = 16800
  let totalCollection = 0
  const newWeb3 = new Web3(window.ethereum);
  const walletAddress = '0x61bEE7b65F860Fe5a22958421b0a344a0F146983'
  const presale = async () => {
    console.log(totalCollectionContract)
    const name = await totalCollectionContract.name()
console.log(name)
    totalCollection = await totalCollectionContract.balanceOf(walletAddress)
    
    console.log(totalCollection)
  }
  useEffect(() => {
    presale()
  })
  const now = 60

  return (
    <>
      <LeosstakingBanner />
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="primary">
            {t('Bloxswap')}
          </Heading>
          <Text color="textSubtle">
            {t('Next generation AMM and yield farm with deflationary token model on Binance Smart Chain.')}
          </Text>
        </Hero>
        {/* <div> */}
        {/* <Cards> */}
        {/* <FarmStakingCard /> */}
        {/* <TotalValueLockedCard /> */}
        {/* </Cards> */}
        {/* <Cards> */}
        {/* <CTACards> */}
        {/* <EarnAPRCard /> */}
        {/* <EarnAssetCard /> */}
        {/* <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} /> */}
        {/* </CTACards> */}
        {/* </Cards> */}
        {/* <Cards> */}
        {/* <LeosAudit /> */}
        {/* <SaleAudit /> */}
        {/* </Cards> */}
        {/* </div> */}
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="primary">
            {t('Presale')}
          </Heading>
          <Text color="textSubtle" fontSize="30px">
            {t(`${totalCollection.toLocaleString()}$ / ${totalCap.toLocaleString()}$`)}
          </Text>
        </Hero>
        <StyledDiv>
          <ProgressBar
            className="wrapper"
            barContainerClassName="container"
            completedClassName="barCompleted"
            labelClassName="label"
            completed={`${(totalCollection / totalCap) * 100}`}
          />
          ;
        </StyledDiv>
        <Heading as="h1" scale="xl" mb="24px">{`${(totalCollection / totalCap) * 100}%`}</Heading>
      </Page>
    </>
  )
}

export default Home
