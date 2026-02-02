import { UniswapHelperAbi } from '../abi/UniswapHelperAbi'
import Web3 from 'web3'

import { UNISWAP_HELPER_ADDRESS as UNISWAP_HELPER_ADDRESS_MAINNET } from '../addresses-mainnet'
import { UNISWAP_HELPER_ADDRESS as UNISWAP_HELPER_ADDRESS_ARBITRUM } from '../addresses-arbitrum'
import { UNISWAP_HELPER_ADDRESS as UNISWAP_HELPER_ADDRESS_SEI } from '../addresses-sei'
import { UNISWAP_HELPER_ADDRESS as UNISWAP_HELPER_ADDRESS_POLKADOT } from '../addresses-polkadot'

export function CreateUniswapHelperContract(chainId: number, web3: Web3) {
  if (chainId === 1) {
    return new web3.eth.Contract(UniswapHelperAbi, UNISWAP_HELPER_ADDRESS_MAINNET)
  } else if (chainId === 1329) {
    return new web3.eth.Contract(UniswapHelperAbi, UNISWAP_HELPER_ADDRESS_SEI)
  } else if (chainId === 420420417) {
    return new web3.eth.Contract(UniswapHelperAbi, UNISWAP_HELPER_ADDRESS_POLKADOT)
  } else {
    return new web3.eth.Contract(UniswapHelperAbi, UNISWAP_HELPER_ADDRESS_ARBITRUM)
  }
}
