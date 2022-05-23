String input = "";
char letter = ' ';
int amount =0;

Console.WriteLine("Entrez la phrase");
input = Console.ReadLine();

Console.WriteLine("Entrez la lettre à chercher");
letter = char.Parse(Console.ReadLine());

for (int i = 0; i < input.Length; i++) 
{
    if (input[i] == letter)
    amount++;
}

Console.WriteLine("La lettre "+letter+" est présente "+amount+" fois dans la phrase.");