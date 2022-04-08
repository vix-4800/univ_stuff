#include <cstddef>

int *selection_sort(int *arr, int arr_size) {
    int min = 0;
    int buf = 0;

    for (size_t i = 0; i < arr_size; i++) {
        min = i;

        for (size_t j = i + 1; j < arr_size; j++)
            min = (arr[j] < arr[min]) ? j : min;

        if (i != min) {
            buf = arr[i];
            arr[i] = arr[min];
            arr[min] = buf;
        }
    }

    return arr;
}