import { readCart, updateCartCount } from "./utils/common.js";

updateCartCount();

const cartItems = readCart();
const cartList = document.querySelector(".cart-list");

const cartHTML = cartItems.map(
  item => `
    <article class="cart-item">
      <span class="item-check">
        <span class="check-box" aria-hidden="true"></span>
      </span>

      <div class="cart-thumb">
        <img src="${item.thumb}" alt="${item.title}" />
      </div>

      <div class="cart-item-info">
        <h2>${item.title}</h2>
        <p>${item.brand}</p>
        <strong>${item.price}원</strong>
      </div>

      <div class="quantity-box" aria-label="수량">
        <button type="button" aria-label="수량 줄이기">-</button>
        <span>${item.qty}</span>
        <button type="button" aria-label="수량 늘리기">+</button>
      </div>

      <button type="button" class="remove-item" aria-label="${item.title} 삭제"></button>
    </article>
  `,
);

cartList.insertAdjacentHTML("beforeend", cartHTML.join(""));
