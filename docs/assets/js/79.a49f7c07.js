(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{439:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"php-the-right-way"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-the-right-way"}},[t._v("#")]),t._v(" Php - The Right Way")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://phptherightway.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Php - The right way"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"solid-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solid-principles"}},[t._v("#")]),t._v(" SOLID Principles")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SOLID")]),t._v(" "),a("th",[t._v("Meaning")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("S")])]),t._v(" "),a("td",[t._v("Single responsibility")]),t._v(" "),a("td",[t._v("Code reuse is possible")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("O")])]),t._v(" "),a("td",[t._v("Open(for extensions) / closed (for modifications)")]),t._v(" "),a("td",[t._v("It means classes should use interfaces.")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("L")])]),t._v(" "),a("td",[t._v("Liskov Substitution Principle (Objects of program should be able to be replaced by instances of sub-types)")]),t._v(" "),a("td",[t._v("Say Database is interface & we use same code for all types of databases. Mysql can be substituted by Redis without changing a thing in our code which stores session data.")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("I")])]),t._v(" "),a("td",[t._v("Interface segregation principle (Many client-specific interface is better than 1 general-purpose interface)")]),t._v(" "),a("td",[t._v("Break interface to many specific interfaces")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("D")])]),t._v(" "),a("td",[t._v("Depebdency Inversions (depend upon abstractions not concretion - decoupling modules)")]),t._v(" "),a("td",[t._v("If any dependencies are required, it is good if it's a interface or abstract class")])])])]),t._v(" "),a("h2",{attrs:{id:"dependency-managements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-managements"}},[t._v("#")]),t._v(" Dependency Managements")]),t._v(" "),a("ul",[a("li",[t._v("Package management : "),a("code",[t._v("composer")]),t._v(", "),a("code",[t._v("composer.json")]),t._v(" & "),a("code",[t._v("composer.lock")])]),t._v(" "),a("li",[a("em",[t._v("Website")]),t._v(" : http://packagist.org")]),t._v(" "),a("li",[t._v("Global installed packages : "),a("code",[t._v("/usr/local/bin")])]),t._v(" "),a("li",[a("em",[t._v("Syntax")]),t._v(" :\n"),a("ul",[a("li",[a("code",[t._v("composer require twig/twig:~1.5")])]),t._v(" "),a("li",[a("code",[t._v("composer install")])]),t._v(" "),a("li",[a("code",[t._v("composer update")])])])]),t._v(" "),a("li",[a("em",[t._v("index.php")]),t._v(" : "),a("code",[t._v("require 'vendor/autoload.php'")])]),t._v(" "),a("li",[a("em",[t._v("Security of packages")]),t._v(" : http://security,sensiolabs.org/check")])]),t._v(" "),a("h2",{attrs:{id:"basic-coding-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-coding-practices"}},[t._v("#")]),t._v(" BASIC CODING PRACTICES")]),t._v(" "),a("h3",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),a("ul",[a("li",[t._v("https://phptherightway.com/pages/The-Basics.html")])]),t._v(" "),a("h3",{attrs:{id:"design-pattern-architecture-way-to-structure-code-frameworks-already-decide-which-ones-to-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-pattern-architecture-way-to-structure-code-frameworks-already-decide-which-ones-to-use"}},[t._v("#")]),t._v(" "),a("em",[t._v("DESIGN PATTERN / ARCHITECTURE")]),t._v(" - Way to structure code(Frameworks already decide which ones to use.)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pattern")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("em",[t._v("Full details")])]),t._v(" "),a("td",[t._v("https://designpatternsphp.readthedocs.io/en/latest/")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Factory")])]),t._v(" "),a("td",[t._v("Simple class to create objects")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Singleton")])]),t._v(" "),a("td",[t._v("Access to only one instance at a particular time "),a("li"),a("code",[t._v("__construct()")]),t._v(" ["),a("em",[t._v("protected")]),t._v("] prevents creating new instance outside "),a("li"),a("code",[t._v("__clone()")]),t._v(" ["),a("em",[t._v("private")]),t._v("] prevents cloning of object "),a("li"),a("code",[t._v("__wakeup()")]),t._v(" ["),a("em",[t._v("private")]),t._v("] prevents unserializing")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Strategy")])]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("Front-controller")])]),t._v(" "),a("td",[a("code",[t._v("index.php")]),t._v(" single entry point")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("MVC")]),t._v(" (Model-View-Controller)")]),t._v(" "),a("td",[t._v("Most "),a("em",[t._v("popular")]),t._v(" architecture")])])])]),t._v(" "),a("h3",{attrs:{id:"dependency-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[t._v("#")]),t._v(" "),a("em",[t._v("DEPENDENCY INJECTION")])]),t._v(" "),a("ul",[a("li",[a("em",[t._v("Inversion-of-control")]),t._v(" / "),a("em",[t._v("Dependencies inversion")]),t._v(" problem is solved by this dependency injection")]),t._v(" "),a("li",[t._v("Dependencies can imported in 3 ways\n"),a("ul",[a("li",[a("em",[t._v("Constructor")]),t._v(" : "),a("code",[t._v("function __construct ( Bar $b ) { ... }")])]),t._v(" "),a("li",[a("em",[t._v("Methods")]),t._v(" : "),a("code",[t._v("function foo ( Bar $b ) { ... }")])]),t._v(" "),a("li",[a("em",[t._v("Property")]),t._v(" : "),a("code",[t._v("public $b = new Bar ();")])])])])]),t._v(" "),a("h2",{attrs:{id:"standard-php-library-spl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-php-library-spl"}},[t._v("#")]),t._v(" Standard PHP Library (SPL)")]),t._v(" "),a("ul",[a("li",[t._v("Collection of classes and interfaces.")]),t._v(" "),a("li",[a("em",[t._v("Datastructure")]),t._v(" classes "),a("strong",[t._v("(stack, queue, heap, etc)")])]),t._v(" "),a("li",[a("em",[t._v("Iterators")]),t._v(" methods to traverse datastructures")]),t._v(" "),a("li",[t._v("Your own classes which implement SPL interfaces")])]),t._v(" "),a("h2",{attrs:{id:"xdebug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xdebug"}},[t._v("#")]),t._v(" XDebug")]),t._v(" "),a("ul",[a("li",[t._v("Extension of php to assist debugging")]),t._v(" "),a("li",[t._v("Used by code editor like phpStorm")])]),t._v(" "),a("h2",{attrs:{id:"composer-packagist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-packagist"}},[t._v("#")]),t._v(" Composer & packagist")]),t._v(" "),a("ul",[a("li",[t._v("Composer is like npm used to manage dependencies")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://packagist.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Packagist.com"),a("OutboundLink")],1),t._v(" has tons of libraries")]),t._v(" "),a("li",[a("code",[t._v("composer.json")]),t._v(" has list of dependencies needed.")]),t._v(" "),a("li",[a("code",[t._v("composer.lock")]),t._v(" has fixed version of dependencies. Its created by composer.")]),t._v(" "),a("li",[a("code",[t._v("composer update")]),t._v(" will use "),a("em",[t._v("json")]),t._v(" and alter versions")]),t._v(" "),a("li",[a("code",[t._v("composer install")]),t._v(" will use "),a("em",[t._v("lock")]),t._v(" with same versions")]),t._v(" "),a("li",[a("code",[t._v("composer require twig/twig:*2.0")]),t._v(" adds repo/library")]),t._v(" "),a("li",[a("code",[t._v("./vendor/autoload.php")]),t._v(" folder has all dependencies.")]),t._v(" "),a("li",[a("code",[t._v("~1.8")]),t._v(" means “anything newer than "),a("code",[t._v("1.8.0")]),t._v(", but less than "),a("code",[t._v("2.0.x-dev")]),t._v("”")]),t._v(" "),a("li",[a("code",[t._v("1.8.*")]),t._v(" using wildcard")]),t._v(" "),a("li",[a("em",[t._v("Security vulnerabilities")]),t._v(" "),a("ul",[a("li",[t._v("https://security.symfony.com/")]),t._v(" "),a("li",[t._v("https://libraries.io/")])])])]),t._v(" "),a("h2",{attrs:{id:"pdo-used-by-doctrine2-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pdo-used-by-doctrine2-library"}},[t._v("#")]),t._v(" PDO (Used by Doctrine2 library)")]),t._v(" "),a("h3",{attrs:{id:"common-interface-to-connect-to-many-databases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-interface-to-connect-to-many-databases"}},[t._v("#")]),t._v(" Common interface to connect to many databases")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"mysql:host=localhost;dbname=foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"select * from bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FETCH_ASSOC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlentities")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"anycolumn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"prevent-sql-injections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevent-sql-injections"}},[t._v("#")]),t._v(" Prevent SQL Injections")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PDO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"mysql:host=localhost;dbname=foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"passsword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("prepare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"select * from bar where id = :id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter_input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INPUT_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FILTER_SANITIZE_NUMBER_INT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindParam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('":id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("PDO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAM_INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"errors-and-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-and-exceptions"}},[t._v("#")]),t._v(" ERRORS AND EXCEPTIONS")]),t._v(" "),a("h3",{attrs:{id:"error-severity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-severity"}},[t._v("#")]),t._v(" "),a("em",[t._v("ERROR SEVERITY")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ERROR")]),t._v(" : fatal (runtime)")]),t._v(" "),a("li",[a("code",[t._v("NOTICE")]),t._v(" : non-fatal (runtime) [may or maynot cause error]")]),t._v(" "),a("li",[a("code",[t._v("WARNING")]),t._v(" : non-fatal(runtime)")]),t._v(" "),a("li",[a("code",[t._v("E_STRICT")]),t._v(" : compatible to future php versions (compile-time)")])]),t._v(" "),a("h3",{attrs:{id:"exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[t._v("#")]),t._v(" "),a("em",[t._v("EXCEPTIONS")])]),t._v(" "),a("ul",[a("li",[t._v("Errors are thrown as exceptions to make developer aware & handle error")]),t._v(" "),a("li",[a("strong",[t._v("SPL")]),t._v(" extension : List of predefined exception classes. Just reuse them.")]),t._v(" "),a("li",[t._v("Laravel uses "),a("em",[t._v("Whoops")]),t._v(" library to nicely display exceptions.")])]),t._v(" "),a("h2",{attrs:{id:"security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[t._v("#")]),t._v(" SECURITY")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://paragonie.com/blog/2017/12/2018-guide-building-secure-php-software",target:"_blank",rel:"noopener noreferrer"}},[t._v("Guide to building secure php apps"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"basics-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics-2"}},[t._v("#")]),t._v(" BASICS")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Threat")]),t._v(" "),a("th",[t._v("Info")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("em",[t._v("Cross-Site Scripting:")])]),t._v(" "),a("td",[t._v("Affects web browsers. Improperly handled data by the application will cause Javascript to execute on another user's computer.")])]),t._v(" "),a("tr",[a("td",[a("em",[t._v("SQL Injection:")])]),t._v(" "),a("td",[t._v("Using Crafted string inputs, you can change the query that the application runs.")])]),t._v(" "),a("tr",[a("td",[a("em",[t._v("LDAP Injection:")])]),t._v(" "),a("td",[t._v("Affects Active Directory causing arbitrary reading/writing in directory server.")])]),t._v(" "),a("tr",[a("td",[a("em",[t._v("XPath Injection:")])]),t._v(" "),a("td",[t._v("Affects XML document querying.")])]),t._v(" "),a("tr",[a("td",[a("em",[t._v("Command Injection:")])]),t._v(" "),a("td",[t._v("Affects shell executions")])])])]),t._v(" "),a("h3",{attrs:{id:"operating-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operating-environment"}},[t._v("#")]),t._v(" OPERATING ENVIRONMENT")]),t._v(" "),a("ul",[a("li",[t._v("3rd-party libraries")]),t._v(" "),a("li",[t._v("Operating system")]),t._v(" "),a("li",[t._v("Hardware components")]),t._v(" "),a("li",[t._v("Hypervisor, if virtual machine")]),t._v(" "),a("li",[t._v("power supply")]),t._v(" "),a("li",[t._v("Network")]),t._v(" "),a("li",[t._v("web browser")])]),t._v(" "),a("h3",{attrs:{id:"basic-cryptography"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-cryptography"}},[t._v("#")]),t._v(" BASIC CRYPTOGRAPHY")]),t._v(" "),a("ul",[a("li",[t._v("Refer Cryptogaphy notes.")])]),t._v(" "),a("h3",{attrs:{id:"password-storage-argon2-bcrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password-storage-argon2-bcrypt"}},[t._v("#")]),t._v(" PASSWORD STORAGE [Argon2, Bcrypt]")]),t._v(" "),a("ul",[a("li",[t._v("Always use hashes and not encryption.")]),t._v(" "),a("li",[t._v("First Hash then encrypt is good (database encryption)")]),t._v(" "),a("li",[t._v("Use "),a("code",[t._v("password_hash()")]),t._v(" and "),a("code",[t._v("password_verify()")]),t._v(" rather than "),a("code",[t._v("crypt()")])]),t._v(" "),a("li",[t._v("Hashes are purposefully slow to avoid brute-force attack")])]),t._v(" "),a("h3",{attrs:{id:"hashing-salting-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hashing-salting-password"}},[t._v("#")]),t._v(" HASHING SALTING PASSWORD")]),t._v(" "),a("ul",[a("li",[t._v("Prevents dictionary attacks")]),t._v(" "),a("li",[a("code",[t._v("saltedPassword = password + SaltText")]),t._v(" "),a("ul",[a("li",[t._v("Added before Hashing by "),a("code",[t._v("password_hash()")])]),t._v(" "),a("li",[t._v("It is unique per user. This makes brute-force more difficult.")]),t._v(" "),a("li",[t._v("It is stored as a part of hash. So no need to store in database.")])])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hashed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("password_hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"anypassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD_DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hashing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("password_verify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"tryingpassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$hashed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check")]),t._v("\n")])])]),a("h3",{attrs:{id:"file-verifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-verifications"}},[t._v("#")]),t._v(" FILE VERIFICATIONS")]),t._v(" "),a("ul",[a("li",[t._v("Calculate hash of the file using "),a("code",[t._v("SHA1")]),t._v(" OR "),a("code",[t._v("MD5")])]),t._v(" "),a("li",[t._v("It should match the one shown on website.")]),t._v(" "),a("li",[a("strong",[t._v("Note :")]),t._v(" Use "),a("em",[t._v("Digital signatures")]),t._v(" since it is more secure than hashing.")])]),t._v(" "),a("h3",{attrs:{id:"error-reporting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-reporting"}},[t._v("#")]),t._v(" ERROR REPORTING")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Development - php.ini")])])]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("display_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" On")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("display_startup_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" On")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("error_reporting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" -1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("log_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" On")]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("Production - php.ini")])])]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("display_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Off")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("display_startup_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" Off")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("error_reporting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" E_ALL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("log_errors")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" On")]),t._v("\n")])])]),a("h2",{attrs:{id:"caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caching"}},[t._v("#")]),t._v(" CACHING")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("OpCode caching [ZendOpcache]")])]),t._v(" "),a("ul",[a("li",[t._v("PHP converts source code to this machine readable code.")]),t._v(" "),a("li",[t._v("If source code is same then convertion is a wastage each time we execute.")]),t._v(" "),a("li",[t._v("By storing each "),a("code",[t._v("OpCodes")]),t._v(" in memory we eliminate the convertion step.")]),t._v(" "),a("li",[t._v("If source code is unmodified with same signatures/modification-time then cached "),a("code",[t._v("OpCodes")]),t._v(" can be used skipping the convertion.")]),t._v(" "),a("li",[a("code",[t._v("ZendOpcache")]),t._v(" - php extension enabled by default")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Object caching [Redis, Memcache]")])]),t._v(" "),a("ul",[a("li",[t._v("It is used to cache data which is frequently accessed and unlikely to be changed.")]),t._v(" "),a("li",[t._v("This objects are stored in memory.")])])])]),t._v(" "),a("h2",{attrs:{id:"documentation-phpdocs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation-phpdocs"}},[t._v("#")]),t._v(" DOCUMENTATION [PHPDocs]")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.phpdoc.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHPDocs"),a("OutboundLink")],1),t._v(" library helps to document the classes and its methods using comments")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author A Name <a.name@example.com>\n * @link http://www.phpdoc.org/docs/latest/index.html\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTimeHelper")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param mixed $anything Anything that we can convert to a \\DateTime object\n     *\n     * @throws \\InvalidArgumentException\n     *\n     * @return \\DateTime\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateTimeFromAnything")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$anything")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gettype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$anything")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a \\DateTime object    }")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("InvalidArgumentException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param mixed $date Anything that we can convert to a \\DateTime object\n     *\n     * @return void (Optional)\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printISO8601Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateTimeFromAnything")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);