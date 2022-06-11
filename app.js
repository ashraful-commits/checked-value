const fruits = document.querySelectorAll('input[name ="gender"]');
const output = document.querySelector('.output');


fruits.forEach((items)=>{
        items.onchange=()=>{
            const selection = document.querySelectorAll('input[name ="gender"]:checked');
            let selectedFood =[];
            let total = 0;
            selection.forEach((items)=>{
                selectedFood.push(items.value);
                total+=Number(items.getAttribute('price'));
            })
        output.innerHTML= `SMS : <br>You are selected ${selectedFood.join(', ')}.<br>
        Total Price is ${total} Taka. <br>
        Please Pay & Wait.Thanks You !`;
    }
})