import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <ul className="icons">
        <li>Issues, Feature Requests, and PRs on Github <a href="https://github.com/kubash/kubash" className="icon fa-github"><span className="label">GitHub</span></a></li>
      </ul>
      <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer