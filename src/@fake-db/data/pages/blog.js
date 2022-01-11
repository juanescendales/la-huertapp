import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  // blog list
  blogList: [
    {
      id: 1,
      img: require('@/assets/images/slider/02.jpg'),
      title: 'Diseño de espacios',
      avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      userFullName: 'Ghani Pradita',
      blogPosted: 'Jan 10, 2020',
      tags: ['Hashtag', 'Moda'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 76,
    },
    {
      id: 2,
      img: require('@/assets/images/slider/06.jpg'),
      title: 'Dulces',
      avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
      userFullName: 'Jorge Griffin',
      blogPosted: 'Jan 10, 2020',
      tags: ['Juegos', 'Multimedia'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 27,
    },
    {
      id: 3,
      img: require('@/assets/images/slider/04.jpg'),
      title: 'Manejo del tiempo',
      avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      userFullName: 'Claudia Neal',
      blogPosted: 'Jan 10, 2020',
      tags: ['Juegos', 'Comida'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 243,
    },
    {
      id: 4,
      img: require('@/assets/images/slider/03.jpg'),
      title: 'Paletas que no se derriten',
      avatar: require('@/assets/images/portrait/small/avatar-s-14.jpg'),
      userFullName: 'Fred Boone',
      blogPosted: 'Jan 10, 2020',
      tags: ['Multimedia'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 10,
    },
    {
      id: 5,
      img: require('@/assets/images/slider/09.jpg'),
      title: 'Música',
      avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
      userFullName: 'Billy French',
      blogPosted: 'Jan 10, 2020',
      tags: ['Hashtag', 'Moda', 'Multimedia'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 319,
    },
    {
      id: 6,
      img: require('@/assets/images/slider/10.jpg'),
      title: 'Skateboarding',
      avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
      userFullName: 'Helena Hunt',
      blogPosted: 'Jan 10, 2020',
      tags: ['Moda', 'Multimedia'],
      excerpt: 'Lorem ipsum dolor sit amet.',
      comment: 1500,
    },
  ],

  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        id: 7,
        img: require('@/assets/images/banner/banner-22.jpg'),
        title: 'Cocinando cupcakes',
        createdTime: 'Jan 14 2020',
      },
      {
        id: 8,
        img: require('@/assets/images/banner/banner-27.jpg'),
        title: 'Viajes',
        createdTime: 'Mar 04 2020',
      },
      {
        id: 9,
        img: require('@/assets/images/banner/banner-39.jpg'),
        title: 'Paseo en lancha',
        createdTime: 'Feb 18 2020',
      },
      {
        id: 10,
        img: require('@/assets/images/banner/banner-35.jpg'),
        title: 'Origami',
        createdTime: 'Oct 08 2020',
      },
    ],
    categories: [
      { category: 'Moda', icon: 'WatchIcon' },
      { category: 'Comida', icon: 'ShoppingCartIcon' },
      { category: 'Juegos', icon: 'CommandIcon' },
      { category: 'Hashtag', icon: 'HashIcon' },
      { category: 'Multimedia', icon: 'VideoIcon' },
    ],
  },

  // detail
  blogDetail: {
    blog: {
      img: require('@/assets/images/banner/banner-12.jpg'),
      title: 'Las mejores funciones para iOS y diseño web',
      avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Juegos', 'Multimedia'],
      content:
        '<p>\n'
          + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit quis nunc tempor lacinia. Proin bibendum imperdiet elit. Pellentesque ut consequat quam. Maecenas vitae dolor orci. Proin dolor est, pellentesque id pretium sed, consequat ac purus. Nam dapibus congue bibendum. Quisque ac dignissim libero.\n'
          + '<br>'
          + 'Integer et ex auctor, viverra arcu a, tempus ipsum. Nam facilisis lorem erat, et elementum risus viverra ut. Nam bibendum eget nunc non aliquam. Praesent pretium arcu maximus, sollicitudin nibh at, consectetur urna. Mauris et suscipit est, vel aliquam metus. Vestibulum dignissim erat nunc, sed gravida arcu tempor nec. Proin rutrum consectetur erat vitae pretium. Mauris in ullamcorper lectus. Fusce faucibus scelerisque massa sed convallis. Morbi at vulputate dui. Nam vel magna sed tellus accumsan lacinia non vitae nulla. Etiam urna nulla, sollicitudin eget vulputate a, volutpat id eros. Praesent sit amet enim commodo, viverra elit vel, placerat lorem. Pellentesque ut viverra augue, et malesuada risus.\n'
          + '<br>'
          + 'Sed sit amet sem scelerisque arcu efficitur ultrices. Aliquam venenatis ligula sapien, at vestibulum eros pharetra eu. Cras ornare tempor dolor, et euismod leo congue luctus. Aliquam sit amet nibh feugiat, congue lorem ut, aliquam nulla. Nulla nisi magna, aliquam vel mi eu, molestie pulvinar eros. Donec ultrices elit quis dui imperdiet, et semper ex varius. Mauris commodo, sem sagittis fringilla varius, nisi elit sodales urna, feugiat pellentesque metus lorem a justo. Praesent nulla lectus, ullamcorper non risus vel, fringilla sollicitudin ex. Morbi consequat elementum ultrices. Vestibulum ultricies elementum vestibulum. Aliquam quis molestie magna.\n'
          + '<br>'
          + 'Vestibulum ac scelerisque diam. Praesent velit magna, pharetra et augue et, finibus aliquam augue. Curabitur laoreet sollicitudin lorem at ultricies. Sed elementum malesuada arcu. Vestibulum sit amet nisi venenatis ex mollis commodo ac sit amet purus. Nunc ante ante, porttitor sed porta vitae, consectetur ac mauris. In tincidunt lacinia sollicitudin. Aenean scelerisque elit non dui consectetur fringilla. Pellentesque ut est erat. Aenean dapibus velit non magna euismod vulputate. Nullam tempus non felis non facilisis. Sed convallis nulla nec neque porttitor, vel blandit elit tincidunt. Duis imperdiet diam sed consequat condimentum. Quisque aliquet tempus blandit. Nullam id vulputate ipsum.\n'
          + '<br>'
          + 'Nulla euismod, nibh ut ornare efficitur, tortor dui venenatis metus, ac elementum velit arcu at sem. Praesent ut libero nec neque scelerisque ultricies. Suspendisse sagittis facilisis diam, vel rutrum purus. Nullam vel mattis neque. Sed orci felis, interdum eu orci eget, ultricies hendrerit dolor. Proin at nibh vel quam elementum pulvinar. Vestibulum dapibus justo in condimentum semper. Nullam lectus lacus, vehicula ac congue vitae, pretium pharetra turpis.</p>',
      comments: 19100,
      bookmarked: 139,
      UserComment: [
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
          fullName: 'Willie Clark',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
    comments: [
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
        userFullName: 'Chad Alexander',
        commentedAt: 'May 24, 2020',
        commentText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
  },

  // edit
  blogEdit: {
    avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
    userFullName: 'Chad Alexander',
    createdTime: 'May 24, 2020',
    blogTitle: 'Las mejores funciones para iOS y diseño web',
    blogCategories: ['Moda', 'Juegos'],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt:
      '<p>Las mejores funciones para iOS y diseño web</p>',
    featuredImage: require('@/assets/images/slider/03.jpg'),
  },
}
/* eslint-disable global-require */
mock.onGet('/blog/list/data').reply(() => [200, data.blogList])
mock.onGet('/blog/list/data/sidebar').reply(() => [200, data.blogSidebar])
mock.onGet('/blog/list/data/detail').reply(() => [200, data.blogDetail])
mock.onGet('/blog/list/data/edit').reply(() => [200, data.blogEdit])
