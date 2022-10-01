import { Button } from 'antd';
import './index.less';

const Login = () => {
  return (
    <div className={'login'}>
      <Button type="primary">
        Login
      </Button>
      <div className={'text'}>Hello World</div>
    </div>
  );
}

export default Login;
