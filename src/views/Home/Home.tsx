import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from 'toolkit/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'

import LeosstakingBanner from 'views/Home/components/LeosstakingBanner'

import './style.css'


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
        </Hero>
      </Page>
    </>
  )
}

export default Home
