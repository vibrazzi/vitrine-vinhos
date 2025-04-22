import { createStore } from "vuex";
export default createStore({
  state: {
    products: [
      {
        id: 1,
        img: "/products/cabernet1.png",
        title: "Caberbet Sauvignon",
        price: 130,
        category: "ring",
      },
    ],
    productID:null,
    cart:[]
  },
  getters: {
    getProducts :(state) => state.products,
    getProductId:(state) => state.productID,
    getCart : (state) => state.cart
  },
  actions: {
    async getProductIdAc({commit,state},id){
        try{
            const product = state.products.find((product) => product.id === id);
            commit('GET_PRODUCT_BY_ID',product);
        }
        catch(error){
            console.error('error in get product by id action :',error)
        }
    },
    addToCart({commit},item){
        commit('ADD_TO_CART',item)
    }
  },
});