'use strict';

console.log('App.js is running!');

var app = {
  title: 'Visibility Toggle',
  options: []
};

var toggleButton = document.getElementById('toggle-button');

var state = true;

var toggle = function toggle(state) {
  state = !state;
  console.log(state, "state2");
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
      state === true ? "Show Details" : "Hide Details"
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderOptions();
