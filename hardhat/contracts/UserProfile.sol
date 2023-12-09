// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract UserRegistration is AccessControl {
    struct User {
        string username;
        bool isRegistered;
    }

    mapping(address => User) public users;
    mapping(string => bool) private usernameExists;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    uint256 public constant MAX_USERNAME_LENGTH = 20;

    event UserRegistered(address userAddress, string username);
    event UserUpdated(address userAddress, string oldUsername, string newUsername);
    event UserDeregistered(address userAddress, string username);


    function register(string memory _username) public {
        require(bytes(_username).length > 0 && bytes(_username).length <= MAX_USERNAME_LENGTH, "Invalid username length");
        require(!users[msg.sender].isRegistered, "User already registered");
        require(!usernameExists[_username], "Username already taken");

        users[msg.sender] = User(_username, true);
        usernameExists[_username] = true;

        emit UserRegistered(msg.sender, _username);
    }

    function updateUser(string memory _newUsername) public {
        require(users[msg.sender].isRegistered, "User not registered");
        require(bytes(_newUsername).length > 0 && bytes(_newUsername).length <= MAX_USERNAME_LENGTH, "Invalid username length");
        require(!usernameExists[_newUsername], "Username already taken");

        string memory oldUsername = users[msg.sender].username;
        usernameExists[oldUsername] = false;
        users[msg.sender].username = _newUsername;
        usernameExists[_newUsername] = true;

        emit UserUpdated(msg.sender, oldUsername, _newUsername);
    }

    function deregister() public {
        require(users[msg.sender].isRegistered, "User not registered");

        string memory username = users[msg.sender].username;
        usernameExists[username] = false;
        users[msg.sender].isRegistered = false;

        emit UserDeregistered(msg.sender, username);
    }

    function isUserRegistered(address userAddress) public view returns (bool) {
        return users[userAddress].isRegistered;
    }

    function getUsername(address userAddress) public view returns (string memory) {
        require(users[userAddress].isRegistered, "User not registered");
        return users[userAddress].username;
    }

    function isAdmin(address userAddress) public view returns (bool) {
        return hasRole(ADMIN_ROLE, userAddress);
    }

    // Admin functions
    function removeUser(address userAddress) public onlyRole(ADMIN_ROLE) {
        require(users[userAddress].isRegistered, "User not registered");

        string memory username = users[userAddress].username;
        usernameExists[username] = false;
        users[userAddress].isRegistered = false;

        emit UserDeregistered(userAddress, username);
    }
}
