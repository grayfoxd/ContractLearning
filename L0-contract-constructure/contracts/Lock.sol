// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./interfaces/IToken.sol";
// import "@oppenzeplin/toekn-.../";

contract Lock is Token {
    uint public unlockTime;
    address payable public owner;
    address public token;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime,address _token) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
        token = _token;
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        IToken(token).a(); 
        // delegateCall()
        // call{}

        owner.transfer(address(this).balance);
    }
}
