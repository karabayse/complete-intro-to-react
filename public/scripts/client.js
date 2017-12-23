const ce = React.createElement

const MyTitle = function(props) {
  // return (
  //   // null represents the particular properties or attributes
  //   // that will be passed in  -->  could also use {}
  //   ce('div', null,
  //     // 'style' interacts with the JavaScript API for DOM elements
  //     ce('h1', {style: {color: props.color}}, props.title)
  //   )
  // )

  // JSX
  const style = {color: props.color}
  return (
    <div>
      <h1 style={style}>{props.title.toUpperCase()}</h1>;
    </div>
  );
};

// MyFirstComponent is a class
// createElement creates an instance of a div
const MyFirstComponent = function() {
  return ce('div', {id: 'my-first-component'},
    ce(MyTitle, {title: 'Game of Thrones', color: 'YellowGreen'}),
    ce(MyTitle, {title: 'Stanger Things', color: 'GreenYellow'}),
    ce(MyTitle, {title: 'Rick and Morty', color: 'LimeGreen'}),
    ce(MyTitle, {title: 'Silicon Valley', color: 'Peru'}),
  )
}

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
)
