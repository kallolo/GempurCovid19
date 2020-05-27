import React, { memo } from "react";
import Layout from "components/layout";
import Iframe from 'react-iframe';

const Inhil = () => {
  return (
    <Layout>
       <section className="my-5 py-5">
      <h3 className="text-center text-uppercase text-color-orange mb-4">
      Kabupaten Indragiri Hilir
        </h3>
      </section>
      <Iframe url="https://datastudio.google.com/embed/reporting/1KYOwxVDdNgF6we4prF2id-3TGo2mVgKJ/page/58MJB"
        width="100%"
        height="500px"
        id="myId"
        className="embed-responsive-item"
        display="initial"
        position="relative"
        allowfullscreen/>
      {/* <iframe ref="iframe" width={'100%'} height={'100%'} src="https://datastudio.google.com/embed/reporting/1KYOwxVDdNgF6we4prF2id-3TGo2mVgKJ/page/58MJB" frameborder="0" style="border:0" allowfullscreen></iframe> */}
    </Layout>
  );
};

export default memo(Inhil);
