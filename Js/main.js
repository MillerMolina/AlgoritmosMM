

function suma() {
    let a=0;
    //la variable "a" se usa para la caprura del primer valor
    let b=0;
    //la variable "b" se usa para la caprura del segundo valor
    let s=0;
    //la variable "s" se usa para la suma y el resultado de los valores a y b
    a=parseInt(prompt("por favor ingrese el primer valor"));
    b=parseInt(prompt("por favor ingrese el segundo valor"));
    s= a+b;
    alert("el resultado de la suma es: "+s)
}

function opbasicas(){
    let a=0;
    let b=0;
    let s=0;
    let r=0;
    let d=0;
    let m=0;

    a=parseInt(prompt("por favor ingrese el primer valor"));
    b=parseInt(prompt("por favor ingrese el segundo valor"));
    s = a+b;
    r = a-b;
    d = a/b;
    m = a*b;

    alert("el resultado de la suma es: "+s);
    alert("el resultado de la resta es: "+r);
    alert("el resultado de la división es: "+d);
    alert("el resultado de la multiplicación es: "+m);


}

function numcuad(){
    let a=0;
    let r=0;

    a=parseInt(prompt("por favor ingrese el numero para elvar al cuadrado"));
    s= a*a;

    alert("el resultado del numero elvado al cuadrado es "+s);


}

function aretri(){

    let a=0;
    let b=0;
    const d=2;
    let r=0;
    
    a=parseFloat(prompt("por favor ingrese la altura del triangulo"));
    b=parseFloat(prompt("por favor ingrese la base del triangulo"));

    r = (a*b)/d;
    
    alert("el area del triangulo sera de: "+r)

}

function inversion() {
    let I = 0;
    let AN = 0;
    let GA = 0;
    let TA = 0;
    let GAN;
  
    I = parseInt(prompt("Ingrese el valor a invertir "));
    AN = parseInt(
      prompt("Ingrese los años de los que desea saber el valor de la inversion ")
    );
    GA = (I / 100) * 1.7 * 12;
    TA = GA * AN;
    GAN = TA + I;
    alert(
      "Las ganancias de su inversión de " +
        I +
        " por la cantidad de años solicitada (" +
        AN +
        ") son: " +
        TA
    );
    alert("Las ganacias de su inversion mas la inversion incial es: " + GAN);
  }
  function año_de_nacimiento() {
    let AC = 0;
    let ED = 0;
    let AN = 0;
    AC = parseInt(prompt("Ingrese el año actual:"));
    ED = parseInt(prompt("Ingrese su edad:"));
    AN = AC - ED;
    alert("El año de nacimiento es: " + AN);
  }
  function conversion_de_unidades() {
    let MT = 0;
    let KT = 0;
    let PG = 0;
    MT = parseInt(prompt("Ingrese los metros que desea convertir: "));
    KT = MT / 1000;
    PG = MT * 39.37;
    alert("la conversion en metros es: " + KT + "Km");
    alert("la conversion en pulgadas es: " + PG + "''");
  }
  function mayor_de_dos_unidades() {
    let ME1 = 0;
    let ME2 = 0;
    ME1 = parseInt(prompt("Ingrese el primer numero: "));
    ME2 = parseInt(prompt("Ingrese el segundo numero: "));
    if (ME1 > ME2) {
      alert("El numero mayor es: " + ME1);
    } else {
      alert("El numero mayor es: " + ME2);
    }
  }
  function menor_de_tres_unidades() {
    let M1 = 0;
    let M2 = 0;
    let M3 = 0;
    M1 = parseInt(prompt("Ingrese el primer numero: "));
    M2 = parseInt(prompt("Ingrese el segundo numero: "));
    M3 = parseInt(prompt("Ingrese el segundo numero: "));
    if (M1 < M2 && M1 < M3) {
      alert("El numero menor es: " + M1);
    } else if (M2 < M3) {
      alert("El numero menor es: " + M2);
    } else {
      alert("El numero menor es: " + M3);
    }
  }
  function promocion() {
    let PRE = 0;
    let DES = 0;
    let TOT = 0;
    let SUD = 0;
    PRE = parseInt(prompt("Ingrese el valor de la compra: "));
    DES = parseInt(prompt("Ingrese el descuento aplicar: "));
    SUD = (PRE / 100) * DES;
    TOT = PRE - SUD;
    alert(
      "El descuesto que se aplico es del: " +
        DES +
        "%" +
        "El descuento que se desconto es: " +
        SUD
    );
    alert("El total a pagar es: " + TOT);
  }