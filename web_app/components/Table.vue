<script>
    export default {
        props: {
            list: {
                type: Array,
                required: true
            },
            edit_link: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                headers: []
            }
        },
        onMounted() {
            this.headers = Object.keys(this.list[0]);
        }
    }
</script>

<template>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th v-for="head in headers" v-if="head !== '_id'" scope="col" class="px-6 py-3">
                    {{ head }}
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list" :key="item._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td v-for="(value, key) in item"  v-if="key !== '_id'" class="px-6 py-4">
                    {{ value }}
                </td>
                <td class="px-6 py-4 text-right">
                    <NuxtLink to="{{ `${edit_link}${item._id}`  }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NuxtLink>
                </td>
            </tr>
           
        </tbody>
    </table>
</template>
