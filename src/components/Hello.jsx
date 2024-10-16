/**
* This is a doc comment
*
* A simple component created in week 7 to demonstrate how
* React uses components as building blocks. Each component
* should return some JSX.
*
* @author James Sowerby
*/
function Hello(props) {
    return (
      <div className="container">
        <h1>Hello, {props.name}!</h1>
        <p>smol</p>
      </div>
    )
}

export default Hello