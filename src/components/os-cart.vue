<template>
  <div class="os-cart">
      <router-link :to='{name:"catalog"}'>
            <div class="os-catalog_link_to_cart">Back to Catalog</div>
        </router-link>
      <h1>Cart</h1>
      <p v-if='!cart_data.length'>No products here.</p>
      <os-cart-item
        v-for='(item, index) in cart_data'
        v-bind:key='item.article'
        v-bind:cart_item_data='item'
        v-on:deleteFromCart='deleteFromCart(index)'
      />
      <div class="os-cart_total">
          <p>Total:</p>
          <p>300</p>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import osCartItem from './os-cart-item.vue'


export default {
    name: 'os-cart',
    components: {
        osCartItem
    },
    props: {
        cart_data : {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    }
}
</script>

<style lang='scss'>
    .os-cart_total {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            padding: $padding*2 $padding*3;
            display: flex;
            justify-content: center;
            background: green;
        p {
            margin-right: $margin*2;
            color: white;
            font-size: 20px;
        }
    }
</style>