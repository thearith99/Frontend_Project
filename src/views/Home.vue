<template>
  <div class="container-home">
    <div class="available-container">
      <!-- @slideshow-container -->
      <div class="slideshow-container">
        <div class="available-title">
          <h1 class="h1">Available_course</h1>
          <div class="border"></div>
        </div>
      </div>
      <!-- @recent-course -->
      <div class="recent-course-container"></div>
    </div>
  </div>
  <!-- return message after login success
    {{ message }} -->
</template>

<style>
body {
  width: 100%;
  height: 100vh;
  /* background-color: green; */
}
.container-home {
  width: 100%;
  height: 100vh;
  /* background-color: green; */
}
.available-container {
  width: 85%;
  height: 99vh;
  background-color: blue;
  margin: 10px auto;
}
/* @slideshow-container */
.slideshow-container {
  width: 100%;
  height: 420px;
  background-color: white;
  padding: 10px;
  position: relative;
}
.slideshow-container .available-title{
  position: absolute;
  display: flex;
  /* padding-top: 10px; */
  font-size: 13px;
  width: 100%;
  font-weight: 700;
}
.slideshow-container .h1{
  /* width: 100%; */
  /* height: 30px; */
  background-color: red;
  font-size: 17px;
  padding: 9px;
  color: black;
}
.slideshow-container .border{
  border-bottom: 19px solid black !important;
  border-right: 19px solid transparent !important;
  border-left: 19px solid blue !important;
  border-top: 19px solid transparent !important;
  height: 9px;
}
/* @recent-course-container */
.recent-course-container {
  width: 100%;
  height: 240px;
  background-color: aqua;
  margin-top: 10px;
}

</style>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  setup() {
    const message = ref("You are not logged in!");
    const store = useStore();

    onMounted(async () => {
      try {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();

        message.value = `Hi ${content.name}`;

        await store.dispatch("setAuth", true);
      } catch (e) {
        await store.dispatch("setAuth", false);
      }
    });

    return {
      message,
    };
  },
};
</script>
