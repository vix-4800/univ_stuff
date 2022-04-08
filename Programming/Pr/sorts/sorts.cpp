#include "bubble_sort.h"
#include "heap_sort.h"
#include "insertion_sort.h"
#include "merge_sort.h"
#include "quick_sort.h"
#include "radix_sort.h"
#include "selection_sort.h"
#include "shell_sort.h"
#include <chrono>
#include <iostream>

using namespace std::chrono;

enum sort_types {
    quick = 1,
    shell = 2,
    heap = 3,
    insert = 4,
    bubble = 5,
    select = 6,
    merge_s = 7,
    radix = 8
};

void print_arr(int *arr, int size) {
    for (size_t i = 0; i < size; i++)
        std::cout << arr[i] << ' ';
    std::cout << std::endl;
}

void measure_exec_time(int size, int type) {
    int my_array[size];
    for (size_t i = 0; i < size; i++)
        my_array[i] = rand() % 500;

    auto start = high_resolution_clock::now();

    // запуск нужной функции
    if (type == quick)
        quick_sort(my_array, size);
    if (type == shell)
        shell_sort(my_array, size);
    if (type == heap)
        heap_sort(my_array, size);
    if (type == insert)
        insertion_sort(my_array, size);
    if (type == bubble)
        bubble_sort(my_array, size);
    if (type == select)
        selection_sort(my_array, size);
    if (type == merge_s)
        merge_sort(my_array, 0, size - 1);
    if (type == radix)
        radix_sort(my_array, size);

    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);

    // вывод результата в консоль
    std::cout << "Execution time of ";
    switch (type) {
    case 1:
        std::cout << "quick";
        break;
    case 2:
        std::cout << "shell";
        break;
    case 3:
        std::cout << "heap";
        break;
    case 4:
        std::cout << "insertion";
        break;
    case 5:
        std::cout << "bubble";
        break;
    case 6:
        std::cout << "select";
        break;
    case 7:
        std::cout << "merge";
        break;
    case 8:
        std::cout << "radix";
        break;
    }
    std::cout << " sort for " << size << " elements in microseconds: " << duration.count() << std::endl;

    // print_arr(my_array, size);
}

int main() {
    // Функция вывода получившегося массива есть в конце функции measure_exec_time
    // !!! Однако стоит учесть !!!
    // что цикл на следующих строках будет генерировать массивы размерами до 100000, и выводить в консоль я бы такое не стал, так что лучше уменьшить
    // условие выхода из цикла хотя бы до 100

    for (size_t i = 100; i <= 100000; i *= 10) {
        // for (size_t j = 0; j < 3; j++) // для запуска функций на 100 элементов (для поиска среднего значения времени исполнения)

        measure_exec_time(i, quick);   // отчитано (Быстрая сортировка)
        measure_exec_time(i, shell);   // отчитано (Сортировка Шелла)
        measure_exec_time(i, heap);    // (Пирамидальная сортировка)
        measure_exec_time(i, insert);  // отчитано (Сортировка вставками)
        measure_exec_time(i, bubble);  // отчитано (Сортировка пузырьком)
        measure_exec_time(i, select);  // отчитано (Сортировка выбором)
        measure_exec_time(i, merge_s); // (Сортировка слиянием)
        measure_exec_time(i, radix);   // (Поразрядная сортировка)
        std::cout << "-------------------------------------------------------------" << std::endl;
    }

    // таблица, а также .md файл с результатами измерений находятся в архиве

    return EXIT_SUCCESS;
}