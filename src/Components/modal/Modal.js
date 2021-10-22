import { Component } from "react";
class Modal extends Component {
  // componentDidMount {

  // }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img
            src={this.props.largeImageURL}
            alt={this.props.tags}
            width="50%"
            height="50%"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
