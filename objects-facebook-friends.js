let facebookProfile = {
  name: "Rafael",
  friends: 1234,
  messages: ["Hello, friends!", "What's up today?", "#TBT"],

  postMessage: function (message) {
      facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
      facebookProfile.messages.splice(index, 1);
    },
    addFriend: function() {
      facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function () {
      facebookProfile.friends = facebookProfile.friends - 1;
    },
  };


console.log(facebookProfile.postMessage("Added message"));
console.log(facebookProfile.messages);

