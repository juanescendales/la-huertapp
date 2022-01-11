import mock from '@/@fake-db/mock'

// const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
// const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

/* eslint-disable global-require */
const data = {
  profileUser: {
    id: 11,
    avatar: require('@/assets/images/avatars/8.png'),
    fullName: 'John Doe',
    role: 'admin',
    about:
      'Me gusta el fútbol',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false,
    },
  },
  contacts: [
    {
      id: 1,
      fullName: 'Felecia Rower',
      role: 'Frontend Developer',
      about: 'Lorem ipsum dolor sit amet.',
      avatar: require('@/assets/images/avatars/1.png'),
      status: 'offline',
    },
    {
      id: 2,
      fullName: 'Adalberto Granzin',
      role: 'UI/UX Designer',
      about:
        'Lorem ipsum dolor sit amet.',
      avatar: require('@/assets/images/avatars/2.png'),
      status: 'busy',
    },
    {
      id: 3,
      fullName: 'Joaquina Weisenborn',
      role: 'Town planner',
      about:
        'Lorem ipsum dolor sit amet.',
      avatar: require('@/assets/images/avatars/3.png'),
      status: 'busy',
    },
    {
      id: 9,
      fullName: 'Bridgett Omohundro',
      role: 'Lorem ipsum dolor sit amet.',
      about:
        'Lorem ipsum dolor sit amet.',
      avatar: require('@/assets/images/avatars/9.png'),
      status: 'offline',
    },
    {
      id: 10,
      fullName: 'Zenia Jacobs',
      role: 'Building surveyor',
      about: 'Lorem ipsum dolor sit amet.',
      avatar: require('@/assets/images/avatars/10.png'),
      status: 'away',
    },
  ],
  chats: [
    {
      id: 1,
      userId: 2,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hola!',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Hola, como puedo ayudarte?',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message: 'Quiero agendar una cita psicológica',
          time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Por supuesto, ve al calendario y agéndala',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message: 'Ok, gracias',
          time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
          senderId: 11,
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      unseenMsgs: 1,
      chat: [
        {
          message: '¿Cómo podemos ayudar? ¡Estamos aquí por tí!',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Hola John, estoy buscando la mejorar mis finanzas',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'Quero una asesoría',
          time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'Por supuesto',
          time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Tenemos muchos profesionales a tu servicio',
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Que bien!',
          time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
          senderId: 1,
        },
      ],
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/apps/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats
    .map(chat => {
      const contact = data.contacts.find(c => c.id === chat.userId)
      contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }
      return contact
    })
    .reverse()

  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status,
  }
  return [200, { chatsContacts, contacts: data.contacts, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/apps/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet(/\/apps\/chat\/chats\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const chat = data.chats.find(c => c.userId === userId)
  if (chat) chat.unseenMsgs = 0

  return [
    200,
    {
      chat,
      contact: data.contacts.find(c => c.id === userId),
    },
  ]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost(/\/apps\/chat\/chats\/\d+/).reply(config => {
  // Get user id from URL
  const contactId = Number(config.url.substring(config.url.lastIndexOf('/') + 1))

  // Get event from post data
  const { message, senderId } = JSON.parse(config.data)

  let activeChat = data.chats.find(chat => chat.userId === contactId)
  const newMessageData = {
    message,
    time: new Date(),
    senderId,
  }

  // If there's new chat for user create one
  let isNewChat = false
  if (activeChat === undefined) {
    isNewChat = true

    const { length } = data.chats
    const lastId = data.chats[length - 1].id

    data.chats.push({
      id: lastId + 1,
      userId: contactId,
      unseenMsgs: 0,
      chat: [],
    })
    activeChat = data.chats[data.chats.length - 1]
  }
  activeChat.chat.push(newMessageData)

  const response = { newMessageData }
  if (isNewChat) response.chat = activeChat

  return [201, response]
})
