import * as React from 'react';
import LikertOrNot from 'likert-or-not';
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
        headers={['Good', 'OK', 'Bad']}
        values={['A', 'B', 'C']}
        showErrors
      />
      <Example
        key={1}
        dataset={defaultValuesDataset}
        headers={['Money', 'Time', 'Skill-']}
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
    props: {id: string, value: number}
  ) => {
    /* tslint:disable */
    this.setState((prevState: ExampleState) => ({
      dataset: prevState.dataset.map((set) => {
        let newSet = set;
        if (this.props.showErrors && 'value' in props && set.hasError) {
          newSet = Object.assign({}, newSet, {
            hasError: false,
          });
        }
        if (set.id === props.id) {
          newSet = Object.assign({}, newSet, {
            value: props.value,
          });
        }
        return newSet;
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
            : Array.from(Array(this.props.headers.length).keys()).join(', ')}
        </h3>
        <table border="1">
          <thead>
            <tr>
              <td>Label</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            {this.state.dataset.map((row) => (
              <tr key={row.id}>
                <td>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.props.values ? (
          <LikertOrNot
            title="The title"
            headers={this.props.headers}
            values={this.props.values}
            rows={this.state.dataset}
            handleClick={this.handleClick}
          />
        ) : (
          <LikertOrNot
            title="The title"
            headers={this.props.headers}
            rows={this.state.dataset}
            handleClick={this.handleClick}
          />
        )}

        <figure>
          <div className="example">
            <pre>
              {`
          const dataset = [
              ${this.state.dataset.map(
                (set) => `
                {
                  id: '${set.id}',
                  label: '${set.label}',
                  ${set.value ? `value: ${set.value}` : '(no value given)'},
                  ${'hasError' in set ? `hasError: ${set.hasError}` : ``}
                },
              `
              )}
            ];
          `}
            </pre>
            <pre>
              {`
            <LikertOrNot
              title="The title"
              labels={${this.props.headers.join(', ')}}
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
