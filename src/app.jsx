import React from 'react';
import Day from './components/day';
import Button from './components/button';
import Dropdown from './components/dropdown';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        // this.
    }

    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen
                <Dropdown 
                    label="element 6"
                />
                <Day
                    name="Monday"
                />
                <Day
                    name="Tuesday"
                />
                <Day
                    name="Wednesday"
                />
                <Day
                    name="Thursday"
                />
                <Day
                    name="Friday"
                />
                <Day
                    name="Saturday"
                    weekend="true"
                />
                <Day
                    name="Sunday"
                />
                <Button
                    
                    />
            </div>
        );
    }

}

export default App;