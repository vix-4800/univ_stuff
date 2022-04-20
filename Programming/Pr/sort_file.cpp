#include "sorts/bubble_sort.h"
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

std::vector<int> sort_fun(std::string filename) {
    std::ifstream my_file(filename);

    if (!my_file) {
        std::cout << "Error reading from the file" << std::endl;
        exit(1);
    }

    std::string file_content, tmp;
    static std::vector<int> arr;

    while (!my_file.eof()) {
        std::getline(my_file, file_content);

        if (file_content == "") {
            continue;
        }

        std::stringstream sS(file_content);
        while (sS >> tmp) {
            arr.push_back(std::stoi(tmp));
        }
    }

    bubble_sort(arr);

    return arr;
}

void write_to_file(std::string filename, std::vector<int> s_arr) {
    std::ofstream file_r(filename);

    if (!file_r) {
        std::cout << "Error!" << std::endl;
        exit(1);
    }

    for (const auto &i : s_arr)
        file_r << i << " ";
}

int main() {
    std::string filename = "file_to_sort.txt";
    std::vector<int> sorted_arr;

    sorted_arr = sort_fun(filename);

    std::cout << "Sorted" << std::endl;

    write_to_file(filename, sorted_arr);
}