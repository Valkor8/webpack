import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  componentDidMount () {
    $('<h1 />')
    .text('Hello world form JQuery ')
    .css({
      textAlign: 'center',
      color: 'blue'
    })
    .appendTo($('header'));
  }

  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box">Box title</h2>
          <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequatur nobis cupiditate magnam illum. Unde illum a ea magnam ipsam!</p>
        </div>
      </React.Fragment>
    )
  }
}
