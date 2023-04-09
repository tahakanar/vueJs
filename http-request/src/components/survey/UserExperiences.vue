<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored data</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      this.error = null;
      fetch('https://vue-http-request-c2d0a-default-rtdb.firebaseio.com/surveys.json')
        .then(res => res.json())
        .then(data => {
          this.isLoading = false;
          const results = [];
          for (const key in data) {
            const result = {
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            };
            results.push(result);
          }
          this.results = results;
        })
        .catch(() => {
          this.isLoading = false;
          this.error = 'Failed to fetch data. Please try again later.';
        });
    }
  },
  mounted() {
    this.loadExperience();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>