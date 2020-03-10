function add(element){
    var form = window.document.dynamicForm;
    // We clone the add button
    var add = element.cloneNode(true);
    // Create a new HTML tag of type "input"
    var field = document.createElement("input");
    // The value filled in the form will be stored in an array
    field.name = "champs[]";
    field.type = "text";
    
    var rem = document.createElement("input");
    rem.value = "Usun pole";
    rem.type = "button";
    // Add the onclick event
    rem.onclick = function onclick(event)
    {rem.parentNode.removeChild(rem);
    add.parentNode.removeChild(add);
    field.parentNode.removeChild(field)};
    
    // We create a new element of type "p" and we insert the field inside.
    var bloc = document.createElement("p");
    bloc.appendChild(field);
    form.insertBefore(add, element);
    form.insertBefore(rem, element);
    form.insertBefore(bloc, element);
}