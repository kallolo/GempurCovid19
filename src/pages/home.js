import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import DataGlobal from "blocks/data/global";
import DataIndonesia from "blocks/data/indonesia";
import DataProvince from "blocks/data/province";
import Layout from "components/layout";

const Home = () => {
  return (
    <Layout>
      <section className="my-5 py-5">
        <Alert variant="info">
          Selamat datang! <strong>di website GEMPUR COVID-19</strong> adalah salah satu dari
          sekian banyak website penyedia info perkembangan virus corona. Info
          selengkapnya, baca{" "}
          <Link to="about" className="alert-link">
            tentang Covid19
          </Link>
          .
        </Alert>
      </section>
      <section className="my-5 py-5">
        <DataIndonesia />
      </section>
      {/* <section className="my-5 py-5">
        <DataProvince />
      </section>
      <section className="my-5 py-5">
        <DataGlobal />
      </section> */}
    </Layout>
  );
};

export default memo(Home);
