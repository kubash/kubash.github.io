import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span>K8$</span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Kubash</h1>
                <p>An interactive shell for your clusters. <br />
                  Automating Building the base images,<br />
                  Provisioning the VMs,<br />
                  and Initializing the cluster using kubeadm.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('build')}}>Build</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('provision')}}>Provision</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('init')}}>Init</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('interactive')}}>Interact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
