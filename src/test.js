import React, {Component} from 'react';

class Test extends Component {
    render(){
        function foo(x, y, z) {}
        const args = [1,2,3];
        foo.apply(null, args);
        foo(...args);
        console.log(foo.apply(null, args));
        console.log(foo);
        return(
            <div>
                222
            </div>
        )
    }
}

export default Test