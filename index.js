/*document.getElementById('confirmar').addEventListener('click', function() {
    var tipoDate = document.getElementById('tipoDate').value;
  
    // Definir a data e hora desejadas (ano, mês, dia, hora, minutos)
    var dataEvento = new Date(2024, 2, 5, 19, 0); // Lembre-se que o mês é base zero (0 = Janeiro, 1 = Fevereiro, ...)
    var dataEventoFormatada = dataEvento.toISOString().slice(0, 19).replace('T', ' ');
  
    // Criar o link para adicionar ao calendário
    var linkCalendario = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(
      'BEGIN:VCALENDAR\n' +
      'VERSION:2.0\n' +
      'BEGIN:VEVENT\n' +
      'DTSTART:' + dataEventoFormatada + '\n' + // Início do evento (data e hora específicas)
      'DTEND:' + dataEventoFormatada + '\n' + // Fim do evento (mesma data e hora que o início)
      'SUMMARY:Date ' + tipoDate + '\n' + // Título do evento
      'END:VEVENT\n' +
      'END:VCALENDAR\n');
  
    // Redirecionar para o link do calendário
    window.location.href = linkCalendario;
  });*/

  /*document.getElementById('confirmar').addEventListener('click', function() {
    var tipoDate = document.getElementById('tipoDate').value;
    window.location.href='https://raw.githubusercontent.com/lucas-guidotti/convite/main/evento.ics';
  });*/

  document.getElementById('confirmar').addEventListener('click', function() {
    var tipoDate = document.getElementById('tipoDate').value;
    
    // Envia o tipo de date via POST para o arquivo PHP
    fetch('https://github.com/lucas-guidotti/convite/blob/main/evento.php', {
      method: 'POST',
      body: 'tipoDate=' + tipoDate,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => {
      // Verifica se a resposta foi bem sucedida
      if(response.ok) {
        // Redireciona para o arquivo PHP
        window.location.href = 'https://github.com/lucas-guidotti/convite/blob/main/evento.php';
      } else {
        // Exibe uma mensagem de erro
        alert('Erro ao criar o evento. Por favor, tente novamente.');
      }
    }).catch(error => {
      console.error('Erro:', error);
      // Exibe uma mensagem de erro
      alert('Erro ao criar o evento. Por favor, tente novamente.');
    });
  });
  
  