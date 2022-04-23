
import './Style.css'
function myHead(props) {
  return (
    <div>
    <h1  >{props.headingName} </h1>
    
    </div>
  )
}




function App() {
  return (
    <div className="App">
                  {/* <myHead headingName="Muhammad"/> */}

        <p className="first-paragraph" >
          This is my App.js file
        </p>
        <a
        >
        </a>
      
    </div>
  );
}

export default App;