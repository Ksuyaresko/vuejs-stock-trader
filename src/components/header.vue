<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand">Stoke Trader</router-link>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                        <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                    </ul>
                    <strong class="navbar-text navbar-rigth">Funds: {{funds | currency}}</strong>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" @click="endDay">End Day</a></li>
                        <li class="dropdown"
                            @click="isDropdownOpen = !isDropdownOpen"
                            :class="{open: isDropdownOpen}">
                            <a href="#"
                               class="dropdown-toggle"
                               data-toggle="dropdown"
                               role="button"
                               aria-haspopup="true"
                               aria-expanded="false"
                            >Save & Load <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="saveData">Save Data</a></li>
                                <li><a href="#" @click="loadData">Load Data</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isDropdownOpen: false,
            }
        },
        computed:{
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            endDay() {
                this.$store.dispatch('randomizeStocks');
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            },
            loadData() {
                this.$store.dispatch('loadData');
            }
        }
    }
</script>
<style>
    body {
        padding: 30px;
    }
</style>