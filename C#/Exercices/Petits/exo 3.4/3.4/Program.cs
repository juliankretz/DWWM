using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int nbr;
            int dv = 2;

            Console.WriteLine("Entrez un nombre entier");
            nbr = int.Parse(Console.ReadLine());
            bool premier = true;

            for (int i = dv; nbr < i; i++)
                if (nbr % i == 0){
                    Console.WriteLine(i+" est un diviseur");
                    premier = false;
                }
            if (premier == true)
            {
                Console.WriteLine(nbr + " est un nombre premier");
            }
            else
            {
                Console.WriteLine(nbr+" n'est pas un nombre premier");
            }
        }
    }
}