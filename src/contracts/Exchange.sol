pragma solidity ^0.5.0;

contract Exchange {
    // Variables
    address public feeAccount; // the account that receives exchange fees
    uint256 public feePercent; // the fee percentage

    constructor (address _feeAccount, uint256 _feePercent) public {
         feeAccount = _feeAccount;
         feePercent = _feePercent;
    }

}