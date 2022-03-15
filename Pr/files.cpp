#include <iostream>
#include <fstream>
#include <sstream>
#include <string>

#ifdef _WIN32
#include <Windows.h>
#else
#include <unistd.h>
#endif

using std::cout;
using std::endl;
using std::string;

// Задание:
// 1) Создать файл и записать в него несколько строк текста.
// 2) Посчитать количество слов, строк и пробелов в исходном файле
// 3) Статистическую информацию дописать в тот же файл

// Creates a file and writes a message into it
int file_creation(string filename){
    std::ofstream file;
    file.open(filename);
    if(file){
        Sleep(500);
        cout << "Created successfully\n";

        // Text to be written
        string message;
        cout << "Text to be written to the file (end with '\\'): ";
        std::getline(std::cin, message, '\\'); // Example: hello there stranger\
        
        file << message << endl;

        cout << "Saved\n" << endl;

        file.close();
        return EXIT_SUCCESS;
    }
    else{
        cout << "Error!" << endl;
        return EXIT_FAILURE;
    }
}

// Counts the number of whitespaces, lines and words in a file
int file_info(string filename){
    std::ifstream file_r;
    file_r.open(filename, std::ios::out);

    if ( !file_r.is_open() ){
        cout << "An error occured" << endl;
        return EXIT_FAILURE;
    }

    string content; // Text from file
    string tmp; // Temporary string for a stream
    int lines_c = 0; // The number of lines
    int words_c = 0; // The number of words
    int spaces_c = 0; // The number of whitespaces

    // All calculations are done here 
    while (std::getline (file_r, content)) {
        if (content == "") continue;

        // Counts the number of lines
        lines_c++;

        // Counts the number of words
        std::stringstream stream_1(content);
        while (stream_1 >> tmp)
            words_c ++;

        // Counts the number of whitespaces
        for (size_t i = 0; i < content.length(); i++){
            if (content[i] == ' ')
                spaces_c++;
        }
    }

    // String and stream are created to store the information about the file
    std::stringstream stream_2;
    stream_2 << "The file contains " << lines_c << " line(s), " << words_c << " word(s) and " << spaces_c << " whitespace(s)";
    string info = stream_2.str();
    Sleep(500);
    cout << info;
    file_r.close();

    // The information is appended into the file
    std::ofstream file_a;
    file_a.open(filename, std::ios_base::app);
    file_a << '\n' << info << endl;
    Sleep(500);
    cout << "\nWritten" << endl;
    file_a.close();

    return EXIT_SUCCESS;
}

char disclaimer(string filename){
    cout << "This proggram creates/edits files in the current directory\n";
    cout << "Thus it is highly recommended to run it in an empty folder\n";
    cout << "to avoid potential loss of your data\n\nFiles that will be edited: " << filename << "\n" << std::flush;

    char k;
    Sleep(2*1000);
    cout << "Do you wish to proceed? (y/n)" << endl;
    std::cin >> k;

    return k;
}

int main(){
    const string filename = "NewFile.txt";
    
    char ans = disclaimer(filename);
    switch (ans){
        case 'y':
            cout << "First, let's create new text file and name it NewFile.txt" << endl;
            if( file_creation(filename) == 1 )
                exit(1);
            
            Sleep(500);
            cout << "Now let's get some info about this file" << endl;
            if ( file_info(filename) == 1 )
                exit(1);
            break;
        default:
            cout << "Exiting..." << endl;
            exit(1);
            break;
        }

    return EXIT_SUCCESS;
}