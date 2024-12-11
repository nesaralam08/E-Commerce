import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import AxiosInstance from '../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom'

function SearchIItem() {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim()) {
            try {
                setLoading(true)
                const response = await AxiosInstance.get(`/api/product/search?q=${query}`);
                const products = response.data.result;
                navigate('/search-results', { state: { query, products } });
                setQuery('');
                setLoading(false)
            } catch (error) {
                console.error('Error fetching search results:', error);
                setLoading(false)
            }
        }
    }
    return (
        <>

            <form onClick={handleSearch} className='flex items-center justify-between w-full'>
                <input type="text" className="grow text-sm" placeholder="Search for products...." value={query} onChange={(e) => setQuery(e.target.value)} />

                {
                    loading ? <span className="loading loading-spinner loading-sm text-slate-400"></span> : <button type='submit'><CiSearch className='text-xl text-slate-600' /></button>
                }
            </form>
        </>
    )
}

export default SearchIItem