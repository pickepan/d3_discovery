d3.select(".myclass").style("color", "red"); //colorize text in red
d3.selectAll(".myclass").transition().style("color","green").duration(5000); //change it to green
		 
var width = 300;
var height = 300;
 //Create SVG element
var rectangle = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
			
var circle = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
			
			
         //append rectangle element
rectangle.append("rect")
            .attr("x", 20)
            .attr("y", 20)
            .attr("width", 200)
            .attr("height", 100)
            .attr("fill", "green");
		 
         //append circle 
circle.append("circle")
            .attr("cx", 200)
            .attr("cy", 50)
            .attr("r", 20)
            .attr("fill", "blue");
			

//create a bar chart
var data = [10, 5, 12, 15];
var width = 300, scaleFactor = 20, barHeight = 30;
var graph = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
         
var bar = graph.selectAll("g")
	.data(data)
	.enter()
	.append("g")
	.attr("transform", function(d, i) {
	   return "translate(0," + i * barHeight + ")";
	});
bar.append("rect").attr("width", function(d) {
	return d * scaleFactor;
 })
 
 .attr("height", barHeight - 1);
 
bar.append("text")
	.attr("x", function(d) { return (d*scaleFactor); })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d; });