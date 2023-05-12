import { memo } from "react";

const ResultItem = ({ name, title }) => {
  return <li key={name}>{`${name}: ${title}`}</li>;
};

export default memo(ResultItem);
