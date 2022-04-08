#include "bubble_sort.h"
#include "heap_sort.h"
#include "insertion_sort.h"
#include "quick_sort.h"
#include "shell_sort.h"
#include <chrono>
#include <iostream>

using namespace std::chrono;

enum sort_types {
    quick = 1,
    shell = 2,
    heap = 3,
    insert = 4,
    bubble = 5
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

    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);

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
    }
    std::cout << " sort for " << size << " elements in µs: " << duration.count() << std::endl;
}

int main() {
    for (size_t i = 100; i <= 100; i *= 10) {
        // measure_exec_time(i, quick);
        // measure_exec_time(i, shell);
        // measure_exec_time(i, heap);
        // measure_exec_time(i, insert);
        // measure_exec_time(i, bubble);
        std::cout << "-------------------------------------------------------------" << std::endl;
    }

    return EXIT_SUCCESS;
}