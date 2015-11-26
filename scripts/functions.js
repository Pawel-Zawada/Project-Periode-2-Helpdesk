/**
 * Created by HP on 19-11-2015.
 */
function toTitleCase(str)
{
    return str.replace(/\w\S*/g,
        function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
