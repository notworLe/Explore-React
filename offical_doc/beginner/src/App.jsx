import { useState } from "react";

const notworle = {
    'name': 'Lê Đức Huy',
    'github': 'https://github.com/notworLe',
    'hobby': [
        'future family', 'anime'
    ]
};

const dataSinhVien = [
    { name: "Huy", major: "IT" },
    { name: "Na", major: "LOG" },
];

function ShowIntroductionButton() {
    const [show, setShow] = useState(true);

    return (
        <>  
            <button className="btn" onClick={() => setShow(!show)}>
                Show/Hide
            </button>

            {show && <Introduce/>}
        </>
    )
};

function AlertButton() {
    function getAlert() {
        alert("I am getting the hang of watering plants");
    };

    return (
        <button className="btn" onClick={getAlert}>
            Don't press
        </button>
    )
}

function CountButton() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div className="section">
            <button className="btn" onClick={increaseCount}>
                +1 clicked
            </button>

            <button className="btn" onClick={decreaseCount}>
                -1 clicked
            </button>

            <button className="btn" onClick={resetCount}>
                Reset count
            </button>

            <div className="badge">
                <p>{count}</p>
            </div>
        </div>
    )
}


function MyButton({ content = 'Click me', onClick }){
    return (
        <button className="btn" onClick={onClick}>
            {content}
        </button>
    );
}

function Introduce() {
    const listHobby = notworle.hobby.map(hob =>
        <li>
           {hob} 
        </li>
    );

    return (
        <div>
            <h1>Introduction</h1>
            <div className="section">
            <div className="row">
                <div className="media-container">
                    <div className="card-media">
                        <img src="https://i.pinimg.com/736x/96/71/b4/9671b4848181f7ad1fc0507f668a82c3.jpg" alt="" />
                    </div>
                </div>
                
                <div className="card-grid-2col">
                    <div className="card">
                        <div className="badge">
                            {notworle.name}
                        </div> 
                        <h4>Github: {notworle.github}</h4>
                        <ul>{
                            notworle.hobby.map(hob =>
                                <li>{hob}</li>
                            )
                        }</ul>
                    </div>

                    <div className="card">
                        <div className="badge">
                            {notworle.name}
                        </div> 
                        <h4>Github: {notworle.github}</h4>
                        <ul>{
                            notworle.hobby.map(hob =>
                                <li>{hob}</li>
                            )
                        }</ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}


function ListSinhvien() {
    return (
        <div className="section">
            <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Major</th>
                </tr>
            </thead>
            <tbody>
                {dataSinhVien.map(sv =>
                    <tr>
                        <td>{sv.name}</td>
                        <td>{sv.major}</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )
    
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyProducts() {
    return (
        <div className="section">
            <div className="card">
                <ul>
                    {products.map(pro =>
                        <li key={pro.id} style={{
                            color: pro.isFruit ? 'magenta' : 'darkgreen'
                        }}>
                            {pro.title}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default function MyApp() {
    const [num, setNum] = useState(0);
    function increaseOne() {
        setNum(num + 1);
    };

    function multiple(n = 2) {
        setNum(num * n);
    };

    function reset() {
        setNum(0);
    };
    
    return (
        <div>
            <div className="section">
                <h2>Cá Độ mixi</h2>
                <p className="badge">{num}</p>
                <MyButton content="Increment" onClick={increaseOne}/>
                <MyButton content="Multiple 2" onClick={() => multiple(2)}/>
                <MyButton content="Reset" onClick={reset}/>
            </div>
            <AlertButton/>
            <CountButton/>
            <CountButton/>
            <ShowIntroductionButton />

            <ListSinhvien />  

            <MyProducts />

        </div>
    )
}
