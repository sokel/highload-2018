pragma solidity ^0.4.23;

contract Registry{
    mapping(string => string) r;
    
    event Record(string key, string value);

    function Write(string _key, string _value) public {
        r[_key] = _value;
    }

    function Read(string _key) public view returns(string) {
        return r[_key];
    }
}