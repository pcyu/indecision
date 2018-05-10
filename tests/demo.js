module.exports = {
  'Demo test for Random Tabata' : function (client) {
    client
      .url('https://random-tabata.herokuapp.com/')
      .waitForElementVisible('body', 1000)
      .pause(5000)
      .end();
  }
};