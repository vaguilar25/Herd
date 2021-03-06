$(document).ready(function() {
    
    $("#newCommunityForm").on("submit",postCommunity);


    //to-do: comment this code
    function postCommunity(event){
        event.preventDefault();
        var name = $("#name").val().trim();
        var description = $("#description").val();
        var image = $("#image").val().trim();
        console.log(name);
        console.log(description);
        if (!name || !description) {
            return;
         }
        if (!image){
            image = "https://www.elmwood.k12.wi.us/cms_files/text194_2.gif"
        }
        var newCommunity ={
            name: name,
            description: description,
            image: image
        }

        $.post("/api/community/new", newCommunity, function(data) {

            window.location.href = "/community/"+ name + "?communityId=" + data.id;
          });
    }
    
});