import React, { memo } from "react";
import DataGlobal from "blocks/data/global";
import Layout from "components/layout";

const Dunia = () => {
  return (
    <Layout>
      <section className="my-5 py-5">
        <DataGlobal />
      </section>
    </Layout>
  );
};

export default memo(Dunia);
