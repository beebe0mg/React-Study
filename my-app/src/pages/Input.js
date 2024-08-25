import React, {useState} from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState("");   // 빈 배열을 만들어줌

    const onChange = (e) => { // onChange 를 가져올 때마다 event 를 가져올 것이다.
        setTextValue(e.target.value);  // event target 설정
    };

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            {/* 위에서 두 개의 onChange 는 다른 것을 가리킨다 */}
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;