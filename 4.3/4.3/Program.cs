String input;
int length = 120;

int amount = 0;
char[] tab = new char[]{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

Console.WriteLine("Entrez un texte d'au moins 120 caractères");
input = Console.ReadLine();
if  (input length)
{
    Console.WriteLine("Veuillez entrez un texte d'au moins 120 caractères");
}

for (int i = 0; i < input.Length; i++)
{
    for (int j = 0; j < amount; j++) 
    {
        if (input[i] == amount)
       
        amount++;
        Console.WriteLine("La lettre "+j+" est apparue "+amount+" fois.");
    }
}