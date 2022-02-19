#include <iostream>
#include <string>
#include <vector>
#include <sstream>

/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////

using std::string;
using std::vector;

//
int calc(const string s){
    int res = 0; //
    std::istringstream sstr_1(s); //
    std::istringstream sstr_2(s); //
    string tmp_1; //
    
    //
    while (std::getline(sstr_1, tmp_1, '+'))
        res += stoi(tmp_1);

    //
    while (std::getline(sstr_2, tmp_1, '-'))
        res -= stoi(tmp_1);

    //
    char delim = '-'; //
    string extra = s.substr(0, s.find(delim)); //
    res += stoi(extra); //

    return res;
}

int main(){
    string expression = "135+123+4-5+6-7+8+9-1-23456+7-8+689-98-4613-58456-724+9245-6950-2-13674-245+7137+429-8-4292-581+824-82+8-738"; //
    int result = calc(expression); // calculating...
    /*
    int right_answer = -95316; // expected output
    bool test = right_answer == result; // test if the right answer and result of our function are the same
    std::cout << std::boolalpha << result << '\n' << test << std::endl;
    */

    std::cout << result << std::endl;

    return EXIT_SUCCESS;
}