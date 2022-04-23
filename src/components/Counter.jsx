import React, { Component } from 'react'

import './../Style.css'
import './counter.css'


class Counter extends Component {
    
    mystate = {
        myCount: 310,
        name: 'Hello world'
    };
    
    incButtonClicked = (e)=> {                      // arrow fun is must if you don't want to initalize the constructor and bind
        
        
        this.setState({myCount: this.inc()})                      // argument is must for setting the state, without setState, the browser will not update the fields
        alert(e.out)

    }
    
    inc()
    {
        // var {count} = this.mystate.myCount
        
        this.mystate.myCount += 1

        return this.mystate.myCount
        // alert('inc is called')
    }
    render() {


        return (

            <body className='counter-body'>
                <h1>This is Counter Component</h1>
                <h1>How are You Aamir</h1>
                <div className='buttonArea'>
                    {/* <button onClick={this.incButtonClicked}>Increment</button>              Event handling, handler = incButtonClicked */}
                    <button onClick={()=>this.incButtonClicked({out:'Thanks aamir'})}>Increment</button>              {/* for sending arguments*/}
                    
                    {/* <button >Increment</button> */}

                    <span id='incr'>{this.mystate.myCount}</span>

                    
                    {/* <textarea id='inc-output' style={{'paddingBottom':'2%'}} > 23  </textarea> */}
                </div>

            </body>
        )
    }

    


}

export default Counter