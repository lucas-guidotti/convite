<?php
// Verifica se o tipo de date foi enviado via POST
if(isset($_POST['tipoDate'])){
  // Obtém o tipo de date enviado via POST
  $tipoDate = $_POST['tipoDate'];

  // Criação do evento iCalendar com o tipo de date dinâmico
  $ical = "BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20240305T190000Z
DTEND:20240305T200000Z
SUMMARY:Date $tipoDate
END:VEVENT
END:VCALENDAR";

  // Definição do cabeçalho
  header('Content-type: text/calendar; charset=utf-8');
  header('Content-Disposition: attachment; filename=event.ics');

  // Saída do evento iCalendar
  echo $ical;
} else {
  // Se o tipo de date não foi enviado, retorna um erro
  echo "Erro: Tipo de date não especificado.";
}
?>

