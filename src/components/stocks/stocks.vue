<template>
    <div>
        <app-stoke v-for="stock in stocks" :stock="stock"></app-stoke>
    </div>
</template>
<script>
    import Stoke from './stoke.vue'
    export default {
        data() {
            return {
            }
        },
        components: {
            appStoke: Stoke
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>