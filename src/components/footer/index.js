import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <p className="mb-0 text-center">
        Sumber Data{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by <a target="_blank" href="https://kawalcorona.com/">kawalkorona.com</a>
      </p>
    </footer>
  );
};

export default memo(Footer);
