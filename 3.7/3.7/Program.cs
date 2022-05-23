using System;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int input;
            int magasin = 0;

            Console.WriteLine("Entrez la somme à dépenser");
            input = int.Parse(Console.ReadLine());

            do {
                input = (input / 2);
                input--;
                magasin++;
                Console.WriteLine("Barnabé vient de passer dans un magasin, il lui reste "+input+" euros.");
                
            } while (input >= 2);

            Console.WriteLine("Barnabé est passé dans " + magasin + " magasin(s) au total.");
        }
    }
}