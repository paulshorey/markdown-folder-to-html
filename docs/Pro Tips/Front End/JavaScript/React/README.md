# React

### Shorthand (only render method, no lifecycle):

```javascript
const Profile = props => {
    
  // validate inputs
  if (!props.someList || !props.someList.length) {
      return null;
  }
  
  // what are we rendering?
  const Items = [];
  for (let i=0; i<props.someList.length; i++) {
      Items.push(<li>{props.someList[i]}</li>);
  };
  
  // ok, lets render it
  return (<ol>{Items}</ol>);
};
```

## 
### this.state
**Set state only after render(), in componentDidUpdate() and custom methods.**, always being paranoid to avoid infinite loops.  
  
**Also,**  
Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.
```javascript
    /* do this if there's any possibility of vars changing in the meanwhile */
    this.setState((state, props)=>(
        { counter: state.counter + props.increment }
    ));
``` 
https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781

## 
### Version 17 (new and renamed lifecycle methods):
* UNSAFE_componentWillMount
* UNSAFE_componentWillRecieveProps
* UNSAFE_componentWillUpdate
* **getDerivedStateFromProps** (prevProps, prevState) {}
    * This method is going to handle what **componentWillRecieveProps** was able to do along with **componentDidUpdate**. It is static. It is called after a component is created and also called when it receives a new prop. This will be the safer alternative to **componentWillRecieveProps**.
* **getSnapshotBeforeUpdate** (prevProps, prevState) {}
    * This is going to handle what **componentWillUpdate** was able to do along with **componentDidUpdate**. This is called right before the DOM is updated. The value that is returned from **getSnapshotBeforeUpdate** is passed on to **componentDidUpdate**.
