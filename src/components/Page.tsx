import * as React from 'react';
import Matrix from '../Matrix/Matrix';
import dataset from './dataset';

interface Dataset {
  id: string;
  statement: string;
  value: number | string;
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
      <div>
        <h3>Possible values: {['A', 'B', 'C'].join(', ')}</h3>
        <table>
          <tbody>
            {this.state.dataset.map((row) => (
              <tr>
                <td>{row.statement}</td> <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Matrix
          title="The title"
          labels={['Good', 'OK', 'Bad']}
          values={['A', 'B', 'C']}
          rows={this.state.dataset}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Page;
