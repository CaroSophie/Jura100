import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'
import Header from '../components/Header'
import Card from '../components/Card'
import Topic from '../components/Topic'

storiesOf('Header', module).add('default', () => (
  <React.Fragment>
    <Header text={text('Label', 'Jura 100')} />
  </React.Fragment>
))

storiesOf('Card', module).add('Rechtsgebiete', () => (
  <Card text={text('Label', 'Zivilrecht')} />
))

storiesOf('Topic', module).add('Topic', () => <Topic />)
