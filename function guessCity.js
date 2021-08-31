function guessCity(ancient, famous, capital, coastal) 
{

    if(ancient&&famous&&capital&&!coastal)
    return "jerusalem";
    if(!ancient&&famous&&!capital&&coastal)
    return "Tel Aviv";
    if(ancient&&!famous&&!capital&&coastal)
    return "Acre";
    if(ancient&&!famous&&!capital&&!coastal)
    return "Zikim";
    if(!ancient&&!famous&&!capital&&!coastal)
    return "Musmus";
    return "dont recognize the city"
}
console.log(guessCity(true, false ,true, false))


