# 🎯 Basic Activity Booking App - Backend

This is a simple RESTful API for booking activities like cricket, movies, or football matches. Built using **Node.js**, **Express.js**, and **MongoDB**, it features secure JWT-based authentication and clean modular code.

## 🔗 Hosted URL

👉 [https://basic-activity-booking-app-backend.onrender.com](https://basic-activity-booking-app-backend.onrender.com)

---

## ⚙️ Tech Stack

- Backend: **Node.js**, **Express.js**
- Database: **MongoDB**
- Auth: **JWT**
- Password Security: **bcrypt**
- API Testing: **Postman**

---

## 📦 Features

- ✅ User Registration & Login with hashed passwords
- ✅ JWT Auth-Protected Routes
- ✅ Public Activity Listings
- ✅ Book Activities (Authorized Users)
- ✅ View My Bookings

---

## 🚀 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint                      | Description              |
|--------|-------------------------------|--------------------------|
| POST   | `/api/auth/register`          | Register a new user      |
| POST   | `/api/auth/login`             | Login and receive JWT    |

#### Sample Request Body (Register/Login)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "secret123"
}
```

---

### 🎯 Activities (Public)

| Method | Endpoint               | Description                  |
|--------|------------------------|------------------------------|
| GET    | `/api/activities`      | Get all available activities |

---

### 📅 Bookings (Protected - Requires JWT)

| Method | Endpoint                   | Description                   |
|--------|----------------------------|-------------------------------|
| POST   | `/api/bookings/book`       | Book an activity              |
| GET    | `/api/bookings/my`         | Get bookings of logged-in user |

#### Sample Request Body (Booking)
```json
{
  "activityId": "<ACTIVITY_ID_FROM_DATABASE>"
}
```

**⚠️ Replace `<ACTIVITY_ID_FROM_DATABASE>` with a valid `_id` from `/api/activities`.**

#### Set Authorization Header (for protected routes)

```
Authorization: Bearer <YOUR_JWT_TOKEN>
```

---

## 🧪 Testing with Postman

1. Register a user with `/api/auth/register`
2. Login to get a JWT with `/api/auth/login`
3. Use JWT token in header to:
   - Book an activity `/api/bookings/book`
   - View your bookings `/api/bookings/my`

---

## 🌱 Environment Variables (`.env`)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/activity-booking
JWT_SECRET=yourSecretHere
```

---

## 📁 Folder Structure

```
.
├── controllers
├── models
├── routes
├── middlewares
├── utils
├── config
└── server.js
```

---

## 🌍 Deployment

Hosted on [Render](https://render.com/)

Live API: **https://basic-activity-booking-app-backend.onrender.com**

---

## 📃 License

MIT License