<template>
  <b-card-code
    :title='title'
  >
    <b-card-text>
      <span>{{text}}</span>
    </b-card-text>

    <b-form-rating
      show-clear
      variant="danger"
    >
      <feather-icon
        slot="icon-empty"
        icon="FrownIcon"
        size="18"
      />
      <feather-icon
        slot="icon-half"
        icon="MehIcon"
        size="18"
      />
      <feather-icon
        slot="icon-full"
        icon="SmileIcon"
        size="18"
        class="text-success"
      />
      <feather-icon
        slot="icon-clear"
        icon="XCircleIcon"
        size="18"
      />
    </b-form-rating>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BFormRating, BCardText } from 'bootstrap-vue'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BFormRating,
    BCardText,
  },
  props: ['text', 'title'],
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
