# 🔗 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js**, **Express**, and **MongoDB**.  
It allows users to create short links for long URLs and automatically redirect them to the original address.

---

## 🧰 Tech Stack
- **Node.js** – Backend runtime  
- **Express.js** – Web framework  
- **MongoDB + Mongoose** – Database  
- **dotenv** – Environment configuration  

---

## 🚀 Features
✅ Generate short links for long URLs  
✅ Prevent duplicate short links (checks existing URLs)  
✅ Automatically adds `https://` if missing  
✅ Redirect users to original URLs  
✅ Clean and simple REST API  

---

## 🏗️ Folder Structure

├── models/
│ └── url.js
├── shorturlgenerator/
│ └── shorturlgenerator.js
├── public/
│ └── index.html
├── mongoose.js
├── index.js
├── .env
├── .gitignore
└── README.md


---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```
### 2️⃣ Install Dependencies

npm install

###  3️⃣ Create Environment File

In your project root, create a .env file:

MONGO_URI=your_mongo_connection_string
PORT=3000

### 4️⃣ Start the Server

node index.js

or (if you have nodemon)

npm run dev

Server will run on:
👉 http://localhost:3000


---

### 📡 API Usage
## ➤ Create Short URL

## POST request

http://localhost:3000/url


## Body (JSON):

{
  "long": "www.google.com"
}


## Response:

{
  "_id": "66f8cba5d6a3c3...",
  "long": "www.google.com",
  "short": "abc123",
  "__v": 0
}

## ➤ Redirect to Original URL

Visit:

http://localhost:3000/abc123


## ➡️ Redirects automatically to www.google.com

---


### 🧪 Example .env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/
PORT=3000

---

### 🚧 Future Enhancements

Add analytics for each short URL

Add user login & dashboard

Custom short code feature

Expiration time for short links

---

### 🧾 License

This project is open-source.
Feel free to fork, modify, and use it in your own projects 🚀

---

### ✨ Author

Muhammad Shafique
💻 GitHub: https://github.com/ShafiqueNaveed
