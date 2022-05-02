/* Links para el uso de firebase CDN:
 * https://firebase.google.com/docs/web/learn-more?hl=es#add-sdks-cdn
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

/* Conexion a firebase */
const firebaseConfig = {
  apiKey: "AIzaSyCMzsLfC9F-FKnqCWfBQLG_0QuaxY_l4Yg",
  authDomain: "proyectoservo.firebaseapp.com",
  databaseURL: "https://proyectoservo-default-rtdb.firebaseio.com",
  projectId: "proyectoservo",
  storageBucket: "proyectoservo.appspot.com",
  messagingSenderId: "941818909159",
  appId: "1:941818909159:web:28ca05b08f6b4febeeed42",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

/* Consulta de los datos a firebase
 * Mas info: https://firebase.google.com/docs/database/web/read-and-write?hl=es
 */
let servoId = "-N0hhXdMywbcop6X2AJt";
let angle = 180;

const btnSend = document.getElementById("btnSendAngle")
document.getElementById("inputAngle").value = 0;
document.getElementById("p-ang").innerHTML = '0°';

btnSend.addEventListener("click", () => {
  angle = parseFloat(document.getElementById("inputAngle").value);
  if (angle < 0 || angle > 180) {
    angle = 0;
    document.getElementById("p-ang").innerHTML = `0°`;
    document.getElementById("alert").classList.add("alert");
  } else {
    document.getElementById("p-ang").innerHTML = `${angle}°`;
    document.getElementById("alert").classList.add("d-none");
  }
  writeServoData(servoId, angle);
  console.log("Si")
});

function writeServoData(motorId, angleValue) {
  set(ref(db, "Motors/" + motorId), {
    angle: angleValue,
  });
}
