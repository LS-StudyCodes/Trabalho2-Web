var tarefas = [];

function adicionarTarefa() {
  var nomeTarefa = document.getElementById("nome-tarefa").value;
  var dataVencimento = document.getElementById("data-vencimento").value;
  var prioridade = document.getElementById("prioridade").value;
  var descricao = document.getElementById("descricao").value;
  var senha = document.getElementById("senha").value;

  if (nomeTarefa.length < 4) {
    alert("O nome da tarefa deve ter mais de 4 caracteres.");
    return;
  }
  if (dataVencimento === "") {
    alert("Selecione uma data de vencimento.");
    return;
  }
  if (prioridade === "") {
    alert("Selecione uma prioridade.");
    return;
  }
  if (descricao === "") {
    alert("A descrição não pode estar vazia.");
    return;
  }
  if (senha !== "senha") {
    alert("Senha incorreta.");
    return;
  }

  tarefas.push({
    nome: nomeTarefa,
    data: dataVencimento,
    prioridade: prioridade,
    descricao: descricao
  });

  document.getElementById("tarefa-form").reset();

  atualizarListaTarefas();
}

function removerTarefa() {
  if (tarefas.length > 0) {
    tarefas.pop(); 
    atualizarListaTarefas();
  } else {
    alert("Não há tarefas para remover.");
  }
}

function atualizarListaTarefas() {
  var listaTarefas = document.getElementById("lista-tarefas");
  var contadorTarefas = document.getElementById("contador-tarefas");
  listaTarefas.innerHTML = ""; 

  for (var i = 0; i < tarefas.length; i++) {
    var li = document.createElement("li");
    li.textContent = tarefas[i].nome + " - " + tarefas[i].data + " - " + tarefas[i].prioridade;
    listaTarefas.appendChild(li);
  }

  contadorTarefas.textContent = tarefas.length;
}