cat = [ "General Knowledge",
                "Entertainment: Books",
                "Entertainment: Film",
                "Entertainment: Music",
                "Entertainment: Musicals & Theatres",
                "Entertainment: Television",
                "Entertainment: Video Games",
                "Entertainment: Board Games",
                "Science & Nature",
                "Science: Computers",
                "Science: Mathematics",
                "Mythology",
                "Sports",
                "Geography",
                "History",
                "Politics",
                "Art",
                "Celebrities",
                "Animals",
                "Vehicles",
                "Entertainment: Comics",
                "Science: Gadgets",
                "Entertainment: Japanese Anime & Manga",
                "Entertainment: Cartoon & Animations"
            ];

getCode = function(word)
    {
        var i = 0;
        while(cat[i]!=undefined)
        {
            if(word === cat[i])
                return (i+9);
            i++;
        }
        return 0;
    }
getWord = function(code)
    {
        code = code - 9;
        return cat[code];
    }
 
clean = function(line)
{
    while((line.indexOf("&quot;")>-1)||(line.indexOf("&#039;")>-1))
    {
        line = line.replace(/&quot;/g,'"');
        line = line.replace(/&#039;/g, "'");
    }
    return line;
}