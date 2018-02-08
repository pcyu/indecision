'use strict';

console.log('App.js is running!');

var app = {
  title: 'Visibility Toggle',
  state: true
};

var toggleButton = document.getElementById('toggle-button');

var toggle = function toggle() {
  app.state = !app.state;
  renderOptions();
};

var renderOptions = function renderOptions() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { id: 'toggle-button', onClick: toggle },
      app.state === true ? "Show Details" : "Hide Details"
    ),
    app.state === false ? React.createElement(
      'p',
      null,
      'Some details here'
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderOptions();
