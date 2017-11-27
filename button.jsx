import React from 'react';

class Button extends React.Component {

    constructor() {
        super();

        this.state = {
            clickCount : 0
        }
    }

    youClickedMe() {
        const newClickCount = this.state.clickCount + 1;
        this.setState({
                          clickCount : newClickCount
                      });
        console.log("hoe vaak heb je mij geraakt:", newClickCount);
    }

    render() {
        const styles = {
            top : Math.random() * 500,
            left : Math.random() * 500
        };

        return (
            <div
                className="button"
                style={styles}
                onClick={e => this.youClickedMe()}
            >
                klik mij
            </div>
        );
    }

}
export default Button;