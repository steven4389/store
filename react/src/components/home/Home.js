import React, {useState} from 'react'
import Header from '../header/Header'
import Search from '../search/Search'
import Gallery from '../gallery/Gallery'
import { useHistory } from 'react-router'

const Home = () => {

    const [keyword, setKeyword] = useState('');
    const history = useHistory();

    const goToCreateProduct = ()=>{
        history.push('/create')
    }

    return (
        <div>
            <Header />
            <Search keyword={keyword} setKeyword={setKeyword} />
            <div style={{color:'blue', cursor:'pointer', padding:'20px'}} onClick={goToCreateProduct}>Crear producto</div>
            <Gallery keyword={keyword} />
        </div>
    )
}

export default Home
