int N;
int NbPrecedent = 0;
int NbCourant = 1;
int NbSuivant;
int Position = 0;

Console.WriteLine("Combien de nombre de la suite de Fibonacci souahitez vous afficher ?");
N = int.Parse(Console.ReadLine());

Console.WriteLine("Les " + N + " premiers nombres de la suite de Fibocanni sont :");
Console.WriteLine(NbPrecedent);
Console.WriteLine(NbCourant);

if (N > 2)
{
    N = N - 2;
    do
    {
        NbSuivant = NbPrecedent + NbCourant;
        Console.WriteLine(NbSuivant);
        NbPrecedent = NbCourant;
        NbCourant = NbSuivant;
        Position++;
    }
    while (Position < N);
} 