import { useEffect } from 'react'
import './coffe.css'


export default function Home() { 
    useEffect(() => { 
        document.title = "Coffe"
        let menu = document.querySelector('nav ul')
        let buguer = document.querySelector('.buguer') as HTMLImageElement

        if (buguer && menu) {
            buguer.onclick = () => {
                menu.classList.toggle('visible')
                buguer.src = 'menu-buguer-open.svg'
                if (  Object.values(menu.classList).some( (indice) => {return indice == 'visible'} )  ) 
                { buguer.src = 'menu-buguer-close.svg' }
            }
        }
    }, [])

    return (
        <>
            <div className="background-box b1"></div>
            <div className="background-box b2"></div>
            <nav>
                <div>
                    <div className="logo" style={{ backgroundImage: `url(logo-desktop.svg)` }}></div>
                    <ul>
                        <li className="selected">Home</li>
                        <li>Menu</li>
                        <li>Recompensas</li>
                        <li>Gift cards</li>
                        <li>Lojas</li>
                    </ul>
                    <button className="get-coffe gc1">PEGAR MEU CAFÉ</button>
                    <img src="menu-buguer-open.svg" className="buguer" />
                </div>
            </nav>
            <main>
                <div className="mobile-container">
                        <h1>O café que fará seu código decolar para o próximo nível</h1>
                        <button className="get-coffe" style={{ width: "230px" }}>PEGAR MEU CAFÉ <img src="arrow.svg" /></button>
                </div>

                <div>
                        <h1>Great coffe</h1>
                        <h1 className="stroke">&lt;Great code/&#62;</h1>
                        <img src="rocket-coffee.png" />
                </div>
            </main>
        </>
    )
}