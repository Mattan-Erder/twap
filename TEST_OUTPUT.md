
```console

> @orbs-network/twap@1.0.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.0.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (446ms)
    ✓ prune only invalid orders (3861ms)
    ✓ bid params (13ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (27ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (398ms)
    verify bid
      ✓ expired (66ms)
      ✓ invalid exchange (1056ms)
      ✓ low bid (84ms)
      ✓ recently filled (115ms)
      ✓ recently filled custom delay (112ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (36ms)
      ✓ fee underflow protection (35ms)
      ✓ insufficient amount out when last partial fill (122ms)
      ✓ insufficient user allowance (41ms)
      ✓ insufficient user balance (45ms)
    perform fill
      ✓ expired (45ms)
      ✓ invalid taker when no existing bid (27ms)
      ✓ invalid taker when not the winning taker (44ms)
      ✓ pending bid when still in bidding window (44ms)
      ✓ insufficient out (628ms)
      ✓ insufficient out with excess fee (78ms)
      ✓ fee subtracted from dstAmountOut underflow protection (86ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (255ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (3ms)
      ✓ swap with data from paraswap (7406ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (81ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (26ms)
      ✓ sell tokens with FOT (35ms)

  Sanity
    ✓ maker creates ask order, emits event (26ms)
    ✓ bid sets Bid fields, emits event (40ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (86ms)
    ✓ cancel order, emits event (36ms)
    ✓ order fully filled, emits event (150ms)
    History
      ✓ find orders for maker (225ms)

  TWAP
    ✓ single chunk (85ms)
    ✓ mutiple chunks (270ms)
    ✓ last chunk may be partial amount (197ms)
    ✓ outbid current bid within pending period (100ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (62ms)
    ✓ enforce bids 1% better than previous (75ms)
    ✓ clears stale unfilled bid after max bidding window (78ms)
    ✓ supports market orders, english auction incentivizes best competitive price (126ms)
    ✓ prevent winning the bid by manipulating exchange price (82ms)
    ✓ slippage percent allows price slippage (163ms)
    ✓ slippage percent at bid time is part of the bidding war (102ms)
    prune stale invalid order
      ✓ when no approval (35ms)
      ✓ when no balance (415ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (7362ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               11 gwei/gas               ·       1339.12 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57666  ·           51  ·       0.85  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63072  ·           66  ·       0.93  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.68  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      51531  ·           21  ·       0.76  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     269762  ·            1  ·       3.97  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     236904  ·     308314  ·     282856  ·           46  ·       4.17  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115583  ·     937554  ·     271585  ·           47  ·       4.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       1.08  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     274789  ·     573816  ·     339550  ·           20  ·       5.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86772  ·      90731  ·      88752  ·            2  ·       1.31  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·       2.60  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      10.81  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       7.42  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       9.15  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2649090  ·       17.7 %  ·      39.02  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      10.57  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  51 passing (1m)


> @orbs-network/twap@1.0.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (237ms)
    ✓ prune only invalid orders (5189ms)
    ✓ bid params (15ms)
    order
      ✓ invalid id (6ms)
      ✓ invalid params (29ms)
      ✓ insufficient maker allowance (20ms)
      ✓ insufficient maker balance (173ms)
    verify bid
      ✓ expired (66ms)
      ✓ invalid exchange (845ms)
      ✓ low bid (95ms)
      ✓ recently filled (124ms)
      ✓ recently filled custom delay (149ms)
      ✓ insufficient amount out (36ms)
      ✓ insufficient amount out with excess fee (34ms)
      ✓ fee underflow protection (36ms)
      ✓ insufficient amount out when last partial fill (119ms)
      ✓ insufficient user allowance (41ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (47ms)
      ✓ invalid taker when no existing bid (31ms)
      ✓ invalid taker when not the winning taker (50ms)
      ✓ pending bid when still in bidding window (48ms)
      ✓ insufficient out (548ms)
      ✓ insufficient out with excess fee (75ms)
      ✓ fee subtracted from dstAmountOut underflow protection (77ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (208ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (7ms)
      ✓ swap with data from paraswap (10772ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (586ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (30ms)
      ✓ sell tokens with FOT (43ms)

  Sanity
    ✓ maker creates ask order, emits event (29ms)
    ✓ bid sets Bid fields, emits event (47ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (101ms)
    ✓ cancel order, emits event (39ms)
    ✓ order fully filled, emits event (178ms)
    History
      ✓ find orders for maker (174ms)

  TWAP
    ✓ single chunk (112ms)
    ✓ mutiple chunks (351ms)
    ✓ last chunk may be partial amount (246ms)
    ✓ outbid current bid within pending period (109ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (74ms)
    ✓ enforce bids 1% better than previous (95ms)
    ✓ clears stale unfilled bid after max bidding window (88ms)
    ✓ supports market orders, english auction incentivizes best competitive price (166ms)
    ✓ prevent winning the bid by manipulating exchange price (84ms)
    ✓ slippage percent allows price slippage (143ms)
    ✓ slippage percent at bid time is part of the bidding war (114ms)
    prune stale invalid order
      ✓ when no approval (41ms)
      ✓ when no balance (197ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (12981ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               2 gwei/gas                ·        0.20 usd/ftm         │
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
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     367862  ·            1  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     229096  ·     300506  ·     275217  ·           46  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     110817  ·    1963328  ·     309928  ·           47  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     267380  ·    1099651  ·     399101  ·           20  ·       0.00  │
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
    ✓ cancel only from maker (546ms)
    ✓ prune only invalid orders (4225ms)
    ✓ bid params (12ms)
    order
      ✓ invalid id (9ms)
      ✓ invalid params (30ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (495ms)
    verify bid
      ✓ expired (69ms)
      ✓ invalid exchange (1171ms)
      ✓ low bid (92ms)
      ✓ recently filled (131ms)
      ✓ recently filled custom delay (126ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (35ms)
      ✓ fee underflow protection (34ms)
      ✓ insufficient amount out when last partial fill (119ms)
      ✓ insufficient user allowance (45ms)
      ✓ insufficient user balance (46ms)
    perform fill
      ✓ expired (48ms)
      ✓ invalid taker when no existing bid (28ms)
      ✓ invalid taker when not the winning taker (45ms)
      ✓ pending bid when still in bidding window (50ms)
      ✓ insufficient out (729ms)
      ✓ insufficient out with excess fee (90ms)
      ✓ fee subtracted from dstAmountOut underflow protection (91ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (271ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (7ms)
      ✓ swap with data from paraswap (9871ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (847ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (39ms)
      ✓ sell tokens with FOT (39ms)

  Sanity
    ✓ maker creates ask order, emits event (30ms)
    ✓ bid sets Bid fields, emits event (45ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (91ms)
    ✓ cancel order, emits event (39ms)
    ✓ order fully filled, emits event (174ms)
    History
      ✓ find orders for maker (237ms)

  TWAP
    ✓ single chunk (97ms)
    ✓ mutiple chunks (315ms)
    ✓ last chunk may be partial amount (227ms)
    ✓ outbid current bid within pending period (106ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (76ms)
    ✓ enforce bids 1% better than previous (94ms)
    ✓ clears stale unfilled bid after max bidding window (90ms)
    ✓ supports market orders, english auction incentivizes best competitive price (149ms)
    ✓ prevent winning the bid by manipulating exchange price (88ms)
    ✓ slippage percent allows price slippage (161ms)
    ✓ slippage percent at bid time is part of the bidding war (117ms)
    prune stale invalid order
      ✓ when no approval (39ms)
      ✓ when no balance (509ms)

  TWAP with paraswap
    ✓ Spiritswap E2E (12039ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               79 gwei/gas               ·       0.88 usd/matic        │
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
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     325667  ·            1  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     234673  ·     306083  ·     280673  ·           46  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113352  ·     978166  ·     270314  ·           47  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     276981  ·     636987  ·     345782  ·           20  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      84634  ·      88500  ·      86567  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     167530  ·     186486  ·     177008  ·            2  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·       0.05  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·       0.04  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·       0.04  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2649090  ·       17.7 %  ·       0.18  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.05  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  51 passing (1m)

```
