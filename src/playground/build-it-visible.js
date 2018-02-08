console.log('App.js is running!');

const app = {
  title: 'Visibility Toggle',
  options: []
};

const toggleButton = document.getElementById('toggle-button');

let state = true;

const toggle = (state) => {
  state = !state;
  console.log(state, "state2");
};

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button id="toggle-button" onClick={toggle}>{state===true ? "Show Details" : "Hide Details"}</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderOptions();