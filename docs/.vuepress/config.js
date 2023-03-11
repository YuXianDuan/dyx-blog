module.exports = {
    title: '前端学习博客',
    description: '',
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'code Home', 
                items: [
                    { text: 'Github', link: 'https://github.com/YuXianDuan' },
                    { text: 'Gitee', link: 'https://gitee.com/maikekeliang' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'JavaScript',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "闭包", path: "/" }
                ]
            },
            {
              title: "React",
              path: '/handbook/ConditionalTypes.md',
              collapsable: false, // 不折叠
              children: [
                { title: "Ract-fibe", path: "/handbook/ConditionalTypes.md" },
                { title: "React性能优化", path: "/handbook/Generics" }
              ],
            },
            {
                title: "Webpack",
                path: '/handbook/ConditionalTypes.md',
                collapsable: false, // 不折叠
                children: [
                  { title: "Webpack性能优化", path: "/handbook/ConditionalTypes.md" },
                ],
              }
          ]
    }
}