<template>
  <b-row class="match-height">
    <b-col lg="12">
      <form-rating-icon title="Humor depresivo (tristeza, desesperanza, desamparo, sentimiento de inutilidad)" text="Calificación" />
      <form-rating-icon title="Sentimientos de culpa" text="Calificación" />
      <form-rating-icon title="Suicidio" text="Calificación" />
      <form-rating-icon title="Insomnio precoz" text="Calificación" />
      <form-rating-icon title="Insomnio intermedio" text="Calificación" />
      <form-rating-icon title="Insomnio tardí" text="Calificación" />
      <form-rating-icon title="Trabajo y actividades" text="Calificación" />
      <form-rating-icon title="Inhibición psicomotora (lentitud de pensamiento y lenguaje, facultad de concentración disminuida, disminución de la actividad motora" text="Calificación" />
      <form-rating-icon title="Agitación psicomotora" text="Calificación" />
      <form-rating-icon title="Ansiedad psíquica" text="Calificación" />
      <form-rating-icon title="Ansiedad somática (signos físicos de ansiedad: gastrointestinales: sequedad de boca, diarrea, eructos, indigestión, etc; cardiovasculares: palpitaciones, cefaleas; respiratorios: hiperventilación, suspiros; frecuencia de micción incrementada; transpiración)" text="Calificación" />
      <form-rating-icon title="Síntomas somáticos gastrointestinales" text="Calificación" />
      <form-rating-icon title="Síntomas somáticos generales" text="Calificación" />
      <form-rating-icon title="Síntomas genitales (tales como: disminución de la libido y trastornos menstruales" text="Calificación" />
      <form-rating-icon title="Hipocondría" text="Calificación" />
      <form-rating-icon title="Pérdida de peso" text="Calificación" />
      <form-rating-icon title="ntrospeccción (insight)" text="Calificación" />
      <b-button variant="relief-success" style="margin-bottom: 20px">
        Enviar test
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton } from 'bootstrap-vue'

import FormRatingIcon from './FormRatingIcon.vue'

export default {
  components: {
    BRow,
    BCol,
    FormRatingIcon,
    BButton,
  },
}
</script>
