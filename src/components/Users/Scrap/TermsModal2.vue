<template>
  <div class="backdrop" @click.self="closeTermsModal">
    <!-- Note: using the data-binding + props combo can be coupled with things like 'dynamic classes' (by passing in an object who's value resolves to true/false) -->
    <!-- <div class="modal" :class="{ sale: theme === 'sale' }"> -->
    <div class="modal">
      <!-- <h1>Modal Title</h1> -->
      <h1>{{ termsModalHeader }}</h1>
      <!-- <p>modal content ...</p> -->
      <p>{{ termsModalText }}</p>
      <slot>Default Content</slot>
      <!-- "Default Content" will only show if no slot data is passed from the parent component - so it makes for good place-holder info -->
      <div class="actions">
        <slot name="termsModalLinks"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TermsModal2",
  props: ["termsModalHeader", "termsModalText"],

  methods: {
    closeTermsModal() {
      // This is a *custom* event - it allows us to emit an event from our child 'Modal' component that the parent 'App' component will listen to ...
      console.log("Close the Terms Modal");
      this.$emit("closeTheTermsModal");
    },
  },
  // setup() {},
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

/* This is an alternative way to make your styling component-specific (rather than globally-scoped) ... */
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
