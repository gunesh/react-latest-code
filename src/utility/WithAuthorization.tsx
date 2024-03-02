import * as React from 'react';

interface IRoleRight {
  code: string;
  name: string;
}

export const WithAuthorization = (WrappedComponent: any, key: any) => {
  return class extends React.Component<any, any> {

    render(): JSX.Element {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};
