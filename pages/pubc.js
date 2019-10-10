import React from "react";
import { connect } from "react-redux";
import NavigationBar from "../src/components/Layout/NavigationBar";
import PublicViewer from "../src/components/HomePageContent/PublicViewer";
import fetch from 'isomorphic-unfetch'

// const API_URL = 'http://localhost:3002/public/cert'
const API_URL = 'http://169.48.26.236:3002/public/cert' // PROD - move into config...

const PublicCertViewer = props => (
  <>
    <NavigationBar />
    <PublicViewer cert={props.cert}/>
  </>
);

export default connect()(PublicCertViewer);
