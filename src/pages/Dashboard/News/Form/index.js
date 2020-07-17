import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '.../../.././node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { Container } from './styles';

import api from '../../../../services/api';

const schema = Yup.object().shape({
  type: Yup.string().required('Informe o tipo'),
  title: Yup.string().required('Informe o título'),
  edition: Yup.string().required('Informe a Edição'),
  data: Yup.string().required('Informe a data de publicação'),
  author: Yup.string().required('Informe o autor'),
  body: Yup.string(),
  activeSite: Yup.boolean().required('Informe o status'),
});

function FormNews({ news, setShow, setNewsList }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  async function handleSubimit(data) {
    console.tron.log(data);
    try {
      if (!news) {
        data = {
          ...data,
          body: new Buffer(
            draftToHtml(convertToRaw(editorState.getCurrentContent())),
            'utf-8'
          ).toString('base64'),
        };

        await api.post('/news', data);

        const response = await api.get('/news');
        setNewsList(response.data);
      }
      if (news) {
        console.tron.log(data);
        await api.put(`/news/${news._id}`, data);
        const response = await api.get('/news');
        setNewsList(response.data);
      }
    } catch (err) {
      toast.error(`${err.response.data.erro}`);
      return;
    }
    setShow(false);
  }

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
  }

  return (
    <Container>
      <div className="content">
        <h1>Informativo ou Notícia</h1>
        <br />
        <Form schema={schema} initialData={news} onSubmit={handleSubimit}>
          <Select
            name="type"
            placeholder="Informativo ou Notícias"
            options={[
              { id: 'I', title: 'Informativo' },
              { id: 'N', title: 'Notícia' },
            ]}
          />
          <Input name="title" type="text" placeholder="* Título" />
          <Input name="edition" type="text" placeholder="* Edição" />
          <Input name="data" type="text" placeholder="* Data título" />
          <Input name="author" type="text" placeholder="* Autor" />
          <Select
            name="activeSite"
            placeholder=" Publicado no site?"
            options={[
              { id: true, title: 'SIM' },
              { id: false, title: 'NÃO' },
            ]}
          />
          <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
          />

          <button className="button-gravar" type="submit">
            <p>GRAVAR</p>
          </button>

          <button
            className="button-cancelar"
            type="button"
            onClick={() => setShow(false)}
          >
            <p>CANCELAR</p>
          </button>
        </Form>
      </div>
    </Container>
  );
}

export default FormNews;
