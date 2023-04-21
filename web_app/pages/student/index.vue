<script setup>
    import Users from "~/server/users";
    
    const studentApi = new Users().getAllStudents;
    const { data: studentsList, pending, error } = await useAsyncData("studentsList", studentApi);
    console.log(studentsList);

</script>

<template>
  <div>
    <h1>students List</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table :list="studentsList" :edit_link="'/student/edit-'" />
    </div>
  </div>
</template>