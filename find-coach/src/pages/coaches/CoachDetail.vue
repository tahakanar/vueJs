<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      if (this.selectedCoach) {
        return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
      }
      return null;
    },
    rate() {
      if (this.selectedCoach) {
        return this.selectedCoach.hourlyRate;
      }
      return null;
    },
    areas() {
      if (this.selectedCoach) {
        return this.selectedCoach.areas;
      }
      return null;
    },
    description() {
      if (this.selectedCoach) {
        return this.selectedCoach.description;
      }
      return null;
    },
    contactLink() {
      return `/coaches/${this.id}/contact`;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
  },
}
</script>