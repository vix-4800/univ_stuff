#include <cmath>
#include <list>

using namespace std;

int find_max(int *arr, int size) {
    int max = arr[0];

    for (size_t i = 1; i < size; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    return max;
}

int *radix_sort(int *src_arr, int size) {
    int i, j, m, p = 1, index, temp, count = 0;
    int max = find_max(src_arr, size);
    list<int> pocket[10];

    for (i = 0; i < max; i++) {
        m = pow(10, i + 1);
        p = pow(10, i);

        for (j = 0; j < size; j++) {
            temp = src_arr[j] % m;
            index = temp / p;
            pocket[index].push_back(src_arr[j]);
        }

        count = 0;

        for (j = 0; j < 10; j++) {
            while (!pocket[j].empty()) {
                src_arr[count] = *(pocket[j].begin());
                pocket[j].erase(pocket[j].begin());
                count++;
            }
        }
    }

    return src_arr;
}
