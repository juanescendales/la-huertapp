import mock from '@/@fake-db/mock'
// eslint-disable-next-line object-curly-newline
import { paginateArray, sortCompare, randomDate, getRandomInt } from '@/@fake-db/utils'

const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)

/* eslint-disable global-require */
const data = {
  products: [
    {
      id: 1,
      name: 'Banano',
      slug: 'banano-1',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruta',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/1.png'),
      hasFreeShipping: false,
    },
    {
      id: 2,
      name: 'Almendra',
      slug: 'almendra-2',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruto Seco',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/2.png'),
      hasFreeShipping: false,
    },
    {
      id: 3,
      name: 'Papa',
      slug: 'papa-3',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Tuberculo',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/3.png'),
      hasFreeShipping: false,
    },
    {
      id: 4,
      name: 'Yuca',
      slug: 'yuca-4',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Tuberculo',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/4.png'),
      hasFreeShipping: false,
    },
    {
      id: 5,
      name: 'Cafe',
      slug: 'cafe-5',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruta',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/5.png'),
      hasFreeShipping: false,
    },
    {
      id: 6,
      name: 'Tomate',
      slug: 'tomate-6',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruta',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/6.png'),
      hasFreeShipping: false,
    },
    {
      id: 7,
      name: 'Lechuga',
      slug: 'lechuga-7',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Verdura',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/7.png'),
      hasFreeShipping: false,
    },
    {
      id: 8,
      name: 'Avellana',
      slug: 'avellana-8',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruto Seco',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/8.png'),
      hasFreeShipping: false,
    },
    {
      id: 9,
      name: 'Frijol',
      slug: 'frijol-9',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Legumbre',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/9.png'),
      hasFreeShipping: false,
    },
    {
      id: 10,
      name: 'Garbanzo',
      slug: 'garbanzo-10',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Legumbre',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/10.png'),
      hasFreeShipping: false,
    },
    {
      id: 11,
      name: 'Zanahoria',
      slug: 'zanahoria-11',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Verdura',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/11.png'),
      hasFreeShipping: false,
    },
    {
      id: 12,
      name: 'Cebolla',
      slug: 'cebolla-12',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Verdura',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/12.png'),
      hasFreeShipping: false,
    },
    {
      id: 13,
      name: 'Pistacho',
      slug: 'pistacho-13',
      description:
        'Incididunt culpa commodo labore duis laborum duis minim aliquip magna aliqua velit in. Anim incididunt amet velit dolor aliquip. Anim reprehenderit sunt pariatur velit sit sunt occaecat. Exercitation exercitation proident velit fugiat. Ea cillum veniam labore minim minim est exercitation magna irure. Veniam aliqua aute qui ex exercitation elit sunt nulla.',
      brand: 'Fruto Seco',
      price: 10,
      image: require('@/assets/images/pages/eCommerce/13.png'),
      hasFreeShipping: false,
    },
  ],
  userWishlist: [
    { id: 1, productId: 26 },
    { id: 2, productId: 23 },
    { id: 3, productId: 11 },
    { id: 4, productId: 10 },
    { id: 5, productId: 5 },
    { id: 6, productId: 8 },
    { id: 7, productId: 9 },
    { id: 8, productId: 13 },
    { id: 9, productId: 17 },
  ],
  userCart: [
    { id: 1, productId: 1, qty: 1 },
    { id: 2, productId: 2, qty: 2 },
    { id: 3, productId: 3, qty: 1 },
    { id: 4, productId: 4, qty: 1 },
    { id: 5, productId: 5, qty: 1 },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/products').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', sortBy = 'featured', perPage = 9, page = 1 } = config.params

  const queryLowered = q.toLowerCase()

  const filteredData = data.products.filter(product => product.name.toLowerCase().includes(queryLowered))

  let sortDesc = false
  const sortByKey = (() => {
    if (sortBy === 'price-desc') {
      sortDesc = true
      return 'price'
    }
    if (sortBy === 'price-asc') {
      return 'price'
    }
    sortDesc = true
    return 'id'
  })()

  const sortedData = filteredData.sort(sortCompare(sortByKey))
  if (sortDesc) sortedData.reverse()

  const paginatedData = JSON.parse(JSON.stringify(paginateArray(sortedData, perPage, page)))

  paginatedData.forEach(product => {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1
    /* eslint-enable */
  })

  return [
    200,
    {
      products: paginatedData,
      total: filteredData.length,
      userWishlist: data.userWishlist,
      userCart: data.userCart,
    },
  ]
})

// ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------
mock.onGet(/\/apps\/ecommerce\/products\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.products.findIndex(p => p.id === productId)
  const product = data.products[productIndex]

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
    product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1

    // * Add Dummy data for details page
    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info']

    return [200, { product }]
  }
  return [404]
})

// ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/wishlist').reply(() => {
  const products = data.userWishlist.map(wishlistProduct => {
    const product = data.products.find(p => p.id === wishlistProduct.productId)
    product.isInCart = data.userCart.findIndex(p => p.productId === wishlistProduct.productId) > -1
    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------
mock.onGet('/apps/ecommerce/cart').reply(() => {
  const products = data.userCart.map(cartProduct => {
    const product = data.products.find(p => p.id === cartProduct.productId)

    // Other data
    product.isInWishlist = data.userWishlist.findIndex(p => p.productId === cartProduct.productId) > -1
    product.qty = cartProduct.qty
    product.shippingDate = randomDate(nextDay)
    product.offers = getRandomInt(1, 4)
    product.discountPercentage = getRandomInt(3, 20)

    return product
  })

  return [200, { products }]
})

// ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------
mock.onPost('/apps/ecommerce/cart').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userCart
  let lastId = 0
  if (length) lastId = data.userCart[length - 1].i

  data.userCart.push({
    id: lastId + 1,
    productId,
    qty: 1,
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userCart.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userCart.splice(productIndex, 1)

  return [200]
})

// ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------
mock.onPost('/apps/ecommerce/wishlist').reply(config => {
  // Get product from post data
  const { productId } = JSON.parse(config.data)

  const { length } = data.userWishlist
  let lastId = 0
  if (length) lastId = data.userWishlist[length - 1].i

  data.userWishlist.push({
    id: lastId + 1,
    productId,
  })

  return [201]
})

// ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------
mock.onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(config => {
  // Get product id from URL
  let productId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  productId = Number(productId)

  const productIndex = data.userWishlist.findIndex(i => i.productId === productId)
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1)

  return [200]
})
