import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        console.log("req withErrorHandler", req);
        this.setState({ error: null });
        return req;
      });

      axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error })
      );
    }

    errorConfirmedError = () => this.setState({ error: null });

    render() {
      console.log("this.staet", this.state);
      const { error } = this.state;
      return (
        <Aux>
          <Modal closeModal={this.errorConfirmedError} showModal={error}>
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
