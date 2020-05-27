import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <p className="mb-0 text-center">
        Dibuat dengan{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        Oleh <a target="_blank" href="https://gempur.kualaenok.com/">Relawan Gempur Covid-19</a>  Kecamatan Tanah Merah Kabupaten Indragiri Hilir
      </p>
    </footer>
  );
};

export default memo(Footer);
