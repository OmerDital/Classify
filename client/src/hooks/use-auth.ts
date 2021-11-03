import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState({ user: undefined });

  return user;
};

export default useAuth;
