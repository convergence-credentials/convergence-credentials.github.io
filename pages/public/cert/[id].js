import React from "react";
import NextSeo from "next-seo";
import { connect } from "react-redux";
import NavigationBar from "../../../src/components/Layout/NavigationBar";
import FooterBar from "../../../src/components/Layout/FooterBar";
import PublicViewerPageContainer from "../../../src/components/PublicViewerPageContainer";

const VerifierPage = () => (
  <>
    <NavigationBar />
    <PublicViewerPageContainer />
    <FooterBar />
  </>
);

export default connect()(VerifierPage);
