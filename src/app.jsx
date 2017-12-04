import React from 'react';
import Student from './components/student';
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
                <Student
                    name="Berend"
                    age="34"
                />
                <Student
                    name="Joshua"
                    age="17"
                    adress="Nieuwveen"
                />
                <Student
                    name="Link"
                    age="18"
                    adress="Amsterdam"
                />
                <Student
                    name="Soufiane"
                    age="19"
                />
                <Student
                    name="Jordi"
                    age="17?"
                />

                <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button /> <Button />
            </div>
        );
    }

}

export default App;
