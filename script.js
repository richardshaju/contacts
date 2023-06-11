
fetch("table.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
         <td>${product.index}</td>
            <td>${product.Name}</td>
            <td>${product.Number}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});