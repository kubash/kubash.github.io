import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p>
      oneliner installer:<br />
      curl -Ls git.io/kubash | bash
    </p>
    <p>
      Warning: If I have to warn you about the dangers of curling something directly into bash, you may not be a competent system administrator! It is recommended that you run the above on a test system to test out kubash before doing anything in production.
    </p>
    <p>
      The above <a href='https://git.io/kubash'>git.io/kubash</a> redirects to the raw version of <a href='https://github.com/kubash/kubash/blob/master/bootstrap'>this file</a>.
    </p>
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
