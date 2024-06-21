'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      fetch('http://127.0.0.1:8000/workshop/')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
        .catch((e) => console.log(e))
    }, [])
   
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
   
    return (
      <div>
        {data.map((item) => <div key={item.fields.workshop_title}>{item.fields.workshop_title}</div>)}
      </div>
    )
  }
