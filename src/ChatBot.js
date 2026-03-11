import React, { useState } from "react";

function ChatBot() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const askAI = () => {

        if(question.includes("gaming")){
            setAnswer("Bạn nên chọn Asus ROG hoặc MSI.");
        }
        else if(question.includes("văn phòng")){
            setAnswer("Macbook Air hoặc Dell XPS là lựa chọn tốt.");
        }
        else{
            setAnswer("Bạn nên chọn laptop RAM 8GB trở lên.");
        }

    };

    return (

        <div style={{
            position:"fixed",
            bottom:"20px",
            right:"20px",
            background:"white",
            border:"1px solid #ddd",
            padding:"20px",
            width:"250px"
        }}>

            <h4>AI tư vấn laptop</h4>

            <input
                placeholder="Hỏi tôi..."
                onChange={(e)=>setQuestion(e.target.value)}
            />

            <button onClick={askAI}>
                hỏi
            </button>

            <p>{answer}</p>

        </div>

    );

}

export default ChatBot;