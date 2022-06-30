using System;

namespace Compte_bancaire
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Compte compte1 = new Compte(1002, "Tintin", 100, -300);
            bool accord = compte1.Debiter(800);

            if (accord == true)
            {
                Console.WriteLine("L'opération est autorisée, le nouveau solde du compte est : " + compte1.Solde);
            }
            else
            {
                Console.WriteLine("Opération impossible, dépassement du découvert autorisé");
            }
            Console.ReadLine();
            Console.WriteLine(compte1);
        }
    }
}
