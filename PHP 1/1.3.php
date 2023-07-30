<?php
$units=200;
$price;
if ($units <= 50) {
    $price = 3.5 * $units;
} else if ($units <= 100) {
    $price = 4 * $units - 175;
} else if ($units <= 150) {
    $price = 5.2 * $units - 325;
} else {
    $price = 6.5 * $units - 625;
}
     echo "Price: $price";  
?>