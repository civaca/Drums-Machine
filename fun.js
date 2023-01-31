const {useState,useEffect}=React

const instruments=[
    "Heater 1","Heater 2","Heater 3","Heater 4", "Claps", "Opens HH","Kick-n'-Hat","Kick", "Closed-HH"
]
const letters=["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]


let DRUMS=()=>{
    const[dtext,setDtext]=useState("");
   useEffect(()=>{
    document.getElementById("final").focus();
    document.getElementById("final").onkeyup=(event)=>{ switch(event.key.toUpperCase()){
        case "Q":
            handleChange(letters[0],instruments[0]);
            break; 
        case "W":
             handleChange(letters[1],instruments[1]);
            break; 
        case "E":
            handleChange(letters[2],instruments[2]);
            break; 
        case "A":
             handleChange(letters[3],instruments[3]);
            break;  
        case "S":
            handleChange(letters[4],instruments[4]);
            break; 
        case "D":
             handleChange(letters[5],instruments[5]);
            break; 
        case "Z":
            handleChange(letters[6],instruments[6]);
            break; 
        case "X":
             handleChange(letters[7],instruments[7]);
            break; 
        case "C":
            handleChange(letters[8],instruments[8]);
            break;          
    }
console.log(event.key)}

   },[])
let handleChange=(sound,tex)=>{
    let s=sound.toLowerCase();
    document.getElementById(sound).play(); setDtext(tex)
}
let handleKeys=(event)=>{
    if(event.key=="q"){
        console.log(event.key)
        setDtext("Q")
    }
}




    return(
    <div>
        <p id="display">{dtext}</p>
        <div id="drum-machine" >
        <button class="drum-pad btn btn-blox btn-primary" id="heater_1" onClick={()=>{handleChange(letters[0],instruments[0])}}>
            {letters[0]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mpeg" id={letters[0]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="heater_2" onClick={()=>{handleChange(letters[1],instruments[1])}}>
            {letters[1]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mpeg" id={letters[1]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="heater_3" onClick={()=>{handleChange(letters[2],instruments[2])}}>
            {letters[2]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mpeg" id={letters[2]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="heater_4" onClick={()=>{handleChange(letters[3],instruments[3])}}>
            {letters[3]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mpeg" id={letters[3]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="claps" onClick={()=>{handleChange(letters[4],instruments[4])}}>
            {letters[4]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mpeg" id={letters[4]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="OpenHH" onClick={()=>{handleChange(letters[5],instruments[5])}}>
            {letters[5]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mpeg" id={letters[5]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="kickHat" onClick={()=>{handleChange(letters[6],instruments[6])}}>
            {letters[6]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mpeg" id={letters[6]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="kick" onClick={()=>{handleChange(letters[7],instruments[7])}}>
            {letters[7]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mpeg" id={letters[7]} class="clip"></audio>
        </button>
        <button class="drum-pad btn btn-blox btn-primary" id="ClosedHH" onClick={()=>{handleChange(letters[8],instruments[8])}}>
            {letters[8]}<audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mpeg" id={letters[8]} class="clip"></audio>
        </button>
       </div>
    </div>
    )


}



const root=ReactDOM.createRoot(document.getElementById("todo"))
root.render(<DRUMS />)