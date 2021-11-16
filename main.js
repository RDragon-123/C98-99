var speechrecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition()
function startlistening(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML=content
    speak_text()
}
function speak_text(){
    var synth=window.speechSynthesis;
    var speak_data=document.getElementById("textbox").value
    var utter=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter)
    Webcam.attach(camera)
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,height:250,image_format:"jpeg",jpeg_quality:90
}); 