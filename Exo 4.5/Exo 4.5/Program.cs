String input;
bool palindrome;
Console.WriteLine("Entrez une chaîne de caractères");
input = Console.ReadLine();

char[] inputChar = input.ToCharArray();

for (int i = 0; i < input.Length; i++)
{
    for (int j = 1; j < input.Length; j--)
        {
            if (inputChar[i] == j)
            {
                palindrome = true;
            }
            else
            {
                palindrome = false;
            }
        }
}



if (palindrome = true)
{
    Console.WriteLine("La chaîne de caractères est un palindrome");
}
else if (palindrome = false)
{
    Console.WriteLine("La chaîne de caractères n'est pas un palindrome");
}
else
{
    Console.WriteLine("La chaîne de caractères est vide");
}