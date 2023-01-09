<?php

$a = 23; 
$b = 17;

if ($a > $b) 
{
    echo "$b est inférieur à $a";
}
else 
{
    echo $a . ' est inférieur à ' . $b;
}

echo PHP_EOL;

for ($i = $b; $i <= $a; $i++) 
{
    echo $i . ' ';
}

echo PHP_EOL;

$i = $b;

while ($i <= $a)
{
    echo $i . ' ';
    $i ++;
}