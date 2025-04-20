import java.util.Scanner;

class Scratch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int a = scanner.nextInt();

        String result = (a >= 18) ? "You are eligible." : "You are not eligible.";
        System.out.println(result);

        scanner.close();
    }
}

// Done in Andriod Studio.