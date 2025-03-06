# **📖 JSON Server for Your Dental Clinic App (Frontend-Only Backend) 🚀**  
### **💡 Goal:** Use JSON Server as a **fake backend** to modify patient and doctor data **directly from the frontend**.  

---

## **🔹 What is JSON Server?**
JSON Server is a simple **backend emulator** that allows you to:  
✔️ Store **patient, doctor, and billing data** in a `db.json` file.  
✔️ Perform **CRUD operations (Create, Read, Update, Delete)** using API calls.  
✔️ Mimic a real **REST API** without writing backend code.  

---

## **🛠 Step 1: Install JSON Server**  
📌 **Prerequisite:** You must have **Node.js** installed.  

```sh
npm install -g json-server
```

---

## **🛠 Step 2: Create Your Fake Database (`db.json`)**  
Make a file named `db.json` and add sample data:  

```json
{
  "patients": [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "condition": "Gingivitis",
      "doctor_id": 101
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 25,
      "condition": "Tooth Sensitivity",
      "doctor_id": 102
    }
  ],
  "doctors": [
    {
      "id": 101,
      "name": "Dr. Emily Carter",
      "specialty": "Orthodontics"
    },
    {
      "id": 102,
      "name": "Dr. Michael Brown",
      "specialty": "Periodontics"
    }
  ]
}
```

---

## **🛠 Step 3: Start JSON Server**
Run this command to start the server:  

```sh
json-server --watch db.json --port 5000
```
📌 Your **fake backend** will now run at:  
👉 `http://localhost:5000/patients`  
👉 `http://localhost:5000/doctors`  

---

## **🔹 Step 4: How to Modify Data from the Frontend**  

### **1️⃣ Fetch All Patients (GET)**
```js
fetch('http://localhost:5000/patients')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

### **2️⃣ Add a New Patient (POST)**
```js
fetch('http://localhost:5000/patients', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "David Miller",
    age: 40,
    condition: "Root Canal",
    doctor_id: 101
  })
})
  .then(response => response.json())
  .then(data => console.log('New Patient:', data))
  .catch(error => console.error(error));
```

---

### **3️⃣ Update Patient Info (PUT)**
```js
fetch('http://localhost:5000/patients/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "John Doe",
    age: 35,
    condition: "Braces Adjustment",
    doctor_id: 102
  })
})
  .then(response => response.json())
  .then(data => console.log('Updated Patient:', data))
  .catch(error => console.error(error));
```

---

### **4️⃣ Delete a Patient (DELETE)**
```js
fetch('http://localhost:5000/patients/2', { method: 'DELETE' })
  .then(() => console.log('Patient Deleted'))
  .catch(error => console.error(error));
```

---

## **🔹 Step 5: Fetch Patients by Doctor ID (Filtering Data)**
If you want to **see all patients assigned to a doctor**, use query parameters:  
```js
fetch('http://localhost:5000/patients?doctor_id=101')
  .then(response => response.json())
  .then(data => console.log('Patients of Dr. Emily:', data))
  .catch(error => console.error(error));
```

---

## **📌 How JSON Server Helps Your Dental Clinic App?**
✔️ **Frontend-Only Development** → You can **add, update, and delete patients/doctors** without a real backend.  
✔️ **Mimics a Real API** → Works just like an actual backend for testing.  
✔️ **Easily Replaceable** → Once you're ready for a real backend, just swap JSON Server with a database.  

---

## **❌ Limitations of JSON Server**
🚨 **NOT Scalable** → Can't handle large amounts of data.  
🚨 **No Authentication** → No user login, security, or access control.  
🚨 **No Real-Time Updates** → Changes are **not reflected across multiple users** instantly.  

---

## **🚀 Future Plan (If You Want a Real Backend)**
- Start with JSON Server **for development**.  
- Later, switch to **Node.js + Express + MongoDB/PostgreSQL** for a real backend.  
- OR use **Firebase** if you want a backend without coding.  

---

## **🎯 Final Thoughts**
✅ **JSON Server is perfect for frontend development** but **NOT for production**.  
✅ You can **test all CRUD operations** (Create, Read, Update, Delete) **without writing backend code**.  
✅ In the future, move to a real backend for **scalability, authentication, and security**.  

---

### **Do you want help setting up Firebase or a real backend next?** 😊