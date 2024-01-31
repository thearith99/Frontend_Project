<template>
  <div class="course-container">
    <h2 class="course-title">{{ course.name }}</h2>
    <div v-if="loading" class="loading-spinner"></div>
    <div v-else>
      <div v-for="sub in subcourse" :key="sub.id" class="subcourse-container">
        <h3 class="subcourse-title">{{ sub.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      subcourse: [],
      course: {},
      loading: true, // Add loading state
    };
  },
  mounted() {
    this.getSubcourse();
  },
  methods: {
    getSubcourse() {
      const subcourseId = this.$route.params.id;

      axios
        .get(`http://127.0.0.1:8000/api/getOne/${subcourseId}`)
        .then((response) => {
          this.subcourse = response.data.SubCourse;
          this.course = response.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false; // Set loading to false when the request is complete
        });
    },
  },
};
</script>

<style scoped>
.course-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.course-title {
  color: #333;
  font-size: 30px;
  margin-bottom: 20px;
  position: absolute;
  left: -635px;
  cursor: pointer;
}

.subcourse-container {
  /* background-color: #f0f0f0; */
  margin-bottom: 15px;
  padding: 15px;
  /* border-radius: 5px; */
  position: relative;
}

.subcourse-title {
  color: #555;
  font-size: 16px;
  margin: 0;
  position: absolute;
  left: -635px;
  top: 50px;
  cursor: pointer;
}
.subcourse-title:hover{
  color: black;
  transition: 0.8ms;
}
.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
