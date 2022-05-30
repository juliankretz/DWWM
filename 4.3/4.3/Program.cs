String input;
int inputLength = 10;
int[] amount = new int[26];
char[] tab = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

Console.WriteLine("Entrez un texte d'au moins "+inputLength+" caractères");
do
{
    input = Console.ReadLine();
    input = input.Replace("é", "e").Replace("è", "e");
    if (input.Length < inputLength)
    {
        Console.WriteLine("Veuillez entrez un texte d'au moins "+inputLength+" caractères");
    }
} while (input.Length < inputLength);

char [] inputChar = input.ToCharArray();

for (int i = 0; i < inputChar.Length; i++)
{
    for (int j = 0; j < tab.Length; j++)
    {
        if (inputChar[i] == tab[j])
        { 
            amount[j]++;
        }
    }
}

for (int i = 0; i < amount.Length; i++)
{
    if (amount[i] > 0)
    {
        Console.WriteLine("La lettre " + tab[i] + " est présente " + amount[i] + " fois");
    }
}
