<template>
    <div class='os-cart-item'>
        <img :src="imgLink" alt="img">
        <div class="os-cart-item_info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="os-cart-item_quantity">
            <p>Quantity</p>
            {{cart_item_data.quantity}}
        </div>
        <button v-on:click='deleteFromCart'>Delete</button>
    </div>
</template>

<script>
export default {
    name:'os-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        imgLink: function () {
			const fileName = this.cart_item_data.image;
			return require(`../assets/img/${fileName}`);
		},
    },
    mounted() {
        // this.$set(this.cart_item_data, 'quantity', 1)
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang='scss'>
    .os-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 10px;
        padding: 10px;
        // max-width: 300px;
        box-shadow: 0 0 8px 0;
        img {
            max-width: 50px;
        }
    }
</style>