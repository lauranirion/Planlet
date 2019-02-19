

function getClasses() {
    $.getJSON('/classes', function(data) {
        var major = document.getElementById("lblMajorClasses").innerHTML;
        var minor = document.getElementById("lblMinorClasses").innerHTML;
        var college = document.getElementById("lblGEClasses").innerHTML;

        var html = "";
        $.each(data[major], function(index, course) {
             
            html += '<button style="width: 30px; height: 30px; display: inline-block; float: right;"  id = "check'; 
            html += course.id + ' type="checkbox"></button> \n';
            html +='<h6 style="font-size: 10px; color: gray; margin: 0px;">' + course.id + '(' + course.units + 'u)</h4> \n';
            html +='<h5 style="font-size: 15px; width: 80%; margin-top: 5px;">'+ course.title +'</h5> \n';
            if(index+1 < data[major].length)
                html += '<hr>';
        });
        document.getElementById("majorClasses").innerHTML = html;
        html = "";
        $.each(data[minor], function(index, course) {
             
            html += '<button style="width: 30px; height: 30px; display: inline-block; float: right;"  id = "check'; 
            html += course.id + ' type="checkbox"></button> \n';
            html +='<h6 style="font-size: 10px; color: gray; margin: 0px;">' + course.id + '(' + course.units + 'u)</h4> \n';
            html +='<h5 style="font-size: 15px; width: 80%; margin-top: 5px;">'+ course.title +'</h5> \n';
            if(index+1 < data[minor].length)
                html += '<hr>';
        });
        document.getElementById("minorClasses").innerHTML = html;
        html = "";
        $.each(data[college], function(index, course) {
             
            html += '<button style="width: 30px; height: 30px; display: inline-block; float: right;"  id = "check' + course.id + '" type="checkbox"></button> \n';
            html +='<h6 style="font-size: 10px; color: gray; margin: 0px;">' + course.id + '(' + course.units + 'u)</h4> \n';
            html +='<h5 style="font-size: 15px; width: 80%; margin-top: 5px;">'+ course.title +'</h5> \n';
            if(index+1 < data[college].length)
                html += '<hr>';
        });
        document.getElementById("geClasses").innerHTML = html;
    });
};