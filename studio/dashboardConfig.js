export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed0ed95a15f10be438c00d3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uyr8axbw',
                  apiId: '444c8b63-3443-44f1-9708-034e8c149b7f'
                },
                {
                  buildHookId: '5ed0ed96a6539af47c4353da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sb7x34hh',
                  apiId: '0f61cadd-8aa7-44d0-b792-41acbfc529dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gssvenra/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sb7x34hh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
