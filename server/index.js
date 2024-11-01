const express = require('express');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

const app = express();
const PORT = 3001;

// 中间件配置
app.use(express.json());
app.use(cors());

// 路由配置
app.use('/api', productRoutes);

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在端口 ${PORT} 上运行`);
}); 