
```console

> @orbs-network/twap@1.3.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.3.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (53ms)
    ✓ prune only invalid orders (141ms)
    ✓ bid params (13ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (50ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (29ms)
    verify bid
      ✓ expired (67ms)
      ✓ invalid exchange (64ms)
      ✓ low bid (86ms)
      ✓ recently filled (113ms)
      ✓ recently filled custom fill delay (115ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (34ms)
      ✓ fee underflow protection (32ms)
      ✓ insufficient amount out when last partial fill (112ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (46ms)
    perform fill
      ✓ expired (48ms)
      ✓ invalid taker when no existing bid (25ms)
      ✓ invalid taker when not the winning taker (51ms)
      ✓ pending bid when still in bidding window of bid delay (49ms)
      ✓ pending bid with custom delay (102ms)
      ✓ insufficient out (79ms)
      ✓ insufficient out with excess fee (85ms)
      ✓ fee subtracted from dstAmountOut underflow protection (77ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (40ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (14ms)
      ✓ swap with data from paraswap (5401ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (77ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (29ms)
      ✓ sell tokens with FOT (35ms)

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (43ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (87ms)
    ✓ cancel order, emits event (38ms)
    ✓ order fully filled, emits event (164ms)
    History
      ✓ find orders for maker (14ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (1ms)

  TWAP
    ✓ single chunk (89ms)
    ✓ mutiple chunks (296ms)
    ✓ last chunk may be partial amount (229ms)
    ✓ outbid current bid within pending period (105ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (69ms)
    ✓ enforce bids 1% better than previous (81ms)
    ✓ clears stale unfilled bid after max bidding window = bidDelay * STALE_BID_DELAY_MUL (81ms)
    ✓ supports market orders, english auction incentivizes best competitive price (142ms)
    ✓ prevent winning the bid by manipulating exchange price (86ms)
    ✓ slippage percent allows price slippage (136ms)
    ✓ slippage percent at bid time is part of the bidding war (110ms)
    prune stale invalid order
      ✓ when no approval (37ms)
      ✓ when no balance (41ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (8601ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               41 gwei/gas               ·       1542.98 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57261  ·           56  ·       3.62  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63183  ·           69  ·       4.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       2.93  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       3.26  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     198068  ·            1  ·      12.53  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     270282  ·     355922  ·     328415  ·           51  ·      20.78  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     118059  ·     423384  ·     263808  ·           48  ·      16.69  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      75956  ·      76018  ·      75987  ·            4  ·       4.81  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     276818  ·     405160  ·     333815  ·           21  ·      21.12  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      89119  ·      93075  ·      91097  ·            2  ·       5.76  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·      11.15  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      46.42  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503931  ·        3.4 %  ·      31.88  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·      39.31  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2856988  ·         19 %  ·     180.74  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      45.40  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  53 passing (1m)


> @orbs-network/twap@1.3.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (54ms)
    ✓ prune only invalid orders (156ms)
    ✓ bid params (15ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (36ms)
      ✓ insufficient maker allowance (17ms)
      ✓ insufficient maker balance (24ms)
    verify bid
      ✓ expired (93ms)
      ✓ invalid exchange (66ms)
      ✓ low bid (92ms)
      ✓ recently filled (131ms)
      ✓ recently filled custom fill delay (130ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (37ms)
      ✓ fee underflow protection (36ms)
      ✓ insufficient amount out when last partial fill (116ms)
      ✓ insufficient user allowance (43ms)
      ✓ insufficient user balance (41ms)
    perform fill
      ✓ expired (48ms)
      ✓ invalid taker when no existing bid (26ms)
      ✓ invalid taker when not the winning taker (46ms)
      ✓ pending bid when still in bidding window of bid delay (45ms)
      ✓ pending bid with custom delay (95ms)
      ✓ insufficient out (93ms)
      ✓ insufficient out with excess fee (82ms)
      ✓ fee subtracted from dstAmountOut underflow protection (80ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (51ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (5ms)
      ✓ swap with data from paraswap (33032ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (73ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (28ms)
      ✓ sell tokens with FOT (36ms)

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (44ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (92ms)
    ✓ cancel order, emits event (39ms)
    ✓ order fully filled, emits event (169ms)
    History
      ✓ find orders for maker (13ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (2ms)

  TWAP
    ✓ single chunk (93ms)
    ✓ mutiple chunks (318ms)
    ✓ last chunk may be partial amount (230ms)
    ✓ outbid current bid within pending period (96ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (68ms)
    ✓ enforce bids 1% better than previous (76ms)
    ✓ clears stale unfilled bid after max bidding window = bidDelay * STALE_BID_DELAY_MUL (78ms)
    ✓ supports market orders, english auction incentivizes best competitive price (144ms)
    ✓ prevent winning the bid by manipulating exchange price (78ms)
    ✓ slippage percent allows price slippage (152ms)
    ✓ slippage percent at bid time is part of the bidding war (101ms)
    prune stale invalid order
      ✓ when no approval (36ms)
      ✓ when no balance (37ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (14374ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·              2522 gwei/gas              ·        0.27 usd/ftm         │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      24299  ·      46583  ·      43533  ·           56  ·       0.03  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      46731  ·      52345  ·      51452  ·           69  ·       0.04  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.03  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.04  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·    1362572  ·            1  ·       0.93  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     262474  ·     348114  ·     320760  ·           51  ·       0.22  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113293  ·    1965781  ·     312629  ·           48  ·       0.21  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      75956  ·      76018  ·      75987  ·            4  ·       0.05  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     269408  ·    1024089  ·     396965  ·           21  ·       0.27  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      82029  ·      85267  ·      83648  ·            2  ·       0.06  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     193833  ·     207562  ·     200698  ·            2  ·       0.14  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.50  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503931  ·        3.4 %  ·       0.34  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.42  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2856988  ·         19 %  ·       1.95  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.49  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  53 passing (2m)


> @orbs-network/twap@1.3.0 test:poly
> NETWORK=POLY BLOCK=29194866 hardhat test


🌐 network POLY blocknumber 29194866 🌐



  Errors
    ✓ cancel only from maker (54ms)
    ✓ prune only invalid orders (149ms)
    ✓ bid params (13ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (36ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (31ms)
    verify bid
      ✓ expired (68ms)
      ✓ invalid exchange (59ms)
      ✓ low bid (88ms)
      ✓ recently filled (126ms)
      ✓ recently filled custom fill delay (115ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (37ms)
      ✓ fee underflow protection (35ms)
      ✓ insufficient amount out when last partial fill (124ms)
      ✓ insufficient user allowance (49ms)
      ✓ insufficient user balance (54ms)
    perform fill
      ✓ expired (56ms)
      ✓ invalid taker when no existing bid (29ms)
      ✓ invalid taker when not the winning taker (48ms)
      ✓ pending bid when still in bidding window of bid delay (51ms)
      ✓ pending bid with custom delay (96ms)
      ✓ insufficient out (80ms)
      ✓ insufficient out with excess fee (81ms)
      ✓ fee subtracted from dstAmountOut underflow protection (85ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (43ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (11ms)
      ✓ swap with data from paraswap (7181ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (78ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (27ms)
      ✓ sell tokens with FOT (38ms)

  Sanity
    ✓ maker creates ask order, emits event (32ms)
    ✓ bid sets Bid fields, emits event (49ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (92ms)
    ✓ cancel order, emits event (41ms)
    ✓ order fully filled, emits event (165ms)
    History
      ✓ find orders for maker (13ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (2ms)

  TWAP
    ✓ single chunk (102ms)
    ✓ mutiple chunks (342ms)
    ✓ last chunk may be partial amount (237ms)
    ✓ outbid current bid within pending period (128ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (68ms)
    ✓ enforce bids 1% better than previous (89ms)
    ✓ clears stale unfilled bid after max bidding window = bidDelay * STALE_BID_DELAY_MUL (84ms)
    ✓ supports market orders, english auction incentivizes best competitive price (135ms)
    ✓ prevent winning the bid by manipulating exchange price (88ms)
    ✓ slippage percent allows price slippage (143ms)
    ✓ slippage percent at bid time is part of the bidding war (109ms)
    prune stale invalid order
      ✓ when no approval (38ms)
      ✓ when no balance (40ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (7897ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               70 gwei/gas               ·       0.95 usd/matic        │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      36162  ·      58446  ·      55396  ·           56  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51994  ·      63552  ·      61501  ·           69  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     280760  ·            1  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     268051  ·     353691  ·     326227  ·           51  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115828  ·     937799  ·     272388  ·           48  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      75956  ·      76018  ·      75987  ·            4  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     279010  ·     581356  ·     345301  ·           21  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86981  ·      90844  ·      88913  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     167530  ·     186486  ·     177008  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.05  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503931  ·        3.4 %  ·       0.03  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.04  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2856988  ·         19 %  ·       0.19  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.05  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  53 passing (1m)

```
