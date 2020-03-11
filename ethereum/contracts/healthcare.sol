pragma solidity >=0.4.22 <0.6.0;
contract healthcare {
    mapping (string => string) patient_details;
    mapping (string => string) records;
    mapping (string => string) perm;
    function register(string memory passwd,string memory uid) public   //to add user and hospital
    {
        patient_details[uid]=passwd ;
    }
    function login(string memory uid) public view returns(string memory)    //to authenticate
    {
        return patient_details[uid];
    }
    function addrecord(string memory etext, string memory uid) public     //by patirent
    {
        records[uid]=etext ;
    }
    function chkrecord(string memory uid) public view returns(string memory)   //by hospital and patient
    {
        return records[uid];
    }
    function addper(string memory permission, string memory uidhid) public    //by user
    {
        perm[uidhid]=permission;
    }
    function chkper(string memory uidhid) public view returns(string memory)   ////by hospital
    {
        return perm[uidhid];
    }
}
