/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const projectName = 'GraphAr';
const mainRepoName = 'incubator-graphar';
const siteRepoName = 'incubator-graphar-website';

const config: Config = {
  title: `Apache ${projectName}`,
  tagline: `An open source, standard data file format for graph data storage and retrieval`,
  favicon: 'img/favicon.ico',
  url: `https://${projectName.toLowerCase()}.apache.org/`,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './docs/sidebars.ts',
          editUrl: `https://github.com/apache/${mainRepoName}/edit/main/`,
          exclude: ['**/README.md'],
        },
        blog: {
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          showReadingTime: true,
          editUrl: `https://github.com/apache/${siteRepoName}/edit/main/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./community/sidebars.ts'),
        editUrl: `https://github.com/apache/${siteRepoName}/edit/main/`,
      },
    ],
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    image: 'img/social-card.png',
    navbar: {
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'right',
          label: 'Format',
          to: '/docs/specification/format'
        },
        {
          type: 'docSidebar',
          sidebarId: 'documentation',
          position: 'right',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'community',
          position: 'right',
          label: 'Community',
          docsPluginId: 'community'
        },
        {
          position: 'right',
          label: 'API Reference',
          items: [
            {
              label: 'C++ Library',
              to: 'pathname:///docs/cpp/index.html'
            },
            // TODO: Add Java library when it is available
            // {
            //   label: 'Java Library',
            //  to: 'pathname:///docs/java/'
            // },
            {
              label: 'Spark Library',
              to: 'pathname:///docs/spark/'
            },
            {
              label: 'PySpark Library',
              to: 'pathname:///docs/pyspark/'
            },
          ]
        },
        { to: '/download', label: 'Download', position: 'right' },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'dropdown',
          label: 'ASF',
          position: 'right',
          items: [
            {
              label: 'Foundation',
              to: 'https://www.apache.org/',
            },
            {
              label: 'License',
              to: 'https://www.apache.org/licenses/',
            },
            {
              label: 'Events',
              to: 'https://www.apache.org/events/current-event.html',
            },
            {
              label: 'Privacy',
              to: 'https://privacy.apache.org/policies/privacy-policy-public.html',
            },
            {
              label: 'Security',
              to: 'https://www.apache.org/security/',
            },
            {
              label: 'Sponsorship',
              to: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Thanks',
              to: 'https://www.apache.org/foundation/thanks.html',
            },
            {
              label: 'Code of Conduct',
              to: 'https://www.apache.org/foundation/policies/conduct.html',
            },
          ],
        },
        {
          href: `https://github.com/apache/${mainRepoName}`,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      // TODO: Replace with your project's social links
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Mailing list',
              href: 'https://lists.apache.org/list.html?dev@graphar.apache.org',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/grapharworkspace/shared_invite/zt-1wh5vo828-yxs0MlXYBPBBNvjOGhL4kQ',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Format',
              to: '/docs/specification/format',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'GraphAr',
              href: 'https://github.com/apache/incubator-graphar',
            },
            {
              label: 'Website',
              href: 'https://github.com/apache/incubator-graphar-website',
            },
            {
              label: 'Testing',
              href: 'https://github.com/apache/incubator-graphar-testing',
            },
          ],
        },
      ],
      logo: {
        width: 200,
        src: '/img/apache-incubator.svg',
        href: 'https://incubator.apache.org/',
        alt: 'Apache Incubator logo',
      },
      copyright: `<div>
      <p>
        Apache ${projectName} is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator. Incubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications, and decision making process have stabilized in a manner consistent with other successful ASF projects. While incubation status is not necessarily a reflection of the completeness or stability of the code, it does indicate that the project has yet to be fully endorsed by the ASF.
      </p>
      <p>
        Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0. <br/>
        Apache, the names of Apache projects, and the feather logo are either registered trademarks or trademarks of the Apache Software Foundation in the United States and/or other countries.
      </p>
      </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
