int[] tab = { 128, 64, 8, 512, 16, 32, 256 };

for (int i = 0; i < tab.Length; i++)
{

    int a = i;
    for (int j = i; j < tab.Length; j++)
    {
        if (tab[j] < tab[a])
        {
            a = j;
        }
    }

    int p = tab[a];
    tab[a] = tab[i];
    tab[i] = p;
}

for (int i = 0; i < tab.Length; i++)
{
    Console.WriteLine(tab[i]);
}