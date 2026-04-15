body {
    font-family: Arial;
    text-align: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Título */
h1 {
    color: white;
}

/* Formulario */
form {
    width: 280px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Inputs */
input, select, button {
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

/* Botón */
button {
    background: #667eea;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #5a67d8;
}

/* Modal fondo */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
}

/* Caja del modal */
.caja {
    background: white;
    width: 260px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    text-align: left;
}

/* Botón modal */
.caja button {
    margin-top: 10px;
    background: #764ba2;
}
