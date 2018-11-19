import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'
import Header from '../Homescreen/Header'
import Cards from '../Homescreen/Cards'

storiesOf('Header', module).add('default', () => (
  <React.Fragment>
    <Header text={text('Label', 'Jura 100')} />
  </React.Fragment>
))

storiesOf('Cards', module).add('Rechtsgebiete', () => <Cards />)
