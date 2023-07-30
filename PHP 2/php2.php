<?php 
    $s = "localhost";
    $u = "root";
    $p = "";
    $d = "registration";
    $c = new mysqli($s, $u, $p, $d);

    $fname=$_REQUEST['fn'];
    $lname=$_REQUEST['ln'];
    $uname=$_REQUEST['un'];
    $password=$_REQUEST['p'];
    $gender=$_REQUEST['gender'];
    $year=$_REQUEST['y'];
    $email=$_REQUEST['email'];
    $number=$_REQUEST['num'];
    

        $s ="insert into users values ('$fname', '$lname', '$uname', '$password', $gender', '$year', '$email', '$number')";
        if($c->connect_error)
    {
        die("Connection failed: <br>");        
    }
    else
    {
        echo"Connection Sucessful <br>";
    }

     if ($c->query($s)==True) {
        die("Record update successfull: <br>");
    } else {
        echo "Error updating record <br>";
    }
?> 