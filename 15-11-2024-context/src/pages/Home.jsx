import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import axiosInstance from "../api/axiosInstance"

function Home() {

    const [page, setPage] = useState(null);
    const [pagination, setPagination] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const [shops, setShops] = useState([]);
    const [shopName, setShopName] = useState("");
    const [productName, setProductName] = useState("");
    const [stock, setStock] = useState("");

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [body, setBody] = useState({
        shopName: shopName,
        productName: productName,
        stock: stock,
        page: activePage
    })

    const navigate = useNavigate()

    const handlerPagination = (pageSelect) => {
        setActivePage(pageSelect)
        setBody({
            shopName: shopName,
            productName: productName,
            stock: stock,
            page: pageSelect
        })
    }

    //fetch data
    useEffect(() => {
        console.log("ok")
        const fetchShops = async () => {
            try {
                const token = localStorage.getItem("token")

                // const response = await axios.get('http://localhost:3000/api/v1/shops', {
                //     params: body,
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // })
                // if (response.status == 500) {
                //     navigate('/login')
                // }

                const response = await axiosInstance.get("/shops")

                console.log(response)
                const data = response.data
                if (data.isSuccess) {
                    setShops(data.data.shops)
                    setPage(data.data.totalPages)
                    setActivePage(parseInt(data.data.page))
                }
                else {
                    setError("error")
                }
            }
            catch (error) {

                setError(`${error.message}`)
            } finally {
                setLoading(false)
            }
        };
        fetchShops()
    }, [body])

    useEffect(() => {
        const tempPagination = []
        for (let i = 0; i < page; i++) {
            tempPagination.push(
                <a className={i + 1 === activePage ? "text-green-500 text-lg" : "text-white text-lg"} key={i} onClick={() => handlerPagination(i + 1)}>
                    {i + 1}
                </a>
            );
        }
        setPagination(tempPagination)
    }, [shops])

    // console.log(shops)

    return (
        <>
            {error && <p className="text-red=300 p-10">{error}</p>}
            {loading && <p className="p-10">...Loading</p>}
            {!loading && !error && shops.length === 0 && (
                <p className="p-10"> No Data Available</p>
            )}
            {!loading && !error && shops.length != 0 && (
                <>
                    <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {shops.map((shop, index) => (
                            <div key={index} className="p-4 border rounded-md bg-white shadow-md">
                                <img src={shop.products[0] != null ? shop.products[0].images[0]: ""} alt="Car" className="w-full h-40 object-cover mb-4" />
                                <h3 className="font-semibold text-black">{shop.name}</h3>
                                <p className="text-green-500 font-bold">Rp {shop.products[0] != null ? shop.products[0].price : 0}</p>
                                <p className="text-gray-600 mt-2 text-sm">Stock : {shop.products[0] != null ? shop.products[0].stock : 0}</p>
                                {/* <div className="flex items-center justify-between text-gray-500 text-sm mt-4"> <span>4 orang</span> <span>Manual</span> <span>Tahun 2020</span>
                            </div> */}
                                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">Pilih Shop</button>
                            </div>
                        ))}
                    </section>
                    <div className="flex gap-10 justify-center p-10">
                        {pagination}
                    </div>
                </>
            )}
        </>
    )
}

export default Home

