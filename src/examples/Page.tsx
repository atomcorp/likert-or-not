import * as React from 'react';
import Matrix from '../lib';
import {specifyValuesDataset, defaultValuesDataset} from './dataset';

export interface Dataset {
  id: string;
  statement: string;
  value?: number | string;
}

const Page = () => (
  <div>
    <h1>Page</h1>
    <div>
      <Example
        key={2}
        dataset={specifyValuesDataset}
        labels={['Good', 'OK', 'Bad']}
        values={['A', 'B', 'C']}
      />
      <Example
        key={1}
        dataset={defaultValuesDataset}
        labels={['Money', 'Time', 'Skill-']}
      />
    </div>
  </div>
);

interface ExampleState {
  dataset: Dataset[];
}

interface ExampleProps {
  dataset: Dataset[];
  labels: string[];
  values?: string[] | number[];
}

class Example extends React.Component<ExampleProps, ExampleState> {
  state: ExampleState;
  constructor(props: ExampleProps) {
    super(props);
    this.state = {
      dataset: this.props.dataset,
    };
  }
  handleClick = (
    e: React.SyntheticEvent,
    props: {id: string; value: number}
  ) => {
    /* tslint:disable */
    this.setState((prevState: ExampleState) => ({
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
        <h3>
          Possible values:{' '}
          {this.props.values
            ? this.props.values.join(', ')
            : Array.from(Array(this.props.labels.length).keys()).join(', ')}
        </h3>
        <table>
          <tbody>
            {this.state.dataset.map((row) => (
              <tr key={row.id}>
                <td>{row.statement}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.props.values ? (
          <Matrix
            title="The title"
            labels={this.props.labels}
            values={this.props.values}
            rows={this.state.dataset}
            handleClick={this.handleClick}
          />
        ) : (
          <Matrix
            title="The title"
            labels={this.props.labels}
            rows={this.state.dataset}
            handleClick={this.handleClick}
          />
        )}

        <figure>
          <div className="example">
            <pre>
              {`
          const dataset = [
              ${this.props.dataset.map(
                (set) => `
                {
                  id: '${set.id}',
                  statement: '${set.statement}',
                  ${set.value ? `value: ${set.value}` : '(no value given)'}
                },
              `
              )}
            ];
          `}
            </pre>
            <pre>
              {`
            <Matrix
              title="The title"
              labels={${this.props.labels.join(', ')}}
              ${
                this.props.values
                  ? `values={${this.props.values.join(', ')}}`
                  : ''
              }
              rows={this.state.dataset}
              handleClick={this.handleClick}
            />
          `}
            </pre>
          </div>
          <figcaption>Examples</figcaption>
        </figure>
      </div>
    );
  }
}

export default Page;
