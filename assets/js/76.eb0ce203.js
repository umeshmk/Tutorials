(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{438:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"basic-cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-cryptography"}},[e._v("#")]),e._v(" Basic cryptography")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/crypto-categories.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"keyless-blake2-sha-1-sha-256-md5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyless-blake2-sha-1-sha-256-md5"}},[e._v("#")]),e._v(" Keyless "),a("code",[e._v("[BLAKE2, SHA-1, SHA-256, MD5]")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("TextMsg ---\x3e Hash")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("Hash ---\x3e TextMsg")]),e._v(" NOT possible")])]),e._v(" "),a("li",[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[e._v('"sha256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[e._v('"The quick brown fox jumps over the lazy dog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"secret-key-hmac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secret-key-hmac"}},[e._v("#")]),e._v(" Secret Key "),a("code",[e._v("[HMAC]")])]),e._v(" "),a("h3",{attrs:{id:"keyed-hash-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyed-hash-functions"}},[e._v("#")]),e._v(" Keyed hash functions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Creates "),a("code",[e._v("MAC - Message Authentication Code")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("MAC = mesg + secret")])])]),e._v(" "),a("li",[a("p",[e._v("Send "),a("code",[e._v("mesg + MAC")]),e._v(" . Then receiver will create "),a("code",[e._v("MAC")]),e._v(" with the "),a("code",[e._v("secret")]),e._v(" key known to both sender & receiver. If "),a("code",[e._v("MAC")]),e._v(" matches then origin of "),a("code",[e._v("mesg")]),e._v(" is authenticated.")])]),e._v(" "),a("li",[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("hash_hmac")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[e._v('"sha256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[e._v('"The quick brown fox jumps over the lazy dog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[e._v('"secret key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 4a513ac60b4f0253d95c2687fa104691c77c9ed77e884453c6a822b7b010d36f")]),e._v("\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"secret-key-encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secret-key-encryption"}},[e._v("#")]),e._v(" Secret Key Encryption")]),e._v(" "),a("ul",[a("li",[e._v("Reversible process")]),e._v(" "),a("li",[a("code",[e._v("PlainText + Secret = CipherText")])]),e._v(" "),a("li",[a("strong",[e._v("Openssl")]),e._v(" is a extension/library used to encrypt")]),e._v(" "),a("li",[a("code",[e._v("AES")]),e._v(" algorithm is used")])]),e._v(" "),a("h3",{attrs:{id:"authenticated-secret-key-encryption"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authenticated-secret-key-encryption"}},[e._v("#")]),e._v(" Authenticated Secret Key Encryption")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Encrypt")]),e._v(" first then create "),a("code",[e._v("MAC")]),e._v(".")]),e._v(" "),a("li",[e._v("Two "),a("code",[e._v("secret")]),e._v("keys are used.")])]),e._v(" "),a("h2",{attrs:{id:"public-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key"}},[e._v("#")]),e._v(" Public Key")]),e._v(" "),a("ul",[a("li",[e._v("Generate key-pair "),a("code",[e._v("someMathsOn(private key) = public key")])]),e._v(" "),a("li",[a("code",[e._v("public key ---\x3e private")]),e._v(" is almost Impossible.")])]),e._v(" "),a("h3",{attrs:{id:"shared-secret-key-agreement-diffie-hellman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-secret-key-agreement-diffie-hellman"}},[e._v("#")]),e._v(" Shared Secret Key Agreement [Diffie-Hellman]")]),e._v(" "),a("ul",[a("li",[e._v("Share each other's public key "),a("code",[e._v("A ---\x3e B")]),e._v(" & "),a("code",[e._v("B ---\x3e A")])]),e._v(" "),a("li",[a("code",[e._v("sharedkey = A(public) + B(private) = B(public) + A(private)")])]),e._v(" "),a("li",[e._v("Shared key generated is same because it uses "),a("code",[e._v("Diffie-Hellman")]),e._v(". Modular Arithmatic !!!")])]),e._v(" "),a("h3",{attrs:{id:"digital-signatures-eddsa-edwards-curve-digital-signature-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#digital-signatures-eddsa-edwards-curve-digital-signature-algorithm"}},[e._v("#")]),e._v(" Digital Signatures [EdDSA (Edwards-curve Digital Signature Algorithm]")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("digitalSign = mesg + privateKey")])])]),e._v(" "),a("li",[a("p",[e._v("Anyone who has "),a("code",[e._v("public")]),e._v(" key can authenticate the origin of "),a("code",[e._v("mesg")])])]),e._v(" "),a("li",[a("p",[e._v("Unlike the above mentioned "),a("code",[e._v("MAC")]),e._v(" private keys are not shared.")])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Minsign")]),e._v(" or "),a("em",[e._v("GPG")]),e._v(" signatures can be used.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Encoding")]),e._v(" using "),a("code",[e._v("base64")]),e._v(" & "),a("strong",[e._v("compression")]),e._v(" "),a("code",[e._v("gzip")]),e._v(" are NOT cryptographic.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);