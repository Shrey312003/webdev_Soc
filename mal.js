$(document).ready(
    function(){
        var index = 0;
        $("#add_anime").click(function(){
            $("#input_box").attr("style", "display:block");
        });
        //-------------------------

        $("#sub_btn").click(function(){
            event.preventDefault();
            
            let name = $("#name_txt").val();
            let pic = $("#pic_txt").val();
            let score = $("#score_txt").val();

            $("#input_box").attr("style", "display:none");

            var newRow = $('<tr>');

            // var markup = "<tr><td>"+ index + "</td><td>" + pic + "</td><td>" + name + "</td><td>"+ score + "</td></tr>";
            // $("#anime").append(markup);

            let anime_pic = $('<img src=' + pic + ".jfif" +' width="50" height="60">')

            index +=1;

            var cell1 = $('<td>').text(index);
            var cell2 = $('<td >');
            var cell3 = $('<td class= "name_class">').text(name);
            var cell4 = $('<td>').text(score);

            cell2.append(anime_pic);

            newRow.append(cell1, cell2, cell3,cell4);
            $("#anime").append(newRow);
        });

    }
)