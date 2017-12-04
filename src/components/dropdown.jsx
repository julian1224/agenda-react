import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            isOpen : false,
            selectedItem : { label : "--" },
            items : [
                { label : '8 MILLION STORIES', value : 0 },
                { label : 'BREAK LOOSE', value : 1 },
                { label : 'EL MAÑANA', value : 2 },
                { label : 'GO', value : 3 },
                { label : 'AND', value : 4 },
                { label : 'dye', value : 5 }
            ]
        };
    }

    selectItem(item) {
        console.log('We switchen naar:', item.label);
        this.setState({
                          selectedItem : item,
                          isOpen : false
                      });
    }

    toggleOpen() {
        this.setState({

                          isOpen : !this.state.isOpen
                      });
    }

    renderOptionsWhenOpen() {
        if ( !this.state.isOpen ){
            return;
        }

        return (
            <div className="dropdown__options">
                {this.state.items.map((item, i) => (
                    <div
                        key={i}
                        className="dropdown__option"
                        onClick={e => this.selectItem(item)}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className="dropdown">
                <div
                    className="dropdown__header"
                    onClick={e => this.toggleOpen()}
                >
                    {this.state.selectedItem.label}
                </div>
                {this.renderOptionsWhenOpen()}
            </div>
        );
    }

}
export default Dropdown;
