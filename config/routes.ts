export default [
  {path: '/', name: '主页', icon: 'smile', component: './Index'},
  {path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true},
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'},
    ],
  },
  {
    path: '/help',
    name: '帮助文档',
    icon: 'crown',
    component: './Help'
  },
  {
    path: '/table',
    name: '帮助文档',
    icon: 'crown',
    component: './Table'
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo', menuRender:false
      },
      {name: '接口分析', icon: 'analysis', path: '/admin/interface_analysis', component: './Admin/InterfaceAnalysis'},
    ]

  },

  {
    path: '/account',
    name: '用户',
    icon: 'crown',
    access: 'canUser',
    routes: [
      {name: '个人中心', icon: 'table', path: '/account/center', component: './Account/Center'},
      {name: '个人设置', icon: 'table', path: '/account/settings', component: './Account/Settings'},
    ],
  },

  // { path: '/', redirect: '/welcome' },
  {path: '*', layout: false, component: './404'},
];
