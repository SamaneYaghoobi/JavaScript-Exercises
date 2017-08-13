var years1 = [1996, 1980, 1950, 1985, 2000]; //1.
var years2=[1970,2015,1980,2001];

function getAges(year) {
    return 2017 - year;
}

function printFullAge(years) //5.
{
    emptyArray = []; //2.
    trueFalse = [];

    for (var i = 0; i < years.length; i++) // 3. 
    {
        emptyArray[i] = getAges(years[i]);
    }
    for (var i = 0; i < emptyArray.length; i++) // 4. 
    {
        if (emptyArray[i] >= 18)
            trueFalse[i] = true;
        else
            trueFalse[i] = false;
//console.log('Person ' + i + ' is full age\n Age: ' + emptyArray[i]);     // 4.
    }
    return trueFalse;
}

//6.
var full_1=printFullAge(years1);
var full_2=printFullAge(years2);

