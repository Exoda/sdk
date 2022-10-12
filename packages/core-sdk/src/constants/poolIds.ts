import { PoolIdMap } from '../types'
import { ChainId } from '../enums'

export const FERMION_POOLID: PoolIdMap = {
    [ChainId.ETHEREUM]: 0,
    [ChainId.ROPSTEN]: 5,
    [ChainId.RINKEBY]: 5,
    [ChainId.GÖRLI]: 5,
    [ChainId.KOVAN]: 5,
  }