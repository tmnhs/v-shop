/**
 * app
 */
export const app = {
  name: 'v-shop',
};

export interface ITheme {
  assetsUrl: string;
  brandColor: string;
  viceColor: string;
  viceTextColor: string;
  colors: {
    brandColor: string;
    viceColor: string;
    viceTextColor: string;
    black: string;
    white: string;
    [key: string]: string;
  };
}

/**
 * theme
 */
export const theme: ITheme = {
  assetsUrl: '',
  brandColor: '#1ba784',
  viceColor: '#d9f6ef',
  viceTextColor: '#1ba784',
  colors: {
    brandColor: '#1ba784',
    viceColor: '#d9f6ef',
    viceTextColor: '#1ba784',
    black: '#000',
    white: '#fff',
  },
};

export interface ITabBar {
  color: string;
  selectedColor: string;
  list: {
    text: string;
    pagePath: string;
    icon: string;
  }[];
}

/**
 * tabBar
 */
export const tabBar: ITabBar = {
  color: '#c0c0c0',
  selectedColor: '#1ba784',
  list: [
    {
      text: '聊天',
      pagePath: '/chat',
      icon: 'comment-o',
    },
    {
      text: '发布',
      pagePath: '/release',
      icon: 'add-o',
    },
    {
      text: '首页',
      pagePath: '/home',
      icon: 'home-o',
    },
    {
      text: '求购',
      pagePath: '/purchase',
      icon: 'shopping-cart-o',
    },
    {
      text: '我的',
      pagePath: '/mine',
      icon: 'contact',
    },
  ],
};

/**
 * 调色板
 */
export const palettes = [
  {
    value: '#ff5179',
    label: '粉色系列',
    colors: {
      brandColor: '#ff5179',
      viceColor: '#ffe6e8',
      viceTextColor: '#ff5179',
    },
  },
  {
    value: '#ffaa00',
    label: '黄色系列',
    colors: {
      brandColor: '#ffaa00',
      viceColor: '#1d262e',
      viceTextColor: '#fff',
    },
  },
  {
    value: '#c3a769',
    label: '棕色系列',
    colors: {
      brandColor: '#c3a769',
      viceColor: '#ebecf2',
      viceTextColor: '#c3a769',
    },
  },
  {
    value: '#2f2f34',
    label: '黑色系列',
    colors: {
      brandColor: '#2f2f34',
      viceColor: '#ebecf2',
      viceTextColor: '#2f2f34',
    },
  },
  {
    value: '#0080ff',
    label: '蓝色系列',
    colors: {
      brandColor: '#0080ff',
      viceColor: '#d6e9fc',
      viceTextColor: '#0080ff',
    },
  },
  {
    value: '#884cff',
    label: '紫色系列',
    colors: {
      brandColor: '#884cff',
      viceColor: '#efe6ff',
      viceTextColor: '#884cff',
    },
  },
  {
    value: '#ee0a24',
    label: '红色系列（Vant 默认主色）',
    colors: {
      brandColor: '#ee0a24',
      viceColor: '#ffd01e',
      viceTextColor: '#fff',
    },
  },
  {
    value: '#1ba784',
    label: '绿色系列（v-shop 默认色系列）',
    link: 'http://zhongguose.com/', // 取自中国色 竹绿
    colors: {
      brandColor: '#1ba784',
      viceColor: '#d9f6ef',
      viceTextColor: '#1ba784',
    },
  },
];
