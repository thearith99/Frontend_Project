<template>
    <!-- {{ message }} -->
    <div class="container">
  <div class="row row-cols-3">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    
  </div>
</div>
</template>
  
  <script>
  // import { onMounted, ref } from 'vue';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    setup() {
      const store = useStore();
  
      onMounted(async () => {
        try {
          const response = await fetch('http://localhost:8000/api/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const content = await response.json();
            window.alert(`Welcome ${content.name}!`);
            // message.value = `Hi ${content.name}`;
            await store.dispatch('setAuth', true);
          } else {
            await store.dispatch('setAuth', false);
            window.alert('Authentication failed. Please log in.');
          }
        } catch (e) {
          await store.dispatch('setAuth', false);
          window.alert('An error occurred while fetching user data. Please try again later.');
          console.error(e);
        }
      });

  
      return {
        // message,
      };
    },
  };
  </script>
  