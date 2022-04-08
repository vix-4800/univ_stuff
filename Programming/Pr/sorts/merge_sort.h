int *merge(int *array, const int left, const int m, const int right) {
    int k;
    int size_left = m - left + 1;
    int size_right = right - m;
    int larr[size_left], rarr[size_right];

    size_t i, j;
    for (i = 0; i < size_left; i++)
        larr[i] = array[left + i];

    for (j = 0; j < size_right; j++)
        rarr[j] = array[m + 1 + j];

    i = 0;
    j = 0;
    k = left;

    while (i < size_left && j < size_right) {
        if (larr[i] <= rarr[j]) {
            array[k] = larr[i];
            i++;
        } else {
            array[k] = rarr[j];
            j++;
        }
        k++;
    }

    while (i < size_left) {
        array[k] = larr[i];
        i++;
        k++;
    }

    while (j < size_right) {
        array[k] = rarr[j];
        j++;
        k++;
    }

    return array;
}

int *merge_sort(int *array, int l, int r) {
    int m;
    if (l < r) {
        int m = l + (r - l) / 2;
        merge_sort(array, l, m);
        merge_sort(array, m + 1, r);
        merge(array, l, m, r);
    }

    return array;
}