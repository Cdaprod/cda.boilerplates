class BareDiv {
  constructor(className, content) {
    this.className = className;
    this.content = content;
  }

  render() {
    const div = document.createElement('div');
    div.className = this.className;
    div.textContent = this.content;
    return div;
  }
}

const bareDiv = new BareDiv('bg-blue-200 p-4', 'Hello, World!');

const container = document.querySelector('#container');
container.appendChild(bareDiv.render());
