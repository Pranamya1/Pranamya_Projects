// A user can log in with either their email or username and password.

#include <stdio.h>

int main()
{
    char user = "Pranamya", email = "pranamya@gmail.com", password = "Pranamya1234";
    printf("Enter username: ");
    scanf("%c",&user);
    printf("Enter email: ");
    scanf("%c",&email);
    printf("Enter password: ");
    scanf("%c",&password);

    if (user == "Pranamya" || email == "pranamya@gmail.com" && password == "Pranamya1234")
    {
        printf("Login Successfull");
    }
    else {
        printf("Login Unsucssfull");
    }
}