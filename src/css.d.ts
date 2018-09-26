import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a missing property
    // WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    '--element-columns'?: number;

    // ...or allow any other property
    // [index: string]: any;
  }
}
