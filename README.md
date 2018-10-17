# likert-or-not

![Example image](https://github.com/atomcorp/likert-or-not/blob/master/example/public/example.png)

> React component

[![NPM](https://img.shields.io/npm/v/likert-or-not.svg)](https://www.npmjs.com/package/likert-or-not) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Matrix || Grid || Multi-item scale || Likert || Rating scale && Questionnaire || Survey

The aim is to provide a simple matrix questionnire component for React.

It should be simple, responsive, accessible and easily extensible.

_Work in progress_

Install:

```
npm i -D likert-or-not
```

My references/see also

- https://en.wikipedia.org/wiki/Questionnaire_construction
- https://www.surveymonkey.com/curiosity/whats-best-way-design-matrix-question/
- https://github.com/rage/likert-react

## Usage

```tsx
import * as React from 'react';

import LikertOrNot from 'likert-or-not';

class Example extends React.Component {
  render() {
    return (
      <LikertOrNot
        title="The title"
        headers={['Good', 'OK', 'Bad']}
        values={['A', 'B', 'C']}
        rows={[
          {
            label: 'This goes on the left',
            id: 'firstRow',
            value: 'A',
          },
        ]}
        handleClick={(e, {id, value}) => ({})}
      />
    );
  }
}
```

## Built with Create-React-Library

https://github.com/transitive-bullshit/create-react-library

## License

MIT © [atomcorp](https://github.com/atomcorp)
