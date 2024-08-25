import React, {useState} from "react";

const Input2 = () => {
    
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value; // 상태 관리가 안 됨
        setInputs({
            ...inputs,  // 새로 복사해서 만든다. 이 코드는 name: "", email: "", tel: "" 위에서 이 코드가 들어온 것과 똑같음(분해 돼서 들어옴)
            [id]: value // id 를 가져와서 업데이트가 됨
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    );
};

export default Input2;