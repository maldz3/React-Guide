import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    if (this.state.hasError) {
      return <hi>this.this.state..errorMessage</hi>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
