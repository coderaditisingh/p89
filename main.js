function adduser()
{

    p1 = document.getElementById("player1_name_input").value;
    localStorage.setItem("player1_name",p1);

    p2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player2_name",p2);
    
    window.location = "quiz_page.html";

}

