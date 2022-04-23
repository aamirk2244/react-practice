import React, { Component } from 'react';
import Counter from './components/Counter';
class  Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            Below are the duplications 
            <Counter  /> 
            <Counter/>
            <Counter/>
            <h1>This is my footer</h1>

            
            </div>

        );
    }
}
 
export default Footer;