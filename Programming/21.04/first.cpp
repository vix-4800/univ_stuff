#include <fstream>
#include <iostream>
#include <string>

using std::cout;
using std::endl;

bool is_in_file(const int number, const std::string filename) {
    // opening a file
    std::ifstream file_r;
    file_r.open(filename);

    // checking whether the file is open
    if (!file_r) {
        cout << "There was an error reading from the file" << endl;
        return false;
    }

    std::string str_in_file; // string that will store current line from the file

    // I'm going to read from a file using getline
    // I could also use >> operator
    while (std::getline(file_r, str_in_file)) { // reading from the file line by line
        if (stoi(str_in_file) == number) {      // trying to convert current line to int i.e. finding first int in line
            // if line converted to int is equal to the number I'm looking for, closing the file and returning true
            // the destructor of ifstream will close the file for me so I don't need to call close() myself
            return true;
        } else if (stoi(str_in_file) > number) {
            // since all numbers in the file are sorted I can return false if current number
            // in the file is greater than the number I'm looking for
            return false;
        }
    }

    // if the number I'm looking for is not found closing the file and returning false
    // the destructor of ifstream will close the file for me so I don't need to call close() myself
    return false;
}

int main() {
    const int num1 = 6457; // number that is in the file
    const int num2 = 324;  // number that is not in the file
    const std::string filename = "file_to_check_in.txt";

    cout << std::boolalpha << is_in_file(num1, filename) << endl; // expected output - true
    cout << std::boolalpha << is_in_file(num2, filename) << endl; // expected output - false
}