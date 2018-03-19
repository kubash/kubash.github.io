import React from 'react'
import Link from 'gatsby-link'

import AsciinemaSelf from '../components/AsciinemaSelf'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="build" className={`${this.props.article === 'build' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Build</h2>
          <p>kubash build - builds images by default using packer.</p>
          <AsciinemaSelf localpath='/build.json'/>
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
          <p>For more information see the <a href='https://github.com/kubash/kubash/blob/master/docs/build.md'>build documentation page</a>.</p>
          {close}
        </article>

        <article id="provision" className={`${this.props.article === 'provision' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Provision</h2>
          <p>kubash provision - provisions virtual machines by default using qemu/KVM.</p>
          <AsciinemaSelf localpath='/provision.json'/>
          <p>After which you will have 6 new VMs, 3 masters, and 3 nodes.  This can be altered by creating your own cluster yaml file. There is an <a href='https://github.com/kubash/kubash/blob/master/examples/example-cluster.yaml'>example file</a> in the repo.</p>
          <p>For more information see the <a href='https://github.com/kubash/kubash/blob/master/docs/provision.md'>provision documentation page</a>.</p>
          {close}
        </article>

        <article id="init" className={`${this.props.article === 'init' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Init</h2>
          <p>kubash init - initialize kubernetes cluster by default using kubeadm.</p>
          <AsciinemaSelf localpath='/init.json'/>
          <p>Optionally you can use alternative initializers
            as well using the '--initializer' option (right now kubespray, openshift, kubeadm2ha are available).</p>
          <p>For more information see the <a href='https://github.com/kubash/kubash/blob/master/docs/init.md'>init documentation page</a>.</p>
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
          <p>Or by shorthand `h search prometheus`</p>
          <p>There are also many shortcuts for using kubectl directly from the K8$ shell.</p>
          <AsciinemaSelf localpath='/interactive.json'/>
          <p></p>
          <p>K8$ help </p>
          <p>commands:<br/>
            help          - show this help<br/>
            kh|khelp      - show the kubectl help<br/>
            build         - build a base image<br/>
            provision     - provision individual nodes<br/>
            init          - initialize the cluster<br/>
            reset         - reset the cluster with `kubeadm reset` on all hosts<br/>
            decommission  - tear down the cluster and decommission nodes<br/>
            show          - show the analyzed input of the hosts file<br/>
            ping          - Perform ansible ping to all hosts<br/>
            auto          - Full auto will provision and initialize all hosts<br/>
            masters       - Perform initialization of masters<br/>
            nodes         - Perform initialization of nodes<br/>
            dotfiles      - Perform dotfiles auto configuration<br/>
            grab          - Grab the .kube/config from the master<br/>
            hosts         - Write ansible hosts file<br/>
            copy          - copy the built images to the provisioning hosts<br/>
            k *           - k commands will attempt to be passed to kubectl<br/>
            h *           - h commands will attempt to be passed to helm<br/>
            i.e.<br/>
            get pods<br/>
            get nodes<br/>
            etc<br/>
          </p>
          <hr/>
          <p>K8$ khelp </p>
           <p>kubectl shorthand commands:
            # Drop into an interactive terminal on a container<br/>
            keti="kubectl exec -ti"<br/>
            # Pod management.<br/>
            kgp="kubectl get pods"<br/>
            kgpa="kubectl get pods --all-namespaces"<br/>
            klp="kubectl logs pods"<br/>
            kep="kubectl edit pods"<br/>
            kdp="kubectl describe pods"<br/>
            kdelp="kubectl delete pods"<br/>
            # Service management.<br/>
            kgs="kubectl get svc"<br/>
            kes="kubectl edit svc"<br/>
            kds="kubectl describe svc"<br/>
            kdels="kubectl delete svc"<br/>
            # Secret management<br/>
            kgsec="kubectl get secret"<br/>
            kdsec="kubectl describe secret"<br/>
            kdelsec="kubectl delete secret"<br/>
            # Deployment management.<br/>
            kgd="kubectl get deployment"<br/>
            ked="kubectl edit deployment"<br/>
            kdd="kubectl describe deployment"<br/>
            kdeld="kubectl delete deployment"<br/>
            ksd="kubectl scale deployment"<br/>
            krsd="kubectl rollout status deployment"<br/>
            # Rollout management.<br/>
            kgrs="kubectl get rs"<br/>
            krh="kubectl rollout history"<br/>
            kru="kubectl rollout undo"<br/>
          </p>
          <hr/>
          <p>For more information see the <a href='https://github.com/kubash/kubash/blob/master/docs/interactive.md'>interactive documentation page</a>.</p>
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
