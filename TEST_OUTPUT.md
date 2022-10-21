
```console

> @orbs-network/twap@1.0.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.0.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (439ms)
    ✓ prune only invalid orders (3626ms)
    ✓ bid params (11ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (27ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (382ms)
    verify bid
      ✓ expired (66ms)
      ✓ invalid exchange (978ms)
      ✓ low bid (89ms)
      ✓ recently filled (113ms)
      ✓ recently filled custom delay (116ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (32ms)
      ✓ fee underflow protection (32ms)
      ✓ insufficient amount out when last partial fill (110ms)
      ✓ insufficient user allowance (40ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (47ms)
      ✓ invalid taker when no existing bid (30ms)
      ✓ invalid taker when not the winning taker (47ms)
      ✓ pending bid when still in bidding window (46ms)
      ✓ insufficient out (632ms)
      ✓ insufficient out with excess fee (85ms)
      ✓ fee subtracted from dstAmountOut underflow protection (85ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (232ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (8ms)
      ✓ swap with data from paraswap (7734ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (81ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (28ms)
      ✓ sell tokens with FOT (37ms)

  Sanity
    ✓ maker creates ask order, emits event (30ms)
    ✓ bid sets Bid fields, emits event (41ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (89ms)
    ✓ cancel order, emits event (38ms)
    ✓ order fully filled, emits event (158ms)
    History
      ✓ find orders for maker (217ms)

  TWAP
    ✓ single chunk (89ms)
    ✓ mutiple chunks (289ms)
    ✓ last chunk may be partial amount (213ms)
    ✓ outbid current bid within pending period (113ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (73ms)
    ✓ enforce bids 1% better than previous (83ms)
    ✓ clears stale unfilled bid after max bidding window (85ms)
    ✓ supports market orders, english auction incentivizes best competitive price (139ms)
    ✓ prevent winning the bid by manipulating exchange price (86ms)
    prune stale invalid order
      ✓ when no approval (42ms)
      ✓ when no balance (417ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               25 gwei/gas               ·       1300.75 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57522  ·           48  ·       1.87  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63322  ·           61  ·       2.06  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       1.51  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      52960  ·           16  ·       1.72  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     292675  ·            1  ·       9.52  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     236904  ·     308314  ·     282487  ·           43  ·       9.19  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115820  ·     297868  ·     265983  ·           41  ·       8.65  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       2.39  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     274797  ·     354886  ·     330133  ·           18  ·      10.74  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86772  ·      90731  ·      88752  ·            2  ·       2.89  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·       5.73  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      23.86  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·      16.39  │
·············································|·············|·············|·············|···············|··············
|  ParaswapExchange                          ·          -  ·          -  ·     621334  ·        4.1 %  ·      20.21  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2660714  ·       17.7 %  ·      86.52  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      23.34  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  48 passing (1m)


> @orbs-network/twap@1.0.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (213ms)
    ✓ prune only invalid orders (5089ms)
    ✓ bid params (15ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (28ms)
      ✓ insufficient maker allowance (16ms)
      ✓ insufficient maker balance (165ms)
    verify bid
      ✓ expired (68ms)
      ✓ invalid exchange (843ms)
      ✓ low bid (92ms)
      ✓ recently filled (126ms)
      ✓ recently filled custom delay (134ms)
      ✓ insufficient amount out (35ms)
      ✓ insufficient amount out with excess fee (36ms)
      ✓ fee underflow protection (34ms)
      ✓ insufficient amount out when last partial fill (119ms)
      ✓ insufficient user allowance (44ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (47ms)
      ✓ invalid taker when no existing bid (26ms)
      ✓ invalid taker when not the winning taker (46ms)
      ✓ pending bid when still in bidding window (46ms)
      ✓ insufficient out (371ms)
      ✓ insufficient out with excess fee (81ms)
      ✓ fee subtracted from dstAmountOut underflow protection (77ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (204ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (6ms)
      ✓ swap with data from paraswap (11683ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (536ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (31ms)
      ✓ sell tokens with FOT (38ms)

  Sanity
    ✓ maker creates ask order, emits event (30ms)
    ✓ bid sets Bid fields, emits event (43ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (91ms)
    ✓ cancel order, emits event (37ms)
    ✓ order fully filled, emits event (165ms)
    History
      ✓ find orders for maker (154ms)

  TWAP
    ✓ single chunk (94ms)
    ✓ mutiple chunks (311ms)
    ✓ last chunk may be partial amount (230ms)
    ✓ outbid current bid within pending period (100ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (68ms)
    ✓ enforce bids 1% better than previous (88ms)
    ✓ clears stale unfilled bid after max bidding window (84ms)
    ✓ supports market orders, english auction incentivizes best competitive price (152ms)
    ✓ prevent winning the bid by manipulating exchange price (79ms)
    prune stale invalid order
      ✓ when no approval (34ms)
      ✓ when no balance (181ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               2 gwei/gas                ·        0.20 usd/ftm         │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      24299  ·      46583  ·      43794  ·           48  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      46731  ·      52345  ·      51415  ·           61  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      52960  ·           16  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     367858  ·            1  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     229096  ·     300506  ·     274861  ·           43  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     111054  ·     322473  ·     284532  ·           41  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     267388  ·     396959  ·     367499  ·           18  ·       0.00  │
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
|  TWAP                                      ·          -  ·          -  ·    2660714  ·       17.7 %  ·       0.00  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.00  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  48 passing (1m)


> @orbs-network/twap@1.0.0 test:poly
> NETWORK=POLY BLOCK=29194866 hardhat test


🌐 network POLY blocknumber 29194866 🌐



  Errors
    ✓ cancel only from maker (457ms)
    ✓ prune only invalid orders (3968ms)
    ✓ bid params (14ms)
    order
      ✓ invalid id (9ms)
      ✓ invalid params (31ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (412ms)
    verify bid
      ✓ expired (70ms)
      ✓ invalid exchange (1023ms)
      ✓ low bid (83ms)
      ✓ recently filled (120ms)
      ✓ recently filled custom delay (118ms)
      ✓ insufficient amount out (37ms)
      ✓ insufficient amount out with excess fee (37ms)
      ✓ fee underflow protection (36ms)
      ✓ insufficient amount out when last partial fill (122ms)
      ✓ insufficient user allowance (43ms)
      ✓ insufficient user balance (45ms)
    perform fill
      ✓ expired (48ms)
      ✓ invalid taker when no existing bid (27ms)
      ✓ invalid taker when not the winning taker (47ms)
      ✓ pending bid when still in bidding window (43ms)
      ✓ insufficient out (649ms)
      ✓ insufficient out with excess fee (78ms)
      ✓ fee subtracted from dstAmountOut underflow protection (78ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (256ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (6ms)
      ✓ swap with data from paraswap (26404ms)

  FeeOnTransfer tokens
    ✓ TWAP supports FOT tokens (667ms)
    UniswapV2Exchange supports FOT tokens
      ✓ throws on normal swap (28ms)
      ✓ sell tokens with FOT (37ms)

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (40ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (88ms)
    ✓ cancel order, emits event (36ms)
    ✓ order fully filled, emits event (157ms)
    History
      ✓ find orders for maker (230ms)

  TWAP
    ✓ single chunk (91ms)
    ✓ mutiple chunks (291ms)
    ✓ last chunk may be partial amount (213ms)
    ✓ outbid current bid within pending period (108ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (70ms)
    ✓ enforce bids 1% better than previous (83ms)
    ✓ clears stale unfilled bid after max bidding window (85ms)
    ✓ supports market orders, english auction incentivizes best competitive price (136ms)
    ✓ prevent winning the bid by manipulating exchange price (84ms)
    prune stale invalid order
      ✓ when no approval (38ms)
      ✓ when no balance (430ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               61 gwei/gas               ·       0.82 usd/matic        │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      36162  ·      58446  ·      55657  ·           48  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51994  ·      63552  ·      61611  ·           61  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      52960  ·           16  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     867376  ·            1  ·       0.04  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     234673  ·     306083  ·     280308  ·           43  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113589  ·     295637  ·     263807  ·           41  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     276989  ·     358440  ·     333426  ·           18  ·       0.02  │
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
|  TWAP                                      ·          -  ·          -  ·    2660714  ·       17.7 %  ·       0.13  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.04  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  48 passing (1m)

```
