#include <iostream>
#include <climits>

// Найти в массиве три целых минимальных числа. Числа могут повторяться
// Например: [2,1,6,1,0] -> [0,1,1]

int* three_mins(int* ar, const int ar_size){
    static int min[3] = {INT_MAX, INT_MAX, INT_MAX}; 
    int k = 0;

    size_t temp;
    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[0]){
            min[0] = ar[i];
            temp = i;
        }
    }
    ar[temp] = INT_MAX;

    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[1]){
            min[1] = ar[i];
            temp = i;
        }
    }
    ar[temp] = INT_MAX;

    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[2]){
            min[2] = ar[i];
            temp = i;
        }
    }
    
    return min;
}

int main(){
    // Объявление переменных и вызов функции
    int c_array[] = {34,56,13,49,75,3575,61,30,0,377,67,130,56,4864};
    const int N = sizeof(c_array) / sizeof(c_array[0]);
    int* result = three_mins(c_array, N);

    // Вывод результата
    for (size_t i = 0; i < 3; i++)
        std::cout << result[i] << ' ';
    std::cout << std::endl;
    
    return EXIT_SUCCESS;
}