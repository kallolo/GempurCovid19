import React, { memo } from "react";
import Layout from "components/layout";

const TanahMerah = () => {
  return (
    <Layout>
        <section className="my-5 py-5">
        <h3 className="text-center text-uppercase text-color-orange mb-4">
           Kecamatan Tanah Merah
        </h3>
      <p>Maaf, Lagi Perbaikan</p>
        </section>
        
        <section className="my-5 py-5"></section>
        <section className="my-5 py-5"></section>
        <section className="my-5 py-5"></section>
    </Layout>
  );
};

export default memo(TanahMerah);
