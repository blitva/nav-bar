import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import icons from './icons/icons.png';
import icons2x from './icons/icons2x.png';
import flag from './icons/flag_icons.png';

const NavBarStyle = styled.div`
  margin: 0!important
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-wrap: nowrap;
  min-width: 1000px;
  position: static;
  z-index: 198;
`;

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
  width: 100%;
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

const NavFill = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  float: none;
  height: 60px;
  line-height: 12px;
  position: static;
  padding: 10px 4px;
  margin: 0px 6px;
`;

const NavInput = styled.input`
  border: none;
  border-top: 1px solid;
  border-top-color: transparent;
  top: 5px;
  height: 37px;
  background: #fff;
  flex-basis: 0px;
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 14px;
  position: static;
  white-space: nowrap;
  width: auto;
  display: flex;
  font-size: 15px;
  text-indent: 8px;
`;

const NavSearchCard = styled.div`
  background-color: #f3f3f3;
  background-size: 350px;
  height: 38px;
  width: 45px;
  padding-left: 5px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #cdcdcd;
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;
`;

const NavSearchSpan = styled.span`
  line-height: 33px;
  font-color: #555;
  font-size: 13px;
`;

const SearchIconContainer = styled.div`
  background-color: #febd69;
  background-size: 350px;
  height: 40px;
  width: 45px;
  border-radius: 0 4px 4px 0;
`;

const SearchIcon = styled.span`
  background-image: url(${icons2x});
  background-position-x: 2px;
  background-position-y: -280px;
  background-size: 350px;
  display: flex;
  height: 40px;
  width: 45px;
`;

const NavRight = styled.div`
  box-sizing: border-box;
  float: none;
  display: flex;
  font-size: 14px;
  height: 60px;
  line-height: 12px;
  min-width: auto;
  position: static;
  width: 373px;
  align-items: center;
`;

const NavToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 45px;
`;

const NavTools = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 9px 5px 9px;
  height: 50px;
  flex-direction: row;
  cursor: pointer;
`;

const NavFlag = styled.span`
  margin: 0 2px 1px 0;
  display: flex;
  float: none;
  position;: static;
  background-image: url(${flag});
  background-position-x: 0px;
  background-position-y: -130px;
  background-size: 142px 295px;
  height: 18px;
  width: 24px;
`;

const ArrowIcon = styled.span`
  background-image: url(${icons});
  background-position-x: 0px;
  background-position-y: 1000px;
  height: 4px;
  margin: 6px 0 0 2px;
  position: static;
  float: none;
  padding: 0;
  border-style: solid;
  border-width: 4px 4px 0 4px;
  align-items: center;
  border-top: 4px solid #a7acb2;
  line-height: 0;
  margin: 6px 0 0 2px;
`;

const NavSignIn = styled.div`
  align-items: flex-start;
  color: #d6d6d6;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  padding: 10px 9px 10px 9px;
  justify-content: center;
`;

const NavLine1 = styled.span`
  display: flex;
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  font-weight: 400;
`;

const NavLine2 = styled.span`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  width: 120px;
  line-height: 15px;
  white-space: nowrap;
`;

const NavLine3 = styled(NavLine2)`
  padding-top: 15px;
`;

const NavReturns = styled(NavSignIn)`
  width: 60px;
`;

const NavCart = styled(NavSignIn)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  line-height: 44px;
  padding-bottom: 17px;
`;

const NavCartCount = styled.span`
  position: relative;
  right: auto;
  left: 4px;
  top: 15px;
  line-height: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #f08804;
  font-size: 16px;
  font-weight: 700;
`;

const CartIcon = styled.span`
  background-image: url(${icons});
  background-position-x: -10px;
  background-position-y: -340px;
  height: 26px;
  width: 38px;
  position: static;
  background-size: 350px;
  cursor: pointer;
  display: flex;
`;

const NavBarMain = styled.div`
  background-color: rgb(35, 47, 62);
  background-image: none;
  background-position-x: 0px;
  background-position-y: -725px;
  background-size: 350px;
  color: rgb(15, 17, 17);
  display: flex;
  font-size: 12px;
  height: 39px;
  line-height: 12px;
  padding-left: 11px;
  padding-top: 0px;
  position: static;
  z-index: 4;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: row;
  flex-wrap: wrap;
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
  display: flex;
  font-size: 14px;
  height: 50px;
  line-height: 32px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-size-adjust: 100%;
  min-width: 1000px;
  padding-top: 9px;
  white-space: nowrap;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SubNavItem = styled.span`
  font-size: 16px;
  text-align: center;
  padding: 0px 10px;
  white-space: nowrap;
`;

const SubNavMain = styled(SubNavItem)`
  font-weight: 700;
  padding: 0 16px 0 20px;
`;

const navBarMainItems = ['Customer Service', 'Best Sellers', 'Gift Cards', 'Browsing History', ' Prime Video', 'Your Amazon.com', 'Find a Gift', 'Today\'s Deals', 'Prime', 'Buy Again', 'Fresh', 'Whole Foods', 'Kindle Books', 'New Releases', 'Subscribe & Save', 'Books', 'Amazon Home', 'Pharmacy', 'Coupons', 'Computers', 'Fashion', 'Sell', 'Toys & Games', 'Beauty & Personal Care', ' Video Games', ' Home Improvement', 'Amazon Basics', 'Smart Home', ' Automotive', 'Handmade'];

const subNavMenuItems = ['Echo & Alexa', 'Fire Tablets', 'Fire TV', 'Kindle', 'Home Security', 'Smart Home', 'Halo Health', 'Day 1 Editions', 'Pre-Owned', 'Device Deals', 'Accessories', 'Device Support', 'Manage Your Content and Devices'];

const NavBar = () => {
  return (
    <NavBarStyle>
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

          <NavFill>
            <NavSearchCard>
              <NavSearchSpan>
                All
              </NavSearchSpan>
            </NavSearchCard>
            <NavInput/>
            <SearchIconContainer>
              <SearchIcon/>
            </SearchIconContainer>
          </NavFill>
          <NavRight>
            <NavToolContainer>
              <NavTools>
                <NavFlag/>
                <ArrowIcon/>
              </NavTools>
            </NavToolContainer>

            <NavSignIn>
              <NavLine1>
                <div>
                  Hello, Sign in
                </div>
              </NavLine1>
              <NavLine2>Account & Lists</NavLine2>
            </NavSignIn>

            <NavReturns>
              <NavLine1>Returns</NavLine1>
              <NavLine2>& Orders</NavLine2>
            </NavReturns>

            <NavCart>
              <div>
                <NavCartContainer>
                  <NavCartCount>0</NavCartCount>
                  <CartIcon/>
                </NavCartContainer>
              </div>
              <NavLine3>Cart</NavLine3>
            </NavCart>

          </NavRight>
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
    </NavBarStyle>
  )
}

export default NavBar;