import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button, MenuItems } from './styles';

function NavBar({ itemsMenu, setShow }) {
  function handleVisible() {
    setShow(false);
  }

  return (
    <Container>
      {itemsMenu.map((item) => (
        <MenuItems>
          <button type="button" onClick={handleVisible}>
            <Link
              to={
                item === 'HOME'
                  ? '/'
                  : item === 'QUEM SOMOS'
                    ? '/about'
                    : item === 'CONTATO'
                      ? '/contact'
                      : item === 'NOSSA EQUIPE'
                        ? '/team'
                        : item === 'AREAS DE ATUAÇÃO'
                          ? '/area'
                          : item === 'NOSSOS PRINCÍPIOS'
                            ? '/principle'
                            : item === 'INFORMATIVOS'
                              ? '/info'
                              : item === 'RESPONSABILIDADE SOCIAL'
                                ? '/social'
                                : item
              }
            >
              <strong>{item}</strong>
            </Link>
          </button>
        </MenuItems>
      ))}
    </Container>
  );
}

export default NavBar;
