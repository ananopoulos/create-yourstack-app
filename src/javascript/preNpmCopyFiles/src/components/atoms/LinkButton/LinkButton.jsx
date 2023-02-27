import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function LinkButton(props) {
  return (
    <>
      {props.href ? (
        <Link href={props.href} prefetch={false}>
          {props.label}
        </Link>
      ) : (
        <p></p>
      )}
    </>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
