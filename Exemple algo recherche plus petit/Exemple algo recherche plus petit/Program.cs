int pos = 0;
int[] tab = { 60, 2, 100, 110, 5, 1, 18 };

for (int i = 0; i < tab.Length; i++)
{
    if (tab[i] < tab[pos])
    {
        pos = i;
        Console.WriteLine(i); 
    }
}