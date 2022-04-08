#include <cstddef>

int *insertion_sort(int *arr, int size) {
    int buff = 0; // для хранения перемещаемого значения
    size_t j;     // для циклов

    for (size_t i = 1; i < size; i++) {
        buff = arr[i]; // запомним обрабатываемый элемент
        // и начнем перемещение элементов слева от него
        // пока запомненный не окажется меньше чем перемещаемый
        for (j = i - 1; j >= 0 && arr[j] > buff; j--)
            arr[j + 1] = arr[j];

        arr[j + 1] = buff; // и поставим запомненный на его новое место
    }

    return arr;
}