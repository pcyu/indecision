module.exports = {
  'Demo test for Random Tabata' : function (client) {
    client
      .url('https://random-tabata.herokuapp.com/')
      .assert.title('Random Tabata')
      .pause(5000)
      .end();
  }
};