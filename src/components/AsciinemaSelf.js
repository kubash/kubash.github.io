import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link'
import '../assets/css/asciinema-player.css'

export default class Asciinema extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "/asciinema-player.js";
    this.instance.appendChild(s);
  }

  render() {
    return <div>
      <h3>Asciinema example run</h3>
      <div ref={el => (this.instance = el)} />
      <asciinema-player src={this.props.localpath}></asciinema-player>
      </div>;
  }
}
