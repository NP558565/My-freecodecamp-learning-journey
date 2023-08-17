/**
 * Another lifecycle method is componentWillReceiveProps() which is called whenever a component is
 * receiving new props.
 *
 * This method receives the new props as an argument, which is usually written as nextProps.
 *
 * You can use this argument and compare with this.props and perform actions before the component updates.
 *
 * For example, you may call setState() locally before the update is processed.
 *
 * Another method is componentDidUpdate(), and is called immediately after a component re-renders.
 *
 * Note that rendering and mounting are considered different things in the component lifecycle.
 *
 * When a page first loads, all components are mounted and this is where methods like componentWillMount()
 * and componentDidMount() are called.
 *
 * After this, as state changes, components re-render themselves.
 *
 * The next challenge covers this in more detail.
 *
 * The child component Dialog receives message props from its parent, the Controller component.
 *
 * Write the componentWillReceiveProps() method in the Dialog component and have it log this.props and
 * nextProps to the console.
 *
 * You'll need to pass nextProps as an argument to this method and although it's possible to name
 * it anything, name it nextProps here.
 *
 * Next, add componentDidUpdate() in the Dialog component, and log a statement that says the component has updated.
 *
 * This method works similar to componentWillUpdate(), which is provided for you.
 *
 * Now click the button to change the message and watch your browser console.
 *
 * The order of the console statements show the order the methods are called.
 *
 * Note: You'll need to write the lifecycle methods as normal functions and not as arrow functions to
 * pass the tests (there is also no advantage to writing lifecycle methods as arrow functions).
 *
 */

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
      if (nextProps.value % 2 == 0) {
        return true;
      }
      return false;
     // change code above this line
  }
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};