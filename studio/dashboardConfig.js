export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '608fa50c46a199f008e74eab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fpochzco',
                  apiId: '04162052-bc05-4e3a-b230-3703b8bf442c'
                },
                {
                  buildHookId: '608fa50c8f94e51be9cd63c5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4um6jcre',
                  apiId: 'd5fe50ea-99da-47ec-82e9-69c040feb07d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technologyarts/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4um6jcre.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
