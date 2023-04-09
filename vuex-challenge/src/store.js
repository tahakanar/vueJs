import {createStore} from 'vuex';

const productModule = {
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};

const cartModule = {
  state() {
    return {
      cart: {items: [], total: 0, qty: 0},
    };
  },
  mutations: {
    addToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );
      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newCartItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.cart.items.push(newCartItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },
    removeFromCart(state, payload) {
      const prodId = payload.productId;
      const productInCartIndex = state.cart.items.findIndex(
        (ci) => ci.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    },
  },
  actions: {
    addProductToCart(context, payload) {
        context.commit('addToCart', payload);
    },
    removeProductFromCart(context, payload) {
      context.commit('removeFromCart', payload);
    },
  },
  getters: {
    products(state) {
      return state.cart.items;
    },
    totalSum(state) {
      return state.cart.total;
    },
    quantity(state) {
      return state.cart.qty;
    },
  },
};


const store = createStore({
  modules: {
    products: productModule,
    cart: cartModule,
  },
  state() {
    return {
      count: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', {isAuth: true});
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false});
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;