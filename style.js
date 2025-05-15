body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  text-align: center;
  padding: 30px;
}

.title {
  font-size: 50px;
  margin-bottom: 20px;
  color: #333;
}

.editor-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea {
  width: 90%;
  min-height: 400px;
  font-size: 20px;
  padding: 20px;
  border: 2px solid #0077cc;
  border-radius: 10px;
  resize: both;
  overflow-y: auto;
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  textarea {
    resize: none;
    height: auto;
  }
}

.buttons {
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

input[type="file"] {
  margin: 5px;
}
