"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ratex_sdk_1 = require("ratex-sdk");
async function main() {
    const rateX = new ratex_sdk_1.RateX({
        rpcUrl: "https://private-rpc.dragonswap.app/",
        chainId: 1329,
        dexes: [ratex_sdk_1.Dexes.UNISWAP_V2, ratex_sdk_1.Dexes.UNISWAP_V3],
        graphApiKey: "YOUR_GRAPH_API_KEY",
    });
    const tokenIn = "0x0a526e425809aea71eb279d24ae22dee6c92a4fe"; // WETH
    const tokenOut = "0xe30fedd158a2e3b13e9badaeabafc5516e95e8c7"; // DAI
    const amountIn = BigInt("10000000000000000000"); // 1 WETH
    const quote = await rateX.getQuote(tokenIn, tokenOut, amountIn);
    console.log("Best quote:", quote);
    const swapParams = await rateX.getSwapParameters(tokenIn, tokenOut, amountIn, 1, // 1% slippage
    "0xEC744EA7c6792c2D78abdd3E1B1254fdCd32E6fe", 30 // 30 minutes deadline
    );
    console.log("Swap parameters:", swapParams);
}
main().catch(console.error);
