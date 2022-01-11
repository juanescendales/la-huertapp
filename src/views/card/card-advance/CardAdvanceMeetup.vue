<template>
  <b-card
    no-body
    class="card-developer-meetup"
  >
    <div class="bg-light-primary rounded-top text-center">
      <b-img
        :src="require('@/assets/images/illustration/email.svg')"
        alt="Meeting Pic"
        height="170"
      />
    </div>
    <b-card-body>
      <!-- metting header -->
      <div class="meetup-header d-flex align-items-center">
        <div class="meetup-day">
          <h6 class="mb-0">
            JUE
          </h6>
          <h3 class="mb-0">
            23
          </h3>
        </div>
        <div class="my-auto">
          <b-card-title class="mb-25">
            Cita psicología
          </b-card-title>
          <b-card-text class="mb-0">
            Profesional: Andrea Gutierrez
          </b-card-text>
        </div>
      </div>
      <!--/ metting header -->

      <!-- media -->
      <b-media
        v-for="media in mediaData"
        :key="media.avatar"
        no-body
      >
        <b-media-aside class="mr-1">
          <b-avatar
            rounded
            variant="light-primary"
            size="34"
          >
            <feather-icon
              :icon="media.avatar"
              size="18"
            />
          </b-avatar>
        </b-media-aside>
        <b-media-body>
          <h6 class="mb-0">
            {{ media.title }}
          </h6>
          <small>{{ media.subtitle }}</small>
        </b-media-body>
      </b-media>

      <!-- avatar group -->
      <b-avatar-group
        class="mt-2 pt-50"
        size="33"
      >
        <b-avatar
          v-for="avatar in avatars"
          :key="avatar.avatar"
          v-b-tooltip.hover.bottom="avatar.fullName"
          :src="avatar.avatar"
          class="pull-up"
        />
        <h6 class="align-self-center cursor-pointer ml-1 mb-0">
          Psicólog@
        </h6>
      </b-avatar-group>

    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BImg, BCardBody, BCardText, BCardTitle, BMedia, BMediaAside, BAvatar, BAvatarGroup, VBTooltip, BMediaBody,
} from 'bootstrap-vue'
/* eslint-disable global-require */
export default {
  components: {
    BCard,
    BImg,
    BCardBody,
    BCardText,
    BCardTitle,
    BMedia,
    BMediaAside,
    BAvatar,
    BAvatarGroup,
    BMediaBody,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  data() {
    return {
      mediaData: [
        { avatar: 'CalendarIcon', title: 'Jue, Sep 23, 2021', subtitle: '10:00AM to 11:00PM' },
        { avatar: 'GoogleIcon', title: 'Cita virtual', subtitle: 'Google meet' },
      ],
      avatars: [
        { avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'), fullName: 'Andrea Gutierrez' },
      ],
    }
  },
}
</script>
