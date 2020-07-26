
const  main = document.getElementById('main');
main.remove ()

let newHeader = document.createElement('H1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'Ola is the champion'
