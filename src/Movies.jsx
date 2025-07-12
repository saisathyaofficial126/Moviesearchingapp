import React, { useEffect, useState } from 'react'

function Movies() {
    const [key, setkey] = useState('Iron man');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://www.omdbapi.com/?s=${key}&apikey=d73191f1`);
            const Data = await response.json();
            setData(Data.Search);
            console.log(Data);
        }
        getData();
    }, [key]);

    const card = data.map((e, id) => {
        // console.log(e.Title);
        return (
            <div className="cardData" key={id}>
                <div className="card">
                    <img src={e.Poster} alt="" />
                </div>
                <div className="detail">
                    <div className="mname">{e.Title}</div>
                    <div className="year">{e.Year}</div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="movies">
                <div className="serachBox">
                    <input type="text" placeholder='Search Movies' id='txt' />
                    <button type='button' onClick={() => {
                        // const txtValue = document.getElementById('txt').value;
                        setkey(document.getElementById('txt').value)
                    }}
                    >Search</button>
                </div>
                <hr />
            </div>
            <div className="container">
                {card}
            </div>
        </>
    )
}

export default Movies