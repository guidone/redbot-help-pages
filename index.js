import React, { Fragment } from 'react';
import _ from 'lodash';

import { plug } from 'code-plug';

import { Content } from '../../src/components';

const { Contents } = Content;

plug(
  'sidebar',
  null,
  {
    id: 'help-pages',
    label: 'Help pages',
    url: '/help',
    icon: 'file-text',
    options: [
      { label: 'Posts', url: '/help', id: 'help-pages' }
    ]
  }
);
plug('pages', Contents, {
  url: '/help',
  title: 'Help pages',
  id: 'help-pages',
  namespace: 'help-pages',
  labels: {
    createContent: 'Create help page',
    emptyContent: 'No help pages',
    saveContent: 'Save help page'
  }
});
