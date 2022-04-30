<template>
    <div class="os-main-wrapper">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'os-main-wrapper',
    props: {
    },
    data() {
        return {
            title: 'Main Wrapper'
        }
    },
}
</script>

<style scoped>
    .os-main-wrapper {
        max-width: 900px;
        margin: 0 auto
    }
</style>