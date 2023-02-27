import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function PostCard(props) {
  return (
    <div data-testid={props.href}>
      <Link
        href={props.href}
        prefetch={false}
        className="relative flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h2>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs absolute bottom-0 right-0 pr-2">
            {props.date}
          </p>
        </div>
      </Link>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
