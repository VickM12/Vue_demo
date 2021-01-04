var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'assets/vmSocks-green-onWhite.jpg',
        imgHref: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        inStock: true,
        inventory: 11,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
              variantId: 2234,
              variantColor: 'green',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'    
            },
            {
              variantId: 2235,
              variantColor: 'blue',
              variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
            }
          ],
          sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          cart: 0,
    },
    methods: {
        addToCart() {
            this.cart +=1
            this.inventory -=1
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
        removeFromCart() {
            this.cart -= 1
            this.inventory += 1
        }
    }
})