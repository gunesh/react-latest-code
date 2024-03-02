import * as React from 'react';
import { Component } from 'react';
import { loginUser } from '../store/actions/Login'
import {
  Connector,
  Dispatch,
  bindActionCreators,
  AppState
} from '../utility';
import { WithAuthorization } from '../utility/WithAuthorization';

interface IUserLoginProps extends ILinkStateToProps, ILinkDispatchToProps {
  UserLogin: any;
  history: any;
  location: any;
}

interface IUserLoginState { }

export class UserLoginContainer extends Component<IUserLoginProps, IUserLoginState> {
  state: any = {
    list:[]
  };

  async componentDidMount() {
    // this.props.loginUser({});
  }

  componentWillUnmount(): void {
  }

  test = () => {
    this.props.loginUser({});
  }

  render(): JSX.Element {
    const { login } = this.props
    console.log(login);
    return (
      <div className='user-list-container'>
        Test want
        <ul>
          {login?.response?.data.map((obj: any) => {
            return <li>{obj.email}
            </li>
          })}
        </ul>

        <button onClick={this.test}>Test</button>
      </div>
    );
  }
}

interface ILinkStateToProps {
  login?: any;
}

interface ILinkDispatchToProps {
  loginUser: (grid: any) => void;
}

const mapStateToProps = (state: AppState): ILinkStateToProps => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = (dispatch: Dispatch): ILinkDispatchToProps => {
  return {
    loginUser: bindActionCreators(loginUser, dispatch)
  };
};

export default Connector.connect(
  mapStateToProps,
  mapDispatchToProps
)(WithAuthorization(UserLoginContainer, 'Test'));
