<template>
  <div class="v-home">
    <hero :code="code" @submit="getEvents" />
    <timeline :events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'Home',
  data() {
    return {
      code: this.$route.query.code,
      events: [],
    };
  },
  components: {
    Hero,
    Timeline,
  },
  methods: {
    getEvents(code) {
      fetch(`/api?code=${code}`)
        .then((res) => res.json())
        .then(({ events }) => {
          this.events = events;
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    if (this.code) {
      this.getEvents(this.code);
    }
  },
};
</script>

<style lang="scss" scoped="">
.v-home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
}
</style>
