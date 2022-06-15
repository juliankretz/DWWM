Console.Title = "Palindrome";
String input;
bool palindrome = true;

Console.WriteLine("Veuillez saisir une chaine de caractères se termiant par un point");

do
{
    input = Console.ReadLine().Trim();
    if (input.ElementAt(input.Length - 1) != '.')
    {
        Console.WriteLine("Veuillez saisir une chaine de caractères se termiant par un point");

    }

} while (input.ElementAt(input.Length - 1) != '.');

string blocDePhrase = input.Substring(0, input.Length - 1).ToLower().Replace(" ", "");

string bloc = input.Substring(0, input.Length - 1).ToLower().Replace(" ", "");

int j = bloc.Length;

for (int i = 0; i < j; i++)
{
    j--;
    if (bloc[i] != bloc[j])
    {
        palindrome = false;
        Console.WriteLine("La saisie n'est pas un palindrome");
        break;
    }
}
if (palindrome)
{
    Console.WriteLine("La saisie est un palindrome");
}