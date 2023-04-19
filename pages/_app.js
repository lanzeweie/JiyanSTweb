import React from "react";
import App from "next/app";
import { appWithTranslation } from "../i18n";
import Head from "next/head";
import "../styles/global.css";
import "../styles/reset.css";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>
            机研社团-一个热爱探索的大家庭
          </title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
