String result = "not found";
int input;
int[] tab = new int[] { 8, 16, 32, 64, 128, 256, 251, };

Console.WriteLine("Entrez la suite de nombres");
input = int.Parse(Console.ReadLine());

for (int i = 0; i < tab.Length; i++)
{
    if (input == tab[i])
    {
        result = "found";
    }
}
Console.WriteLine(result);