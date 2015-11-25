/*** Created by HP on 11-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<u><h1 class="title">Internet</h1></u>');
    document.writeln('Klant meldt probleem met Internet' + '<br><br>');
    var browse = confirm("Kunt u browsen naar www.NU.nl?");
        if (browse === true) {
            document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Browsen naar www.NU.nl lukt</div>');
        }
        else {
            document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Browsen naar www.NU.nl lukt niet</div>');
        }
    var refresh = confirm("Reageert de pagina snel na het indrukken van F5?");
        if (refresh === true) {
            document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Pagina laadt snel</div>');
        }
        else {
            document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Pagina laadt niet snel</div>');
        }
    if (browse === true && refresh === true) {
        document.writeln('<div class="well"><strong>...U kunt browsen en uw' +  " pagina's " + 'laden snel. U heeft geen Internet probleem.</strong>' +
            '<li class="list-group-item"> Browsen naar www.NU.nl lukt</li> <li class="list-group-item">De pagina laadt snel</li> </div>');
    }
    else {
        if (browse === false) {
            document.writeln('<a href="internet-laden.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Internet laden</strong></button>' + '</a>' + '<br><br>');
        }
        if (refresh === false) {
            document.writeln('<a href="snelheid-laden.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Snelheid laden</strong></button>' + '</a>' + '<br><br>');
        }
    }
    document.writeln('</div>' + '</div>' + '<br>');
}