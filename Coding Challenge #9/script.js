//U6899-7808

//Step 3
//Implementing interactive activity
function main(){
    
    d3.selectAll("div")
        .on("mouseover", function(){
                d3.select(this)
                    .style("background-color", "firebrick")
        })
        .on("mouseout", function(){
            d3.select(this)
                .style("background-color", "seagreen")
    })
}