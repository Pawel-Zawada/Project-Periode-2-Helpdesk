/*** Created by HP on 11-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<h1 class="title">Internet</h1>');
    document.writeln('Klant meldt probleem met Internet');
    var browse = confirm("Kunt u browsen naar www.NU.nl?");
        if (browse === true) {
            document.writeln('<br><br>' + 'Browsen naar www.NU.nl lukt');
        }
        else {
            document.writeln('<br><br>' + 'Probleem: Browsen naar www.NU.nl lukt niet');
        }
    var refresh = confirm("Reageert de pagina snel na het indrukken van F5?");
        if (refresh === true) {
            document.writeln('<br><br>' + 'Pagina laadt snel');
        }
        else {
            document.writeln('<br><br>' + 'Probleem: Pagina laadt niet snel');
        }
    if (browse === true && refresh === true) {
        document.writeln('<br><br>' + "...U kunt browsen en uw pagina's laden snel. U heeft geen Internet probleem" + '<br>' + '<ul> <li>Browsen naar www.NU.nl lukt</li> <li>De pagina laadt snel</li> </ul>');
    }
    else {
        if (browse === false) {
            document.writeln('<br><br>' + '<a href="internet-laden.html">' + 'Snelheid laden' + '</a>');
        }
        if (refresh === false) {
            document.writeln('<br><br>' + '<a href="snelheid-laden.html">' + 'Internet laden' + '</a>');
        }
    }
    document.writeln('</div>' + '</div>' + '<br>')
}