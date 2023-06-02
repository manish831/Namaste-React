// React wala code
const head1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namaste From REact1"
);
const head2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Namaste From REact2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [head1, head2]
);
const rooot = ReactDOM.createRoot(document.getElementById("root"));
// rooot.render(head);
rooot.render(container);

const heading = document.createElement("h1");
heading.innerHTML = "Namaste React from JS";
const root = document.getElementById("root");
root.appendChild(heading);
