int[] tab = { 128, 64, 8, 512, 16, 32, 256 };

for (int j = 0; j < tab.Length; j++)
{
    int a = j;
    for (int i = j; i < tab.Length; i++)
    {
        if (tab[i] < tab[a])
        {
            a = i;
        }
    }

    int p = tab[a];
    tab[a] = tab[j];
    tab[j] = p;
  
}
Console.WriteLine();