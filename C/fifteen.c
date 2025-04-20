#include <stdio.h>
#include <string.h>

int main()
{
    char user[] = "Pranamya";  
    int total_amount, discount, discounted_amount;

    printf("Enter your username: ");
    scanf("%s", user);

    if (strcmp(user, "Pranamya") == 0)
    {
        printf("You are a member.\n");
    }
    else
    {
        printf("You are not a member.\n");
    }

    printf("Enter your total amount: ");
    scanf("%d", &total_amount);

    if (total_amount >= 5000)
    {
        discount = total_amount * 30 / 100;  
    }
    else
    {
        discount = total_amount * 5 / 100;  
    }

    discounted_amount = total_amount - discount;
    printf("Final amount after discount: %d\n", discounted_amount);
}
