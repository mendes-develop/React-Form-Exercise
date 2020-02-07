import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message} 
          onChange={ (e)=> this.setState({[e.target.name] : e.target.value})} />
          <p>characters left {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
