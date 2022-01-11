<template>
  <validation-observer
    #default="{ handleSubmit }"
    ref="refFormObserver"
  >
    <b-form
      class="list-view product-checkout"
      @submit.prevent="handleSubmit(onSubmit)"
    >

      <!-- Left Form -->
      <b-card no-body>
        <b-card-header class="flex-column align-items-start">
          <b-card-title>Agregar nueva Direccion</b-card-title>
          <b-card-text class="text-muted mt-25">
            Por favor verificar bien los datos de envio.
          </b-card-text>
        </b-card-header>
        <b-card-body>
          <b-row>

            <!-- Full Name -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Nombre Completo"
                rules="required"
              >
                <b-form-group
                  label="Nombre Completo"
                  label-for="full-name"
                  class="mb-2"
                >
                  <b-form-input
                    id="full-name"
                    v-model="addressDetails.fullName"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Mobile Number -->
            <b-col
              cols="12"
              md="6"
              class="mb-2"
            >
              <validation-provider
                #default="validationContext"
                name="Numero Celular"
                rules="required|integer"
              >
                <b-form-group
                  label="Numero Celular"
                  label-for="mobile-number"
                >
                  <b-form-input
                    id="mobile-number"
                    v-model="addressDetails.mobile"
                    type="number"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Flat House No -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Direccion"
                rules="required"
              >
                <b-form-group
                  label="Direccion"
                  label-for="flat-house-no"
                  class="mb-2"
                >
                  <b-form-input
                    id="flat-house-no"
                    v-model="addressDetails.houseNo"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Landmark -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Detalles"
                rules=""
              >
                <b-form-group
                  label="Detalles"
                  label-for="landmark"
                  class="mb-2"
                >
                  <b-form-input
                    id="landmark"
                    v-model="addressDetails.landmark"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- City -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Ciudad"
                rules="required"
              >
                <b-form-group
                  label="Ciudad"
                  label-for="city"
                  class="mb-2"
                >
                  <b-form-input
                    id="city"
                    v-model="addressDetails.city"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- pincode -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Codgio Postal"
                rules="required|integer"
              >
                <b-form-group
                  label="Codgio Postal"
                  label-for="pincode"
                  class="mb-2"
                >
                  <b-form-input
                    id="pincode"
                    v-model="addressDetails.pincode"
                    type="number"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- state -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Departamento"
                rules="required"
              >
                <b-form-group
                  label="Departamento"
                  label-for="state"
                  class="mb-2"
                >
                  <b-form-input
                    id="state"
                    v-model="addressDetails.state"
                    :state="getValidationState(validationContext)"
                    trim
                  />
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Address Type -->
            <b-col
              cols="12"
              md="6"
            >
              <validation-provider
                #default="validationContext"
                name="Tipo de direccion"
                rules="required"
              >

                <b-form-group
                  label="Tipo de direccion"
                  label-for="address-type"
                  :state="getValidationState(validationContext)"
                >
                  <v-select
                    v-model="addressDetails.addressType"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    :options="['Casa', 'Trabajo', 'Otro']"
                    input-id="address-type"
                    :clearable="false"
                  />

                  <b-form-invalid-feedback :state="getValidationState(validationContext)">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>

            <!-- Submit Button -->
            <b-col cols="12">
              <b-button
                variant="primary"
                type="submit"
              >
                Guardar y Enviar Aqui
              </b-button>
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>

      <!-- Right Col -->
      <div class="customer-card">
        <b-card title="John Doe">
          <b-card-text class="mb-0">
            Calle 44 B # 65 - 80. Apto 702
          </b-card-text>
          <b-card-text>Barrio suramericana</b-card-text>
          <b-card-text>310-674-7926</b-card-text>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Enviar a Esta Direccion
          </b-button>
        </b-card>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
import {
  BForm, BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BFormGroup, BFormInput, BButton, BFormInvalidFeedback,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import vSelect from 'vue-select'
import { required, integer } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {
    // BSV
    BForm,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    BFormInvalidFeedback,

    // Form Validation
    ValidationProvider,
    ValidationObserver,

    // 3rd party
    vSelect,
  },
  props: {
    addressDetails: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(() => {})

    const onSubmit = () => {
      emit('next-step')
    }

    return {

      // Form
      onSubmit,

      // Form Validation
      refFormObserver,
      getValidationState,
      resetForm,

      // FOrm Validators
      required,
      integer,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
