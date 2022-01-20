let a1 = prompt("Ներմուծեք ձեր անունը");
alert("Ողջույն " + " " + a1 + " " + "Հիմա ես քեզ կներկայացնեմ խաղի կանոնները " );

function Ayo() {
    let count = 0

    alert("Խաղը սկսված է");
    let b = prompt("Ո՞րն է Հայաստանի մայրաքաղաքը")

    if (b == "Yerevan" || b == "Erevan" || b == "erevan" || b == "yerevan" || b == "Երևան" || b == "երևան" || b == "YEREVAN") {
         count = count += 1;
    };

    let c = prompt("ԱՄՆ - ի Մայրաքաղաքը ")
    if (c == "Washington" || c == "Վաշինգտոն" || c == "Vashington"){
        count = count += 1
    };

    let d = prompt("Խորվաթիայի մայրաքաղաքը")
    if (d == "Zagreb" || d == "Զագրեբ"){
        count = count += 1
    };

    let e = prompt("Անգլիայի մայրաքաղաքը")
    if (e == "London" || e == "Լոնդոն"){
        count = count += 1
    };

    let f = prompt("Իրանի մայրաքաղաքը")
    if (f == "Tehran" || f == "Թեհրան"){
        count = count += 1
    };

    let g = prompt("Ռուսաստանի մայրաքաղաքը")
    if (g == "Moscow" || g == "Moskva" || "Մոսկվա"){
        count = count += 1
    };

    let h = prompt("Վրաստանի մայրաքաղաքը")
    if (h == "Tbilisi" || h =="Թբիլիսի"){
        count = count += 1
    };

    let l = prompt("Ֆրանսիայի մայրաքաղաքը")
    if (l == "Paris" || l == "Pariz" || l == "Փարիզ"){
        count = count += 1
    };

    let i = prompt("Չինաստանի մայրաքաղաքը")
    if (i == "Պեկին" || i == "Pekin" || i == "Beijing"){
        count = count += 1
    }

    let t = prompt("Ճապոնիայի մայրաքաղաքը")
    if (t == "Tokyo" || t=="Տոկիո" || t == "Tokio"){
        count = count += 1
    }

alert("Your Points 10/" + count)
if (count == 10){
    alert("Ահա և դուք շահեցիք ձեր նվերը ․․․")
    alert("Ձեր նվերը այն է որ դուք խելացի եք !!!!!")
}
};
function Voch() {
    alert("Դուք դուրս եկաք խաղից քանի որ դուք պատրաստ չեք");
    location.reload();
};

