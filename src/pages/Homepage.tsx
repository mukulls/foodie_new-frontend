import SearchBar, {SearchForm} from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
const Homepage =() =>{
    const navigate=useNavigate();

    const handleSearchSubmit=(searchFormValues: SearchForm)=>{
        navigate({
            pathname:`/search/${searchFormValues.searchQuery}`
        })
    }
    return(
        <div className="flex flex-col gao-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-green-600">
                    What are you craving today?
                </h1>
                <span className="text-xl">Food is just a click away!</span>
                <SearchBar placeHolder="Search By City" onSubmit={handleSearchSubmit}/>
            </div>
            <div className="grid md:grid-cols-2 gap-5"></div>
            <div className="text-3xl mt-20 font-bold">
                Top brand for you
                <div className="flex flex-row justify-between mt-5 font-light text-center text-2xl ">
                    <a href="https://online.kfc.co.in/">
                    <img  className='h-32 w-32  border 'src="../assets/home4_kfc.png" alt="" />
                    KFC
                    </a>
                    <a href="https://mcdindia.com/">
                    <img  className='h-32 w-32  border ' src="../assets/home4_mcd.png" alt="" />
                    McDonalds
                    </a>
                    <a href="https://www.burgerking.in/">
                    <img  className='h-32 w-32  border' src="../assets/home4_bk.png" alt="" />
                    Burger King
                    </a>
                    <a href="https://haldiram.com/">
                    <img  className='h-32 w-32  border ' src="../assets/home4_haldiram.png" alt="" />
                    Haldiram
                    </a>
                    <a href="https://subway.in/">
                    <img  className='h-32 w-32  border ' src="../assets/home4_subway.png" alt="" />
                    Subway
                    </a>
                    <a href="https://www.dominos.co.in/menu">
                    <img  className='h-32 w-32  border 'src="../assets/home4_dominos.png" alt="" />
                    Dominos
                    </a>
                    <a href="https://www.pizzahut.co.in/">
                    <img  className='h-32 w-32  border'src="../assets/home4_pizzahut.png" alt="" />
                    Pizza Hut
                    </a>

                </div>
            </div>
        </div>
    )
}
export default Homepage;