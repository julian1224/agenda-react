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
    }

    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen
                <Dropdown
                label="NIBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                value="3"
                 />
                <Day
                    name="Monday"
                    id="0"
                />
                <Day
                    name="Tuesday"
                    id="1"
                    adress="Nieuwveen"
                />
                <Day
                    name="Wednesday"
                    id="2"
                />
                <Day
                    name="Thursday"
                    id="3"
                />
                <Day
                    name="Friday"
                    id="4"
                />
                <Day
                    name="Saturday"
                    weekend="true"
                    id="5"
                />
                <Day
                    name="Sunday"
                    weekend="true"
                    id="6"
                />

                <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button />
            </div>
        );
    }

}

export default App;
