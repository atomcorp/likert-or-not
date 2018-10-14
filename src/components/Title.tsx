import * as React from 'react';
// import css from '../index.css';

import LikertOrNot from '../index.d';

const Title = (props: LikertOrNot.TitleProps) => (
  <caption>{props.children}</caption>
);

export default Title;
