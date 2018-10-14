# likert-or-not

> React component

[![NPM](https://img.shields.io/npm/v/likert-or-not.svg)](https://www.npmjs.com/package/likert-or-not) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save likert-or-not
```

## Matrix || Grid || Multi-item scale || Likert || Rating scale && Questionnaire || Survey

The aim is to provide a simple matrix questionnire component for React.

It should be simple, responsive, accessible and easily extensible.

_Work in progress_

Install:

```
npm -i likert-or-not
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
        labels={['Good', 'OK', 'Bad']}
        rows={[
          {
            statement: 'This is a question, how do you feel about it?',
          },
        ]}
        handleClick={this.handleClick}
      />
    );
  }
}
```

## License

MIT © [atomcorp](https://github.com/atomcorp)
