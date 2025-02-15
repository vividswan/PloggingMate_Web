import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import "../scss/Navbar.scss";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

function Navbar({ history }) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.is_login);

  return (
    <>
      <NormalNav>
        <NavbarItems>
          <Link to="/" className="logo">
            <span className="home">
              <img src={require("../img/logo.png").default} alt="logo" />
              PloggingMate
            </span>
          </Link>
          <Tab>
            <Link to="/postlist" className="tab-item">
              Challenge
            </Link>
            <Link to="/Park" className="tab-item">
              Park
            </Link>
            {isLogin ? (
              <Link
                to="/"
                className="tab-item"
                onClick={() => {
                  if (window.confirm("로그아웃 하시겠습니까?")) {
                    dispatch(userActions.logOut());
                  }
                }}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link to="/signup" className="tab-item">
                  Sign Up
                </Link>
                <Link to="/login" className="tab-item">
                  Login
                </Link>
              </>
            )}
          </Tab>
        </NavbarItems>
      </NormalNav>
    </>
  );
}

const NormalNav = styled.nav`
  z-index: 9;
  position: fixed;
  top: 0;
  font-family: inherit;
  font-weight: 700;
  padding: 20px 0;
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid white;
  &::after {
    content: "";
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 1px;
    width: 100%;
    background-color: #d3d3d3;
  }
`;

const NavbarItems = styled.div`
  margin-bottom: 6.5px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between; ;
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default withRouter(Navbar);
