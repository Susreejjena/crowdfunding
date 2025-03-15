import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../api/auth';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await login(username, password);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await register(username, password, confirmPassword);
        setIsLogin(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div aria-label="Authentication Page">
      <h1 aria-label={isLogin ? 'Login' : 'Register'}>{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit} aria-label={isLogin ? 'Login Form' : 'Register Form'}>
        <label aria-label="Username Input">
          Username:
          <input type="text" value={username}aria-label="Username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label aria-label="Password Input">
          Password:
          <input type="password" value={password}aria-label="Password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {!isLogin && (
          <label aria-label="Confirm Password Input">
            Confirm Password:
            <input type="password" value={confirmPassword}aria-label="Confirm Password" onChange={(e)  => setConfirmPassword(e.target.value)} />
          </label>
        )}
        <br />
        <button type="submit" aria-label={isLogin ? 'Login Button' : 'Register Button'}>{isLogin ? 'Login' : 'Register'}</button>
        <p aria-label={isLogin ? 'Login Toggle' : 'Register Toggle'}>
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <button type="button" onClick={handleToggle} aria-label={isLogin ? 'Register Button' : 'Login Button'}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;