import Web3 from 'web3'
import { UniswapV2HelperAbi } from '../abi/UniswapV2HelperAbi'

import { UNISWAP_V2_HELPER_ADDRESS as UNISWAP_V2_HELPER_ADDRESS_MAINNET } from '../addresses-mainnet'
import { UNISWAP_V2_HELPER_ADDRESS as UNISWAP_V2_HELPER_ADDRESS_ARBITRUM } from '../addresses-arbitrum'
import { UNISWAP_V2_HELPER_ADDRESS as UNISWAP_V2_HELPER_ADDRESS_SEI } from '../addresses-sei'
import { UNISWAP_V2_HELPER_ADDRESS as UNISWAP_V2_HELPER_ADDRESS_POLKADOT } from '../addresses-polkadot'

export function CreateUniswapV2HelperContract(chainId: number, web3: Web3) {
  if (chainId === 1) {
    return new web3.eth.Contract(UniswapV2HelperAbi, UNISWAP_V2_HELPER_ADDRESS_MAINNET)
  } else if (chainId === 1329) {
    return new web3.eth.Contract(UniswapV2HelperAbi, UNISWAP_V2_HELPER_ADDRESS_SEI)
  } else if (chainId === 420420417) {
    return new web3.eth.Contract(UniswapV2HelperAbi, UNISWAP_V2_HELPER_ADDRESS_POLKADOT)
  } else {
    return new web3.eth.Contract(UniswapV2HelperAbi, UNISWAP_V2_HELPER_ADDRESS_ARBITRUM)
  }
}
