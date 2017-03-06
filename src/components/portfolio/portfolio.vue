<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>

    </div>
</template>

<script>
    import Stock from './stock.vue';

    export default {
        computed: {
            stocks() {
                return this.$store.getters.stockPortfolio;
            }
        },
    components: {
        appStock: Stock
        }
    }
</script>