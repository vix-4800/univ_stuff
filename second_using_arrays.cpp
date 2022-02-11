#include <algorithm>
#include <cstdlib>
#include <iostream>
#include <array>

using std::cout;
using std::endl;
using std::array;

const int n_1 = 4;
const array<int, n_1> g_arr_1 = {1,4,8,11};
const int n_2 = 4;
const array<int, n_2> g_arr_2 = {-6,6,8,9};

array<int, n_1+n_2> unite(array<int, n_1> arr_1, array<int, n_1> arr_2, const int n){
    int tmp_1 = 0, tmp_2 = 0;
    array<int, n_1+n_2> res;

    for (size_t i = 0; i < n; i++) {
        if (arr_1[tmp_1] < arr_2[tmp_2])
            res[i] = arr_1[tmp_1++];
        else
            res[i] = arr_2[tmp_2++];
    }
    
    return res;
}

int main() {
    const int N = n_1 + n_2;
    array<int, N> result = unite(g_arr_1, g_arr_2, N);
    
    array<int, 8> test {-6, 1, 4, 6, 8, 8, 9, 11}; // expected output
    
    for (const auto& digit : result)
        cout << digit << ' ';

    bool test_1 = (result == test) ? true : false;
    cout << std::boolalpha << '\n' << test_1 << endl;
    
    return EXIT_SUCCESS;
}