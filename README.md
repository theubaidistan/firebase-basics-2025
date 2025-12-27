# Firebase Basics

![Firebase Basics](https://i.ytimg.com/vi/q5J5ho7YUhA/maxresdefault.jpg)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-FF6F00?style=for-the-badge&logo=firebase&logoColor=white)
![Firebase Hosting](https://img.shields.io/badge/Firebase_Hosting-FFA611?style=for-the-badge&logo=firebase&logoColor=black)
![Firestore](https://img.shields.io/badge/Firestore-FF6F00?style=for-the-badge&logo=firebase&logoColor=white)

## Description

A comprehensive guide to getting started with Firebase, covering the essential services including Authentication, Hosting, and Firestore Database. This project demonstrates how to integrate Firebase into your web applications using HTML, CSS, and JavaScript.

## Features

- 🔐 **Firebase Authentication** - Secure user authentication
- 🌐 **Firebase Hosting** - Fast and secure web hosting
- 📊 **Firestore Database** - Scalable NoSQL cloud database
- 💻 **Modern Web Stack** - Built with HTML5, CSS3, and JavaScript

## Technologies Used

- **HTML5** - Markup language for structuring content
- **CSS3** - Styling and layout
- **JavaScript** - Client-side programming
- **Firebase SDK** - Backend services and APIs
- **Firebase Auth** - User authentication and management
- **Firebase Hosting** - Static web hosting
- **Firestore** - Cloud-based NoSQL database

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account
- Firebase CLI installed globally

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd firebase-basics
```

2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

3. Login to Firebase

```bash
firebase login
```

4. Initialize Firebase in your project

```bash
firebase init
```

5. Select the services you need:
   - Firebase Hosting
   - Firestore
   - Authentication

### Configuration

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Register your web app and copy the configuration
3. Add your Firebase config to your JavaScript file:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

## Usage

### Firebase Authentication

```javascript
// Sign up new users
firebase.auth().createUserWithEmailAndPassword(email, password);

// Sign in existing users
firebase.auth().signInWithEmailAndPassword(email, password);

// Sign out
firebase.auth().signOut();
```

### Firestore Database

```javascript
// Get reference to Firestore
const db = firebase.firestore();

// Add data
db.collection("users").add({
  name: "John Doe",
  email: "john@example.com",
});

// Get data
db.collection("users")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });
```

### Deploy to Firebase Hosting

```bash
firebase deploy
```

## Project Structure

```
firebase-basics/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── firebase.json
├── .firebaserc
└── README.md
```

## Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For support, please open an issue in the repository or contact the maintainers.

---

Made with ❤️ using Firebase
