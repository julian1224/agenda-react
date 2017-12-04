import React from 'react';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
            isOpen : false,
            selectedItem : { label : "--" },
            items : [
                { label : '8 MILLION STORIES', value : 0 },
                { label : 'BREAK LOOSE', value : 1 },
                { label : 'EL MAÑANA', value : 2 },
                { label : 'GO', value : 3 },
                { label : 'AND', value : 4 },
                { label : 'dye', value : 5 }
=======
            isOpen: false,
            selectedItem: { label: "--" },
            items: [
                { label: 'react', value: 0 },
                { label: 'angular', value: 1 },
                { label: 'ember', value: 2 },
                { label: 'element4', value: 3 },
                { label: 'element5', value: 4 },
                { label: this.props.label, value: this.props.value }
>>>>>>> refs/remotes/Joshuavtk/master
            ]
        };
    }

    selectItem(item) {
        console.log('We switchen naar:', item.label);
        this.setState({
<<<<<<< HEAD
                          selectedItem : item,
                          isOpen : false
                      });
=======
            selectedItem: item,
            isOpen: false
        });
>>>>>>> refs/remotes/Joshuavtk/master
    }

    toggleOpen() {
        this.setState({
<<<<<<< HEAD
                          isOpen : !this.state.isOpen
                      });
    }

    renderOptionsWhenOpen() {
        if ( !this.state.isOpen ){
=======
            isOpen: !this.state.isOpen
        });
    }

    renderOptionsWhenOpen() {
        if (!this.state.isOpen) {
>>>>>>> refs/remotes/Joshuavtk/master
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
<<<<<<< HEAD
export default Dropdown;
=======
export default Dropdown;
>>>>>>> refs/remotes/Joshuavtk/master
