import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monologue",
  description: "Digital Nomad Utopia",

  themeConfig: {
    logo: '',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'README', link: '/README' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Muzhongweiliang/Monologue' }
    ]
  }
})
