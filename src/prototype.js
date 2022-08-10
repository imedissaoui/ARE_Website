import NavBar from './Components/Navbar/NavBar'
import HomePage from './Pages/HomePage'

const HeaderOne = (props)=>{
    return (
        <>
            <HomePage/>
        </>
    )
}

const HeaderTwo = (props)=>{
    return (
        <>
        <NavBar />
        <section >
            <h1 style={{"padding-top": "120px",
        "padding-bottom": "30px",
        'text-align': 'center',
        'color': 'grey',
        'font-size': '40px'}}>Page 2</h1>
        </section>
        </>
    )
}

const HeaderThree = (props)=>{
    return (
        <>
        <NavBar />
        <section >
            <h1 style={{"padding-top": "120px",
        "padding-bottom": "30px",
        'text-align': 'center',
        'color': 'grey',
        'font-size': '40px'}}>Page 3</h1>
        </section>
        </>
    )
}

export {HeaderOne, HeaderTwo, HeaderThree};