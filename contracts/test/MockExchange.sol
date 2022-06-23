// SPDX-License-Identifier: MIT
// solhint-disable not-rely-on-time
pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "../Interfaces.sol";

contract MockExchange is IExchange {
    using SafeERC20 for ERC20;

    uint256[] public amounts;

    function setMockAmounts(uint256[] memory _amounts) public {
        amounts = _amounts;
    }

    function getAmountOut(uint256, address[] calldata) public view returns (uint256) {
        return amounts[amounts.length - 1];
    }

    function getAmountsOut(uint256, address[] calldata) public view returns (uint256[] memory) {
        return amounts;
    }

    function swap(
        uint256 amountIn,
        uint256,
        address[] calldata path
    ) public returns (uint256 amountOut) {
        ERC20 srcToken = ERC20(path[0]);
        ERC20 dstToken = ERC20(path[path.length - 1]);
        srcToken.safeTransferFrom(msg.sender, address(this), amountIn);

        amountOut = amounts[amounts.length - 1];
        dstToken.safeTransfer(msg.sender, amountOut);
    }
}
