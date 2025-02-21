using System;
using System.IO;

class Program
{
    public static void Main(string[] args)
    {
        string filePath = "data.txt";

        try
        {
            using (StreamReader reader = new StreamReader(filePath))
            {
                Console.WriteLine("Data");
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    Console.WriteLine(line);
                }
            }
        }
        catch (FileNotFoundException)
        {
            Console.WriteLine("file not found");
        }

        catch (IOException ex)
        {
            Console.WriteLine("An IO error acccured " + ex.Message);
        }
    }
}