import React from "react";
import PropTypes from "prop-types";

export default function LinkButtonRow({ children }) {
  return (
    <div className="container mx-auto px-6 py-2 flex justify-between items-center h-10 mb-4">
      {children}
    </div>
  );
}

LinkButtonRow.propTypes = {
  children: PropTypes.node.isRequired,
};
