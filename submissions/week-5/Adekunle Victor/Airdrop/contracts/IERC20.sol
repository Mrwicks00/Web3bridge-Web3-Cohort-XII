//SPDX-License-Identifier: MIT

pragma solidity 0.8.28;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IDripToken is IERC20 {
    function mint(address _to, uint256 _amount) external returns(bool);
}
