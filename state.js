// Estado de la aplicación
let currentUser = null;
let cart = [];
let currentProduct = null;

// Elementos DOM
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const cartBtn = document.getElementById('cart-btn');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const featuredProductsContainer = document.querySelector('.featured-products');
const productsGrid = document.querySelector('.products-grid');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const cartCount = document.querySelector('.cart-count');
const productDetailsContainer = document.getElementById('product-details');
const profileTabs = document.querySelectorAll('.profile-tab');
const profileTabContents = document.querySelectorAll('.profile-tab-content');
const applyFiltersBtn = document.getElementById('apply-filters');
const checkoutBtn = document.getElementById('checkout-btn');