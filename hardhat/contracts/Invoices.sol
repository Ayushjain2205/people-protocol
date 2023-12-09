// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InvoicesContract {
    struct Invoice {
        uint256 bookingId;
        uint256 amount;
        bytes32 txnHash; // Hash of the transaction
        address serviceProvider;
        address user;
    }

    // A mapping from booking ID to its corresponding invoice
    mapping(uint256 => Invoice) public invoices;

    // Event to emit when a new invoice is created
    event InvoiceCreated(uint256 bookingId, uint256 amount, bytes32 txnHash, address serviceProvider, address user);

    function createInvoice(uint256 _bookingId, uint256 _amount, bytes32 _txnHash, address _serviceProvider, address _user) public {
        // In real use, there should be checks for the validity of the booking, amount, and parties involved.
        Invoice memory newInvoice = Invoice({
            bookingId: _bookingId,
            amount: _amount,
            txnHash: _txnHash,
            serviceProvider: _serviceProvider,
            user: _user
        });

        invoices[_bookingId] = newInvoice;
        emit InvoiceCreated(_bookingId, _amount, _txnHash, _serviceProvider, _user);
    }

    function getInvoice(uint256 _bookingId) public view returns (Invoice memory) {
        require(invoices[_bookingId].bookingId != 0, "Invoice does not exist");
        return invoices[_bookingId];
    }
}
