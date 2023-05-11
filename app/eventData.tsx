import { formatDate } from './utils/utils'
export const eventData = [
    {
        id: 1,
        name: 'Sample Event',
        date: formatDate(new Date(), 'YYYY-MM-DD'),
        services: ['General Cleaning'],
        attachments: [
          {
            name: 'Sample Image',
            type: 'image/png',
            url: '/sample-image.png',
          },
        ],
    },
    {
        id: 1,
        name: 'Sample Event 2',
        date: formatDate(new Date().setDate(new Date().getDate() + 1), 'YYYY-MM-DD'),
        services: ['General Cleaning', 'Wash Clothes'],
        attachments: [
          {
            name: 'Sample Image',
            type: 'image/png',
            url: '/sample-image.png',
          },
        ],
    },
    {
        id: 1,
        name: 'Sample Event 3',
        date: formatDate(new Date().setDate(new Date().getDate() + 1), 'YYYY-MM-DD'),
        services: ['General Cleaning', 'Wash Clothes'],
        attachments: [
          {
            name: 'Sample Image',
            type: 'image/png',
            url: '/sample-image.png',
          },
        ],
    }
]