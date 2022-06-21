using System;

namespace jeu_pendu_fontions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string motPendu;
            bool match = false;
            bool found = false;

            Console.WriteLine("JOUEUR 2 : Retournez-vous");
            Console.WriteLine("JOUEUR 1 : Entrez un mot d'au moins 5 caractères");

            do
            {
                motPendu = Console.ReadLine();

                if (motPendu.Length < 5)
                {
                    Console.WriteLine("Veuillez entrez un mot d'au moins 5 caractères");
                }
            } while (motPendu.Length < 5);

            motPendu = motPendu.Replace("é", "e").Replace("è", "e").Replace("ê", "e");

            char[] motrecherche = motPendu.ToCharArray();

            for (int i = 1; i < motrecherche.Length - 1; i++)
            {
                motrecherche[i] = '-';
            }

            Console.Clear();

            int tries = 5;

            Console.WriteLine("JOUEUR 2 : Devinez le mot du JOUEUR 1 en entrant un caractère à la fois");
            Console.WriteLine("Vous avez droit à " + tries + " fautes");

            do
            {
                match = false;
                foreach (char c in motrecherche)
                {
                    Console.Write(c + " ");
                }

                Console.WriteLine("Vous avez encore droit à " + tries + " fautes");

                char lettre = char.Parse(Console.ReadLine());

                for (int i = 1; i < motPendu.Length - 1; i++)
                {
                    if (motPendu[i].Equals(lettre))
                    {
                        motrecherche[i] = lettre;
                        match = true;
                    }

                }
                found = true;

                for (int i = 0; i < motrecherche.Length; i++)
                {
                    if (motrecherche[i] != motPendu[i])
                    {
                        found = false;
                        break;
                    }
                }

                if (match == false)
                {
                    Console.WriteLine("La lettre " + lettre + " n'est pas présente dans le mot du JOUEUR 1");
                    tries--;
                }

            } while (tries >= 0 && found == false);

            if (tries > 0)
            {
                foreach (char c in motrecherche)
                {
                    Console.Write(c + " ");
                }
                Console.WriteLine("Bravo vous avez trouvé le mot en " + (6 - tries) + " essais infructueux");
            }
            else
            {

                Console.WriteLine("Vous avez perdu, le mot du JOUEUR 1 était : " + motPendu);
            }

            Console.ReadKey();
        }
    }
}
