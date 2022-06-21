using System;

namespace jeu_pendu_fontions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string motPendu;
            char debut, fin;
            int erreurs, longueur;
            bool win = true;

            Console.WriteLine("Joueur 1 : entrez un mot de plus 5 caractères");
            motPendu = Console.ReadLine();
            char[] motrecherche = motPendu.ToCharArray();
            for (int i = 1; i < motrecherche.Length - 1; i++)
            {
                motrecherche[i] = '-';
            }
            Console.Clear();
            foreach (char c in motrecherche)
            {
                Console.Write(c + " ");
            }

            int tries = 6;
            do
            {

            } while (tries >= 0);



            Console.ReadKey();
        }





    }
}
