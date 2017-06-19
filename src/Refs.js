/**
 * Created by kovel on 16.06.17.
 */
import React, {Component} from 'react';

class Refs extends Component {
    submit(){
        console.log('submit', this.testInput.value);
    }

    render(){
        return (
            <div>
                <input
                    type="text"
                    placeholder="test"
                    ref={(input) => this.testInput = input}
                />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        );
    }
}


export default Refs;