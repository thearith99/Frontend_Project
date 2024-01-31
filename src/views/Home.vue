<template>
    <template>
    <!-- {{ message }} -->
    <div class="home-container">
      <!-- @available-course -->
      <div class="available-course">
        <h1 class="available-title">Available Course</h1>
        <div class="border"></div>
        <div id="carouselExampleIndicators" class="carousel slide slideShow" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <!-- <img src="../../src/assets/images/1.jpg" class="d-block w-100 image-slideShow" alt="..."> -->
            </div>
            <div class="carousel-item">
              <!-- <img src="../../src/assets/images/2.jpg" class="d-block w-100 image-slideShow" alt="..."> -->
            </div>
            <div class="carousel-item">
              <!-- <img src="../../src/assets/images/3.jpg" class="d-block w-100 image-slideShow" alt="..."> -->
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


      </div>
      <!-- @recent-courses -->
      <div class="recent-courses">
        <h1 class="recent-course">Recent Courses</h1>
        <div class="border2"></div>
      </div>
    </div>
</template>
</template>
  
  <script>
  // import { onMounted, ref } from 'vue';
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import 'bootstrap/dist/css/bootstrap.css';
  
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
  <style scoped>
  body{
    width: 100%;
    height: 100vh;
  }
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .home-container{
    width: 100%;
    height: 100vh;
    background-color: aqua;
    padding-top: 10px;
  }
  /* @available-course */
  .available-course{
    width: 85%;
    height: 420px;
    background-color: white;
    border-radius: 10px;
    margin: auto;
    /* position: relative; */
    padding: 10px;
  }
  .slideShow{
    position: relative;
  }
  .available-title{
    position: absolute;
    top: 215px;
    z-index: 1;
    width: 150px;
    background-color: red;
    color: #ffff;
    font-size: 17px;
    padding: 10px;
  }
  /* .available-title:first-child {
    width: 150px;
    background-color: red;
    color: #ffff;
    font-size: 17px;
    padding: 10px;
  } */
  .border{
    width: 20px;
    border-bottom: 20px solid red !important;
    border-top: 20px solid transparent !important;
    border-left: 20px solid red !important;
    border-right: 20px solid transparent !important;
    position: absolute;
    left: 260px;
    top: 215px;
    z-index: 1;
  }
  /* @recent-course */
  .home-container .recent-courses{
    width: 85%;
    height: 230px;
    border-radius: 10px;
    background-color: blue;
    margin: 10px auto;
    font-size: 17px;
  }
  .recent-course {
    width: 140px;
    background-color: green;
    color: #ffff;
    font-size: 17px;
    padding: 10px;
  }
  .home-container .recent-courses{
    width: 85%;
    height: 230px;
    border-radius: 10px;
    background-color: blue;
    margin: 10px auto;
    position: relative;
    padding: 10px;
  }
  .border2{
    width: 20px;
    border-bottom: 20px solid green !important;
    border-top: 20px solid transparent !important;
    border-left: 20px solid green !important;
    border-right: 20px solid transparent !important;
    position: absolute;
    left: 150px;
    top: 10px;
  }
  .image-slideShow{
    width: 100%;
    height: 400px;
    z-index: 1;
  }

</style>