import React from "react";
import Card from "../Card";


export default function Comments() {

    const comments = [
        {
            user: "Madzia W.",
            content: "Wkoncu się uśmiechnęłam na mieście! Dziękuje 🤗",
            tag: "@Madziulka",
        },
        {
            user: "Jacek",
            content: "Nie sądziłem, że moje zęby mogą być tak białe ✨",
            tag: "@Jacektokocur",
        },
        {
            user: "Zosia G.",
            content: "Najmilsza obsługa na świecie😁, pozdrawiam 💕",
            tag: "@zofka",
        },
    ]

  return (
    <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl p-2 font-bold mb-9 text-center">Masa zadowolonych klientów</h1>
        {comments.map(el => {
            return <Card user={el.user} content={el.content} tag={el.tag}/>
        })}
    </div>
  );
}
