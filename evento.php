<?php
// Criação do evento iCalendar
$ical = "BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20240305T190000Z
DTEND:20240305T200000Z
SUMMARY:Date [tipoDate]
END:VEVENT
END:VCALENDAR";

// Definição do cabeçalho
header('Content-type: text/calendar; charset=utf-8');
header('Content-Disposition: attachment; filename=event.ics');

// Saída do evento iCalendar
echo $ical;
?>
