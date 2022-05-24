// See https://aka.ms/new-console-template for more information

using System;

namespace exo
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Random rnd = new Random();
            int input;
            int tries = 1;
            int random = rnd.Next(0, 100);  
            int min = 0;
            int max = 100;

            Console.WriteLine("Devinez le nombre aléatoire");

            do
            {
                Console.WriteLine("Le nombre à trouver est compris entre " + min + " et " + max);
                input = int.Parse(Console.ReadLine());
                if (input == random)
                {
                    Console.WriteLine("Vous avez trouvé le nombre en " + tries + " tentatives");
                }
                else if (input > random)
                {
                    Console.WriteLine("Incorrect. Indice : votre nombre est plus grand que l'aléatoire");
                    max = input;
                    tries++;
                }
                else
                {
                    Console.WriteLine("Incorrect. Indice : votre nombre est plus petit que l'aléatoire");
                    min = input;
                    tries++;
                }
            } while (input != random);
        }
    }
}