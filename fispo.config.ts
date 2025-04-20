import { defineConfig } from "fispo-core";
import theme from "@fispo/particle/config";
import { ThemeConfig } from "@fispo/particle";

export default defineConfig<ThemeConfig>({
  title: "fispo的个人博客",
  author: "fispo",
  description: "学无止境",
  notFoundImg: "/404.png",
  theme: theme,
  themeConfig: {
    navMenus: [
      {
        title: "首页",
        path: "/",
        icon: "home",
      },
      {
        title: "标签",
        path: "/tag",
        icon: "tag",
      },
      {
        title: "分类",
        path: "/category",
        icon: "folder-open",
      },
      {
        title: "关于",
        path: "/about",
        icon: "heart",
      },
    ],
  },
  deploy: {
    repo: "https://github.com/GitHubxxx17/fispo-particle.git",
    branch: "gh-pages",
  },
});
