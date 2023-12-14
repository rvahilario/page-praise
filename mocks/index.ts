import { BookDetails } from '@/src/@types'

export const MOCK_BOOK: BookDetails = {
  id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
  name: 'O Hobbit',
  author: 'J.R.R. Tolkien',
  summary:
    'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
  cover_url: '/images/books/o-hobbit.png',
  total_pages: 360,
  created_at: '2023-06-01T16:31:49.943Z',
  categories: [
    {
      book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      categoryId: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
      category: {
        id: '8c4a4a4d-cbc4-4d2c-bb46-e95b0a536e09',
        name: 'Ficção',
      },
    },
    {
      book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      categoryId: 'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67',
      category: {
        id: 'e9c6d3f6-f3ec-4c52-ae28-6adcbab6ee67',
        name: 'Aventura',
      },
    },
  ],
  ratings: [
    {
      id: 'a1d653f3-6811-49fe-9d0e-cbbeff9a5f13',
      rate: 5,
      description: 'Uma obra prima!',
      created_at: '2023-06-20T13:34:48.015Z',
      book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      user_id: '0e26aef7-a279-460d-afa9-a791b3b996a7',
      user: {
        id: '0e26aef7-a279-460d-afa9-a791b3b996a7',
        email: 'jasonemsw10@gmail.com',
        name: 'Jason Santos',
        avatar_url: 'https://avatars.githubusercontent.com/u/110934550?v=4',
        created_at: '2023-06-15T19:03:09.428Z',
      },
    },
    {
      id: 'e246990a-569e-402c-b7df-7c6ba936bac3',
      rate: 4,
      description:
        'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget',
      created_at: '2023-06-01T16:31:49.943Z',
      book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      user_id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
      user: {
        id: '48e458c0-8b1e-4994-b85a-1e1cfcc9dd60',
        email: 'jaxsondias@email.com.br',
        name: 'Jaxson Dias',
        avatar_url:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        created_at: '2023-06-01T16:31:49.943Z',
      },
    },
    {
      id: '1437330c-221e-41b4-98a6-cb815397d10f',
      rate: 5,
      description:
        'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh',
      created_at: '2023-06-01T16:31:49.943Z',
      book_id: '375948a7-bca3-4b59-9f97-bfcde036b4ca',
      user_id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
      user: {
        id: '4383f783-6ce1-4f92-b1dd-7a7a693c4aef',
        email: 'lindseyphilips@email.com.br',
        name: 'Lindsey Philips',
        avatar_url:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        created_at: '2023-06-01T16:31:49.943Z',
      },
    },
  ],
  avgRating: 4.666666666666667,
}
