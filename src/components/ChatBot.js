import {useState} from "react"

function ChatBot(){

    const [msg,setMsg] = useState("")

    return(

        <div style={{

            position:"fixed",
            bottom:"20px",
            right:"20px",
            background:"white",
            padding:"15px",
            borderRadius:"10px",
            boxShadow:"0 5px 15px rgba(0,0,0,0.2)"

        }}>

            <h4>🤖 Laptop AI</h4>

            <input
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                placeholder="Hỏi laptop..."
            />

            <button>Gửi</button>

        </div>

    )

}

export default ChatBot