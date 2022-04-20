#include <cstddef>
#include <vector>

int *bubble_sort(int *arr, int size) {
    for (size_t i = 0; i < size; i++) {
        for (size_t j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

std::vector<int> bubble_sort(std::vector<int> &arr) {
    for (size_t i = 0; i < arr.size(); i++) {
        for (size_t j = 0; j < arr.size() - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}