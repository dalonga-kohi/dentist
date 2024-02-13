import React from "react";
import Card from "../Card";


export default function Comments() {

    const comments = [
        {
            user: "",
            content: "",
            tag: "",
        },
        {
            user: "",
            content: "",
            tag: "",
        },
        {
            user: "",
            content: "",
            tag: "",
        },
    ]

  return (
    <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl p-2 font-bold mb-9 text-center">Masa zadowolonych klientów</h1>
        {comments.map(el => {
            return <Card user={el.user}/>
        })}
    </div>
  );
}
