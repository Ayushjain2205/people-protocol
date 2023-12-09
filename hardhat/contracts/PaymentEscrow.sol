// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentEscrow {
    struct Escrow {
        uint256 amount;
        address payable serviceProvider;
        address user;
        bool isServiceCompleted;
        bool isPaymentReleased;
    }

    mapping(uint256 => Escrow) public escrows; // Mapping booking ID to escrow
    uint256 public nextEscrowId = 1;

    event EscrowCreated(uint256 escrowId, uint256 amount, address serviceProvider, address user);
    event ServiceCompleted(uint256 escrowId);
    event PaymentReleased(uint256 escrowId, uint256 amount);

    function createEscrow(uint256 _amount, address payable _serviceProvider, address _user) public payable {
        require(msg.value == _amount, "Payment must match the escrow amount");
        
        Escrow memory newEscrow = Escrow({
            amount: _amount,
            serviceProvider: _serviceProvider,
            user: _user,
            isServiceCompleted: false,
            isPaymentReleased: false
        });

        escrows[nextEscrowId] = newEscrow;
        emit EscrowCreated(nextEscrowId, _amount, _serviceProvider, _user);
        nextEscrowId++;
    }

    function markServiceAsCompleted(uint256 _escrowId) public {
        Escrow storage escrow = escrows[_escrowId];
        require(msg.sender == escrow.user, "Only the user can mark the service as completed");
        require(!escrow.isServiceCompleted, "Service is already marked as completed");

        escrow.isServiceCompleted = true;
        emit ServiceCompleted(_escrowId);
    }

    function releasePayment(uint256 _escrowId) public {
        Escrow storage escrow = escrows[_escrowId];
        require(escrow.isServiceCompleted, "Service is not yet completed");
        require(!escrow.isPaymentReleased, "Payment is already released");
        require(msg.sender == escrow.user || msg.sender == escrow.serviceProvider, "Only the user or service provider can release the payment");

        escrow.serviceProvider.transfer(escrow.amount);
        escrow.isPaymentReleased = true;
        emit PaymentReleased(_escrowId, escrow.amount);
    }

    function getEscrowDetails(uint256 _escrowId) public view returns (Escrow memory) {
        return escrows[_escrowId];
    }
}
