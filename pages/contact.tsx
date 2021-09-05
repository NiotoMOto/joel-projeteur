import React from "react";
import Head from "next/head";

import { Layout } from "../components/Layout";

export default function Contact() {
  return (
    <>
      <Head>
        <meta key="no-folow" name="robots" content="noindex, follow" />
      </Head>
      <Layout>
        <h1>Contact me</h1>
      </Layout>
    </>
  );
}
