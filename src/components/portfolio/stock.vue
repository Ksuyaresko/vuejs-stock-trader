<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">{{stock.name}}
                    <small>(Price: {{stock.price}} | Quntity: {{stock.quantity}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quatity"
                            v-model="quantity"
                            :class="{danger: insufficientQuantity}"
                    >
                </div>
                <div class="">
                    <button
                            class="btn btn-success"
                            @click="sellStokelocal"
                            :disabled="quantity <= 0 || !Number.isInteger(+quantity) || insufficientQuantity"
                    >{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
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
            insufficientQuantity() {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            sellStokelocal() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
                };
                this.$store.dispatch('sellStock', order);
                this.quantity = 0;
            }
        }
    }
</script>