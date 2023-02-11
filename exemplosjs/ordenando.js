
arrTest = [0, 1, 2, 3];


function swap(arr, A, B) { //terminado
    arr[A] = B;
    arr[B] = A;
}

function shuffle(arr, changes) { //Não terminado
    for (let i = arr.length - 1; i > changes; i--) {

    }
}

function bubble_sort(arr){
    bubbleSort(arr);
}

bubble_sort(arrTest);
console.log(arrTest);

//Algoritms 

function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++){
    
        for(var j = 0; j < ( arr.length - i -1 ); j++){
           
          if(arr[j] > arr[j+1]){
             
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
    }
}