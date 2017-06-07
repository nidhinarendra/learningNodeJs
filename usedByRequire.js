//module.exports.friendNum = function(arr){
var friendNum = function(arr){
  console.log('I have ' + arr.length + ' friends')
}

//module.exports.friendList = function(arr){
var friendList = function(arr){
  console.log('The names of the friends I have are ' + arr);
}

module.exports = {
  friendNum: friendNum,
  friendList: friendList
};

//module.exports.friendNum = friendNum;
//module.exports.friendList = friendList;
//friendList(['Abc', 'def', 'ghi', 'jkl', 'mno']);
