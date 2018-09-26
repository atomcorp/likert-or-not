import * as React from 'react';
import Matrix from '../Matrix/Matrix';
import dataset from './dataset';

interface Dataset {
  id: string;
  statement: string;
  value: number;
}

const Page = () => (
  <div>
    <h1>Page</h1>
    <div>
      <Example />
    </div>
  </div>
);

interface State {
  dataset: Dataset[];
}

class Example extends React.Component<{}, State> {
  state: State;
  constructor(props: {}) {
    super(props);
    this.state = {
      dataset,
    };
  }
  handleClick = (props: {id: string; value: number}) => {
    this.setState((prevState) => ({
      dataset: prevState.dataset.map((set) => {
        if (set.id === props.id) {
          return Object.assign({}, set, {
            value: props.value,
          });
        }
        return set;
      }),
    }));
  };
  render() {
    return (
      <Matrix
        title="The title"
        labels={['Good', 'OK', 'Bad']}
        rows={this.state.dataset}
        handleClick={this.handleClick}
      />
    );
  }
}

export default Page;
