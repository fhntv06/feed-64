import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { ScrollIntoView } from '../../../helpers/scrollIntoView/scrollIntoView';

function Link ({ href, className, children }) {
  const defaultTypeLink = href[0] !== '#';
  return (
    defaultTypeLink
      ? <RouterLink to={href} className={className}>{children}</RouterLink>
      : <a href={`${href}`} onClick={(event) => ScrollIntoView(event)}>{children}</a>
  );
}

export default Link;