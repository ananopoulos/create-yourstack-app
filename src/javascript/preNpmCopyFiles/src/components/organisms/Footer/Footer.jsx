import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="text-center bg-white p-2">
      Copyright &copy; {year} {props.company}. All rights reserved.
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};
