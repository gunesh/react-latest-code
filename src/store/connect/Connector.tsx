import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import store from '..';


function withRouter<ComponentProps>(Component: React.FunctionComponent<ComponentProps>) {
  function ComponentWithRouterProp(props: ComponentProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export class Connector {
  public static connect(mapstateToProps: any = null, mapDispatchToProps: any = null): any {
    return (component: any) => withRouter(connect(mapstateToProps, mapDispatchToProps)(component));
  }

  public static useSelector(reducerName: string): any {
    const storeState: any = store.getState();
    return storeState[reducerName];
  }
}
