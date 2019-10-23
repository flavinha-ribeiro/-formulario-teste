<html>
<head>
<link rel="stylesheet" type="text/css" href="styles/base.css" >

</head>
<body>
    <form action="mydata.php" method="POST">
   <fieldset>

       <legend>Informations</legend>
    <p>
        <label for="name">name: <em class="required"></em></label>
        <input name="name" id="name" type="text" />
    </p>

    <p>
         <label for="Address">Address:</label>
         <input name="Address" id="Address" type="text" />
    </p>
 <p>
   <label for="Neighborhood">Neighborhood:</label>
   <input name="Neighborhood" id="Neighborhood" type="text" />

    <p>
         <label for="City">City:</label>
         <input name="City" id="City" type="text" />
    </p>

     <p>
         <label for="Country">Country:</label>
         <input name="Country" id="Country" type="text" />
    </p>

     <p>
         <label for="email">email Address:</label>
         <input name="email" id="email" type="text" />
     </p>

     <p>
       <label for="Age">Age:</label>
       <input name="Age" id="Age" type="text" />
     </p>


     <p>
        <label for="telephone">telephone:</label>
        <input name="telephone" id="telephone" type="text" />
    </p>

    <p>
      <label for="comments">comments:</label>
       <textarea cols="45" id="comments" rows="7" name="comments" required></textarea>
    <p/>

    <p>
        <input type="Submit" value="Submit Form"/>
   </p>
 </fieldset>
</form>
