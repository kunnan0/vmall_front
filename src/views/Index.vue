<template>
    <div>
        <!-- 导航栏 -->
        <m-header></m-header>
        <!-- 其他首页内容 -->
        <router-view></router-view>

    </div>
</template>

<script>
    import MHeader from '@/common/MHeader.vue';
    export default {
        components:{
            MHeader,
        }
    }
</script>

<style lang="scss" scoped>

</style>