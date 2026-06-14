const app = require('./app');
const db = require('./config/database');


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Dự án quản lý nhân sự và tính lương');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


