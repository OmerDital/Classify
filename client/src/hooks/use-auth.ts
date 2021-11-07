import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState({ user: 'omer' });

  return user;
};

export default useAuth;
