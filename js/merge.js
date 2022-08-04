function mergeSort(){
    merge_sort(0, arraySize-1);
    console.log(div_array_size);
}

function merge_sort(start, end){
    if(start >= end) {
        return;
    }

    var mid = Math.floor((start+end)/2);
    merge_sort(start, mid);
    merge_sort(mid+1, end);
    div_update(div_array[mid], div_array_size[mid], "green"); 

    merge(start, mid, end);
}

function merge(start, mid, end){

    var arr = []
    var a = start, b = mid+1, m = 0;

    while(a <= mid && b <= end) {
        if(div_array_size[a] < div_array_size[b]) {
            arr[m++] = div_array_size[a++]
            div_update(div_array[a-1], div_array_size[a-1], "dodgerblue"); 
        }
        else{
            arr[m++] = div_array_size[b++]
            div_update(div_array[b-1], div_array_size[b-1], "dodgerblue"); 
        }
    }

    while(a <= mid) {
        arr[m++] = div_array_size[a++]
        div_update(div_array[a-1], div_array_size[a-1], "dodgerblue"); 
    }
    while(b<= end) {
        arr[m++] = div_array_size[b++]
        div_update(div_array[b-1], div_array_size[b-1], "dodgerblue"); 
    }

    for(var i = 0; i < m; i++) {
        div_array_size[start+i] = arr[i];
        div_update(div_array[start+i], div_array_size[start+i], "gray");
    }
}