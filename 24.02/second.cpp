#include <string>
#include <iostream>

/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////

class MyString {
    private:
        bool count; //
        bool placement; //
        bool overall; //

        //
        bool par_count_check(std::string source_string) {
            int par_count; //
            int check_arr[8]; //
            char curr_par[8] = {'(',')','{','}','[',']','<','>'}; //
            
            // 
            for (size_t i = 0; i < 8; i++) {   
                par_count = 0;
                for (const auto &k : source_string) {
                    
                    if (k == curr_par[i])
                        par_count++;
                }
                check_arr[i] = par_count;
            }

            //
            for (size_t i = 0; i < 8; i++)
            {
                
                if (check_arr[i] != check_arr[++i])
                    return false;
            }

            return true;
        }

        //
        bool par_plc_check(std::string str){
            char curr_par[8] = {'(',')','{','}','[',']','<','>'}; //
            std::string temp = str; //
            std::string::iterator it;

            for (it = str.end(); it != str.begin(); it--)
            {
                /* code */
            }
            
            
            return true;
        }
        
    public:
        std::string str;
        MyString(std::string s) {
            str = s;
            count = par_count_check(str); //
            placement = par_plc_check(str); //
            overall = (count == 1 && placement == 1); // 
        };

        // 
        void print_result(){
            if (!count && placement)
                std::cout << "Something wrong with the amount of parentheses / brackets";
            if (!placement && count)
                std::cout << "Something wrong with the placement of parentheses / brackets";
            if (!placement && !count)
                std::cout << "Something wrong with the placement and the amount of parentheses / brackets";
            if (overall)
                std::cout << "The string looks good";
            std::cout << std::endl;
        }
};

int main(){
    MyString example_1("(abc[de]e(f{gh})ty)"); // String #1 to check
    std::cout << example_1.str << "\t--\t";
    example_1.print_result();

    MyString example_2(")abc[de]e(f{gh})ty("); // String #3 to check (wrong placement)
    std::cout << example_2.str << "\t--\t";
    example_2.print_result();

    MyString example_3("(abcde]e(f{gh})ty)"); // String #3 to check (one extra ']')
    std::cout << example_3.str << "\t--\t";
    example_3.print_result();

    MyString example_4(")abc[de]ef{gh})ty("); // String #4 to check (wrong placement and one extra ')')
    std::cout << example_4.str << "\t--\t";
    example_4.print_result();

    return EXIT_SUCCESS;
}