
```console

> @orbs-network/twap@1.1.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.1.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (506ms)
    ✓ prune only invalid orders (4130ms)
    ✓ bid params (12ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (28ms)
      ✓ insufficient maker allowance (19ms)
      ✓ insufficient maker balance (426ms)
    verify bid
      ✓ expired (67ms)
      ✓ invalid exchange (1070ms)
      ✓ low bid (93ms)
      ✓ recently filled (135ms)
      ✓ recently filled custom delay (121ms)
      ✓ insufficient amount out (32ms)
      ✓ insufficient amount out with excess fee (33ms)
      ✓ fee underflow protection (33ms)
      ✓ insufficient amount out when last partial fill (112ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (43ms)
    perform fill
      ✓ expired (55ms)
      ✓ invalid taker when no existing bid (29ms)
      ✓ invalid taker when not the winning taker (47ms)
      ✓ pending bid when still in bidding window (47ms)
      ✓ insufficient out (683ms)
      ✓ insufficient out with excess fee (80ms)
      ✓ fee subtracted from dstAmountOut underflow protection (90ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (262ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (11ms)
      ✓ swap with data from paraswap (8455ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (91ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (29ms)
      ✓ sell tokens with FOT (39ms)

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (44ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (84ms)
    ✓ cancel order, emits event (38ms)
    ✓ order fully filled, emits event (155ms)
    History
      ✓ find orders for maker (255ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (1ms)

  TWAP
    ✓ single chunk (93ms)
    ✓ mutiple chunks (300ms)
    ✓ last chunk may be partial amount (212ms)
    ✓ outbid current bid within pending period (97ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (69ms)
    ✓ enforce bids 1% better than previous (83ms)
    ✓ clears stale unfilled bid after max bidding window (82ms)
    ✓ supports market orders, english auction incentivizes best competitive price (194ms)
    ✓ prevent winning the bid by manipulating exchange price (85ms)
    ✓ slippage percent allows price slippage (142ms)
    ✓ slippage percent at bid time is part of the bidding war (120ms)
    prune stale invalid order
      ✓ when no approval (41ms)
      ✓ when no balance (415ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (6608ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               11 gwei/gas               ·       1347.66 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57212  ·           55  ·       0.85  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63147  ·           68  ·       0.94  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.69  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.76  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     291859  ·            1  ·       4.33  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     247421  ·     333061  ·     305406  ·           50  ·       4.53  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115583  ·     420909  ·     260593  ·           47  ·       3.86  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73494  ·      73556  ·      73525  ·            4  ·       1.09  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     274824  ·     403167  ·     331052  ·           20  ·       4.91  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86794  ·      90753  ·      88774  ·            2  ·       1.32  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·       2.61  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      10.88  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       7.47  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       9.21  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2772465  ·       18.5 %  ·      41.10  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      10.64  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  52 passing (2m)


> @orbs-network/twap@1.1.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (254ms)
    ✓ prune only invalid orders (5548ms)
    ✓ bid params (14ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (28ms)
      ✓ insufficient maker allowance (15ms)
      ✓ insufficient maker balance (191ms)
    verify bid
      ✓ expired (76ms)
      ✓ invalid exchange (1067ms)
      ✓ low bid (90ms)
      ✓ recently filled (125ms)
      ✓ recently filled custom delay (125ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (38ms)
      ✓ fee underflow protection (36ms)
      ✓ insufficient amount out when last partial fill (116ms)
      ✓ insufficient user allowance (53ms)
      ✓ insufficient user balance (49ms)
    perform fill
      ✓ expired (49ms)
      ✓ invalid taker when no existing bid (24ms)
      ✓ invalid taker when not the winning taker (46ms)
      ✓ pending bid when still in bidding window (52ms)
      ✓ insufficient out (426ms)
      ✓ insufficient out with excess fee (98ms)
      ✓ fee subtracted from dstAmountOut underflow protection (91ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (224ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (9ms)
      ✓ swap with data from paraswap (12468ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (606ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (34ms)
      ✓ sell tokens with FOT (39ms)

  Sanity
    ✓ maker creates ask order, emits event (26ms)
    ✓ bid sets Bid fields, emits event (40ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (89ms)
    ✓ cancel order, emits event (37ms)
    ✓ order fully filled, emits event (179ms)
    History
      ✓ find orders for maker (430ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (2ms)

  TWAP
    ✓ single chunk (98ms)
    ✓ mutiple chunks (317ms)
    ✓ last chunk may be partial amount (237ms)
    ✓ outbid current bid within pending period (99ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (77ms)
    ✓ enforce bids 1% better than previous (84ms)
    ✓ clears stale unfilled bid after max bidding window (81ms)
    ✓ supports market orders, english auction incentivizes best competitive price (150ms)
    ✓ prevent winning the bid by manipulating exchange price (79ms)
    ✓ slippage percent allows price slippage (133ms)
    ✓ slippage percent at bid time is part of the bidding war (102ms)
    prune stale invalid order
      ✓ when no approval (41ms)
      ✓ when no balance (206ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (13999ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               1 gwei/gas                ·        0.20 usd/ftm         │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      24299  ·      46583  ·      43484  ·           55  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      46731  ·      52345  ·      51451  ·           68  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     369998  ·            1  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     239613  ·     325253  ·     297754  ·           50  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     110817  ·    1963316  ·     309928  ·           47  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73494  ·      73556  ·      73525  ·            4  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     267415  ·    1099686  ·     399136  ·           20  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      79704  ·      82945  ·      81325  ·            2  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     193833  ·     207562  ·     200698  ·            2  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2772465  ·       18.5 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.00  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  52 passing (2m)


> @orbs-network/twap@1.1.0 test:poly
> NETWORK=POLY BLOCK=29194866 hardhat test


🌐 network POLY blocknumber 29194866 🌐



  Errors
    ✓ cancel only from maker (515ms)
    ✓ prune only invalid orders (4421ms)
    ✓ bid params (12ms)
    order
      ✓ invalid id (9ms)
      ✓ invalid params (31ms)
      ✓ insufficient maker allowance (20ms)
      ✓ insufficient maker balance (470ms)
    verify bid
      ✓ expired (63ms)
      ✓ invalid exchange (1446ms)
      ✓ low bid (89ms)
      ✓ recently filled (131ms)
      ✓ recently filled custom delay (128ms)
      ✓ insufficient amount out (33ms)
      ✓ insufficient amount out with excess fee (31ms)
      ✓ fee underflow protection (33ms)
      ✓ insufficient amount out when last partial fill (108ms)
      ✓ insufficient user allowance (40ms)
      ✓ insufficient user balance (47ms)
    perform fill
      ✓ expired (48ms)
      ✓ invalid taker when no existing bid (27ms)
      ✓ invalid taker when not the winning taker (42ms)
      ✓ pending bid when still in bidding window (42ms)
      ✓ insufficient out (744ms)
      ✓ insufficient out with excess fee (85ms)
      ✓ fee subtracted from dstAmountOut underflow protection (79ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (259ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (9ms)
      ✓ swap with data from paraswap (40235ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (758ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (25ms)
      ✓ sell tokens with FOT (34ms)

  Sanity
    ✓ maker creates ask order, emits event (54ms)
    ✓ bid sets Bid fields, emits event (37ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (91ms)
    ✓ cancel order, emits event (35ms)
    ✓ order fully filled, emits event (146ms)
    History
      ✓ find orders for maker (268ms)
      ✓ makerOrders has mapping of order ids by maker address, to avoid relying on events (2ms)

  TWAP
    ✓ single chunk (89ms)
    ✓ mutiple chunks (277ms)
    ✓ last chunk may be partial amount (222ms)
    ✓ outbid current bid within pending period (97ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (60ms)
    ✓ enforce bids 1% better than previous (72ms)
    ✓ clears stale unfilled bid after max bidding window (75ms)
    ✓ supports market orders, english auction incentivizes best competitive price (129ms)
    ✓ prevent winning the bid by manipulating exchange price (90ms)
    ✓ slippage percent allows price slippage (153ms)
    ✓ slippage percent at bid time is part of the bidding war (119ms)
    prune stale invalid order
      ✓ when no approval (39ms)
      ✓ when no balance (492ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (17745ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·              107 gwei/gas               ·       0.88 usd/matic        │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      36162  ·      58446  ·      55347  ·           55  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51994  ·      63552  ·      61471  ·           68  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·    1172221  ·            1  ·       0.11  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     245190  ·     330830  ·     303220  ·           50  ·       0.03  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113352  ·     935275  ·     269401  ·           47  ·       0.03  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73494  ·      73556  ·      73525  ·            4  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     277016  ·     752203  ·     351576  ·           20  ·       0.03  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      84656  ·      88522  ·      86589  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     167530  ·     186486  ·     177008  ·            2  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.07  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       0.05  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.06  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2772465  ·       18.5 %  ·       0.26  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.07  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  52 passing (2m)

```
