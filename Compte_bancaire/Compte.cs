using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Compte_bancaire
{
    public class Compte
    {
        // champs ou attributs 

        private int decouvertAutorise;
        private string nom;
        private int numero;
        private int solde;

        // propriétés
        public int DecouvertAutorise { get => decouvertAutorise; set => decouvertAutorise = value; }
        public string Nom { get => nom; }
        public int Numero { get => numero; }
        public int Solde { get => solde; set => solde = value; }

        // constructeur surchargé
        public Compte(int _numero, string _nom, int _solde, int _decouvertAutorise)
        {
            this.numero = _numero;
            this.nom = _nom;

            this.Solde = _solde;
            DecouvertAutorise = _decouvertAutorise;
        }

        // constructeur à vide
        public Compte()
        {
            this.numero = 1;
            this.nom = "Sans nom";
            this.Solde = 0;
            this.DecouvertAutorise = 0;
        }

        // méthodes
        public void Crediter(int _montant)
        {
            this.Solde += _montant;
        }
        public bool Debiter(int _montant)
        {
            if (this.Solde - _montant >= this.decouvertAutorise)
            {
                this.Solde -= _montant;
                return true;
            }
            else
            {
                return false;
            }
        }
        public string ToString()
        {
            string chaineCompte = "Le compte numéro " + this.Numero + " ayant comme propriétaire Mme/Mr " + this.Nom + " a pour solde " + this.Solde + " euros et un découvert autorisé de " + Math.Abs(this.DecouvertAutorise) + " euros.";
            return chaineCompte;
        }
        public bool Transferer(int _montant)
        {
            
        }

    }
}
