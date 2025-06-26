import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    cidade: "",
    bairro: "",
    email: "",
    cpf: "",
  });
  const [cadastros, setCadastros] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCadastros([...cadastros, formData]);
    setFormData({
      nome: "",
      endereco: "",
      telefone: "",
      cidade: "",
      bairro: "",
      email: "",
      cpf: "",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-900 text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Login Funcionário</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input className="input" type="text" placeholder="Usuário" required />
          <input className="input" type="password" placeholder="Senha" required />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-green-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Cadastro de Celulares</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-6 max-w-md">
        {["nome", "endereco", "telefone", "cidade", "bairro", "email", "cpf"].map((field) => (
          <input
            key={field}
            className="input"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required={!["bairro", "email", "cpf"].includes(field)}
          />
        ))}
        <button className="btn" type="submit">Cadastrar</button>
      </form>
      <h2 className="text-2xl font-semibold mb-2">Celulares Cadastrados:</h2>
      <ul className="space-y-2">
        {cadastros.map((item, idx) => (
          <li key={idx} className="bg-white bg-opacity-10 p-2 rounded shadow">
            {item.nome} - {item.telefone} ({item.cidade})
          </li>
        ))}
      </ul>
    </div>
  );
}