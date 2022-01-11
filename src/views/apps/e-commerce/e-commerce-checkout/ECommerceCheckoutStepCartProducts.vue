<template>

  <div class="checkout-items">
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >

      <!-- Product Image -->
      <div class="item-img">
        <b-link>
          <b-img
            :src="product.image"
            :alt="`${product.name}-${product.id}`"
          />
        </b-link>
      </div>

      <!-- Product Details: Card Body -->
      <b-card-body>
        <div class="item-name">
          <h6 class="mb-0">
            <b-link class="text-body">
              {{ product.name }}
            </b-link>
          </h6>
          <span class="item-company"><b-link class="company-name">{{ product.brand }}</b-link></span>
        </div>
        <span class="text-success mb-1">Disponible</span>
        <div class="item-quantity">
          <span class="quantity-title">Qty:</span>
          <b-form-spinbutton
            v-model="product.qty"
            size="sm"
            class="ml-75"
            inline
          />
        </div>
        <span class="delivery-date text-muted">Para entrega {{ formatDate(product.shippingDate, { month: 'numeric', day: 'numeric' }) }}</span>
        <span class="text-success">{{ product.discountPercentage }}% mas economico que el mercado convencional</span>
      </b-card-body>

      <!-- Product Options/Actions -->
      <div class="item-options text-center">
        <div class="item-wrapper">
          <div class="item-cost">
            <h4 class="item-price">
              ${{ product.price }}
            </h4>
            <p
              v-if="product.hasFreeShipping"
              class="card-text shipping"
            >
              <b-badge
                pill
                variant="light-success"
              >
                Free Shipping
              </b-badge>
            </p>
          </div>
        </div>
        <b-button
          variant="light"
          class="mt-1 remove-wishlist"
          @click="removeProductFromCartClick(product)"
        >
          <feather-icon
            icon="XIcon"
            class="mr-50"
          />
          <span>Remove</span>
        </b-button>
      </div>
    </b-card>
  </div>

</template>

<script>
import {
  BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import { formatDate } from '@core/utils/filter'
import store from '@/store'
import { useEcommerce, useEcommerceUi } from '../useEcommerce'

export default {
  components: {
    BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
  },
  setup() {
    const products = ref([])

    const { toggleProductInWishlist } = useEcommerceUi()
    const { removeProductFromCart } = useEcommerce()
    const removeProductFromCartClick = product => {
      removeProductFromCart(product.id)
        .then(() => {
          const productIndex = products.value.findIndex(p => p.id === product.id)
          products.value.splice(productIndex, 1)

          store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', products.value.length)
        })
    }

    const fetchCartProducts = () => {
      store.dispatch('app-ecommerce/fetchCartProducts')
        .then(response => {
          products.value = response.data.products
        })
    }
    fetchCartProducts()

    return {
      products,

      // UI
      toggleProductInWishlist,
      removeProductFromCartClick,

      // Filter
      formatDate,
    }
  },
}
</script>

<style>

</style>
