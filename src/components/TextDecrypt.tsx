import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: "ابتثجحخدذرزسشصضطظعغفقكلمنهويあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん가나다라마바사아자차카타파하一二三四五六七八九十百千万",
    interval: 50,
};

interface TextDecryptProps {
    text: string;
}

export const TextDecrypt = (props: TextDecryptProps) => {
    const [result, dencrypt] = useDencrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <>
            {result}
        </>
    );
};