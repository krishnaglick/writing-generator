
const names = require('./names');
const roles = require('./roles');
const actions = require('./actions');
const results = require('./results');


function generateOutput() {
  console.log('called');
  const name = names[Math.floor(Math.random() * names.length)];
  const [article, role] = roles[Math.floor(Math.random() * roles.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const result = results[Math.floor(Math.random() * results.length)];
  return `${name}, ${article} ${role}, must ${action} ${result}`;
}

if(document)
  container.innerHTML = `<div>${generateOutput()}</div>`;
else
  console.log(generateOutput());

window.addLine = () => {
  const line = generateOutput();
  container.innerHTML += `<div>${line}</div>`;
};
