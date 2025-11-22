document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#buttonGo').addEventListener('click', function(){
        const units = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
        let difference = 0;
        
        let fromInput = document.querySelector('#fromInput').value;
        let fromIndex = units.indexOf(document.querySelector('#fromUnit').value);
        let toIndex = units.indexOf(document.querySelector('#toUnit').value);

        if (fromIndex < toIndex){
            difference = toIndex - fromIndex;
            document.querySelector('#toVisor').innerHTML  = fromInput / (10**difference);
        } else{
            difference = fromIndex - toIndex;
            document.querySelector('#toVisor').innerHTML = fromInput * (10**difference);
        }
    });
});