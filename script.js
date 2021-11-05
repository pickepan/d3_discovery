d3.select(".myclass").style("color", "red"); //colorize text in red
		 
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