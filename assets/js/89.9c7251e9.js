(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{450:function(e,t,s){"use strict";s.r(t);var r=s(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"docker-secrets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-secrets"}},[e._v("#")]),e._v(" Docker Secrets")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("swarm only")])]),e._v(" "),s("li",[s("p",[e._v("files like [<500kb only]")]),e._v(" "),s("ul",[s("li",[e._v("passwords")]),e._v(" "),s("li",[e._v("keys")]),e._v(" "),s("li",[e._v("ssl certificates")]),e._v(" "),s("li",[e._v("database name")]),e._v(" "),s("li",[e._v(".env configs")])])]),e._v(" "),s("li",[s("p",[e._v("this files not be")]),e._v(" "),s("ul",[s("li",[e._v("transported over network")]),e._v(" "),s("li",[e._v("stored unencrypted")]),e._v(" "),s("li",[e._v("in source code")])])]),e._v(" "),s("li",[s("p",[e._v("docker secrets are")]),e._v(" "),s("ul",[s("li",[e._v("send to correct containers only[running tasks only]")]),e._v(" "),s("li",[e._v("encrypted during transit & inside swarm")]),e._v(" "),s("li",[e._v("secrets[in swarm] & configs [mounted to container]")])])])]),e._v(" "),s("h4",{attrs:{id:"managing-secrets-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-secrets-steps"}},[e._v("#")]),e._v(" Managing secrets steps")]),e._v(" "),s("ul",[s("li",[e._v("1] add secret to swarm")]),e._v(" "),s("li",[e._v("2] send to manager node by TLS")]),e._v(" "),s("li",[e._v("3] stored in "),s("code",[e._v("raft log")]),e._v(" which is encrypted")]),e._v(" "),s("li",[e._v("4] raft log replicates to all managers for high availablity")]),e._v(" "),s("li",[e._v("5] new service is created(using secret) & running")]),e._v(" "),s("li",[e._v("6] decrypted secret is mounted inside container to "),s("code",[e._v("/run/secrets/<secret_name>")])]),e._v(" "),s("li",[e._v("7] we can also provide target\n"),s("ul",[s("li",[s("code",[e._v("--secret source=site.conf,target=/etc/nginx/conf.d/site.conf")])])])]),e._v(" "),s("li",[e._v("8] [updating secrets is not possible] add or remove as we want without stopping container")])]),e._v(" "),s("h1",{attrs:{id:"cheatsheet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[e._v("#")]),e._v(" Cheatsheet")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v('docker secret create <secret-name>\n\t#eg: echo "This is a secret" | docker secret create my_secret_data -\ndocker secret create <secret-name> <file>\n\ndocker secret inspect\ndocker secret ls\ndocker secret rm\n\n--secret flag for docker service create\n--secret-add and --secret-rm flags for docker service update\n--secret source=<config-name>,target=/path/<any-name>\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);