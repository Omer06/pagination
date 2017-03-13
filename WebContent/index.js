$(document).ready(function(){
    
	//All you need to do create a object like this for setPagination method.
	// You must have ul tag that have a 'pagination' class like in index.html
	setPagination({
        totalPage : 100, // You will calculate total page with your total data
        paginationSize : 7 , 
        url : "index.html" , // Your request mapper
        parameter : "pageNo" // The query parameter like ?'pageNo'=10 , ?'page'=10
    });

});