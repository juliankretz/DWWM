Console.Title = "Palindrome";
String input;
bool palindrome = true;

input = Console.ReadLine();
string bloc = input.Substring(0, input.Length - 1).ToLower().Replace(" ", "");

int j = bloc.Length;

for (int i = 0; i < j; i++)
{
    j--;

    if (bloc[i] != bloc[j])
    {
        palindrome = false;
    }
}

if (palindrome = true)
{
    Console.WriteLine("La saisie est un palindrome");
}
else
{
    Console.WriteLine("La saisie n'est pas un palindrome");
}