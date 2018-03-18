import React from 'react';
import PropTypes from 'prop-types';

var ascii_url = "https://asciinema.org/a/";
var bare_ascii_url = "asciinema.org/a/";
var js_ending = ".js";
var ascii_casting = "asciicast-";

export default class Asciinema extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = ascii_url.concat(this.props.asciinema_id, js_ending);
    s.id= ascii_casting.concat(this.props.asciinema_id);
    this.instance.appendChild(s);
  }

  render() {
    return <div>
      <h3>Asciinema example run</h3>
      <div ref={el => (this.instance = el)} />
      <a href={ascii_url.concat(this.props.asciinema_id)}>{bare_ascii_url.concat(this.props.asciinema_id)}</a>
      </div>;
  }
}
