var data = [20,40,60,80,100];
console.log("Minimum : " + d3.min(data));
console.log("Maximum : " + d3.max(data));
console.log("Bornes : " + d3.extent(data));
console.log("Somme : " + d3.sum(data));
console.log("Moyenne : " + d3.mean(data));
console.log(d3.quantile(data,0.5));
console.log(d3.variance(data));
console.log(d3.deviation(data));