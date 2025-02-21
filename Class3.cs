using System;
using System.Diagnostics;

public class InvalidAgeException : Exception
{
    public InvalidAgeException(string message) : base(message)
    {

    }
}

class Program
{
    public static void Main(string[] args)
    {
        try
        {
            Console.WriteLine("Enter the user's age: ");
            int num = Convert.ToInt32(Console.ReadLine());
            ValidAge(num);
        }
        catch (InvalidAgeException ex)
        {
            Console.WriteLine(ex.Message);
        }

        catch (FormatException)
        {
            Console.WriteLine("Enter numeric value");
        }
        catch (Exception ex)
        {
            Console.WriteLine("An unexpected error is occurred: " + ex.Message);
        }

    }
    public static void ValidAge(int age)
    {



        if (age >= 18)
        {
            Console.WriteLine("Access granted");
        }
        else if (age < 18)
        {
            throw new InvalidAgeException("Age must be 18 or above");
        }



    }

}