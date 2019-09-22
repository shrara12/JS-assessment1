var video=$("#video-player");
var playlist;
var title;
var url;
var videos;
var desc;
var heading;
var videoId;
var pos;
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",function(data,status){
    playlist=data;
    console.log(playlist);
    $.get("http://5d76bf96515d1a0014085cf9.mockapi.io/video",function(response,status)
    {
        videos=response;
        console.log(videos);
    })
    $(".video-card-title").click(function(e){
        title=e.target.innerHTML;    
        console.log(title)
        // for(var i=0;i<6;i++)
        // {   for(var j=0;j<6;j++)
        //     {  if(playlist[0].title==videos[j].title)
        //         {
        //             console.log("Found at"+(j+1));
        //         }
        //     }
        // }
        for(var i=0;i<6;i++)
        {
            if(playlist[i].title==title)
            {
                pos=i;        
            }
        }
        heading=videos[pos].title;
        desc=videos[pos].description;
        console.log("DESCRIPTION :"+desc);
        console.log("HEADING : "+heading);
        $("#video-title").html(heading);
        $("#video-description").html(desc);
        videoId=videos[pos].vimeoId;
        // desc=videos[pos].description;
        // heading=videos[pos].title;
        // console.log("HEADING : "+heading);
        // console.log("DESCRIPTION :"+desc);
        // console.log(document.getElementById("video-title").innerHTML)
        console.log(videos[pos].description);
        console.log("videoID : "+videoId);
        console.log("https://player.vimeo.com/video/"+videoId);
        video.attr("src","https://player.vimeo.com/video/"+videoId);
        // $("#video-title").html(videos[2].title)
        
    })
})
