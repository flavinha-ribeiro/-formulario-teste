<html>
<head>
<link rel="stylesheet" type="text/css" href="styles/base.css" >

</head>
<body>
    <form action="mydata.php" method="POST">
   <fieldset>

       <legend>Informations</legend>
    <p>
        <label for="name">name: <em class="required">(Required)</em></label>
        <input name="name" id="name" type="text" />
    </p>

    <p>
         <label for="Address">Address:</label>
         <input name="Address" id="Address" type="text" />
    </p>

    <p>
         <label for="City">City:</label>
         <input name="City" id="City" type="text" />
    </p>

     <p>
         <label for="Country">Country:</label>
         <input name="Country" id="Country" type="text" />
    </p>

     <p>
         <label for="email">Email Address:</label>
         <input name="email" id="email" type="text" />
     </p>

     <p>
       <label for="Age">Age:</label>
       <input name="Age" id="Age" type="text" />
     </p>

     <p>
        Date of birth: <input type="date" name="birth">
    </p>

     <p>
        <label for="telephone">telephone:</label>
        <input name="telephone" id="telephone" type="text" />
    </p>

   </fieldset>
    <p>
        <textarea cols='45' rows='7' name='comment' required></textarea>
    <p/>

    <p>
        <input type="submit" value="Submit Form"/>
   </p>

</form>
