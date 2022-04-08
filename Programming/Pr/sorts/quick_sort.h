int *quick_sort(int *src_arr, int size) {
    int start_el = 0;
    int end_el = size - 1;
    int mid_el = src_arr[size / 2];

    do {
        while (src_arr[start_el] < mid_el)
            start_el++;
        while (src_arr[end_el] > mid_el)
            end_el--;

        if (start_el <= end_el) {
            int tmp = src_arr[start_el];
            src_arr[start_el] = src_arr[end_el];
            src_arr[end_el] = tmp;
            start_el++;
            end_el--;
        }
    } while (start_el <= end_el);

    if (end_el > 0)
        quick_sort(src_arr, end_el + 1);
    if (start_el < size)
        quick_sort(&src_arr[start_el], size - start_el);

    return src_arr;
}