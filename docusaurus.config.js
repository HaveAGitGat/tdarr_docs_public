const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tdarr',
  tagline: 'Transcode Automation',
  url: 'https://docs.tdarr.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Tdarr', // Usually your GitHub org/user name.
  projectName: 'Tdarr', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Tdarr Logo',
        src: 'img/favicon.ico',
        href: 'https://tdarr.io',
        target: '_self',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome/what',
          position: 'left',
          label: 'Docs',
        },
        {to: 'blog', label: 'Blog', position: 'left'}, // or position: 'right'
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: '/docs/installation/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/waKdfJR',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/HaveAGitGat/Tdarr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tdarr, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 30,
        },
      },
    ],
  ],
};
