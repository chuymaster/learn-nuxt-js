<template>
    <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate(data) {
        return /^\d+$/.test(data.params.id) // Check if id param is number
    },
    layout: 'users'
}
</script>

<style>

</style>
