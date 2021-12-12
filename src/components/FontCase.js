import React from "react";

export default function FontCase({ changeTo, children }) {
  return changeTo === "upper"
    ? children.toUpperCase()
    : changeTo === "lower"
    ? children.toLowerCase()
    : changeTo === "normal"
    ? children.substr(0, 1).toUpperCase() + children.substring(1).toLowerCase()
    : changeTo === "capital"
    ? children
        .split(" ")
        .map(
          (item) =>
            item.substr(0, 1).toUpperCase() + item.substring(1).toLowerCase()
        )
        .join(" ")
    : null;
}
