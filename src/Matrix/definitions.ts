export interface RowType {
  id: string;
  statement: string;
  value: number | string;
}

export interface ClickProps {
  id: string;
  value: number | string;
}

export type RowsType = RowType[];

export interface MatrixProps {
  children?: React.ReactNode;
  title: string;
  labels: string[];
  rows: RowsType;
  handleClick: (props: ClickProps) => void;
  values?: string[] | number[];
}

export interface TitleProps {
  children: string;
}

export interface LabelsProps {
  labels: string[];
}
