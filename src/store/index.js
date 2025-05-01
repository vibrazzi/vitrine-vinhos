import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        img: "/VinhoCabernet.png",
        title: "Cabernet Sauvignon",
        category: "ring",
        description: "Sua cor rubi intensa e brilhante é prenúncio de aromas cativantes de frutas vermelhas e negras - framboesa, ameixa e amora. Em boca, equilíbrio e suavidade se entrelaçam, revelando uma sinfonia de frutas e um final limpo e elegante. Um vinho robusto, com notas de frutas vermelhas e um toque de especiarias. Perfeito para harmonizar com carnes vermelhas e queijos."
      },
      {
        id: 2,
        img: "/VinhoCarmenere.png",
        title: "Carmenere",
        category: "necklace",
        description: "O Ventisquero Tantehue Carménère é um tinto chileno que destaca a elegância do Valle Central. Com uma cor vermelho rubi claro, oferece aromas delicados de frutas vermelhas no nariz. No paladar, é intenso e volumoso, com uma boa presença aromática que enriquece. Um vinho encorpado e elegante, com aromas de frutas negras maduras e leve toque de pimenta. Ideal para pratos apimentados."
      },
      {
        id: 3,
        img: "/VinhoBlanc.png",
        title: "Sauvignon Blanc",
        category: "necklace",
        description: "Visão: Amarelo palha claro. Olfato: Dono de um aroma rico em frutas, com notas de morangos frescos, lichia, abacaxi e kiwi. Paladar: Na boca, é fresco, intenso e suculento, lembrando também as frutas tropicais. Harmonização: Ideal para acompanhar pratos à base de frutos do mar, peixes e saladas. Leve e refrescante, com notas cítricas e florais. Perfeito para acompanhar frutos do mar e saladas."
      },
      {
        id: 4,
        img: "/VinhoMerlot.png",
        title: "Merlot",
        category: "earring",
        description: "Explore o Vinho Tinto Chileno Tantehue Merlot. Seu charme se revela em aromas intensos de framboesas, morangos, mirtilos e cassis, complementados por notas sutis de especiarias e baunilha. Com corpo envolvente e acidez equilibrada, sua elegância perdura até o final limpo. Suave e frutado, com notas de ameixa e cereja. Vai bem com massas e pratos italianos."
      },
      {
        id: 5,
        img: "/VinhoRose.png",
        title: "Rosé",
        category: "ring",
        description: "Um vinho rosé delicado, frutado e de paladar refrescante. Ligeiro, mas com bom volume de boca, harmoniza muito bem com pescados, mariscos, queijos frescos e saladas."
      },
    ],
    productID: null,
    cart: [],
  },
  getters: {
    getProducts: (state) => state.products,
    getProductId: (state) => state.productID,
    getCart: (state) => state.cart,
  },
  actions: {
    async getProductIdAc({ commit, state }, id) {
      try {
        const product = state.products.find((product) => product.id === id);
        commit("GET_PRODUCT_BY_ID", product);
      } catch (error) {
        console.error("Erro na ação de obter produto por ID:", error);
      }
    },
    addToCart({ commit }, item) {
      commit("ADD_TO_CART", item);
    },
  },
  mutations: {
    GET_PRODUCT_BY_ID(state, product) {
      state.productID = product;
    },
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    },
  },
});
