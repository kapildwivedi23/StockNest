# 📈 **StockNest**

**StockNest** is a modern stock portfolio and trading management system. It offers powerful analytics, seamless trading operations, and interactive performance visualizations through a sleek React dashboard and a RESTful backend API.

## **✨ Features**
- Manage **stock holdings**, **positions**, and **trading orders**
- RESTful **API** using **Node.js** and **Express**
- **MongoDB** with **Mongoose ORM** for data persistence
- Modern **React Dashboard** for portfolio visualization
- Dynamic charts and graphs via **Chart.js** and **Material UI**

## **🛠 Tech Stack**
**Backend:** Node.js, Express, MongoDB, Mongoose  
**Frontend:** React, Vite, Material UI, Chart.js, Axios  
**Dev Tools:** dotenv, nodemon, ESLint

## **📁 Project Structure**
```
stocknest/
├── backend/       # REST API
├── dashboard/     # React Dashboard
└── frontend/      # Optional/Experimental UI
```

## **🔌 Backend API**
| **Method** | **Endpoint**      | **Description**                             |
|-----------|-------------------|---------------------------------------------|
| GET       | `/allHoldings`    | Fetch all stock holdings                    |
| GET       | `/allPositions`   | Fetch all trading positions                 |
| POST      | `/newOrder`       | Place a new order (`name`, `qty`, `price`)  |
| GET       | `/addHolding`     | Seed demo holdings data                     |
| GET       | `/addPositions`   | Seed demo positions data                    |

**Models:** `Holding`, `Order`, `Position` (Mongoose + MongoDB)

## **🖥 Frontend/Dashboard**
Located in `dashboard/`, the main React app is built using:
- **React + Vite**
- **Material UI** components
- **Chart.js** for data visualization

> `frontend/` is optional or for experimentation.

## **🚀 Quick Start**

### Backend
```bash
cd backend
npm install
npm start
```
`.env` file required:
```
PORT=3002
MONGO_URI=mongodb://localhost:27017/stocknest
```

### Dashboard
```bash
cd dashboard
npm install
npm run dev
```

### Optional Frontend
```bash
cd frontend
npm install
npm run dev
```

## **👨‍💻 Development**
- Clone the repo:  
  `git clone https://github.com/kapildwivedi23/stocknest.git`
- Install dependencies in `backend/`, `dashboard/`, (and `frontend/` if needed)
- Setup `.env`
