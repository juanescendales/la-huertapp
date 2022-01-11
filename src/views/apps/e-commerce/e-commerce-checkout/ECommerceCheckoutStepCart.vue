<template>
  <div class="list-view product-checkout mt-0">

    <!-- Products List -->
    <e-commerce-checkout-step-cart-products />

    <!-- Checkout Options -->
    <div class="checkout-options">
      <b-card>

        <label class="section-label mb-1">Opciones</label>
        <b-input-group class="input-group-merge coupons">
          <b-form-input placeholder="Cupones" />
          <b-input-group-append is-text>
            <span
              id="input-coupons"
              class="input-group-text text-primary cursor-pointer"
            >Aplicar</span>
          </b-input-group-append>
        </b-input-group>
        <hr>
        <div class="price-details">
          <h6 class="price-title">
            Detalles
          </h6>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title">
                Total Productos
              </div>
              <div class="detail-amt">
                $50
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Descuento Promocional
              </div>
              <div class="detail-amt discount-amt text-success">
                -25$
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Impuestos
              </div>
              <div class="detail-amt">
                $5
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Cargos de Envio
              </div>
              <div class="detail-amt discount-amt text-success">
                Gratis
              </div>
            </li>
          </ul>
          <hr>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title detail-total">
                Total
              </div>
              <div class="detail-amt font-weight-bolder">
                $30
              </div>
            </li>
          </ul>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Generar Orden
          </b-button>
        </div>

      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BButton, BCard, BInputGroup, BFormInput, BInputGroupAppend,
} from 'bootstrap-vue'
import ECommerceCheckoutStepCartProducts from './ECommerceCheckoutStepCartProducts.vue'

export default {
  components: {
    // BSV
    BButton,
    BCard,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,

    // SFC
    ECommerceCheckoutStepCartProducts,
  },
}
</script>
