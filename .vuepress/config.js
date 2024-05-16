const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'DEVNAGRI',
  description: 'We Celebrate INDIAN Languages',
  dest: 'public',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
    '@vuepress/active-header-links'
  ],
  themeConfig: {
    logo: '/logo-dark.png',
    docsDir: '/',
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: 'http://www.devnagri.com',
      },
      {
        text: 'Guide',
        link: '/guide/Client_Guide.html',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'User Guide',
          collapsable: true,
          children: [
            'Client_Guide',
            'Glossary',
            'Dota_web' ,
            'Dota_mobile_app',
            'API_Services'
          ]
        },
        {
          title: 'Translator Guide',
          collapsable: true,
          children: [
            'Platform',
            'Translation'
          ]
        },
        {
          title: 'Developer Guide',
          collapsable: true,
          children: [
            'Api',
            'VoiceTranslationApi',
            'LanguageCodes',
            'Industries'
          ]
        }
      ]
    }
  }
}
