// If the age of chile is less or equal to 12 show "Child ticket"; otherwise "Adult ticket"

#include <stdio.h>

int main()
{

    int a;
    printf("Enter the age: ");
    scanf("%d", &a);
    if (a > 12)
    {
        printf("You will get Adult ticket.");
    }
    else
    {
        printf("You will get Child Ticket");
    }
}