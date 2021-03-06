import React from 'react';
import styled from 'styled-components';
import SpotifyIcon from '../common/SpotifyIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subtext = styled.div`
  margin-bottom: 2rem;
`;

const LoginButton = styled.a`
  background-color: #1db954;
  color: white;
  padding: 12px 8px;
  min-width: 175px;
  border-radius: 100px;
  border: 1px solid transparent;
  letter-spacing: 2px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #04a03b;
  }
`;

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <Wrapper>
            <SpotifyIcon />
            <Title>Spotify Overview</Title>
            <Subtext>See an overview of your Spotify listening habits</Subtext>
            <LoginButton href="/auth/login">CONNECT</LoginButton>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

export default Login;
