function insertionSort(){
    div_update(div_array[0], div_array_size[0], "gray");
    for(var i = 1; i < arraySize; i++) {
        div_update(div_array[i], div_array_size[i], "dodgerblue");
        var card = div_array_size[i];
        var j = i-1;
        for(j = i-1; j >= 0; j--) {
            div_update(div_array[j], div_array_size[j], "green");
            div_update(div_array[j+1], div_array_size[j+1], "green");
            if(div_array_size[j] > card){
                div_array_size[j+1]= div_array_size[j];
                div_update(div_array[j+1], div_array_size[j], "dodgerblue");
            }
            else break;
        }
        div_array_size[j+1] = card;
        div_update(div_array[j+1], card, "gray");
        for(var t = 0; t < i; t++) {
            div_update(div_array[t], div_array_size[t], "gray"); 
        }

    }
    console.log(div_array_size);
}