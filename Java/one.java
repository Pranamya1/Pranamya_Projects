import java.util.Scanner;

class Scratch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int a = scanner.nextInt();

        String result = (a % 2 == 0) ? "Even" : "Odd";
        System.out.println(result);

        scanner.close();
    }
}

// Done in Andriod Studio.