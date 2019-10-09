import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateCertificate } from "../../reducers/certificate";

class PublicViewer extends Component {
  componentDidMount() {
    const { updateCertificate, cert } = this.props
    updateCertificate(cert);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (<div></div>);
  }
}

const mapDispatchToProps = dispatch => ({
  updateCertificate: payload => dispatch(updateCertificate(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(PublicViewer);

PublicViewer.propTypes = {
  updateCertificate: PropTypes.func
};
