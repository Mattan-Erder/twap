
```console

> @orbs-network/twap@1.0.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.0.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (476ms)
    ✓ prune only invalid orders (4227ms)
    ✓ bid params (12ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (28ms)
      ✓ insufficient maker allowance (17ms)
      ✓ insufficient maker balance (420ms)
    verify bid
      ✓ expired (66ms)
      ✓ invalid exchange (1282ms)
      ✓ low bid (83ms)
      ✓ recently filled (109ms)
      ✓ recently filled custom delay (112ms)
      ✓ insufficient amount out (32ms)
      ✓ insufficient amount out with excess fee (32ms)
      ✓ fee underflow protection (31ms)
      ✓ insufficient amount out when last partial fill (107ms)
      ✓ insufficient user allowance (39ms)
      ✓ insufficient user balance (41ms)
    perform fill
      ✓ expired (44ms)
      ✓ invalid taker when no existing bid (25ms)
      ✓ invalid taker when not the winning taker (48ms)
      ✓ pending bid when still in bidding window (46ms)
      ✓ insufficient out (725ms)
      ✓ insufficient out with excess fee (76ms)
      ✓ fee subtracted from dstAmountOut underflow protection (81ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (244ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (4ms)
      ✓ swap with data from paraswap (7292ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (100ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (27ms)
      ✓ sell tokens with FOT (39ms)

  Sanity
    ✓ maker creates ask order, emits event (26ms)
    ✓ bid sets Bid fields, emits event (40ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (84ms)
    ✓ cancel order, emits event (36ms)
    ✓ order fully filled, emits event (147ms)
    History
      ✓ find orders for maker (229ms)

  TWAP
    ✓ single chunk (80ms)
    ✓ mutiple chunks (273ms)
    ✓ last chunk may be partial amount (195ms)
    ✓ outbid current bid within pending period (126ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (62ms)
    ✓ enforce bids 1% better than previous (78ms)
    ✓ clears stale unfilled bid after max bidding window (78ms)
    ✓ supports market orders, english auction incentivizes best competitive price (130ms)
    ✓ prevent winning the bid by manipulating exchange price (78ms)
    ✓ slippage percent allows price slippage (129ms)
    ✓ slippage percent at bid time is part of the bidding war (101ms)
    prune stale invalid order
      ✓ when no approval (35ms)
      ✓ when no balance (469ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (8313ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               14 gwei/gas               ·       1313.22 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57666  ·           51  ·       1.06  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63072  ·           66  ·       1.16  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.85  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.95  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     269819  ·            1  ·       4.96  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     236904  ·     308314  ·     282856  ·           46  ·       5.20  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115583  ·     937554  ·     271585  ·           47  ·       4.99  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       1.35  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     274789  ·     573865  ·     339553  ·           20  ·       6.24  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86772  ·      90731  ·      88752  ·            2  ·       1.63  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·       3.24  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      13.49  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       9.27  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·      11.42  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2649090  ·       17.7 %  ·      48.70  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      13.19  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  51 passing (2m)


> @orbs-network/twap@1.0.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (260ms)
    ✓ prune only invalid orders (5394ms)
    ✓ bid params (14ms)
    order
      ✓ invalid id (6ms)
      ✓ invalid params (27ms)
      ✓ insufficient maker allowance (25ms)
      ✓ insufficient maker balance (171ms)
    verify bid
      ✓ expired (65ms)
      ✓ invalid exchange (989ms)
      ✓ low bid (86ms)
      ✓ recently filled (119ms)
      ✓ recently filled custom delay (136ms)
      ✓ insufficient amount out (35ms)
      ✓ insufficient amount out with excess fee (38ms)
      ✓ fee underflow protection (37ms)
      ✓ insufficient amount out when last partial fill (119ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (54ms)
      ✓ invalid taker when no existing bid (29ms)
      ✓ invalid taker when not the winning taker (46ms)
      ✓ pending bid when still in bidding window (44ms)
      ✓ insufficient out (399ms)
      ✓ insufficient out with excess fee (72ms)
      ✓ fee subtracted from dstAmountOut underflow protection (74ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (231ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (9ms)
      ✓ swap with data from paraswap (11846ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (538ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (28ms)
      ✓ sell tokens with FOT (36ms)

  Sanity
    ✓ maker creates ask order, emits event (27ms)
    ✓ bid sets Bid fields, emits event (41ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (90ms)
    ✓ cancel order, emits event (34ms)
    ✓ order fully filled, emits event (161ms)
    History
      ✓ find orders for maker (163ms)

  TWAP
    ✓ single chunk (93ms)
    ✓ mutiple chunks (300ms)
    ✓ last chunk may be partial amount (241ms)
    ✓ outbid current bid within pending period (119ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (67ms)
    ✓ enforce bids 1% better than previous (73ms)
    ✓ clears stale unfilled bid after max bidding window (75ms)
    ✓ supports market orders, english auction incentivizes best competitive price (137ms)
    ✓ prevent winning the bid by manipulating exchange price (74ms)
    ✓ slippage percent allows price slippage (125ms)
    ✓ slippage percent at bid time is part of the bidding war (97ms)
    prune stale invalid order
      ✓ when no approval (34ms)
      ✓ when no balance (203ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (15435ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               1 gwei/gas                ·        0.20 usd/ftm         │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      24299  ·      46583  ·      43938  ·           51  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      46731  ·      52345  ·      51448  ·           66  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     372386  ·            1  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     229096  ·     300506  ·     275217  ·           46  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     110817  ·    1963328  ·     309928  ·           47  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     267380  ·    1155395  ·     401888  ·           20  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      79682  ·      82923  ·      81303  ·            2  ·       0.00  │
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
|  TWAP                                      ·          -  ·          -  ·    2649090  ·       17.7 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.00  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  51 passing (2m)


> @orbs-network/twap@1.0.0 test:poly
> NETWORK=POLY BLOCK=29194866 hardhat test


🌐 network POLY blocknumber 29194866 🌐



  Errors
    ✓ cancel only from maker (485ms)
    ✓ prune only invalid orders (4078ms)
    ✓ bid params (13ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (27ms)
      ✓ insufficient maker allowance (17ms)
      ✓ insufficient maker balance (451ms)
    verify bid
      ✓ expired (65ms)
      ✓ invalid exchange (1259ms)
      ✓ low bid (83ms)
      ✓ recently filled (137ms)
      ✓ recently filled custom delay (111ms)
      ✓ insufficient amount out (30ms)
      ✓ insufficient amount out with excess fee (55ms)
      ✓ fee underflow protection (34ms)
      ✓ insufficient amount out when last partial fill (110ms)
      ✓ insufficient user allowance (39ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (43ms)
      ✓ invalid taker when no existing bid (25ms)
      ✓ invalid taker when not the winning taker (41ms)
      ✓ pending bid when still in bidding window (41ms)
      ✓ insufficient out (782ms)
      ✓ insufficient out with excess fee (73ms)
      ✓ fee subtracted from dstAmountOut underflow protection (73ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (284ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (7ms)
      ✓ swap with data from paraswap (109988ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (659ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (27ms)
      ✓ sell tokens with FOT (38ms)

  Sanity
    ✓ maker creates ask order, emits event (27ms)
    ✓ bid sets Bid fields, emits event (40ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (83ms)
    ✓ cancel order, emits event (36ms)
    ✓ order fully filled, emits event (149ms)
    History
      ✓ find orders for maker (279ms)

  TWAP
    ✓ single chunk (97ms)
    ✓ mutiple chunks (303ms)
    ✓ last chunk may be partial amount (213ms)
    ✓ outbid current bid within pending period (98ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (65ms)
    ✓ enforce bids 1% better than previous (77ms)
    ✓ clears stale unfilled bid after max bidding window (79ms)
    ✓ supports market orders, english auction incentivizes best competitive price (131ms)
    ✓ prevent winning the bid by manipulating exchange price (93ms)
    ✓ slippage percent allows price slippage (172ms)
    ✓ slippage percent at bid time is part of the bidding war (137ms)
    prune stale invalid order
      ✓ when no approval (36ms)
      ✓ when no balance (469ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (53225ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               62 gwei/gas               ·       0.83 usd/matic        │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      36162  ·      58446  ·      55801  ·           51  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51994  ·      63552  ·      61407  ·           66  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·    3058095  ·            1  ·       0.16  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     234673  ·     306083  ·     280673  ·           46  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113352  ·    4566852  ·     346669  ·           47  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     276981  ·    2260911  ·     426978  ·           20  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      84634  ·      88500  ·      86567  ·            2  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     167530  ·     186486  ·     177008  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.04  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       0.03  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.03  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2649090  ·       17.7 %  ·       0.14  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.04  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  51 passing (4m)

```
