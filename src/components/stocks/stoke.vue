<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quatity"
                            v-model="quantity"
                            :class="{danger: checkfunds}"
                    >
                </div>
                <div class="">
                    <button
                            class="btn btn-success"
                            @click="buyStoke"
                            :disabled="quantity <= 0 || !Number.isInteger(+quantity) || checkfunds"
                    >{{checkfunds ? 'Insufficient Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["stock"],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            checkfunds() {
                return ((this.quantity * this.stock.price) > this.$store.getters.funds);
            }
        },
        methods: {
            buyStoke() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
                };
                console.log(order);
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>
<style>
    .panel-body {
        display: flex;
        justify-content: space-between;
    }
    .panel-body:before, .panel-body:after {
        display: none;
    }
    .danger {
        border: 1px solid red !important;
    }
    .danger.form-control:focus {
        box-shadow: none;
    }
    .btn {
        margin-left: 10px;
    }

</style>