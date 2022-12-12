var xhr = new XMLHttpRequest();

xhr.open('GET', './employees.json', true);

xhr.responseType = 'json';

xhr.onload = function()
{
    if(xhr.status === 200)
    {
        console.log(xhr.response);
    }
}

function createEmail()
{
    
}