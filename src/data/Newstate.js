import React, { Component } from 'react'
import uid from 'uid'

const data = [
  {
    title: 'Zivilrecht',
    sub: [
      { title: 'BGB AT' },
      { title: 'Schuldrecht AT' },
      { title: 'Schuldrecht AT' }
    ]
  },
  { title: 'Öffentliches Recht' },
  { title: 'Strafrecht' }
]

export default class App extends Component {
  state = {
    private: [
      {
        text: 'BGB AT',
        marked: false,
        id: uid(),
        area: 'private',
        done: false,
        content: 'Minderjährigkeit'
        // content:[
        //   {
        //     subject: 'Kündigung'
        //   },
        //   {
        //     subject: 'Widerruf'
        //   }
        // ]
      },
      {
        text: 'Schuldrecht AT',
        marked: false,
        id: uid(),
        area: 'private',
        done: false,
        content: 'Vertragsschluss'
      },
      {
        text: 'Schuldrecht BT',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Sachenrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Kreditsicherungsrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Familienrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Erbrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Arbeitsrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Gesellschaftsrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      },
      {
        text: 'Handelsrecht',
        marked: false,
        id: uid(),
        area: 'private',
        done: false
      }
    ],

    public: [
      {
        text: 'Grundrechte',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Staatsorganisationsrecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false,
        content: 'Wahlen'
      },
      {
        text: 'Verwaltungsrecht AT',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Baurecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Polizeirecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'WirtschaftsverwRecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Umweltrecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Staatshaftungsrecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      },
      {
        text: 'Europarecht',
        marked: false,
        id: uid(),
        area: 'public',
        done: false
      }
    ],

    criminal: [
      {
        text: 'Strafrecht AT',
        marked: false,
        id: uid(),
        area: 'criminal',
        done: false
      },
      {
        text: 'Strafrecht BT',
        marked: false,
        id: uid(),
        area: 'criminal',
        done: false
      },
      {
        text: 'Strafprozessrecht',
        marked: false,
        id: uid(),
        area: 'criminal',
        done: false
      }
    ]
  }
}
