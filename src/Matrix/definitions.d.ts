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
  handleClick: HandleClick;
  values?: string[] | number[];
}

export interface TitleProps {
  children: string;
}

export interface HeaderProps {
  // labels: string[];
  children: React.ReactNode;
}

export interface RowsProps {
  // statements: RowsType;
  // options: number;
  // handleClick: (props: ClickProps) => void;
  // values?: string[] | number[];
  children: React.ReactNode;
}

export interface DomRowType {
  statement: RowType;
  options: number;
  handleClick: HandleClick;
  values?: string[] | number[];
}

export interface IsCheckProps {
  value: string | number;
  values?: string[] | number[];
  index: number;
}

export interface ReturnValueProps {
  index: number;
  values?: string[] | number[];
}

export interface Radio {
  name: string;
  value: number | string;
  checked: boolean;
  handleClick: HandleClick;
  // values: string[] | number[];
}

export type HandleClick = (e: React.SyntheticEvent, props: ClickProps) => void;
