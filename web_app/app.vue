<template>
 <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 max-w-screen-xl flex items-center justify-end p-4 w-full gap-4">
    <NuxtLink to="/" class="n-link-base ">
      Home
    </NuxtLink>
    <NuxtLink to="/student" class="n-link-base ">
      Student
    </NuxtLink>
  </nav>
  <NuxtLayout >
    <NuxtPage  />
  </NuxtLayout>
</template>
