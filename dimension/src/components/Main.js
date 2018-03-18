import React from 'react'
import Link from 'gatsby-link'

import Asciinema from '../components/Asciinema'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="build" className={`${this.props.article === 'build' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Build</h2>
          <p>kubash build - builds images by default using packer.</p>
          <Asciinema asciinema_id="164070"/>
          <h3 >SSH keys</h3>
          <p>
            ssh keys can be added to the
            `authorized_keys` on the hosts, either by setting the key as an environment variable directly as:
          </p>
          <p>
            KEYS_TO_ADD='ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTY68No= adminuser@testbox'
          </p>
          <p>
            Or alternatively give it an url to a set of pubkeys:
          </p>
          <p>
            KEYS_URL='https://raw.githubusercontent.com/myorg/keys/master/keys'
          </p>
          <h3 >Builder options</h3>
          <p>
            The builder can be set with the --builder option for now there are only packer and coreos builders. i.e.
          </p>
          <p>
            `--builder packer` This will build images using packer
          </p>
          <p>
            `--builder coreos` This will download the official coreos images
          </p>
          <h3>
            OS options
          </h3>
          <p>
            The OS to build can be set with  --target-os option
          </p>
          <p>
            `--target-os ubuntu` This will build ubuntu images
          </p>
          <p>
            `--target-os debian` This will build debian images
          </p>
          <p>
            `--target-os fedora` This will build fedora images
          </p>
          <p>
            `--target-os centos` This will build centos images
          </p>
          <p>
            `--target-os coreos` This will build coreos images (* no packer build for this*)
          </p>
          <h3>
            Initializer specific options
          </h3>
          <p>
            There are a few OS builds that are built specifically for some of the initializers.
          </p>
          <p>
            `--target-os kubeadm` This will build centos images
            with the addition of getting the kube repos added and kubeadm etc installed
          </p>
          <p>
            `--target-os kubeadm2ha` This will build centos images
            with the addition of prepping for the kubeadm2ha ansible playbook
          </p>
          <p>
            `--target-os kubespray` This will build centos images
            with the addition of prepping for the kubespray ansible playbook
          </p>
          <p>
            `--target-os openshift` This will build centos images
            with the addition of prepping for the openshift ansible playbook
          </p>
          <h3>
            Target build
          </h3>
          <p>
            For the packer build you can specify alternate json files to use
          </p>
          <p>
            `--target-build my-alternate.json` This must exist in `$KUBASH_DIR/pax/$target_os/my-alternate.json`
          </p>
          <p>
            For the coreos option this sets the channel (stable,beta,alpha)
          </p>
          <p>
            `--target-build beta`
          </p>
          {close}
        </article>

        <article id="provision" className={`${this.props.article === 'provision' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Provision</h2>
          <p>kubash provision - provisions virtual machines by default using qemu/KVM.</p>
          <Asciinema asciinema_id="170578"/>
          {close}
        </article>

        <article id="init" className={`${this.props.article === 'init' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Init</h2>
          <p>kubash init - initialize virtual machines by default using kubeadm.</p>
          <Asciinema asciinema_id="170585"/>
          <p>Optionally you can use alternative initializers as well using the '--initializer' option (right now kubespray, openshift, kubeadm2ha are available).</p>
          {close}
        </article>

        <article id="interactive" className={`${this.props.article === 'interactive' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Interactive</h2>
          <p>kubash - is an interactive shell for your clusters.</p>
          <p>
            At this prompt you can invoke all the kubash commands in a read loop,
            this can eliminate a fair amount of typing while interacting with a cluster.
            There are a few special commands that you can invoke in the interactive
            shell.  `use EXAMPLE` will set the name of the cluster that you are
            interacting with.  `verbosity 10` will set the verbosity to 10. `v` will
            increment the verbosity up one.
          </p>
          <p>Helm can be used as well from the K8$ shell try 'helm search prometheus'.</p>
          <p>There are also many shortcuts for using kubectl directly from the K8$ shell.</p>
          <Asciinema asciinema_id="170587"/>
          <p></p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
