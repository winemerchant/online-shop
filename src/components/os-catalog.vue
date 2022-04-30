<template>
    <div class='os-catalog'>
        <router-link :to='{name:"cart", params: {cart_data: CART}}'>
            <div class="os-catalog_link_to_cart">Cart: {{CART.length}}</div>
        </router-link>
        
        <h1>Catalog</h1>
        <div class="os-catalog-list">
            <os-catalog-item
                v-for="product in PRODUCTS"
                v-bind:key="product.article"
                v-bind:product_data="product"
                v-on:addToCart='addToCart'
                />
        </div>
        
    </div>
</template>

<script>
import osCatalogItem from './os-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'os-catalog',
    components: {
        osCatalogItem
    },
    props: {},
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data){
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if(response.data) {
                console.log('Data arrived')
            }
        })
    }
}
</script>

<style lang="scss">
    .os-catalog-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .os-catalog_link_to_cart {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
        border: solid 1px grey
    }
    
</style>