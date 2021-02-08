
const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {
    /*
    let products = [];
    if (state.products) {
        products = state.products;
    }
    */
   let products = [...state.products];

    switch (action.type) {

        case 'ADD_PRODUCT':
            let id = action.payload.data.id;

            let index = products.findIndex(item => item.id === id);
            if (index > -1) {
                products[index].quantity += action.payload.quantity;
            } else {
                products.push({
                    ...action.payload.data,
                    quantity: action.payload.quantity
                });
            }
            return { ...state, products };

        case 'CHANGE_PRODUCT_CART_QUANTIY':
            let productFound = products.find(product => product.id == action.payload.productId);
            if (productFound) {
                switch (action.payload.type) {
                    case '-':
                        productFound.quantity--;
                        if (productFound.quantity <= 0) {
                            products = products.filter(product => product.id != productFound.id);
                        }
                        break;
                    case '+':
                        productFound.quantity++;
                        break;
                    default:
                        break;
                }
            }
            return { ...state, products };

        default:
            break;
    }
    return state;
}