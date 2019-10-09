import React from "react";
import { connect } from "react-redux";
import PublicViewer from "../../../src/components/HomePageContent/PublicViewer";
import fetch from 'isomorphic-unfetch'
const API_URL = 'http://localhost:3002/public/cert'

const PublicCertViewer = props => (
  <>
    <PublicViewer cert={props.cert}/>
  </>
);

PublicCertViewer.getInitialProps = async ({ req, res }) => {
  const id = window.location.href.split('/public/cert/')[1]
  const certString = await fetch(`${API_URL}/${id}`)
  const cert = JSON.parse((await certString.json()).cert)
  return { cert }
}


export default connect()(PublicCertViewer);
