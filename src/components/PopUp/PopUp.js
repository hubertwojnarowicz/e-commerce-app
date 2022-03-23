import React, { useContext } from 'react';
import { LogOut } from 'react-feather';
import styled from 'styled-components/macro';
import { COLORS } from '../../variables';
import FirebaseContext from '../../context/firebase';
import { signOut } from 'firebase/auth';

function PopUp({ isOpen }) {
  const firebase = useContext(FirebaseContext);

  const logout = () => {
    signOut(firebase.auth);
  };

  if (!isOpen) {
    return null;
  }
  return (
    <PopUpWrapper>
      <Account>Account</Account>
      <LogOutButton type="button" onClick={logout}>
        <LogOutText>Log Out</LogOutText>
        <LogOut />
      </LogOutButton>
    </PopUpWrapper>
  );
}

export default PopUp;

const PopUpWrapper = styled.div`
  padding: 16px;
  position: absolute;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 6px;
  top: 36px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const LogOutButton = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const Account = styled.h4``;
const LogOutText = styled.span`
  color: ${COLORS.gray[300]};
`;
