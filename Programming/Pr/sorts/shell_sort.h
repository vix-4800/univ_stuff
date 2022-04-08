#include <cstddef>

int *shell_sort(int *arr, int arr_size) {
    size_t j;
    int tmp;

    for (size_t step = arr_size / 2; step > 0; step /= 2) {
        for (size_t i = step; i < arr_size; i++) {
            tmp = arr[i];
            for (j = i; j >= step; j -= step) {
                if (tmp < arr[j - step])
                    arr[j] = arr[j - step];
                else
                    break;
            }
            arr[j] = tmp;
        }
    }

    return arr;
}