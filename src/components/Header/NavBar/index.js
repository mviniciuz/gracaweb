import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button, MenuItems } from './styles';

function NavBar({ itemsMenu, setShow }) {

  function handleVisible() {
    setShow(false);
  }

  return (
    <Container>
      {
        itemsMenu.map(item => (
          item !== 'logo' ?
            <MenuItems>
              <button type="button" onClick={handleVisible}>
                <Link to={item === "Home" ? "/" : item}>
                  <strong>{item}</strong>
                </Link>
              </button>
            </MenuItems> : null
        ))
      }
    </Container>
  );
}

export default NavBar;
