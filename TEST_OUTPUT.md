
```console

> @defi.org/twap@0.0.1 test
> npm run test:eth && npm run test:poly


> @defi.org/twap@0.0.1 test:eth
> BLOCK=14908980 DEBUG=web3-candies hardhat test --logs

🌐 network ETH blocknumber 14908980 🌐

  Errors
    order
  web3-candies resetNetworkFork to 14908980 +0ms
  web3-candies now block 14908980 +3s
  web3-candies deploying UniswapV2Exchange +10ms
CREATE UniswapV2Exchange.constructor(_uniswap=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a) => (0x74652f570B1A95235a9A054994319eeb827c5E17)
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +472ms
  web3-candies deploying TWAP +2s
CREATE TWAP.constructor() => (0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5)
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +257ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +1ms
CALL USDC.transfer(to=[user], amount=1000000000000)
   USDC.Transfer(from=[srcTokenWhale], to=[user], value=1000000000000)
      ✓ invalid id (23ms)
  web3-candies resetNetworkFork to 14908980 +1s
  web3-candies now block 14908980 +895ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +20ms
  web3-candies deploying TWAP +50ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +1ms
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431406, delay=59)
      ✓ minimum delay 60 seconds (411ms)
  web3-candies resetNetworkFork to 14908980 +430ms
  web3-candies now block 14908980 +884ms
  web3-candies deploying UniswapV2Exchange +10ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +15ms
  web3-candies deploying TWAP +24ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +14ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
      ✓ invalid params (35ms)
  web3-candies resetNetworkFork to 14908980 +48ms
  web3-candies now block 14908980 +845ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +16ms
  web3-candies deploying TWAP +23ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.approve(spender=[TWAP], amount=5)
   USDC.Approval(owner=[user], spender=[TWAP], value=5)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=100, srcBidAmount=10, dstMinAmount=1, deadline=1000000000000, delay=60)
      ✓ insufficient maker allowance (46ms)
  web3-candies resetNetworkFork to 14908980 +58ms
  web3-candies now block 14908980 +866ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +20ms
  web3-candies deploying TWAP +58ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +1ms
CALL USDC.approve(spender=[TWAP], amount=15)
   USDC.Approval(owner=[user], spender=[TWAP], value=15)
CALL USDC.transfer(to=[taker], amount=1000000000000)
   USDC.Transfer(from=[user], to=[taker], value=1000000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=100, srcBidAmount=10, dstMinAmount=1, deadline=1000000000000, delay=60)
      ✓ insufficient maker balance (446ms)
    verify bid
  web3-candies resetNetworkFork to 14908980 +459ms
  web3-candies now block 14908980 +860ms
  web3-candies deploying UniswapV2Exchange +10ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +12ms
  web3-candies deploying TWAP +22ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654430416, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +52ms
  web3-candies was: block 14908985 timestamp 2022-06-05T12:00:08.000Z now: block 14908986 timestamp 2022-06-05T12:00:19.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654430430, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.bid(id=1, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
      ✓ expired (154ms)
  web3-candies resetNetworkFork to 14908980 +111ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +16ms
  web3-candies deploying TWAP +22ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies deploying MockExchange +13ms
CREATE MockExchange.constructor() => (0xA1041132B507466bE2b840b0BdFc78CA333b5861)
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +212ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 1000000000000000000])
  web3-candies deploying MockExchange +614ms
CREATE MockExchange.constructor() => (0xaCda8C6a10353046fC9a1a99AB4488B2f0e900ea)
  web3-candies deployed MockExchange 0xaCda8C6a10353046fC9a1a99AB4488B2f0e900ea deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +215ms
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=[MockExchange], srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431410, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +62ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:12.000Z now: block 14908990 timestamp 2022-06-05T12:00:22.000Z +1ms
      ✓ invalid exchange (1137ms)
  web3-candies resetNetworkFork to 14908980 +34ms
  web3-candies now block 14908980 +868ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies deploying TWAP +51ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431410, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.bid(id=1, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
      ✓ low bid (197ms)
  web3-candies resetNetworkFork to 14908980 +207ms
  web3-candies now block 14908980 +880ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies deploying TWAP +20ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 30 seconds +82ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:39.000Z +2ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=1000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=1000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=1000000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=558969740337624487)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000047700f75c6f70000000000000000000000000000000000000000000009533c7970e6983c7768, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000003b9aca000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c1dc046d0435a7, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=548969740337624487)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=548969740337624487, fee=10000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +4s
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:44.000Z now: block 14908990 timestamp 2022-06-05T12:01:44.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
      ✓ recently filled (3654ms)
  web3-candies resetNetworkFork to 14908980 +41ms
  web3-candies now block 14908980 +867ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +14ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431406, delay=600)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 30 seconds +84ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:39.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=1000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=1000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=1000000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=558969740337624487)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000047700f75c6f70000000000000000000000000000000000000000000009533c7970e6983c7768, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000003b9aca000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c1dc046d0435a7, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=548969740337624487)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=548969740337624487, fee=10000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +156ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:41.000Z now: block 14908990 timestamp 2022-06-05T12:01:41.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 600 seconds +15ms
  web3-candies was: block 14908991 timestamp 2022-06-05T12:01:42.000Z now: block 14908992 timestamp 2022-06-05T12:11:42.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
      ✓ recently filled custom delay (289ms)
  web3-candies resetNetworkFork to 14908980 +41ms
  web3-candies now block 14908980 +854ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=2000000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
      ✓ insufficient amount out (63ms)
  web3-candies resetNetworkFork to 14908980 +76ms
  web3-candies now block 14908980 +842ms
  web3-candies deploying UniswapV2Exchange +6ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies deploying TWAP +53ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=100000000000000000)
      ✓ insufficient amount out with excess fee (58ms)
  web3-candies resetNetworkFork to 14908980 +70ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +22ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=1000000000000000000)
      ✓ fee underflow protection (58ms)
  web3-candies resetNetworkFork to 14908980 +68ms
  web3-candies now block 14908980 +900ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +15ms
  web3-candies deploying TWAP +19ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1500000000, dstMinAmount=750000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +80ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:19.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +102ms
  web3-candies was: block 14908988 timestamp 2022-06-05T12:00:20.000Z now: block 14908989 timestamp 2022-06-05T12:01:20.000Z +1ms
  web3-candies deploying MockExchange +0ms
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 100000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
      ✓ insufficient amount out when last partial fill (237ms)
  web3-candies resetNetworkFork to 14908980 +52ms
  web3-candies now block 14908980 +874ms
  web3-candies deploying UniswapV2Exchange +8ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.approve(spender=[TWAP], amount=0)
   USDC.Approval(owner=[user], spender=[TWAP], value=0)
      ✓ insufficient user allowance (69ms)
  web3-candies resetNetworkFork to 14908980 +79ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.transfer(to=[taker], amount=1000000000000)
   USDC.Transfer(from=[user], to=[taker], value=1000000000000)
      ✓ insufficient user balance (77ms)
    perform fill
  web3-candies resetNetworkFork to 14908980 +87ms
  web3-candies now block 14908980 +890ms
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +22ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 10000 seconds +71ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T14:46:50.000Z +1ms
      ✓ expired (72ms)
  web3-candies resetNetworkFork to 14908980 +10ms
  web3-candies now block 14908980 +856ms
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +20ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.fill(id=0)
      ✓ invalid taker when no existing bid (40ms)
  web3-candies resetNetworkFork to 14908980 +52ms
  web3-candies now block 14908980 +857ms
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies deploying TWAP +20ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.fill(id=0)
      ✓ invalid taker when not the winning taker (78ms)
  web3-candies resetNetworkFork to 14908980 +87ms
  web3-candies now block 14908980 +891ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +12ms
  web3-candies deploying TWAP +28ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +12ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.fill(id=0)
      ✓ pending bid when still in bidding window (101ms)
  web3-candies resetNetworkFork to 14908980 +129ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +10ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +25ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies deploying MockExchange +42ms
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +15ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 1000000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +71ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:12.000Z now: block 14908990 timestamp 2022-06-05T12:00:22.000Z +1ms
CALL MockExchange.setMockAmounts(_amounts=[0, 100000000000000000])
CALL TWAP.fill(id=0)
      ✓ insufficient out (793ms)
  web3-candies resetNetworkFork to 14908980 +677ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +16ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies deploying MockExchange +38ms
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +6ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=100000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +44ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:12.000Z now: block 14908990 timestamp 2022-06-05T12:00:22.000Z +2ms
CALL MockExchange.setMockAmounts(_amounts=[0, 500000000000000000])
CALL TWAP.fill(id=0)
      ✓ insufficient out with excess fee (167ms)
  web3-candies resetNetworkFork to 14908980 +87ms
  web3-candies now block 14908980 +882ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies deploying TWAP +23ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies deploying MockExchange +37ms
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +6ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL MockExchange.setMockAmounts(_amounts=[0, 10000000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=1000000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +56ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:12.000Z now: block 14908990 timestamp 2022-06-05T12:00:22.000Z +1ms
      ✓ fee subtracted from dstAmountOut underflow protection (145ms)
  web3-candies resetNetworkFork to 14908980 +57ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies deploying TWAP +19ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.approve(spender=[TWAP], amount=1000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=1000000, srcBidAmount=1000000, dstMinAmount=1000000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.cancel(id=0)
      ✓ cancel only from maker (70ms)

  Sanity
  web3-candies resetNetworkFork to 14908980 +81ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies deploying TWAP +19ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +1ms
CALL USDC.approve(spender=[TWAP], amount=3000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=3000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=3000000, srcBidAmount=2000000, dstMinAmount=1000000000000000000, deadline=1654430506, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
    ✓ maker creates ask order, emits event (61ms)
  web3-candies resetNetworkFork to 14908980 +70ms
  web3-candies now block 14908980 +849ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +28ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +14ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
    ✓ bid sets Bid fields (85ms)
  web3-candies resetNetworkFork to 14908980 +116ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 30 seconds +76ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:39.000Z +1ms
    ✓ fill sets Fill fields and clears the Bid, emits event (177ms)
  web3-candies resetNetworkFork to 14908980 +112ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +25ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.cancel(id=0)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
    ✓ cancel order (73ms)
    History
  web3-candies resetNetworkFork to 14908980 +83ms
  web3-candies now block 14908980 +823ms
  web3-candies deploying UniswapV2Exchange +8ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +24ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.approve(spender=[TWAP], amount=4000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=4000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=4000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431408, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.cancel(id=1)
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +111ms
CALL USDC.transfer(to=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, amount=8000000000)
   USDC.Transfer(from=[srcTokenWhale], to=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, value=8000000000)
CALL USDC.approve(spender=[TWAP], amount=8000000000)
   USDC.Approval(owner=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, spender=[TWAP], value=8000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=8000000000, srcBidAmount=4000000000, dstMinAmount=2000000000000000000, deadline=1654431412, delay=60)
   TWAP.OrderCreated(id=2, maker=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59)
CALL USDC.approve(spender=[TWAP], amount=1000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=1000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654430424, delay=60)
   TWAP.OrderCreated(id=3, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +674ms
  web3-candies was: block 14908993 timestamp 2022-06-05T12:00:16.000Z now: block 14908994 timestamp 2022-06-05T12:00:26.000Z +1ms
      ✓ find orders for maker (274ms)

  TWAP
  web3-candies resetNetworkFork to 14908980 +275ms
  web3-candies now block 14908980 +955ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +10ms
  web3-candies deploying TWAP +21ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 10 seconds +71ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:19.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2000000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1117925290738887788)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000047704b1090f700000000000000000000000000000000000000000000095334b7a1ca055600a3, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f83ab20ffeaac6c, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1107925290738887788)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2000000000, dstAmountOut=1107925290738887788, fee=10000000000000000)
    ✓ single chunk (214ms)
  web3-candies resetNetworkFork to 14908980 +152ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +11ms
  web3-candies deploying TWAP +22ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL USDC.approve(spender=[TWAP], amount=10000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=10000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=10000000000, srcBidAmount=2500000000, dstMinAmount=1250000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +115ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:19.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2500000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1397397744882237904)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000477068ddf5f700000000000000000000000000000000000000000000095330d6bf12a39d6b3f, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013648dd861a341d0, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1387397744882237904)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1387397744882237904, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +155ms
  web3-candies was: block 14908988 timestamp 2022-06-05T12:00:20.000Z now: block 14908989 timestamp 2022-06-05T12:01:20.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +38ms
  web3-candies was: block 14908990 timestamp 2022-06-05T12:01:21.000Z now: block 14908991 timestamp 2022-06-05T12:01:31.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2500000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1397308929430581229)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x00000000000000000000000000000000000000000000000000004770fde0eef70000000000000000000000000000000000000000000009531d728201376c7b52, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013643d116c30efed, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1387308929430581229)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1387308929430581229, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +147ms
  web3-candies was: block 14908992 timestamp 2022-06-05T12:01:32.000Z now: block 14908993 timestamp 2022-06-05T12:02:33.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +38ms
  web3-candies was: block 14908994 timestamp 2022-06-05T12:02:34.000Z now: block 14908995 timestamp 2022-06-05T12:02:44.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2500000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1397220122450259929)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000477192e3e7f70000000000000000000000000000000000000000000009530a0e95b4c7bf8b79, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001363ec4c6facefd9, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1387220122450259929)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1387220122450259929, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +144ms
  web3-candies was: block 14908996 timestamp 2022-06-05T12:02:45.000Z now: block 14908997 timestamp 2022-06-05T12:03:45.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +38ms
  web3-candies was: block 14908998 timestamp 2022-06-05T12:03:46.000Z now: block 14908999 timestamp 2022-06-05T12:03:56.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2500000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1397131323940196424)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000477227e6e0f7000000000000000000000000000000000000000000000952f6aafa2b5bb8bb31, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f9000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013639b896c06d048, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1387131323940196424)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1387131323940196424, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +150ms
  web3-candies was: block 14909000 timestamp 2022-06-05T12:03:57.000Z now: block 14909001 timestamp 2022-06-05T12:04:57.000Z +1ms
    ✓ mutiple chunks (835ms)
  web3-candies resetNetworkFork to 14908980 +10ms
  web3-candies now block 14908980 +912ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +12ms
  web3-candies deploying TWAP +27ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +14ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=10000000000, srcBidAmount=4000000000, dstMinAmount=2000000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +121ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:19.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +104ms
  web3-candies was: block 14908988 timestamp 2022-06-05T12:00:20.000Z now: block 14908989 timestamp 2022-06-05T12:01:20.000Z +2ms
  web3-candies mining 1 block and advancing time by 10 seconds +34ms
  web3-candies was: block 14908990 timestamp 2022-06-05T12:01:21.000Z now: block 14908991 timestamp 2022-06-05T12:01:31.000Z +2ms
  web3-candies mining 1 block and advancing time by 60 seconds +103ms
  web3-candies was: block 14908992 timestamp 2022-06-05T12:01:32.000Z now: block 14908993 timestamp 2022-06-05T12:02:32.000Z +1ms
  web3-candies mining 1 block and advancing time by 10 seconds +47ms
  web3-candies was: block 14908994 timestamp 2022-06-05T12:02:33.000Z now: block 14908995 timestamp 2022-06-05T12:02:43.000Z +2ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=2000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=2000000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=1117697944868251298)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000477227e6e0f7000000000000000000000000000000000000000000000952f6aafa100670cfbd, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000000077359400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f82dc5bea0e66a2, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1107697944868251298)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2000000000, dstAmountOut=1107697944868251298, fee=10000000000000000)
    ✓ last chunk may be partial amount (545ms)
  web3-candies resetNetworkFork to 14908980 +156ms
  web3-candies now block 14908980 +866ms
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +15ms
  web3-candies deploying TWAP +24ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 1 seconds +71ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:10.000Z +2ms
  web3-candies deploying MockExchange +0ms
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +13ms
  web3-candies impersonating 0xBA12222222228d8Ba445958a75a0704d566BF2C8 +0ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 600000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +64ms
  web3-candies was: block 14908991 timestamp 2022-06-05T12:00:14.000Z now: block 14908992 timestamp 2022-06-05T12:00:25.000Z +2ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[MockExchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[MockExchange], value=1000000000)
   WETH.Transfer(from=[MockExchange], to=[TWAP], value=600000000000000000)
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=590000000000000000)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=590000000000000000, fee=10000000000000000)
    ✓ outbid current bid within pending period (235ms)
  web3-candies resetNetworkFork to 14908980 +95ms
  web3-candies now block 14908980 +1s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +23ms
  web3-candies deploying TWAP +50ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 1 seconds +79ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:00:10.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=1000000000000000)
    ✓ outbid current bid within pending period same path and amount but lower fee (125ms)
  web3-candies resetNetworkFork to 14908980 +56ms
  web3-candies now block 14908980 +861ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +12ms
  web3-candies deploying TWAP +19ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +9ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
  web3-candies mining 1 block and advancing time by 59 seconds +74ms
  web3-candies was: block 14908986 timestamp 2022-06-05T12:00:09.000Z now: block 14908987 timestamp 2022-06-05T12:01:08.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 1 seconds +35ms
  web3-candies was: block 14908988 timestamp 2022-06-05T12:01:09.000Z now: block 14908989 timestamp 2022-06-05T12:01:10.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
    ✓ clears stale unfilled bid after max bidding window (144ms)
  web3-candies resetNetworkFork to 14908980 +43ms
  web3-candies now block 14908980 +883ms
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +15ms
  web3-candies deploying TWAP +20ms
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +8ms
  web3-candies impersonating 0x55fe002aeff02f77364de339a1292923a15844b8 +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=1000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=400000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=300000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=100000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +256ms
  web3-candies was: block 14908989 timestamp 2022-06-05T12:00:12.000Z now: block 14908990 timestamp 2022-06-05T12:00:22.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=1000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xf164fC0Ec4E93095b804a4795bBe1e041497b92a, value=1000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, value=1000000000)
   WETH.Transfer(from=0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc, to=[TWAP], value=558969740337624487)
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000047700f75c6f70000000000000000000000000000000000000000000009533c7970e6983c7768, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000003b9aca000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c1dc046d0435a7, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000f164fc0ec4e93095b804a4795bbe1e041497b92a, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=548969740337624487)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=548969740337624487, fee=10000000000000000)
    ✓ supports market orders, english auction incentivizes best competitive price (407ms)

·-----------------------------------|---------------------------|-------------|-----------------------------·
|       Solc version: 0.8.10        ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 10000000 gas  │
····································|···························|·············|······························
|  Methods                          ·               21 gwei/gas               ·       1889.51 usd/eth       │
·················|··················|·············|·············|·············|···············|··············
|  Contract      ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·················|··················|·············|·············|·············|···············|··············
|  ERC20         ·  approve         ·      38027  ·      59975  ·      57564  ·           40  ·       2.28  │
·················|··················|·············|·············|·············|···············|··············
|  ERC20         ·  transfer        ·      51618  ·      65625  ·      63544  ·           45  ·       2.52  │
·················|··················|·············|·············|·············|···············|··············
|  MockExchange  ·  setMockAmounts  ·      32211  ·      69211  ·      56878  ·            9  ·       2.26  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  ask             ·     290682  ·     310866  ·     291661  ·           36  ·      11.57  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  bid             ·     118546  ·     318106  ·     283306  ·           34  ·      11.24  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  cancel          ·      69853  ·      69865  ·      69859  ·            2  ·       2.77  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  fill            ·     294921  ·     365168  ·     340590  ·           14  ·      13.51  │
·················|··················|·············|·············|·············|···············|··············
|  Deployments                      ·                                         ·  % of limit   ·             │
····································|·············|·············|·············|···············|··············
|  MockExchange                     ·          -  ·          -  ·     543346  ·        5.4 %  ·      21.56  │
····································|·············|·············|·············|···············|··············
|  TWAP                             ·          -  ·          -  ·    2015937  ·       20.2 %  ·      79.99  │
····································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                ·          -  ·          -  ·     646460  ·        6.5 %  ·      25.65  │
·-----------------------------------|-------------|-------------|-------------|---------------|-------------·

  36 passing (56s)


> @defi.org/twap@0.0.1 test:poly
> NETWORK=POLY BLOCK=29194866 DEBUG=web3-candies hardhat test --logs

🌐 network POLY blocknumber 29194866 🌐

  Errors
    order
  web3-candies resetNetworkFork to 29194866 +0ms
  web3-candies now block 29194866 +4s
  web3-candies deploying UniswapV2Exchange +11ms
CREATE UniswapV2Exchange.constructor(_uniswap=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff) => (0x74652f570B1A95235a9A054994319eeb827c5E17)
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +472ms
  web3-candies deploying TWAP +2s
CREATE TWAP.constructor() => (0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5)
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +269ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL USDC.transfer(to=[user], amount=1000000000000)
   USDC.Transfer(from=[srcTokenWhale], to=[user], value=1000000000000)
      ✓ invalid id (23ms)
  web3-candies resetNetworkFork to 29194866 +1s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +466ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +257ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431404, delay=59)
      ✓ minimum delay 60 seconds (499ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +426ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +246ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
      ✓ invalid params (43ms)
  web3-candies resetNetworkFork to 29194866 +1s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +408ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +236ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL USDC.approve(spender=[TWAP], amount=5)
   USDC.Approval(owner=[user], spender=[TWAP], value=5)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=100, srcBidAmount=10, dstMinAmount=1, deadline=1000000000000, delay=60)
      ✓ insufficient maker allowance (857ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +3s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +1s
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +223ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL USDC.approve(spender=[TWAP], amount=15)
   USDC.Approval(owner=[user], spender=[TWAP], value=15)
CALL USDC.transfer(to=[taker], amount=1000000000000)
   USDC.Transfer(from=[user], to=[taker], value=1000000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=100, srcBidAmount=10, dstMinAmount=1, deadline=1000000000000, delay=60)
      ✓ insufficient maker balance (1109ms)
    verify bid
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +401ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +211ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654430415, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +2s
  web3-candies was: block 29194871 timestamp 2022-06-05T12:00:07.000Z now: block 29194872 timestamp 2022-06-05T12:00:17.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654430428, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.bid(id=1, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
      ✓ expired (542ms)
  web3-candies resetNetworkFork to 29194866 +115ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +419ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +239ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
  web3-candies deploying MockExchange +1s
CREATE MockExchange.constructor() => (0xA1041132B507466bE2b840b0BdFc78CA333b5861)
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +242ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +1ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 1000000000000000000])
  web3-candies deploying MockExchange +677ms
CREATE MockExchange.constructor() => (0xaCda8C6a10353046fC9a1a99AB4488B2f0e900ea)
  web3-candies deployed MockExchange 0xaCda8C6a10353046fC9a1a99AB4488B2f0e900ea deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +243ms
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=[MockExchange], srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431409, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +478ms
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:11.000Z now: block 29194876 timestamp 2022-06-05T12:00:21.000Z +2ms
      ✓ invalid exchange (1678ms)
  web3-candies resetNetworkFork to 29194866 +36ms
  web3-candies now block 29194866 +1s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +416ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +206ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431404, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
CALL USDC.approve(spender=[TWAP], amount=2000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431408, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.bid(id=1, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
      ✓ low bid (632ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +397ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +229ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431404, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 30 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T12:00:37.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=0)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=1000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, value=1000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=0)
   WETH.Transfer(from=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, to=[TWAP], value=559082872850656255)
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000104ef4b8fa1f00000000000000000000000000000000000000000000022110d10a74d0ef409f, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000003b9aca000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c242e92444abff, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=549082872850656255)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=549082872850656255, fee=10000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +4s
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:42.000Z now: block 29194876 timestamp 2022-06-05T12:01:42.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
      ✓ recently filled (4163ms)
  web3-candies resetNetworkFork to 29194866 +43ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +10ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +483ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +220ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431405, delay=600)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 30 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:08.000Z now: block 29194873 timestamp 2022-06-05T12:00:38.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +4s
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:43.000Z now: block 29194876 timestamp 2022-06-05T12:01:43.000Z +2ms
  web3-candies mining 1 block and advancing time by 600 seconds +15ms
  web3-candies was: block 29194877 timestamp 2022-06-05T12:01:44.000Z now: block 29194878 timestamp 2022-06-05T12:11:44.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
      ✓ recently filled custom delay (4105ms)
  web3-candies resetNetworkFork to 29194866 +43ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +401ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +242ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=2000000000000000000, deadline=1654431404, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
      ✓ insufficient amount out (492ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +407ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +229ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=100000000000000000)
      ✓ insufficient amount out with excess fee (428ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +403ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +229ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=1000000000000000000)
      ✓ fee underflow protection (608ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +540ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +217ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1500000000, dstMinAmount=750000000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:08.000Z now: block 29194873 timestamp 2022-06-05T12:00:18.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +3s
  web3-candies was: block 29194874 timestamp 2022-06-05T12:00:19.000Z now: block 29194875 timestamp 2022-06-05T12:01:23.000Z +2ms
  web3-candies deploying MockExchange +0ms
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +213ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +0ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 100000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
      ✓ insufficient amount out when last partial fill (4589ms)
  web3-candies resetNetworkFork to 29194866 +612ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +403ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +217ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL USDC.approve(spender=[TWAP], amount=0)
   USDC.Approval(owner=[user], spender=[TWAP], value=0)
      ✓ insufficient user allowance (485ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +421ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +215ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL USDC.transfer(to=[taker], amount=1000000000000)
   USDC.Transfer(from=[user], to=[taker], value=1000000000000)
      ✓ insufficient user balance (866ms)
    perform fill
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +406ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +233ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies mining 1 block and advancing time by 10000 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T14:46:47.000Z +1ms
      ✓ expired (532ms)
  web3-candies resetNetworkFork to 29194866 +11ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +385ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +222ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.fill(id=0)
      ✓ invalid taker when no existing bid (432ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +417ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +235ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.fill(id=0)
      ✓ invalid taker when not the winning taker (479ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +389ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +221ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.fill(id=0)
      ✓ pending bid when still in bidding window (628ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +722ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +240ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
  web3-candies deploying MockExchange +2s
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +263ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +1ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 1000000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +832ms
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:11.000Z now: block 29194876 timestamp 2022-06-05T12:00:21.000Z +2ms
CALL MockExchange.setMockAmounts(_amounts=[0, 100000000000000000])
CALL TWAP.fill(id=0)
      ✓ insufficient out (3197ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +400ms
  web3-candies deploying TWAP +3s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +238ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies deploying MockExchange +2s
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +228ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +1ms
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=100000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +871ms
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:11.000Z now: block 29194876 timestamp 2022-06-05T12:00:21.000Z +2ms
CALL MockExchange.setMockAmounts(_amounts=[0, 500000000000000000])
      ✓ insufficient out with excess fee (3354ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +6ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +532ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +205ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies deploying MockExchange +2s
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +234ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +0ms
CALL MockExchange.setMockAmounts(_amounts=[0, 10000000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=1000000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +657ms
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:11.000Z now: block 29194876 timestamp 2022-06-05T12:00:21.000Z +1ms
      ✓ fee subtracted from dstAmountOut underflow protection (2371ms)
  web3-candies resetNetworkFork to 29194866 +1s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +443ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +232ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL USDC.approve(spender=[TWAP], amount=1000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=1000000, srcBidAmount=1000000, dstMinAmount=1000000000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.cancel(id=0)
      ✓ cancel only from maker (514ms)

  Sanity
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +3s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +577ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +214ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL USDC.approve(spender=[TWAP], amount=3000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=3000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=3000000, srcBidAmount=2000000, dstMinAmount=1000000000000000000, deadline=1654430505, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
    ✓ maker creates ask order, emits event (442ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +623ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +226ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
    ✓ bid sets Bid fields (571ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +2ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +513ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +245ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies mining 1 block and advancing time by 30 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T12:00:37.000Z +1ms
    ✓ fill sets Fill fields and clears the Bid, emits event (4046ms)
  web3-candies resetNetworkFork to 29194866 +4s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +5ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +429ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +216ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL TWAP.cancel(id=0)
    ✓ cancel order (473ms)
    History
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +1s
  web3-candies deploying UniswapV2Exchange +4ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +437ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +218ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL USDC.approve(spender=[TWAP], amount=4000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=4000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=4000000000, srcBidAmount=2000000000, dstMinAmount=1000000000000000000, deadline=1654431406, delay=60)
   TWAP.OrderCreated(id=1, maker=[user])
CALL TWAP.cancel(id=1)
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +2s
CALL USDC.transfer(to=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, amount=8000000000)
   USDC.Transfer(from=[srcTokenWhale], to=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, value=8000000000)
CALL USDC.approve(spender=[TWAP], amount=8000000000)
   USDC.Approval(owner=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59, spender=[TWAP], value=8000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=8000000000, srcBidAmount=4000000000, dstMinAmount=2000000000000000000, deadline=1654431410, delay=60)
   TWAP.OrderCreated(id=2, maker=0x3Fc0FC5D747B7C4B969B5fF6DAE159b3FE520F59)
CALL USDC.approve(spender=[TWAP], amount=1000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=1000000000, srcBidAmount=1000000000, dstMinAmount=500000000000000000, deadline=1654430422, delay=60)
   TWAP.OrderCreated(id=3, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +760ms
  web3-candies was: block 29194879 timestamp 2022-06-05T12:00:14.000Z now: block 29194880 timestamp 2022-06-05T12:00:24.000Z +1ms
      ✓ find orders for maker (496ms)

  TWAP
  web3-candies resetNetworkFork to 29194866 +497ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +8ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +373ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +214ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
  web3-candies mining 1 block and advancing time by 10 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:09.000Z now: block 29194873 timestamp 2022-06-05T12:00:19.000Z +1ms
    ✓ single chunk (4771ms)
  web3-candies resetNetworkFork to 29194866 +4s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +442ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +221ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +1ms
CALL USDC.approve(spender=[TWAP], amount=10000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=10000000000)
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=10000000000, srcBidAmount=2500000000, dstMinAmount=1250000000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:08.000Z now: block 29194873 timestamp 2022-06-05T12:00:19.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +4s
  web3-candies was: block 29194874 timestamp 2022-06-05T12:00:20.000Z now: block 29194875 timestamp 2022-06-05T12:01:23.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +42ms
  web3-candies was: block 29194876 timestamp 2022-06-05T12:01:24.000Z now: block 29194877 timestamp 2022-06-05T12:01:34.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=5000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=0)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=0)
   WETH.Transfer(from=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, to=[TWAP], value=1397201584905736267)
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000104fe324221f000000000000000000000000000000000000000000000220f1ca34a9d6b74732, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001363db7053eb504b, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1387201584905736267)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1387201584905736267, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +158ms
  web3-candies was: block 29194878 timestamp 2022-06-05T12:01:35.000Z now: block 29194879 timestamp 2022-06-05T12:02:35.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +41ms
  web3-candies was: block 29194880 timestamp 2022-06-05T12:02:36.000Z now: block 29194881 timestamp 2022-06-05T12:02:46.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=0)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=0)
   WETH.Transfer(from=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, to=[TWAP], value=1396812711570200244)
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000105078271b1f000000000000000000000000000000000000000000000220de67bae723d2f07e, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000136279c2b2e456b4, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1386812711570200244)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1386812711570200244, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +157ms
  web3-candies was: block 29194882 timestamp 2022-06-05T12:02:47.000Z now: block 29194883 timestamp 2022-06-05T12:03:48.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +39ms
  web3-candies was: block 29194884 timestamp 2022-06-05T12:03:49.000Z now: block 29194885 timestamp 2022-06-05T12:03:59.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=2500000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=0)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=2500000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=2500000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=0)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=2500000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, value=2500000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=0)
   WETH.Transfer(from=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, to=[TWAP], value=1396424000641915228)
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000010510d2a141f000000000000000000000000000000000000000000000220cb06a2ac41bb9722, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000009502f900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001361183ae217595c, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=1386424000641915228)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=2500000000, dstAmountOut=1386424000641915228, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 60 seconds +183ms
  web3-candies was: block 29194886 timestamp 2022-06-05T12:04:00.000Z now: block 29194887 timestamp 2022-06-05T12:05:00.000Z +2ms
    ✓ mutiple chunks (4847ms)
  web3-candies resetNetworkFork to 29194866 +21ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +3ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +428ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +216ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=10000000000, srcBidAmount=4000000000, dstMinAmount=2000000000000000000, deadline=1654431404, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
  web3-candies mining 1 block and advancing time by 10 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T12:00:17.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +3s
  web3-candies was: block 29194874 timestamp 2022-06-05T12:00:18.000Z now: block 29194875 timestamp 2022-06-05T12:01:22.000Z +1ms
  web3-candies mining 1 block and advancing time by 10 seconds +42ms
  web3-candies was: block 29194876 timestamp 2022-06-05T12:01:23.000Z now: block 29194877 timestamp 2022-06-05T12:01:33.000Z +1ms
  web3-candies mining 1 block and advancing time by 60 seconds +110ms
  web3-candies was: block 29194878 timestamp 2022-06-05T12:01:34.000Z now: block 29194879 timestamp 2022-06-05T12:02:34.000Z +1ms
  web3-candies mining 1 block and advancing time by 10 seconds +48ms
  web3-candies was: block 29194880 timestamp 2022-06-05T12:02:35.000Z now: block 29194881 timestamp 2022-06-05T12:02:45.000Z +2ms
    ✓ last chunk may be partial amount (4346ms)
  web3-candies resetNetworkFork to 29194866 +164ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +409ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +228ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies mining 1 block and advancing time by 1 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T12:00:08.000Z +1ms
  web3-candies deploying MockExchange +1ms
CREATE MockExchange.constructor() => ([MockExchange])
  web3-candies deployed MockExchange 0xA1041132B507466bE2b840b0BdFc78CA333b5861 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +212ms
  web3-candies impersonating 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB +1ms
CALL WETH.transfer(to=[MockExchange], amount=10000000000000000000000)
   WETH.Transfer(from=[dstTokenWhale], to=[MockExchange], value=10000000000000000000000)
CALL MockExchange.setMockAmounts(_amounts=[0, 600000000000000000])
CALL TWAP.bid(id=0, exchange=[MockExchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +803ms
  web3-candies was: block 29194877 timestamp 2022-06-05T12:00:12.000Z now: block 29194878 timestamp 2022-06-05T12:00:22.000Z +2ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[MockExchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[MockExchange], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[MockExchange], value=0)
   WETH.Transfer(from=[MockExchange], to=[TWAP], value=600000000000000000)
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=590000000000000000)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=590000000000000000, fee=10000000000000000)
    ✓ outbid current bid within pending period (3003ms)
  web3-candies resetNetworkFork to 29194866 +2s
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +406ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +212ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies mining 1 block and advancing time by 1 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:07.000Z now: block 29194873 timestamp 2022-06-05T12:00:08.000Z +1ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=1000000000000000)
    ✓ outbid current bid within pending period same path and amount but lower fee (505ms)
  web3-candies resetNetworkFork to 29194866 +54ms
  web3-candies now block 29194866 +1s
  web3-candies deploying UniswapV2Exchange +8ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +399ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +220ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
  web3-candies mining 1 block and advancing time by 59 seconds +2s
  web3-candies was: block 29194872 timestamp 2022-06-05T12:00:08.000Z now: block 29194873 timestamp 2022-06-05T12:01:07.000Z +2ms
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 1 seconds +36ms
  web3-candies was: block 29194874 timestamp 2022-06-05T12:01:08.000Z now: block 29194875 timestamp 2022-06-05T12:01:09.000Z +2ms
    ✓ clears stale unfilled bid after max bidding window (537ms)
  web3-candies resetNetworkFork to 29194866 +39ms
  web3-candies now block 29194866 +2s
  web3-candies deploying UniswapV2Exchange +9ms
  web3-candies deployed UniswapV2Exchange 0x74652f570B1A95235a9A054994319eeb827c5E17 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +415ms
  web3-candies deploying TWAP +2s
  web3-candies deployed TWAP 0xCE5c12eEA2772EFc7A665E7aA26c059D6fDC5de5 deployer 0x040a92b0eb92c573a1594d032b139524bc6618f4 +218ms
  web3-candies impersonating 0xF977814e90dA44bFA03b6295A0616a897441aceC +0ms
CALL TWAP.ask(exchange=0x0000000000000000000000000000000000000000, srcToken=[USDC], dstToken=[WETH], srcAmount=2000000000, srcBidAmount=1000000000, dstMinAmount=1000000000000, deadline=1654431405, delay=60)
   TWAP.OrderCreated(id=0, maker=[user])
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=400000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=300000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=100000000000000000)
CALL TWAP.bid(id=0, exchange=[UniswapV2Exchange], data=0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f619, fee=10000000000000000)
  web3-candies mining 1 block and advancing time by 10 seconds +5s
  web3-candies was: block 29194875 timestamp 2022-06-05T12:00:14.000Z now: block 29194876 timestamp 2022-06-05T12:00:24.000Z +1ms
CALL TWAP.fill(id=0)
   USDC.Transfer(from=[user], to=[TWAP], value=1000000000)
   USDC.Approval(owner=[user], spender=[TWAP], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=1000000000)
   USDC.Transfer(from=[TWAP], to=[UniswapV2Exchange], value=1000000000)
   USDC.Approval(owner=[TWAP], spender=[UniswapV2Exchange], value=0)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=1000000000)
   USDC.Transfer(from=[UniswapV2Exchange], to=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, value=1000000000)
   USDC.Approval(owner=[UniswapV2Exchange], spender=0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff, value=0)
   WETH.Transfer(from=0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d, to=[TWAP], value=559082872850656255)
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x0000000000000000000000000000000000000000000000000000104ef4b8fa1f00000000000000000000000000000000000000000000022110d10a74d0ef409f, [0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1])
   <UnknownContract 0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d>.UnknownEvent(0x000000000000000000000000000000000000000000000000000000003b9aca000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007c242e92444abff, [0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822, 0x000000000000000000000000a5e0829caced8ffdd4de3c43696c57f7d7a678ff, 0x000000000000000000000000ce5c12eea2772efc7a665e7aa26c059d6fdc5de5])
   WETH.Transfer(from=[TWAP], to=[taker], value=10000000000000000)
   WETH.Transfer(from=[TWAP], to=[user], value=549082872850656255)
   TWAP.OrderFilled(id=0, taker=[taker], srcAmountIn=1000000000, dstAmountOut=549082872850656255, fee=10000000000000000)
    ✓ supports market orders, english auction incentivizes best competitive price (3992ms)

·-----------------------------------|---------------------------|-------------|-----------------------------·
|       Solc version: 0.8.10        ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 10000000 gas  │
····································|···························|·············|······························
|  Methods                          ·               30 gwei/gas               ·       0.96 usd/matic        │
·················|··················|·············|·············|·············|···············|··············
|  Contract      ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·················|··················|·············|·············|·············|···············|··············
|  ERC20         ·  approve         ·      36162  ·      58110  ·      55699  ·           40  ·       0.00  │
·················|··················|·············|·············|·············|···············|··············
|  ERC20         ·  transfer        ·      51994  ·      63552  ·      61798  ·           45  ·       0.00  │
·················|··················|·············|·············|·············|···············|··············
|  MockExchange  ·  setMockAmounts  ·      32211  ·      69211  ·      56878  ·            9  ·       0.00  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  ask             ·     288451  ·     308635  ·     289430  ·           36  ·       0.01  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  bid             ·     116315  ·     315897  ·     281094  ·           34  ·       0.01  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  cancel          ·      69853  ·      69865  ·      69859  ·            2  ·       0.00  │
·················|··················|·············|·············|·············|···············|··············
|  TWAP          ·  fill            ·     297128  ·     368829  ·     344148  ·           14  ·       0.01  │
·················|··················|·············|·············|·············|···············|··············
|  Deployments                      ·                                         ·  % of limit   ·             │
····································|·············|·············|·············|···············|··············
|  MockExchange                     ·          -  ·          -  ·     543346  ·        5.4 %  ·       0.02  │
····································|·············|·············|·············|···············|··············
|  TWAP                             ·          -  ·          -  ·    2015937  ·       20.2 %  ·       0.06  │
····································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                ·          -  ·          -  ·     646460  ·        6.5 %  ·       0.02  │
·-----------------------------------|-------------|-------------|-------------|---------------|-------------·

  36 passing (5m)

```
