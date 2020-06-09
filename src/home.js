import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = this.props;
    return (
      <div className="Home">
        <h1>Hello</h1>
        <h2>{state.content}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content
});

export default connect(mapStateToProps)(Home);
