function quickSort(){
    quick(0, arraySize-1);
    console.log(div_array_size);
}

function quick(start, end){
    if(start > end) {
        return;
    }
    var p = partition(start, end);

    quick(start, p-1);
    quick(p+1, end);
}

function partition(start, end) {
    // var piv = div_array_size[start];
    // var cnt = 0;

    // for(var i = start+1; i <= end; i++) {
    //     if(div_array_size[i] > piv) {
    //         cnt++;
    //     }
    // }
    // var temp = div_array_size[cnt+start];
    // div_array_size[start+cnt] = div_array_size[start];
    // div_array_size[start] = temp;

    // div_update(div_array[start], div_array_size[start], "dodgerblue"); 
    // div_update(div_array[cnt+start], div_array_size[cnt+start], "dodgerblue"); 

    // var s = start, e = end;
    // while(s < start+cnt) {
    //     if(div_array_size[s] > piv && div_array_size[e] <= piv){
    //         var temp = div_array_size[s];
    //         div_array_size[s] = div_array_size[e];
    //         div_array_size[e] = temp;

    //         div_update(div_array[s], div_array_size[s], "dodgerblue"); 
    //         div_update(div_array[e], div_array_size[e], "dodgerblue"); 
    //         s++;e--;
    //     }
    //     else if(div_array_size[s] >piv){
    //         e--;
    //     }
    //     else{
    //         s++;
    //     }
    // }
    // return start+cnt;
    var i = start + 1;
    var piv = div_array_size[start] ;//make the first element as pivot element.
    div_update(div_array[start],div_array_size[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_array_size[ j ] < piv){
                // div_update(div_array[j],div_array_size[j],"yellow");//Color update

                div_update(div_array[i],div_array_size[i],"black");//Color update
                div_update(div_array[j],div_array_size[j],"black");//Color update

                var temp=div_array_size[i];
                div_array_size[i]=div_array_size[j];
                div_array_size[j]=temp;

                div_update(div_array[i],div_array_size[i],"dodgerblue");//Height update
                div_update(div_array[j],div_array_size[j],"green");//Height update

                i += 1;
            }
            else{
                div_update(div_array[i],div_array_size[i],"dodgerblue");
            }
    }
    div_update(div_array[start],div_array_size[start],"black");//Color update
    div_update(div_array[i-1],div_array_size[i-1],"balck");//Color update
    
    var temp=div_array_size[start];//put the pivot element in its proper place.
    div_array_size[start]=div_array_size[i-1];
    div_array_size[i-1]=temp;

    div_update(div_array[start],div_array_size[start],"dodgerblue");//Height update
    div_update(div_array[i-1],div_array_size[i-1],"gray");//Height update

    for(var t=start;t<=i;t++){
        div_update(div_array[t],div_array_size[t],"gray");//Color update
    }

    return i-1;//return the position of the pivot
}