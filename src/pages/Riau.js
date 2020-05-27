import React, { memo } from "react";
import Layout from "components/layout";

const Riau = () => {
  return (
    <Layout>
      <section className="my-5 py-5">
      <h3 className="text-center text-uppercase text-color-orange mb-4">
           Provinsi Riau
        </h3>
      <p>Maaf, Lagi Perbaikan</p>
      </section>
        
      <section className="my-5 py-5"></section>
        <section className="my-5 py-5"></section>
        <section className="my-5 py-5"></section>
    </Layout>
  );
};

export default memo(Riau);
