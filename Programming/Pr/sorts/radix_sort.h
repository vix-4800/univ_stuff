#include <cstddef>

int find_max(int *arr, int size) {
    int max = arr[0];

    for (size_t i = 1; i < size; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

void srt_cnt(int *arr, int size, int exp) {
    int output[size];
    int count[10] = {0};

    for (int i = 0; i < size; i++)
        count[(arr[i] / exp) % 10]++;

    for (int i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (int i = size - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }

    for (int i = 0; i < size; i++)
        arr[i] = output[i];
}

int *radix_sort(int *src_arr, int size) {
    int m = find_max(src_arr, size);

    for (size_t i = 1; m / i > 0; i *= 10)
        srt_cnt(src_arr, size, i);

    return src_arr;
}
