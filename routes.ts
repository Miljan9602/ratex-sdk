import {RateX, Dexes} from "./index";

async function main() {
    const rateX = new RateX({
        rpcUrl: "https://services.polkadothub-rpc.com/testnet",
        chainId: 420420417,
        dexes: [Dexes.UNISWAP_V2, Dexes.UNISWAP_V3],
        graphApiKey: "YOUR_GRAPH_API_KEY",
    });

    const tokenIn = "0xf59512445f4bf16531130ca5e0fd79004f4b2a34"; // WETH
    const tokenOut = "0x248fca94596be9746c009641ff8d0fd5075df268"; // DAI
    const amountIn = BigInt("10000000000000000000"); // 1 WETH

    const quote = await rateX.getQuote(tokenIn, tokenOut, amountIn);

    const swapParams = await rateX.getSwapParameters(
        tokenIn,
        tokenOut,
        amountIn,
        1, // 1% slippage
        "0xEC744EA7c6792c2D78abdd3E1B1254fdCd32E6fe",
        30 // 30 minutes deadline
    );
    console.log("Swap parameters:", swapParams);
}

main().catch(console.error);