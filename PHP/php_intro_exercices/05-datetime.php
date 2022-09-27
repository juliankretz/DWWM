<?php

// 5.A

function getToday($date): string
{
    return date('d/m/Y h:i:s a');
}
echo  getToday('') . PHP_EOL;


// 5.B

function getTimeLeft($dateToday, $date): string
{
    $dateToDay = date('d/m/Y h:i:s a');
    if ($dateToday == $date) 
    {
        return "Aujourd'hui";
    }
    else if ($dateToday > $date) 
    {
        return "Évènement passé";
    }
    else 
    {
        $interval = date_diff($dateToDay ,$date);

        return 'dans ' . $interval->format('Y') . ' an(s) ' . $interval->format('m') . ' mois ' . $interval->format('d') . ' jour(s)';
    }
}
echo getTimeLeft('', '2024-11-28') . PHP_EOL;

