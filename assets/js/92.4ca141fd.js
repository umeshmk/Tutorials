(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{453:function(e,a,o){"use strict";o.r(a);var t=o(42),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"url-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#url-docker"}},[e._v("#")]),e._v(" URL Docker")]),e._v(" "),o("ul",[o("li",[e._v("hub.docker.com/explore/")]),e._v(" "),o("li",[e._v("github.com/docker/labs")]),e._v(" "),o("li",[e._v("docs.docker.com/get-started")]),e._v(" "),o("li",[e._v("www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components")]),e._v(" "),o("li",[e._v("www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04")]),e._v(" "),o("li",[e._v("www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04")]),e._v(" "),o("li",[e._v("www.digitalocean.com/community/tutorials/how-to-configure-a-continuous-integration-testing-environment-with-docker-and-docker-compose-on-ubuntu-16-04")])]),e._v(" "),o("h5",{attrs:{id:"basics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),o("ul",[o("li",[e._v("Level\n"),o("ul",[o("li",[e._v("Stack (top)")]),e._v(" "),o("li",[e._v("Services (middle)")]),e._v(" "),o("li",[e._v("Container (bottom)")])])])]),e._v(" "),o("h5",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("see "),o("em",[e._v("install.sh")])]),e._v(" "),o("h5",{attrs:{id:"using-the-docker-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-docker-command"}},[e._v("#")]),e._v(" Using the Docker Command")]),e._v(" "),o("blockquote"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("- docker [option] [command] [arguments]    \n- docker docker-subcommand --help  \n- docker info  \n")])])]),o("h5",{attrs:{id:"example-hello-world-ubuntu"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-hello-world-ubuntu"}},[e._v("#")]),e._v(" Example "),o("code",[e._v("hello-world")]),e._v(" "),o("code",[e._v("ubuntu")])]),e._v(" "),o("blockquote"),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("- docker run hello-world \n- docker run -it ubuntu       # -i and -t for cli(shell) access into container \n")])])]),o("h5",{attrs:{id:"save-edits-in-container-as-new-docker-image"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#save-edits-in-container-as-new-docker-image"}},[e._v("#")]),e._v(" Save edits in "),o("em",[e._v("container")]),e._v(" as new Docker "),o("em",[e._v("Image")])]),e._v(" "),o("blockquote"),e._v(" "),o("ul",[o("li",[e._v('docker commit -m "any mesg" -a "Author Name" '),o("container-id",[e._v(" <repository/newImageName>   "),o("br")])],1)]),e._v(" "),o("blockquote",[o("p",[e._v("// "),o("em",[e._v("eg:")]),e._v(' = docker commit -m "added node.js" -a "umesh kadam" d9b100f2f636 finid/ubuntu-nodejs   '),o("br"),e._v("\n// new image is stored locally. need to push in docker hub repo")])]),e._v(" "),o("h2",{attrs:{id:"cheetsheet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cheetsheet"}},[e._v("#")]),e._v(" Cheetsheet")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('docker search <search>                                       # search Docker Hub \ndocker pull <username>/<image>                               # Copy image from cloud to local\n\ndocker build -t <image> .                                    # Create image using this directory\'s[a dot] Dockerfile\n\ndocker run -p 4000:80 <image>                                # Run "imagename" mapping port 4000 to 80\ndocker run -d -p 4000:80 <image>                             # Same thing, but in detached mode\ndocker run -d -P --name <myname> -e AUTHOR="<UK>" <image>    # P is random port, e is env variable\n\ndocker container ls                                          # List all running containers\ndocker ps\ndocker container ls -a                                       # List all containers, even those not running\ndocker ps -a\n\ndocker exec -i -t <containerID> /bin/bash                    # bash command terminal inside container\n\ndocker container stop <hash>                                 # Gracefully stop the specified container\ndocker stop <hash>\ndocker container kill <hash>                                 # Force shutdown of the specified container\ndocker container rm <hash>                                   # Remove specified container from this machine\ndocker rm <hash>\ndocker container rm $(docker container ls -a -q)             # Remove all containers\n\ndocker image ls -a                                           # List all images on this machine\ndocker images\n\ndocker image rm <image id>                                   # Remove specified image from this machine\ndocker image rm $(docker image ls -a -q)                     # Remove all images from this machine\n\ndocker login                                                 # Log in this CLI session using your Docker credentials\ndocker tag <image> username/repository:tag                   # Tag <image> for upload to registry\ndocker push username/repository:tag                          # Upload tagged image to registry\ndocker run username/repository:tag                           # Run image from a registry\n')])])]),o("h2",{attrs:{id:"uninstall-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-docker"}},[e._v("#")]),e._v(" Uninstall Docker")]),e._v(" "),o("blockquote"),e._v(" "),o("ul",[o("li",[e._v("sudo apt-get purge docker-ce")]),e._v(" "),o("li",[e._v("sudo rm -rf /var/lib/docker")])])])}),[],!1,null,null,null);a.default=n.exports}}]);