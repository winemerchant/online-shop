<template>
  <div class="os-catalog-item">
        <img :src="imgLink" alt="img"/>
        <p class='os-catalog-item_name'>{{product_data.name}}</p>
        <p class='os-catalog-item_price'>{{product_data.price}} P</p>
        <button 
            class='os-catalog-item_add_to_cart_btn btn'
            v-on:click='addToCart'
        >
        Add to cart
        </button>
  </div>
</template>

<script>
export default {
    name: 'os-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
		imgLink: function () {
			const fileName = this.product_data.image;
			return require(`../assets/img/${fileName}`);
		},
	},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {
        this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style lang='scss'>
    .os-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0;
        padding: $padding*2;
        margin-bottom: $margin*2
    }
    .os-catalog-item img {
        max-width: 100px;
    }
</style>