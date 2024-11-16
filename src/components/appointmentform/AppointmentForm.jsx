import React, { useState } from "react";

function AppointmentForm() {
  const [form, setForm] = useState({ name: "", service: "", date: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento realizado para ${form.name} no serviço ${form.service} na data ${form.date}.`);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome do Pet"
        value={form.name}
        onChange={handleChange}
        required
      />
      <select name="service" value={form.service} onChange={handleChange} required>
        <option value="">Escolha um serviço</option>
        <option value="banho">Banho</option>
        <option value="tosa">Tosa</option>
      </select>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Agendar</button>
    </form>
  );
}

export default AppointmentForm;
