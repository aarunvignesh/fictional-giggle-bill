$(document).ready(async ()=>{
    if(!localStorage.chatName){
        localStorage.chatName = prompt("What is your name");
    }
    const name = localStorage.chatName;
    let peers = {};

    navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(stream => {
        $("video#self")[0].srcObject = stream;
        
        connect_socket(stream)
    })
    $("#name").text(`Hello ${name}`);
    
    
    

function connect_socket(local_stream){

    const socket = io(`ws://${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`);

    socket.on("connect", ()=>{
        let isAlreadyConnected = false;
        socket.emit("user-joined",{id: socket.id, name: name});

        socket.on("update-user-list", (data)=>{
            Object.keys(peers).filter(x => data.findIndex(y => y.id == x) == -1).forEach(x => {
                $(`video#${x}`).remove();
                delete peers[x]
            })
            $("div.users-online-container").html("");
            data.forEach(async x => {  
                if(x.id !== socket.id && !peers[x.id]){
                    const localConnection = new RTCPeerConnection(isAlreadyConnected ? {}:{
                        offerToReceiveAudio: true,
                        offerToReceiveVideo: true
                    });

                    localConnection.addStream(local_stream)
                    peers[x.id] = localConnection;
                    

                    peers[x.id].onicecandidate = e => {
                                                socket.emit("exchange-candidate", {
                                                    from: socket.id,
                                                    to: x.id,
                                                    candidate: e.candidate
                                                })
                                        };

                    peers[x.id].ontrack = e => {
                                            console.log(e.streams[0]);
                                            const video = document.createElement("video");
                                            video.autoplay = true
                                            video.srcObject = e.streams[0]
                                            video.id = x.id
                                            $("div.video-call-container").append(video)
                                        };
                    
                    if(!isAlreadyConnected){
                        const offer = await peers[x.id].createOffer()
                        await peers[x.id].setLocalDescription(offer);
                        socket.emit("initiate-call", {
                            from: socket.id,
                            to: x.id,
                            offer
                        })
                    }
                    
                    socket.on("exchange-candidate", async (data) => {
                        console.log(data, peers[data.from])
                        if(peers[data.from] && data.candidate){
                            await peers[data.from].addIceCandidate(data.candidate);
                            console.log("Candidate added");
                        }
                    })         
                }
                if(x.id !== socket.id)
                $("div.users-online-container").append(`<li class="user-online" id=${x.id}>
                    <div class="name-container">
                        <span class="name">${x.name}</span>
                    </div> 
                    <div class="bulb-container">
                        <span class="bulb"></span>
                    </div>
                </li>`)
            })
            isAlreadyConnected = true;
        })

        

        socket.on("video-call-ringing", async (data) => {
            if(peers[data.from]){
                peers[data.from].setRemoteDescription(data.offer);
                const answer = await peers[data.from].createAnswer();
                peers[data.from].setLocalDescription(answer);
                socket.emit("video-call-accept-answer", {
                  answer,
                  from: data.to,
                  to: data.from  
                });
            }
        })

        socket.on("video-call-accepted",async (data)=>{
            if(peers[data.from])
            await peers[data.from].setRemoteDescription(
                data.answer
            );
        })
    })

    
}    
})