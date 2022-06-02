String saisie, mdp = "formation";
int tentative = 3;


Console.WriteLine("Entrez votre mot de passe");

do
{
    saisie = Console.ReadLine();
    if (saisie != mdp)
    {
        tentative--;
        Console.WriteLine("Mot de passe incorrect, " + tentative + " tentatives restantes.");
    }

} while ((saisie != mdp) && (tentative > 0));

if (tentative == 0)
{
    Console.WriteLine("L'authentification échoué. Votre compte est désormais bloqué.");
}
else
{
    Console.WriteLine("Authentification réussie, bienvenue");
}