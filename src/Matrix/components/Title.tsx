import * as React from 'react';
// import css from '../Matrix.css';

import {TitleProps} from '../definitions';

const Title = (props: TitleProps) => <caption>{props.children}</caption>;

export default Title;
