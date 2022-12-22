import { StaticJsonRpcProvider } from '@ethersproject/providers';


export const mainnetScaffoldEthProvider = new StaticJsonRpcProvider('https://rpc.scaffoldeth.io:48544');
export const sepoliaEthProvider = new StaticJsonRpcProvider('https://rpc.sepolia.org/')