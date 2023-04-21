<script setup>
const route = useRoute();
const id = route.params.id;

</script>
<template>
    <div>
        <h1>Edit a student</h1>
      <FormFighter :id="id"/>
    </div>
</template>
  