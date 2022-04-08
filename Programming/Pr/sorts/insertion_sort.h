#include <cstddef>

int *insertion_sort(int *arr, int size) {
    int buff = 0;
    size_t j;

    for (size_t i = 1; i < size; i++) {
        buff = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > buff; j--)
            arr[j + 1] = arr[j];

        arr[j + 1] = buff;
    }

    return arr;
}