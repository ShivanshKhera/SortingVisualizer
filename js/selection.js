function selectionSort(){
    for( var i = 0; i < arraySize-1; i++) {
        var mini = i;
        div_update(div_array[mini], div_array_size[mini], "green");
        for(var j = i+1; j < arraySize; j++) {
            div_update(div_array[j], div_array_size[j], "dodgerblue");
            if(div_array_size[j] < div_array_size[mini]) {
                if(mini != i)
                    div_update(div_array[mini], div_array_size[mini], "dodgerblue");
                mini = j;
                div_update(div_array[mini], div_array_size[mini], "green");
            }
        }
        var temp = div_array_size[mini];
        div_array_size[mini] = div_array_size[i];
        div_array_size[i] = temp;

        div_update(div_array[i], div_array_size[i], "green");
        div_update(div_array[mini], div_array_size[mini], "green");
        div_update(div_array[i], div_array_size[i], "gray");
        for(var t = i+1; t < arraySize; t++) {
            div_update(div_array[t], div_array_size[t], "tomato");
        }
    }
    div_update(div_array[arraySize-1], div_array_size[arraySize-1], "gray");
    console.log(div_array_size);

}