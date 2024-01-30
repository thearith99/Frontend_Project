<template>
  <div class="container">
    <!-- Show loading page if loading is true -->
    <div v-if="loading" class="loading-page">
      <div class="loading-spinner"></div>
    </div>
    <!-- Show grid when data is loaded -->
    <div v-else class="grid-container">
      <div v-for="(pdata, index) in product" :key="index" class="grid-item">
        <div class="grid-image">
          <img :src="`http://127.0.0.1:8000/storage/${pdata.image}`" alt="" class="image" />
        </div>
        <div class="grid-name">
          <h5>{{ pdata.name }}</h5>
        </div>
        <div class="grid-button">
          <button>Course</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true, // Add loading state
      product: [],
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get("http://127.0.0.1:8000/api/getOneGrade/1")
        .then((response) => {
          console.log(response.data.Course);
          this.product = response.data.Course;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.loading = false; // Set loading to false regardless of success or failure
        });
    },
  },
};
</script>
<style scoped>
  .container{
      display: flex;
      margin: auto;
      justify-content: center;
  }
  .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
  }
  /* Style for individual grid items */
  .grid-item {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
  }
  .grid-item:hover{
      transition: 0.8s;
      background-color: rgb(67, 61, 61);
  } 
  .grid-name h5{
      color: rgb(67, 61, 61);
      font-weight: bold;
  }
  .grid-name h5:hover{
      color: white    ;
  }
  .grid-button button{
      background-color: #008CBA;
      font-size: 16px;
      border-radius: 12px;
      width: 120px;
      height: 40px;
      color: white;
      border: 0px blueviolet;
  }
  .image{
      width: 300px;
      height: 300px;
  }
  .loading-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  }

  .loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  }
  /* Rest of the styles remain unchanged */

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
  }
</style>
