function bubbleSort(){
    
    for(var i=0; i<arraySize-1;i++) {
        for(var j=0; j<arraySize-i-1;j++){
            if(div_array_size[j]>div_array_size[j+1])
            {
                div_update(div_array[j], div_array_size[j], "dodgerblue");
                div_update(div_array[j+1], div_array_size[j+1], "dodgerblue");
                var temp  = div_array_size[j+1];
                div_array_size[j+1] = div_array_size[j];
                div_array_size[j] = temp;
                div_update(div_array[j],div_array_size[j],"tomato");
                div_update(div_array[j+1],div_array_size[j+1]," tomato");
            }
            // div_update(div_array[j],div_array_size[j],"tomato");
        }
        div_update(div_array[arraySize-i-1], div_array_size[arraySize-i-1],"gray");
    }
     div_update(div_array[0],div_array_size[0],"gray")

}