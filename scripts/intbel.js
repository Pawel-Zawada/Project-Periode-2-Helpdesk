/*** Created by HP on 18-11-2015.*/
if (confirm("Heeft u een klacht over ons product Internet en Bellen?") === true) {
    document.writeln('<div class="bordered">' + '<div class="content">');
    document.writeln('<br>' + '<u><h1 class="title2">Internet en Bellen</h1></u>');
    document.writeln('Klant meldt probleem met Internet en Bellen' + '<br><br>');
    var kies = confirm("Hoort u een kiestoon?");
        if (kies === true) {
            document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Hoort een kiestoon</div>');
        }
        else {
            document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Hoort geen kiestoon></div>');
        }
    var zelfbel = confirm('Kunt u uzelf bellen op bijvoorbeeld een mobiel nummer');
        if (zelfbel === true) {
            document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Kan zichzelf bellen</div>');
        }
        else {
            document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Kan zichzelf niet bellen</div>');
        }
    var bel = confirm('Kunt u met uw mobiel het nummer bellen waar u een klacht over hebt?');
        if (bel === true) {
            document.writeln('<div class="alert alert-success" role="alert"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Kan bellen waar hij/zij klacht over heeft</div>');
        }
        else {
            document.writeln('<div class="alert alert-danger" role="alert"><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Probleem: Kan niet bellen</div>');
        }
    if (bel == true && zelfbel === true && kies === true) {
        document.writeln('<div class="well"><strong>...U heeft een kiestoon, u kunt bellen en gebeld worden. U heeft geen Internet en Bellen probleem.</strong>' +
            '<li class="list-group-item">Hoort een kiestoon</li> <li class="list-group-item">Kan van vast naar mobiel bellen</li> <li class="list-group-item">Kan van mobiel naar vast bellen</li> </div>');
    }
    else {
        if (kies === false) {
            document.writeln('<a href="geen-kiestoon.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Kiestoon horen</strong></button>' + '</a>' + '<br><br>');
        }
        if (zelfbel === false) {
            document.writeln('<a href="uit-bellen.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Uzelf bellen</strong></button>' + '</a>' + '<br><br>');
        }
        if (bel === false) {
            document.writeln('<a href="gebeld-worden.html">' + '<button type="button" class="btn btn-sm btn-info"><strong>Bellen</strong></button>' + '</a>' + '<br><br>');
        }
    }
    var intbel = kies + zelfbel + bel;
    document.writeln('</div>' + '</div>' + '<br>')
}
if (kies && zelfbel && bel == true) {
    intbel = true;
}
