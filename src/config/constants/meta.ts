import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BLOXSWAP',
  description:
    'The #1 AMM and yied farm with deflationary token model on Bianace Smart Chain.',
  image: 'https://animalfactguide.com/wp-content/uploads/2013/01/lion.jpg',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    // case '/':
    //   return {
    //     title: `${t('Home')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/competition':
    //   return {
    //     title: `${t('Trading Battle')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/prediction':
    //   return {
    //     title: `${t('Prediction')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/farms':
    //   return {
    //     title: `${t('Farms')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/pools':
    //   return {
    //     title: `${t('Pools')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/lottery':
    //   return {
    //     title: `${t('Lottery')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/collectibles':
    //   return {
    //     title: `${t('Collectibles')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/ifo':
    //   return {
    //     title: `${t('Initial Farm Offering')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/teams':
    //   return {
    //     title: `${t('Leaderboard')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/profile/tasks':
    //   return {
    //     title: `${t('Task Center')} | ${t('BLOXSWAP')}`,
    //   }
    // case '/profile':
    //   return {
    //     title: `${t('Your Profile')} | ${t('BLOXSWAP')}`,
    //   }
    default:
      return {
        title: `${t('BLOXSWAP')}`,
      }
  }
}
