// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Test {
    uint256 private val;

    constructor() public {
        val = 1;
    }

    function getVal() public view returns (uint256) {
        return val;
    }

    function testRevert(bool willRevert) public view returns (uint256) {
        if (willRevert) {
            revert("I reverted");
        }

        return block.number;
    }

    function setVal(uint256 newValue) external {
        require(newValue < 10, "newValue >= 10");

        val = newValue;
    }
}
