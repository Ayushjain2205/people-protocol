// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract ServiceProvider is AccessControl {
    struct Service {
        string name;
        string description;
    }

    struct Review {
        address reviewer;
        string comment;
        uint8 rating; 
    }

    struct PerformanceReview {
        uint256 timestamp;
        string comment;
        uint8 rating; 
    }

    struct ServiceProviderProfile {
        address provider;
        uint256 timeJoined;
        uint256 totalUsers;
        Service[] services;
        Review[] reviews;
        PerformanceReview[] performanceReviews;
    }

    mapping(address => ServiceProviderProfile) public serviceProviders;
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");


    function registerServiceProvider(address _provider, Service[] memory _services) public onlyRole(ADMIN_ROLE) {
        ServiceProviderProfile storage profile = serviceProviders[_provider];
        profile.provider = _provider;
        profile.timeJoined = block.timestamp;
        profile.totalUsers = 0;

        for (uint i = 0; i < _services.length; i++) {
            profile.services.push(_services[i]);
        }
    }

    function addReview(address _provider, string memory _comment, uint8 _rating) public {
        require(_rating >= 1 && _rating <= 5, "Invalid rating. Must be between 1 and 5.");
        ServiceProviderProfile storage profile = serviceProviders[_provider];
        profile.reviews.push(Review(msg.sender, _comment, _rating));
    }

    function addPerformanceReview(address _provider, string memory _comment, uint8 _rating) public onlyRole(ADMIN_ROLE) {
        require(_rating >= 1 && _rating <= 5, "Invalid rating. Must be between 1 and 5.");
        ServiceProviderProfile storage profile = serviceProviders[_provider];
        profile.performanceReviews.push(PerformanceReview(block.timestamp, _comment, _rating));
    }

    function incrementTotalUsers(address _provider) public onlyRole(ADMIN_ROLE) {
        ServiceProviderProfile storage profile = serviceProviders[_provider];
        profile.totalUsers += 1;
    }

    function getServiceProviderProfile(address _provider) public view returns (ServiceProviderProfile memory) {
        return serviceProviders[_provider];
    }
}
