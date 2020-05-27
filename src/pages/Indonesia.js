import React, { memo } from "react";
import DataIndonesia from "blocks/data/indonesia";
import DataProvince from "blocks/data/province";
import Layout from "components/layout";

const Indonesia = () => {
  return (
    <Layout>
      <section className="my-5 py-5">
        <DataIndonesia />
      </section>
      <section className="my-5 py-5">
        <DataProvince />
      </section>
    </Layout>
  );
};

export default memo(Indonesia);
