<template>
  <div class="sidebar-detached sidebar-left">
    <div class="sidebar">
      <div
        class="sidebar-shop"
        :class="{'show': mqShallShowLeftSidebar}"
      >
        <b-row>
          <b-col cols="12">
            <h6 class="filter-heading d-none d-lg-block">
              Filtros
            </h6>
          </b-col>
        </b-row>

        <!-- Filters' Card -->
        <b-card>
          <!-- Categories -->
          <div class="product-categories">
            <h6 class="filter-title">
              Categorias
            </h6>
            <b-form-radio-group
              v-model="filters.categories"
              class="categories-radio-group"
              stacked
              :options="filterOptions.categories"
            />
          </div>
        </b-card>
      </div>
    </div>

    <div
      class="body-content-overlay"
      :class="{'show': mqShallShowLeftSidebar}"
      @click="$emit('update:mq-shall-show-left-sidebar', false)"
    />
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BFormRadioGroup,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BFormRadioGroup,
    BCard,
  },
  props: {
    filters: {
      type: Object,
      required: true,
    },
    filterOptions: {
      type: Object,
      required: true,
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-slider.scss';
</style>

<style lang="scss" scoped>
.categories-radio-group,
.brands-radio-group,
.price-range-defined-radio-group {
    ::v-deep > .custom-control {
    margin-bottom: 0.75rem;
  }
}
</style>
