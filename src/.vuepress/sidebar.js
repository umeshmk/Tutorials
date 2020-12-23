module.exports = {
  sidebar: {
    "/documentation/": ["vuepress.md", "markdown.md", "it-basics.md"],
    "/windows10/": ["windows10.md", "wsl.md"],
    "/visual-studio-code/": [
      "vscode.md",
      "get-started.md",
      "user-guide.md",
      "language-javascript.md",
      "extensions.md",
      "settings.md",
    ],
    "/php/": [
      // "1 - Basic syntax & Data Types.md",
      "",
      "2 - Variables.md",
      "3 - Constants.md",
      "4 - Operators.md",
      "5 - Control Structures.md",
      "6 - Functions.md",
      "7 - Classes & Objects.md",
      "8 - Features - Cookies & Sessions.md",
      "Cryptography.md",
      "Deployment.md",
      "Php - The right way.md",
      "PSR Standards.md",
      "Testing.md",
    ],
    "/terminal/": ["Zsh.md", "Bash.md", "Bash-script.md", "WindowsTerminal.md"],
    "/miscellaneous/": [
      {
        title: "Miscellaneous",
        collapsable: false,
        children: [
          "Git.md",
          "Regular Expression.md",
          "Rest API.md",
          "DBMS.md",
          "github-ssh.md",
          "Http.md",
        ],
      },
      {
        title: "Data structure & algorithm",
        collapsable: false,
        children: [
          "dsa/Data structures.md",
          "dsa/Algorithms.md",
          "dsa/Big O.md",
          "dsa/Cracking the coding interview.md",
        ],
        initialOpenGroupIndex: -1,
      },
    ],
    "/laravel/v6/": [
      {
        title: "Laravel (Deprecated)",
        collapsable: false,
        children: [
          "1-GettingStarted.md",
          "2-ArchitecturalConcepts.md",
          "3-Basics.md",
          "4-Frontend.md",
        ],
      },
      {
        title: "Security",
        collapsable: false,
        children: [
          "5-Security/1-Authentication.md",
          "5-Security/2-Api_authentication_incomplete.md",
          "5-Security/3-Authorization.md",
          "5-Security/Others.md",
        ],
      },
      {
        title: "Digging deeper",
        collapsable: false,
        children: [
          "6-Digging-deeper/1-Artisan-console.md",
          // "6-Digging-deeper/2-Broadcast_incomplete.md",
          "6-Digging-deeper/3-Cache+Collections.md",
          "6-Digging-deeper/4-Events.md",
          // "6-Digging-deeper/5-Notifications-incomplete.md",
          // "6-Digging-deeper/6-Packagedev+Queues+Taskschedule-incomplete .md",
          "6-Digging-deeper/7-Filestorage+Mail.md",
        ],
      },
      {
        title: "Database",
        collapsable: false,
        children: ["7-Database.md", "8-EloquentORM.md"],
      },
    ],
    "/html/": ["", "Html 5.md", "Forms.md", "seo.md"],
    "/css/": [
      "",
      "Layout.md",
      "css3.md",
      // "Tailwind-cheetsheet.md",
      "sass.md",
      "Tailwind-core.md",
    ],
    "/javascript/": [
      {
        title: "Javascript",
        collapsable: false,
        children: [
          "",
          "asynchronous.md",
          "dom.md",
          "node.md",
          "Json.md",
          "Jquery.md",
        ],
      },
      {
        title: "Vue.js",
        collapsable: false,
        children: ["vue/Vuejs.md", "vue/component.md"],
      },
    ],
    "/tools/": ["vite.md", "snowpack.md"],
    "/surveys/": ["", "resources.md", "github.md"],
    "/oop/": [""],
  },
};
