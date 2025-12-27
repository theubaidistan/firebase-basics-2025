/// User Authentication /////

const auth = firebase.auth();
// const db = firebase.firestore();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});

///// Firestore /////

const db = firebase.firestore();

const createThing = document.getElementById("createThing");
const thingsList = document.getElementById("thingsList");

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged((user) => {
  if (user) {
    // Database Reference
    thingsRef = db.collection("things");

    createThing.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      thingsRef.add({
        uid: user.uid,
        name: faker.commerce.productName(),
        createdAt: serverTimestamp(),
      });
    };

    // Query
    unsubscribe = thingsRef
      .where("uid", "==", user.uid)
      .orderBy("createdAt") // Requires a query
      .onSnapshot((querySnapshot) => {
        // Map results to an array of li elements

        const items = querySnapshot.docs.map((doc) => {
          return `<li>${doc.data().name}</li>`;
        });

        thingsList.innerHTML = items.join("");
      });
  } else {
    // Unsubscribe when the user signs out
    unsubscribe && unsubscribe();
  }
});
//*--------------------------------------------------------------------------------------------------------------
// // app.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// // Initialize Firebase
// const app = initializeApp(window.firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // UI elements
// const signInBtn = document.getElementById("signInBtn");
// const signOutBtn = document.getElementById("signOutBtn");
// const whenSignedOut = document.getElementById("whenSignedOut");
// const whenSignedIn = document.getElementById("whenSignedIn");
// const userDetails = document.getElementById("userDetails");
// const thingsList = document.getElementById("thingsList");
// const createThingBtn = document.getElementById("createThing");

// // Google Sign-In
// signInBtn.addEventListener("click", async () => {
//   const provider = new GoogleAuthProvider();
//   try {
//     await signInWithPopup(auth, provider);
//   } catch (error) {
//     console.error("Sign in error:", error);
//   }
// });

// // Sign-Out
// signOutBtn.addEventListener("click", async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error("Sign out error:", error);
//   }
// });

// // Monitor auth state
// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     whenSignedOut.hidden = true;
//     whenSignedIn.hidden = false;
//     userDetails.innerHTML = `
//       <p><strong>Name:</strong> ${user.displayName}</p>
//       <p><strong>Email:</strong> ${user.email}</p>
//       <img src="${user.photoURL}" width="50">
//     `;
//     await loadThings();
//   } else {
//     whenSignedOut.hidden = false;
//     whenSignedIn.hidden = true;
//     userDetails.innerHTML = "";
//     thingsList.innerHTML = "";
//   }
// });

// // Firestore - load things
// async function loadThings() {
//   thingsList.innerHTML = "";
//   const querySnapshot = await getDocs(collection(db, "things"));
//   querySnapshot.forEach((doc) => {
//     const li = document.createElement("li");
//     li.className = "list-group-item";
//     li.textContent = `${doc.id}: ${JSON.stringify(doc.data())}`;
//     thingsList.appendChild(li);
//   });
// }

// // Firestore - create random thing
// createThingBtn.addEventListener("click", async () => {
//   try {
//     const randomThing = {
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       createdAt: new Date(),
//     };
//     const docRef = await addDoc(collection(db, "things"), randomThing);
//     console.log("Document written with ID:", docRef.id);
//     await loadThings();
//   } catch (error) {
//     console.error("Error adding document:", error);
//   }
// });
