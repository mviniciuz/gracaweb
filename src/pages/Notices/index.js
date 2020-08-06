import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MdFirstPage, MdLastPage } from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import BoxContact from '../../components/BoxContact';

import { Container } from './styles';

import api from '../../services/api';

function Notices() {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    async function loadReg() {
      const response = await api.get('/news', {
        params: { page, limits: 6, onlyActive: true, type: 'N' },
      });
      setNotices(response.data);
    }
    loadReg();
  }, []);

  useEffect(() => {
    if (page <= 0) {
      setPage(1);
    }
    async function loadReg() {
      const response = await api.get('/news', {
        params: { page, limits: 6, onlyActive: true, type: 'N' },
      });
      if (!response.data.length) {
        if (page > 1) {
          setPage(page - 1);
        }
      }
      setNotices(response.data);
    }
    loadReg();
  }, [page]);

  return (
    <Container>
      <h1>NOTÍCIAS</h1>
      <div className="grid">
        {notices.map((item) => (
          <div
            className="item"
            onClick={() => history.push(`/notice/${item._id}`)}
          >
            <div className="item-header">
              <div className="item-header-date">
                <p>
                  {' '}
                  {format(parseISO(item.createdAt), 'MMMM', { locale: pt })}|
                  <strong>
                    {' '}
                    {format(parseISO(item.createdAt), 'dd', { locale: pt })}
                  </strong>{' '}
                  | {format(parseISO(item.createdAt), 'yyyy', { locale: pt })}
                </p>
              </div>
              <div className="item-header-title">
                <p>{item.title}</p>
              </div>
            </div>
            <div className="item-body">
              <p>{new Buffer(item.textLabel, 'base64').toString('utf-8')}</p>
            </div>
            <button type="button">
              <p className="ler">Ler mais...</p>
            </button>
          </div>
        ))}
      </div>

      <div className="page">
        <button type="button" onClick={() => setPage(page - 1)}>
          <MdFirstPage size={30} color="#3ba779" />
        </button>
        <p>{page}</p>
        <button type="button" onClick={() => setPage(page + 1)}>
          <MdLastPage size={30} color="#3ba779" />
        </button>
      </div>
      <BoxContact />
    </Container>
  );
}

export default Notices;
