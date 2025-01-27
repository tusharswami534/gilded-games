import { PloygonIcon, UniSwapIcon, UnrealEngineIcon } from "./icon"
import CoinGecko from '../assets/images/png/coin-gecko.png'
import GildToken from '../assets/images/png/gild-token.png'
import PreSaleToken from '../assets/images/svg/pre-sale-token.svg'
import Holder from '../assets/images/svg/holders.svg'
import NFT from '../assets/images/svg/nft-logo.svg'

export const HEADER_LIST = [
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'Presale $GILD',
        link: '#presale'
    },
    {
        title: 'Staking $GILD',
        link: '#staking'
    },
    {
        title: '$GILD Nodes',
        link: '#nodes'
    },
]

export const POWERED_LIST = [
    <UnrealEngineIcon />,
    <UniSwapIcon />,
    CoinGecko,
    <PloygonIcon />
]

export const ROADMAP_LIST = [
    {
        step: 'Phase 1 ',
        question: 'Q1 2022',
        list: [
            'Whitelist/Presale Created', 'Private Sale', 'Public Sale', 'Prime Eternal Owner Perks ',
        ]
    },
    {
        step: 'Phase 2 ',
        question: 'Q2 2022',
        list: [
            'Token & Staking Release', 'Staking Gameplay'
        ]
    },
    {
        step: 'Phase 3 ',
        question: 'Q3 2022',
        list: [
            'MVP Gameplay Release ', 'Battle Modes Release', 'Land Gameplay Release', 'Gear Forging Release',
        ]
    },
]



export const GILDED_INFO_LIST = [
    {
        logo: GildToken,
        title: "3 Billion",
        description: "GILD Token Info"
    },
    {
        logo: PreSaleToken,
        title: "Pre Sale Token",
        description: ""
    },
    {
        logo: Holder,
        title: "100,000+",
        description: "Holders"
    },
    {
        logo: NFT,
        title: "2,500+",
        description: "NFT Sold"
    },
]