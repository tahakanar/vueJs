<template>
  <base-card>
    <h2>Register as a Coach</h2>
    <coach-form @save-data="saveData"></coach-form>
  </base-card>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      this.$router.push('/coaches');
    }
  }
}
</script>