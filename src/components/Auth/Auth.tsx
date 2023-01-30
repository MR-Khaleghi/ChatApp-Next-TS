import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { signIn } from 'next-auth/react';

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <div>
      Auth
      <Button onClick={() => signIn('google')}>Sign In</Button>
    </div>
  );
};

export default Auth;
