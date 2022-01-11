<template>
  <div class="list-view product-checkout">

    <!-- Left Card -->
    <b-card no-body>
      <b-card-header class="flex-column align-items-start">
        <b-card-title>Opciones de Pago</b-card-title>
        <b-card-text class="text-muted mt-25">
          Por favor verificar que estas seleccionado la opcion correcta.
        </b-card-text>
      </b-card-header>
      <b-card-body>
        <h6 class="card-holder-name my-75">
          John Doe
        </h6>

        <!-- Radios -->
        <b-form-group>
          <b-form-radio
            name="payment-method"
            value="john-doe-debit-card"
            checked="john-doe-debit-card"
          >
            Tajeta de Credito 12XX XXXX XXXX 0000
          </b-form-radio>
          <div class="d-flex flex-wrap align-items-center justify-content-start my-1">
            <label
              for="cvv"
              class="text-nowrap mr-1 mb-1"
            >
              Ingresar CVV:
            </label>
            <b-form-input
              id="cvv"
              v-model="paymentDetails.cvv"
              class="mr-1 mb-1"
              trim
            />
            <b-button
              variant="primary"
              class="mb-1"
            >
              Continuar
            </b-button>
          </div>

          <hr class="mb-2 mt-1">

          <b-form-radio
            name="payment-method"
            value="debit-atm-credit-card"
          >
            Credito / Debito
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="net-banking"
          >
            PSE
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="emi"
          >
            Baloto
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="cod"
          >
            Pago contraentrega
          </b-form-radio>
        </b-form-group>
      </b-card-body>
    </b-card>

    <!-- Right Card -->
    <div class="amount-payable checkout-options">
      <b-card title="Price Details">

        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <div class="details-title">
              Precio Total
            </div>
            <div class="detail-amt">
              <strong>$30</strong>
            </div>
          </li>
          <li class="price-detail">
            <div class="details-title">
              Cargos por Envio
            </div>
            <div class="detail-amt discount-amt text-success">
              Gratis
            </div>
          </li>
        </ul>
        <hr>
        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <div class="details-title">
              Monto a pagar
            </div>
            <div class="detail-amt font-weight-bolder">
              $30
            </div>
          </li>
        </ul>

      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BFormGroup, BFormRadio, BFormInput, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    // BSV
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BFormGroup,
    BFormRadio,
    BFormInput,
    BButton,
  },
  props: {
    paymentDetails: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
#cvv {
  width: auto;
}
</style>
