
```console

> @orbs-network/twap@1.0.0 test
> for t in eth ftm poly; do npm run test:$t; done


> @orbs-network/twap@1.0.0 test:eth
> NETWORK=ETH BLOCK=14908980 hardhat test


🌐 network ETH blocknumber 14908980 🌐



  Errors
    ✓ cancel only from maker (466ms)
    ✓ prune only invalid orders (7402ms)
    ✓ bid params (12ms)
    order
      ✓ invalid id (7ms)
      ✓ invalid params (25ms)
      ✓ insufficient maker allowance (18ms)
      ✓ insufficient maker balance (428ms)
    verify bid
      ✓ expired (66ms)
      ✓ invalid exchange (1065ms)
      ✓ low bid (87ms)
      ✓ recently filled (115ms)
      ✓ recently filled custom delay (115ms)
      ✓ insufficient amount out (34ms)
      ✓ insufficient amount out with excess fee (38ms)
      ✓ fee underflow protection (35ms)
      ✓ insufficient amount out when last partial fill (118ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (47ms)
    perform fill
      ✓ expired (45ms)
      ✓ invalid taker when no existing bid (29ms)
      ✓ invalid taker when not the winning taker (44ms)
      ✓ pending bid when still in bidding window (47ms)
      ✓ insufficient out (652ms)
      ✓ insufficient out with excess fee (76ms)
      ✓ fee subtracted from dstAmountOut underflow protection (81ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (244ms)
      fee on transfer tokens
        ✓ throws on normal swap (33ms)
        ✓ sell tokens with FoT (37ms)
    ParaswapExchange
FTM only
      - getAmountOut using pure encoded data from offchain
      - swap with data from paraswap

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (46ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (85ms)
    ✓ cancel order, emits event (40ms)
    ✓ order fully filled, emits event (156ms)
    History
      ✓ find orders for maker (218ms)

  TWAP
    ✓ single chunk (91ms)
    ✓ mutiple chunks (313ms)
    ✓ last chunk may be partial amount (229ms)
    ✓ outbid current bid within pending period (98ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (63ms)
    ✓ enforce bids 1% better than previous (86ms)
    ✓ clears stale unfilled bid after max bidding window (81ms)
    ✓ supports market orders, english auction incentivizes best competitive price (156ms)
    ✓ prevent winning the bid by manipulating exchange price (78ms)
    ✓ supports FoT tokens (103ms)
    prune stale invalid order
      ✓ when no approval (37ms)
      ✓ when no balance (436ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               30 gwei/gas               ·       1303.04 usd/eth       │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      38027  ·      60311  ·      57462  ·           47  ·       2.25  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51618  ·      65625  ·      63244  ·           59  ·       2.47  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       1.81  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      52960  ·           16  ·       2.07  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     236904  ·     308314  ·     282487  ·           43  ·      11.04  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     115820  ·     297868  ·     265983  ·           41  ·      10.40  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       2.88  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     274797  ·     354886  ·     330133  ·           18  ·      12.91  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  prune           ·      86772  ·      90731  ·      88752  ·            2  ·       3.47  │
··························|··················|·············|·············|·············|···············|··············
|  UniswapV2Exchange      ·  swap            ·     166014  ·     186348  ·     176181  ·            2  ·       6.89  │
··························|··················|·············|·············|·············|···············|··············
|  Deployments                               ·                                         ·  % of limit   ·             │
·············································|·············|·············|·············|···············|··············
|  MockDeflationaryToken                     ·          -  ·          -  ·     733793  ·        4.9 %  ·      28.68  │
·············································|·············|·············|·············|···············|··············
|  MockExchange                              ·          -  ·          -  ·     503943  ·        3.4 %  ·      19.70  │
·············································|·············|·············|·············|···············|··············
|  TWAP                                      ·          -  ·          -  ·    2660714  ·       17.7 %  ·     104.01  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·      28.06  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  46 passing (50s)
  2 pending


> @orbs-network/twap@1.0.0 test:ftm
> NETWORK=FTM BLOCK=39838819 hardhat test


🌐 network FTM blocknumber 39838819 🌐



  Errors
    ✓ cancel only from maker (238ms)
    ✓ prune only invalid orders (5389ms)
    ✓ bid params (15ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (27ms)
      ✓ insufficient maker allowance (16ms)
      ✓ insufficient maker balance (187ms)
    verify bid
      ✓ expired (72ms)
      ✓ invalid exchange (898ms)
      ✓ low bid (91ms)
      ✓ recently filled (124ms)
      ✓ recently filled custom delay (126ms)
      ✓ insufficient amount out (38ms)
      ✓ insufficient amount out with excess fee (34ms)
      ✓ fee underflow protection (35ms)
      ✓ insufficient amount out when last partial fill (133ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (45ms)
    perform fill
      ✓ expired (50ms)
      ✓ invalid taker when no existing bid (28ms)
      ✓ invalid taker when not the winning taker (46ms)
      ✓ pending bid when still in bidding window (46ms)
      ✓ insufficient out (377ms)
      ✓ insufficient out with excess fee (91ms)
      ✓ fee subtracted from dstAmountOut underflow protection (77ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (212ms)
      fee on transfer tokens
        ✓ throws on normal swap (181ms)
        ✓ sell tokens with FoT (38ms)
    ParaswapExchange
      ✓ getAmountOut using pure encoded data from offchain (6ms)
      ✓ swap with data from paraswap (10234ms)

  Sanity
    ✓ maker creates ask order, emits event (28ms)
    ✓ bid sets Bid fields, emits event (45ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (103ms)
    ✓ cancel order, emits event (43ms)
    ✓ order fully filled, emits event (180ms)
    History
      ✓ find orders for maker (155ms)

  TWAP
    ✓ single chunk (95ms)
    ✓ mutiple chunks (317ms)
    ✓ last chunk may be partial amount (230ms)
    ✓ outbid current bid within pending period (117ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (74ms)
    ✓ enforce bids 1% better than previous (89ms)
    ✓ clears stale unfilled bid after max bidding window (87ms)
    ✓ supports market orders, english auction incentivizes best competitive price (147ms)
    ✓ prevent winning the bid by manipulating exchange price (78ms)
    ✓ supports FoT tokens (419ms)
    prune stale invalid order
      ✓ when no approval (42ms)
      ✓ when no balance (198ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               1 gwei/gas                ·        0.20 usd/ftm         │
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
|  ParaswapExchange       ·  swap            ·          -  ·          -  ·     372382  ·            1  ·       0.00  │
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
    ✓ cancel only from maker (481ms)
    ✓ prune only invalid orders (17199ms)
    ✓ bid params (16ms)
    order
      ✓ invalid id (8ms)
      ✓ invalid params (28ms)
      ✓ insufficient maker allowance (17ms)
      ✓ insufficient maker balance (2359ms)
    verify bid
      ✓ expired (65ms)
      ✓ invalid exchange (1241ms)
      ✓ low bid (88ms)
      ✓ recently filled (129ms)
      ✓ recently filled custom delay (125ms)
      ✓ insufficient amount out (33ms)
      ✓ insufficient amount out with excess fee (35ms)
      ✓ fee underflow protection (32ms)
      ✓ insufficient amount out when last partial fill (113ms)
      ✓ insufficient user allowance (42ms)
      ✓ insufficient user balance (42ms)
    perform fill
      ✓ expired (51ms)
      ✓ invalid taker when no existing bid (28ms)
      ✓ invalid taker when not the winning taker (44ms)
      ✓ pending bid when still in bidding window (46ms)
      ✓ insufficient out (3101ms)
      ✓ insufficient out with excess fee (87ms)
      ✓ fee subtracted from dstAmountOut underflow protection (104ms)

  IExchange implementations
    UniswapV2Exchange
      ✓ swap (259ms)
      fee on transfer tokens
        ✓ throws on normal swap (233ms)
        ✓ sell tokens with FoT (61ms)
    ParaswapExchange
FTM only
      - getAmountOut using pure encoded data from offchain
      - swap with data from paraswap

  Sanity
    ✓ maker creates ask order, emits event (27ms)
    ✓ bid sets Bid fields, emits event (41ms)
    ✓ fill sets Fill fields and clears the Bid, emits event (87ms)
    ✓ cancel order, emits event (41ms)
    ✓ order fully filled, emits event (156ms)
    History
      ✓ find orders for maker (221ms)

  TWAP
    ✓ single chunk (86ms)
    ✓ mutiple chunks (301ms)
    ✓ last chunk may be partial amount (234ms)
    ✓ outbid current bid within pending period (104ms)
    ✓ outbid current bid within pending period same path and amount but lower fee (69ms)
    ✓ enforce bids 1% better than previous (85ms)
    ✓ clears stale unfilled bid after max bidding window (82ms)
    ✓ supports market orders, english auction incentivizes best competitive price (138ms)
    ✓ prevent winning the bid by manipulating exchange price (91ms)
    ✓ supports FoT tokens (557ms)
    prune stale invalid order
      ✓ when no approval (35ms)
      ✓ when no balance (496ms)

·--------------------------------------------|---------------------------|-------------|-----------------------------·
|            Solc version: 0.8.16            ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 15000000 gas  │
·············································|···························|·············|······························
|  Methods                                   ·               91 gwei/gas               ·       0.82 usd/matic        │
··························|··················|·············|·············|·············|···············|··············
|  Contract               ·  Method          ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  approve         ·      36162  ·      58446  ·      55597  ·           47  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  ERC20                  ·  transfer        ·      51994  ·      63552  ·      61545  ·           59  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockDeflationaryToken  ·  approve         ·      46260  ·      46572  ·      46370  ·            6  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  MockExchange           ·  setMockAmounts  ·      32144  ·      69156  ·      52960  ·           16  ·       0.00  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  ask             ·     234673  ·     306083  ·     280308  ·           43  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  bid             ·     113589  ·     295637  ·     263807  ·           41  ·       0.02  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  cancel          ·      73539  ·      73601  ·      73560  ·            3  ·       0.01  │
··························|··················|·············|·············|·············|···············|··············
|  TWAP                   ·  fill            ·     276989  ·     358440  ·     333426  ·           18  ·       0.02  │
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
|  TWAP                                      ·          -  ·          -  ·    2660714  ·       17.7 %  ·       0.20  │
·············································|·············|·············|·············|···············|··············
|  UniswapV2Exchange                         ·          -  ·          -  ·     717701  ·        4.8 %  ·       0.05  │
·--------------------------------------------|-------------|-------------|-------------|---------------|-------------·

  46 passing (1m)
  2 pending

```
