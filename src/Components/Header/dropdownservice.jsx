import React from 'react';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={this.toggleDropdown}>
          Toggle Dropdown
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DropdownMenu;