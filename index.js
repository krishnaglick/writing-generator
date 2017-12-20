
const names = require('./names');
const roles = require('./roles');
const actions = require('./actions');
const results = require('./results');


function generateOutput() {
  const name = names[Math.floor(Math.random() * names.length)];
  const [article, role] = roles[Math.floor(Math.random() * roles.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const result = results[Math.floor(Math.random() * results.length)];
  return `${name}, ${article} ${role}, must ${action} ${result}`;
}

if(typeof document !== 'undefined' && typeof container !== 'undefined') {
  container.innerHTML = `<div>${generateOutput()}</div>`;
  window.addLine = () => {
    const line = generateOutput();
    container.innerHTML += `<div>${line}</div>`;
  };
}
else
  console.log(generateOutput());
