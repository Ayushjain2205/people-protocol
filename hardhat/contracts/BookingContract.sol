// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BookingContract is AccessControl {
    struct Booking {
        uint256 bookingId;
        address user;
        address serviceProvider;
        uint256 dateOfBooking;
        uint256 timeOfService;
        bool isCancelled;
        bool isCompleted;
    }

    bytes32 public constant SERVICE_PROVIDER_ROLE = keccak256("SERVICE_PROVIDER_ROLE");
    uint256 private nextBookingId = 1;
    mapping(uint256 => Booking) public bookings;

    IERC20 public paymentToken;  // ERC20 token for handling payments

    event BookingCreated(uint256 bookingId, address user, address serviceProvider, uint256 timeOfService);
    event BookingCancelled(uint256 bookingId);
    event BookingUpdated(uint256 bookingId, uint256 newTimeOfService);
    event BookingCompleted(uint256 bookingId);
    event ServiceProviderAdded(address serviceProvider);
    event ServiceProviderRemoved(address serviceProvider);


    function addServiceProvider(address _serviceProvider) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(SERVICE_PROVIDER_ROLE, _serviceProvider);
        emit ServiceProviderAdded(_serviceProvider);
    }

    function removeServiceProvider(address _serviceProvider) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(SERVICE_PROVIDER_ROLE, _serviceProvider);
        emit ServiceProviderRemoved(_serviceProvider);
    }

    function createBooking(address _serviceProvider, uint256 _timeOfService) public {
        require(hasRole(SERVICE_PROVIDER_ROLE, _serviceProvider), "Not a registered service provider");
        
        // Handling payment (example: deposit or full payment)
        paymentToken.transferFrom(msg.sender, address(this), 1 * 10**18); // Assuming a fixed rate per booking

        bookings[nextBookingId] = Booking({
            bookingId: nextBookingId,
            user: msg.sender,
            serviceProvider: _serviceProvider,
            dateOfBooking: block.timestamp,
            timeOfService: _timeOfService,
            isCancelled: false,
            isCompleted: false
        });

        emit BookingCreated(nextBookingId, msg.sender, _serviceProvider, _timeOfService);
        nextBookingId++;
    }

    function cancelBooking(uint256 _bookingId) public {
        Booking storage booking = bookings[_bookingId];
        require(msg.sender == booking.user, "Only the user can cancel the booking");
        require(!booking.isCancelled, "Booking already cancelled");
        require(!booking.isCompleted, "Booking already completed");

        booking.isCancelled = true;
        // Refund logic (if applicable)
        paymentToken.transfer(booking.user, 1 * 10**18); // Refunding the payment

        emit BookingCancelled(_bookingId);
    }

    function updateBookingTime(uint256 _bookingId, uint256 _newTimeOfService) public {
        Booking storage booking = bookings[_bookingId];
        require(msg.sender == booking.user, "Only the user can update the booking");
        require(!booking.isCancelled, "Booking is cancelled");
        require(!booking.isCompleted, "Booking already completed");

        booking.timeOfService = _newTimeOfService;
        emit BookingUpdated(_bookingId, _newTimeOfService);
    }

    function completeBooking(uint256 _bookingId) public {
        Booking storage booking = bookings[_bookingId];
        require(hasRole(SERVICE_PROVIDER_ROLE, msg.sender), "Only the service provider can complete the booking");
        require(msg.sender == booking.serviceProvider, "Not the correct service provider");
        require(!booking.isCancelled, "Booking is cancelled");
        require(!booking.isCompleted, "Booking already completed");

        booking.isCompleted = true;
        // Payment distribution logic

        emit BookingCompleted(_bookingId);
    }

    function getBooking(uint256 _bookingId) public view returns (Booking memory) {
        require(_bookingId < nextBookingId, "Invalid booking ID");
        return bookings[_bookingId];
    }
}
