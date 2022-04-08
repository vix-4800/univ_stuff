void swap(int &n1, int &n2) {
    int tmp = n1;
    n1 = n2;
    n2 = tmp;
}

void heap_creation(int arr[], int n, int i) {
    int largest = i;
    int left_branch = 2 * i + 1;
    int right_branch = 2 * i + 2;

    if (left_branch < n && arr[left_branch] > arr[largest])
        largest = left_branch;

    if (right_branch < n && arr[right_branch] > arr[largest])
        largest = right_branch;

    if (largest != i) {
        swap(arr[i], arr[largest]);
        heap_creation(arr, n, largest);
    }
}

int *heap_sort(int *arr, int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heap_creation(arr, n, i);

    for (int i = n - 1; i >= 0; i--) {
        swap(arr[0], arr[i]);
        heap_creation(arr, i, 0);
    }

    return arr;
}