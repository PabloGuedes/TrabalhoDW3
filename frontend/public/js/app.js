function logout() {
  window.location.href = "../html/login.html";
}

document
  .getElementById("add-financeiro-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const data = document.getElementById("data").value;
    const valor = document.getElementById("valor").value;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3000/api/financeiro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ descricao, data, valor }),
      });

      if (response.ok) {
        const result = await response.json();

        const financeiroData = document.getElementById("financeiro-data");
        const newItem = document.createElement("li");
        newItem.textContent = `${result.descricao} - ${result.data} - R$${result.valor}`;
        financeiroData.appendChild(newItem);

        alert("Registro financeiro adicionado com sucesso!");
        document.getElementById("add-financeiro-form").reset();
      } else {
        const errorData = await response.json();
        alert(`Erro ao adicionar registro financeiro: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro ao enviar dados ao backend:", error);
      alert("Erro ao conectar com o servidor.");
    }
  });
