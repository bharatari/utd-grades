import React from 'react';
import styled from 'styled-components';
import { Row, Button } from 'antd';
import Router from 'next/router';

const Menu = styled(Row)`
  padding: 15px;
`;

const Back = styled(Button)`
  background: none;
  outline: none;
  border: none;
  display: inline-block;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
  border: none;
  box-shadow: none;
`;

const HeaderText = styled.h2`
  font-family: var(--font-family);
  text-transform: uppercase;
  text-align: center;
  color: rgb(78, 78, 78);
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 26px;
  margin-bottom: 15px;
  margin-top: -39px;
`;

const HeaderBold = styled.span`
  font-weight: 700;
`
export default function Header() {
  function goHome() {
    Router.push('/');
  }

  return (
    <Menu>
      <Back onClick={goHome} type="ghost" shape="circle" icon="home" size="large" />
      <a href="javascript:void(0)" onClick={goHome}><HeaderText><HeaderBold>UTD</HeaderBold> Grades</HeaderText></a>
    </Menu>
  );
}
