// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "./Token.sol";

contract dBank {

  //assign Token contract to variable
  Token private token;

  //add mappings
mapping(address => uint) public etherBalanceOf;
mapping(address => uint) public depositStart;
mapping(address => bool) public isDeposited;

  //add events
  event Deposit(address indexed user, uint etherAmount, uint timeStart);
  event Withdraw(address indexed user, uint etherAmount, uint depositTime, uint interest);

  //pass as constructor argument deployed Token contract
  constructor(Token _token) public {
    //assign token deployed contract to variable
    token = _token;
  }

  function deposit() payable public {
    //check if msg.sender didn't already deposited funds
    //check if msg.value is >= than 0.01 ETH
    require(isDeposited[msg.sender] == false, 'Error, deposit already active');
    require(msg.value>=1e16, 'Error, deposit must be >= 0.01 ETH');

    etherBalanceOf[msg.sender] = etherBalanceOf[msg.sender] + msg.value;
    //increase msg.sender ether deposit balance
    depositStart[msg.sender] = depositStart[msg.sender] + block.timestamp;
    //start msg.sender hodling time

    //set msg.sender deposit status to true
    isDeposited[msg.sender] = true; // activate deposit status
    //emit Deposit event
    emit Deposit(msg.sender, msg.value, block.timestamp);

  }

  function withdraw() public {
    //check if msg.sender deposit status is true
    require(isDeposited[msg.sender]==true, 'Error, no previous deposit');
    //assign msg.sender ether deposit balance to variable for event
    uint userBalance = etherBalanceOf[msg.sender]; // for event

    //check user's hodl time
    uint depositTime = block.timestamp - depositStart[msg.sender];

    //calc interest per second
    //31668017 - interest(10% APY) per second for min. deposit amount (0.01 ETH), cuz:
    //1e15(10% of 0.01 ETH) / 3157760 (seconds in 365.25 days)

    //(etherBalanceOf[msg.sender] / 1e16) - calc. how much higher interest will be (based on deposit)
    //for min. deposit (0.01 ETH), (etherBalanceOf[msg.sender] / 1e16) = (the same, 31668017/s)
    //for deposit 0.02 ETH, (etherBalanceOf[msg.sender] / 1e16) = Z (doubled, (2*31668017)/s)
    uint interestPerSecond = 31668017 * (etherBalanceOf[msg.sender] / 1e16);
    uint interest = interestPerSecond * depositTime;
    //calc accrued interest

    //send eth to user
    msg.sender.transfer(userBalance);
    //send interest in tokens to user
    token.mint(msg.sender, interest); //interest to user

    //reset depositer data
    depositStart[msg.sender] = 0;
    etherBalanceOf[msg.sender] = 0;
    isDeposited[msg.sender] = false;

    //emit event
    emit Withdraw(msg.sender, userBalance, depositTime, interest);
  }

  function borrow() payable public {
    //check if collateral is >= than 0.01 ETH
    //check if user doesn't have active loan

    //add msg.value to ether collateral

    //calc tokens amount to mint, 50% of msg.value

    //mint&send tokens to user

    //activate borrower's loan status

    //emit event
  }

  function payOff() public {
    //check if loan is active
    //transfer tokens from user back to the contract

    //calc fee

    //send user's collateral minus fee

    //reset borrower's data

    //emit event
  }
}
