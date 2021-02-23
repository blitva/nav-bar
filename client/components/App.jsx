import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import icons from './icons/icons.png';

const NavBarTopStyle = styled.div`
  background-color: rgb(19,25,33);
  box-sizing: border-box;
  color: rgb(15, 17, 17);
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: nowrap;
  font-size: 12px;
  height: 99px;
  line-height: 12px;
  margin: 0;
  min-width: 100px;
  position: static;
  z-index: 198;
  zoom: 1;
  float: none;
`;

const NavBarBelt = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  float: none;
  font-size: 14px;
  height: 60px;
  position: static;
  text-size-adjust: 100%;
  width: 1133px;
  z-index: 5;
`;

const NavLeft = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  float: none;
  height: 60px;
  line-height: 12px;
  font-size: 14px;
  tex-size-adjust: 100%;
  position: static;
  width: 288px;
`;

const Logo = styled.span`
  background-image: url(${icons});
  background-size: 350px;
  background-position: -10px -51px;
  width: 97px;
  height: 30px;
  margin-top: 12px;
  margin-left: 11px;
  padding: 1px 8px 0px 6px;
`;

const LocationIcon = styled.div`
  background-image: url(${icons});
  background-position-x: -71px;
  background-position-y: -378px;
  background-size: 350px;
  cursor: pointer;
  height: 18px;
  width: 15px;
  margin-top: 8px;
`;

const NavLocationBlock = styled.div`
  height: 60px;
  width: 171px;
  margin-left: 2px;
  position: static;
  line-height: 12px;
  display: flex;
  float: none;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 5px;
  padding: 0px 9px;
`;

const NavLocationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin-left: 3px;
  position: static;
`;

const NavLocationText = styled.span`
  color: #ccc;
  margin-top: 0;
  font-size: 12px;
  font-weight: 400;
  height: 14px;
  line-height: 14px;
`;

const NavLocationTextBottom = styled.span`
  color: #fff;
  cursor: pointer;
  float: left;
  font-size: 14px;
  font-weight: 700;
  line-height: 15px;
  padding-bottom: 1px;
  text-decoration-thickness: auto;
  white-space: nowrap;
`;

const NavSearch = styled.div`
  padding: 10px 4px 10px 3px;
  height: 60px;
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  float: none;
  margin: 0px 18px;
  position: static;
  overflow-x: visible;
  overflow-y: visible;
  white-space: nowrap;
  width: 1080px;
  line-height: 1em;
`;

const NavForm = styled.form`
  cursor: default;
  box-sizing: border-box;
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  flex-shrink: 1;
  float: none;
  font-size: 14px;
  height: 40px;
  line-height: 12px;
  margin-bottom: 0px;
  position: static;
  white-space: nowrap;
  text-size-adjust: 100%;
`;

const NavBarMain = styled.div`
  background-color: rgb(35, 47, 62);
  background-image: none;
  background-position-x: 0px;
  background-position-y: -725px;
  background-size: 350px;
  color: rgb(15, 17, 17);
  display: flex;
  flex-wrap: nowrap;
  font-size: 12px;
  height: 39px;
  line-height: 12px;
  padding-left: 11px;
  padding-top: 0px;
  position: static;
  z-index: 4;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const NavBarMainItem = styled.span`
  font-size: 14px;
  padding: 8px 9px;
  margin-top: 5px;
  margin-bottom: 6px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-decoration-line: none;
  text-decoration-color: rgb(255, 255, 255);
  box-sizing: content-box;
  white-space: nowrap;
`;

const NavBarMainItemMain = styled(NavBarMainItem)`
  font-size: 14px;
  font-weight: 700;
`;

const HamburgerIcon = styled.i`
  background-image: url(${icons});
  background-position-x: -172px;
  background-position-y: -255px;
  background-repeat-x: repeat;
  background-repeat-y: no-repeat;
  background-size: 350px;
  width: 17px;
  height: 14px;
  cursor: pointer;
  display: flex;
  float: none;
  margin-right: 5px;
`;

const HamburgerContainer = styled.div`
  display: flex;
`;

const SubNav = styled.div`
  background-color: rgb(243, 243, 243);
  border-bottom-color: rgb(221, 221, 221);
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 14px;
  height: 50px;
  line-height: 32px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-size-adjust: 100%;
  min-width: 1000px;
  padding-top: 9px;
  white-space: nowrap;
`;

const SubNavItem = styled.span`
  font-size: 16px;
  text-align: center;
  padding: 0px 10px;
  white-space: nowrap;
`;

const SubNavMain = styled(SubNavItem)`
  font-weight: 700;
`;

const navBarMainItems = ['Customer Service', 'Best Sellers', 'Gift Cards', 'Browsing History', ' Prime Video', 'Your Amazon.com', 'Find a Gift', 'Today\'s Deals', 'Prime', 'Buy Again', 'Fresh', 'Whole Foods', 'Kindle Books', 'New Releases', 'Subscribe & Save', 'Books', 'Amazon Home', 'Pharmacy', 'Coupons', 'Computers', 'Fashion', 'Sell', 'Toys & Games', 'Beauty & Personal Care', ' Video Games', ' Home Improvement', 'Amazon Basics', 'Smart Home', ' Automotive', 'Handmade'];

const subNavMenuItems = ['Echo & Alexa', 'Fire Tablets', 'Fire TV', 'Kindle', 'Home Security', 'Smart Home', 'Halo Health', 'Day 1 Editions', 'Pre-Owned', 'Device Deals', 'Accessories', 'Device Support', 'Manage Your Content and Devices'];

const NavBar = () => {

  return (
    <>
      <NavBarTopStyle>
        <NavBarBelt>
          <NavLeft>
            <Logo/>
            <NavLocationBlock>
              <LocationIcon/>
              <NavLocationTextWrapper>
                <NavLocationText>Hello</NavLocationText>
                <NavLocationTextBottom>Select your address</NavLocationTextBottom>
              </NavLocationTextWrapper>
            </NavLocationBlock>
          </NavLeft>
          <NavSearch>
            <NavForm/>
          </NavSearch>
        </NavBarBelt>
        <NavBarMain>
          <NavBarMainItemMain>
            <HamburgerContainer>
              <HamburgerIcon/>
              All
            </HamburgerContainer>
          </NavBarMainItemMain>
          {navBarMainItems.map((item, i) => {
            return <NavBarMainItem key={i}>{item}</NavBarMainItem>
          })}
        </NavBarMain>
      </NavBarTopStyle>
      <SubNav>
        <SubNavMain>
          Amazon Devices
        </SubNavMain>
        {subNavMenuItems.map((item, i) => {
          return <SubNavItem key={i}>{item}</SubNavItem>
        })}
      </SubNav>
    </>
  )
}

export default NavBar;