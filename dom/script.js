const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.classList.add('red-p')
paragraph.textContent = "Hey I'm Red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.classList.add('blue-h3')
h3.textContent = "I'm a blue h3!";

const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-div');
pinkDiv.style.backgroundColor = 'red'
pinkDiv.style.cssText = ('background-color: pink;width: 250px; height: 250px; border: 1px solid black;')

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
h1.style.color = "yellow";

const paragraphOfDiv = document.createElement('p');
paragraphOfDiv.style.color = 'purple';
paragraphOfDiv.textContent = 'ME TOO!';


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(h3);
container.appendChild(pinkDiv);
pinkDiv.appendChild(h1);
pinkDiv.appendChild(paragraphOfDiv);
