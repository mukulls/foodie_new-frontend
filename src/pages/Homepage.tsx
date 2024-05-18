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
            </div>
    )
}
export default Homepage;