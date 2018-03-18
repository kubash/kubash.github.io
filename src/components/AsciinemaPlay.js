import React from 'react';
import PropTypes from 'prop-types';

AsciinemaPlay.propTypes = {
    asciinema_src: PropTypes.string,
    asciinema_id: PropTypes.integer
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = this.props.asciinema_src;
    s.id= this.props.asciinema_id;
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}
