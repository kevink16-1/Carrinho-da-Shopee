import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the Shopee Cart do Kevin!");

// criando 10 produtos masculinos
const item1 = await createItem("Camisa masculina", 59.9, 1);
const item2 = await createItem("Calca jeans masculina", 129.9, 1);
const item3 = await createItem("Tenis esportivo masculino", 199.9, 1);
const item4 = await createItem("Relogio masculino", 89.9, 1);
const item5 = await createItem("Carteira masculina", 49.9, 1);
const item6 = await createItem("Boné masculino", 39.9, 1);
const item7 = await createItem("Perfume masculino", 119.9, 1);
const item8 = await createItem("Cinto masculino", 44.9, 1);
const item9 = await createItem("Mochila masculina", 149.9, 1);
const item10 = await createItem("Fone bluetooth", 79.9, 1);

// adicionei os itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item6);
await cartService.addItem(myCart, item7);
await cartService.addItem(myCart, item8);
await cartService.addItem(myCart, item9);
await cartService.addItem(myCart, item10);

await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);
