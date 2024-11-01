# 简易电商平台项目文档

## 项目概述
本项目旨在实现一个简易的电商平台，用户可以浏览商品、查看商品详情、将商品加入购物车并查看购物车内容。此项目使用 React + CSS Modules 作为前端技术栈，Node.js + Express 作为后端技术栈。

## 技术栈
- 前端：React, CSS Modules
- 后端：Node.js, Express

---

 index.js  # 后端入口文件，配置 Express 服务并且将监视3001的端口

App.js  # 应用主入口，路由配置


## 需求分析

### 功能模块
本项目主要分为以下功能模块：

1. **商品列表展示**
   - 展示所有商品的基本信息（如名称、价格、图片）。
   - 用户可以点击商品进入商品详情页。
   - **对应文件**：`src/pages/ProductList.js`

2. **商品详情页**
   - 展示单个商品的详细信息（如名称、价格、描述、图片）。
   - 用户可以选择数量并将商品添加到购物车。
   - **对应文件**：`src/pages/ProductDetail.js`

3. **购物车**
   - 展示用户已添加的商品，包括商品名称、数量、价格和总价。
   - 用户可以修改购物车中商品的数量或删除商品。
   - **对应文件**：`src/pages/Cart.js`

4. **状态管理**
   - 使用 React 的 `useReducer` 或 `useContext` 管理购物车状态。
   - **对应文件**：`src/context/CartContext.js`

5. **API 数据管理**
   - 后端提供商品信息 API，供前端调用。
   - **对应文件**：`server/routes/productRoutes.js`

---

## 系统设计

### 文件结构
以下为项目的文件结构说明：
my-ecommerce-app/  

├── public/  
│   └── index.html             # HTML 模板文件  

├── src/  
│   ├── components/            # 组件目录  
│   │   ├── ProductCard.js     # 商品卡片组件，用于展示商品信息  
│   │   └── CartItem.js        # 购物车商品项组件  

│   ├── pages/                 # 页面目录  
│   │   ├── ProductList.js     # 商品列表页面  
│   │   ├── ProductDetail.js   # 商品详情页面  
│   │   └── Cart.js            # 购物车页面  

│   ├── context/               # 状态管理目录  
│   │   └── CartContext.js     # 购物车上下文  

│   ├── api/                   # API 管理目录  
│   │   └── productApi.js      # 商品 API 调用函数  

│   ├── App.js                 # 应用主入口，路由配置  

│   └── index.js               # 入口文件，渲染 App  

├── server/  
│   ├── data/  
│   │   └── products.json      # 静态商品数据文件  

│   ├── routes/  
│   │   └── productRoutes.js   # 商品路由，用于提供商品信息的 API  

│   └── index.js               # 后端入口文件，配置 Express 服务  

### 关键模块补充

1. **路由配置**（`App.js`）
   - 使用 React Router 配置不同页面的路由，如商品列表、商品详情、购物车。
   - 例如，`/` 显示 `ProductList` 页面，`/product/:id` 显示 `ProductDetail` 页面，`/cart` 显示购物车页面。

2. **商品数据管理**
   - 商品数据存储在 `server/data/products.json` 中。使用 `productRoutes.js` 设置 API 路由，通过 Express 处理数据请求。
   - 例如，GET 请求到 `/api/products` 返回所有商品数据，GET 请求到 `/api/products/:id` 返回指定商品的详细数据。

3. **购物车状态管理**
   - 在 `CartContext.js` 中使用 `useReducer` 管理购物车状态（添加、删除商品等）。
   - 将 `CartContext` 提供给需要购物车状态的组件（如 `ProductDetail.js` 和 `Cart.js`）。

---

## 开发流程建议

1. **后端开发**：首先配置 `server/index.js` 和 `productRoutes.js`，确保 API 能够正确返回商品数据。
2. **前端页面开发**：实现 `ProductList.js`、`ProductDetail.js` 和 `Cart.js` 页面，完成基本的组件布局和数据展示。
3. **状态管理**：在 `CartContext.js` 中实现购物车的状态管理，并在 `ProductDetail.js` 中添加商品至购物车的逻辑。
4. **功能集成与测试**：集成各页面和状态管理，测试商品数据加载、购物车功能、页面跳转等核心功能。

---

## 未来扩展（暂时不做）

- **用户登录和身份验证**：增加用户登录功能以支持个性化购物车。
- **数据库集成**：将商品数据从静态 JSON 文件迁移到数据库（如 MongoDB），以支持更复杂的数据操作。

---

## 总结
本项目是一个简易电商平台的原型。通过本项目，开发者将学习 React 的基础组件开发、路由配置、状态管理和 Express 的 API 构建。项目完成后，可以进一步扩展和优化用户体验。
