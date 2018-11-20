import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

import StyleBox from './StyleBox'
import Header from '../Homescreen/Header'
import Card from '../Homescreen/Card'
import Private from '../Screen2/Private'
import Public from '../Screen2/Public'
import Criminal from '../Screen2/Criminal'

storiesOf('Header', module).add('default', () => (
  <React.Fragment>
    <Header text={text('Label', 'Jura 100')} />
  </React.Fragment>
))

storiesOf('Card', module).add('Rechtsgebiete', () => (
  <Card text={text('Label', 'Zivilrecht')} />
))

storiesOf('Private', module).add('Zivilrecht', () => <Private />)
storiesOf('Public', module).add('Öffentliches Recht', () => <Public />)
storiesOf('Criminal', module).add('Strafrecht', () => <Criminal />)
