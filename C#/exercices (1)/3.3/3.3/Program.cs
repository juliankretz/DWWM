using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int a;
            int b;

            Console.WriteLine("Entrez un  nombre a");
            a = int.Parse(Console.ReadLine());
            Console.WriteLine("Entrez un nombre b");
            b = int.Parse(Console.ReadLine());

            if (a < b)
            {
                for (int i = a +1; i < b; i++) 
                Console.WriteLine(i);
            }
            else if (a > b)
            {
                for (int i = b -1; i < a; i++) 
                Console.WriteLine(i);
            }
        }
    }
}