#include <iostream>
#include <climits>

// Задача:
// Найти в массиве три целых минимальных числа. Числа могут повторяться
// Например: [2,1,6,1,0] -> [0,1,1]

// Решение:
// Функция просто проходит три раза по массиву и ищет 3 минимальных значения
//
// Была попытка реализовать всё одним циклом (записать минимум (в новый массив на 3 эл.), и если найдётся число ещё меньше, записывать его в начало массива, 'отогвигая'
// предыдущий найденный минимум на индекс назад), однако такой подход не сработает, если в массиве, например, самое первое число будет наименьшим
//
// После этой мысли была идея отсортировать массив, но тогда получится for внутри for'а; в таком случае, мне кажется, проще просто найти 3 минимума
// 3-мя отдельными for'ами, чем писать цикл внутри цикла

// Возвращает указатель на 3 минимальных числа в данном функции массиве
// На вход: указатель на массив чисел и кол-во элементов в нём
int* three_mins(int* ar, const int ar_size){
    static int min[3] = { __INT_MAX__, __INT_MAX__, __INT_MAX__}; // Массив с минимумами
    size_t tmp; // Переменная будет хранить индекс элемента для изменения

    // Поиск первого минимума. Его индекс в массиве ar записывается в переменную tmp
    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[0]){
            min[0] = ar[i];
            tmp = i;
        }
    }
    ar[tmp] = __INT_MAX__; // Найденное минимальное число в массиве ar изменяется на 2,147,483,647 (максимальное неотрицательное число для int (32-бита)), чтобы не "наткнуться" на него снова после

    // Поиск второго минимума. Его индекс в массиве ar записывается в переменную tmp
    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[1]){
            min[1] = ar[i];
            tmp = i;
        }
    }
    ar[tmp] = __INT_MAX__; // Найденное минимальное число в массиве ar снова изменяется на __INT_MAX__

    // Поиск третьего минимума
    for (size_t i = 0; i < ar_size; i++){
        if (ar[i] <= min[2])
            min[2] = ar[i];
    }
    
    return min;
}

int main(){
    // Объявление переменных и вызов функции
    int c_array[] = {2,34,56,13,49,75,3575,61,30,377,67,130,56,4864}; // Исходный массив
    const int N = sizeof(c_array) / sizeof(c_array[0]); // Кол-во чисел в нём
    int* result = three_mins(c_array, N);

    // Вывод результата
    for (size_t i = 0; i < 3; i++)
        std::cout << result[i] << ' ';
    std::cout << std::endl;
    
    return EXIT_SUCCESS;
}