# EXPRESS MySQL Project
Projek ini digunakan untuk bahan pembelajaran penggunaan framework Express dan Sequelize JS.

## Features
- REST API dengan Express JS
- Database MySQL dengan Sequelize ORM
- Authentication & Authorization
- CRUD Operations
- Error Handling

```

## Instalasi

### 1. Install Dependencies
Proses pertama menginstall seluruh library yang digunakan pada projek ini:
```bash
npm install
```

### 2. Konfigurasi Environment
Buat file `.env` pada root project dan tambahkan variabel berikut:
```env
DB_HOST = 127.0.0.1
DB_USERNAME = "root"
DB_PASSWORD = ""
DB_NAME = "belajar"
PORT = 3000
```



### 3. Menjalankan Aplikasi
Development mode dengan nodemon:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Testing dengan Postman

`

## Testing dengan Postman
1. Import collection Postman yang tersedia di folder `postman/express-mysql.postman_collection.json`
2. Set environment variables di Postman:
   - `base_url`: http://localhost:3000
   - `token`: (diisi setelah login berhasil)
3. Jalankan request Register untuk membuat user baru
4. Jalankan request Login untuk mendapatkan token
5. Copy token dari response login ke environment variable `token`
6. Sekarang Anda bisa testing semua endpoint yang membutuhkan authentication


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
