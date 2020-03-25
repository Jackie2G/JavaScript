function add(element){
    var form = window.document.dynamicForm;
    var add = element.cloneNode(true);
    var field = document.createElement("input");
    field.name = "srednia_arytmetyczna";
    field.type = "number";
    
    var rem = document.createElement("input");
    rem.value = "Usun pole";
    rem.type = "button";
    rem.onclick = function onclick(event)
    {rem.parentNode.removeChild(rem);
    add.parentNode.removeChild(add);
    field.parentNode.removeChild(field)};
    
    var bloc = document.createElement("p");
    bloc.appendChild(field);
    form.insertBefore(add, element);
    form.insertBefore(rem, element);
    form.insertBefore(bloc, element);

    console.log(field.value);
}

function srednia(){
    var array = document.getElementsByName("srednia_arytmetyczna");
    var suma = 0;
    var elementy = 0;
    for (var i = 0; i < array.length; i++){
        if (parseInt(array[i].value))
            suma += parseInt(array[i].value);
            elementy++;
    }
    document.getElementById("wynik").value = suma / elementy;
    return false;
}