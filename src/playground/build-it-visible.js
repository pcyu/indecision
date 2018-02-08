console.log('App.js is running!');

const app = {
  title: 'Visibility Toggle',
  state: true
};

const toggleButton = document.getElementById('toggle-button');

const toggle = () => {
  app.state = !app.state;
  renderOptions();
};

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button id="toggle-button" onClick={toggle}>{app.state===true ? "Show Details" : "Hide Details"}</button>
      {app.state === false ? <p>Some details here</p> : null}
    </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderOptions();