<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone"/>
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail"/>
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    };
  },
  methods: {
    submitData() {
      const contactData = {
        id: Math.random().toString(),
        name: this.enteredName,
        phone: this.enteredPhone,
        email: this.enteredEmail
      };
      this.$emit('add-contact', contactData);
    }
  }
}
</script>
