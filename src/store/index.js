import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { id: 1, img: "/VinhoCabernet.png", title: "Cabernet Sauvignon", price: 130, category: "ring" },
      { id: 2, img: "/VinhoCarmenere.png", title: "Carmenere", price: 130, category: "necklace" },
      { id: 3, img: "/VinhoBlanc.png", title: "Sauvignon Blanc", price: 130, category: "necklace" },
      { id: 4, img: "/VinhoMerlot.png", title: "Merlot", price: 430, category: "earring" },
      { id: 5, img: "/VinhoRose.png", title: "Rose", price: 130, category: "ring" },
    ],
    productID: null,
    cart: []
  },
  getters: {
    getProducts: (state) => state.products,
    getProductId: (state) => state.productID,
    getCart: (state) => state.cart
  },
  actions: {
    async getProductIdAc({ commit, state }, id) {
        try {
            const product = state.products.find((product) => product.id === id);
            commit('GET_PRODUCT_BY_ID', product);
        } catch (error) {
            console.error('error in get product by id action :', error);
        }
    },
    addToCart({ commit }, item) {
        commit('ADD_TO_CART', item);
    }
  },
  mutations: {
    GET_PRODUCT_BY_ID(state, product) {
        state.productID = product;
    },
    ADD_TO_CART(state, item) {
        state.cart.push(item);
    }
  },
});
