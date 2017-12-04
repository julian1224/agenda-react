import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Day extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="week">
                <div className="week__name">
                    {this.props.name}
                </div>
                <div className="week__delete">
                    Delete
                </div>
            </div>
        );
    }

}

export default Day;