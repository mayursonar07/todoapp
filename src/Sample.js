import React, { useEffect, useState } from "react";

function Sample1 () {

    const [name, setName] = useState('Mayur');
    const [searchText, setSearchText] = useState('');

    const [product1, setProduct1] = useState({});

    const [productListItems, setProductListItems] = useState([]);

    // let name = '';

    const handleChangeName = () => {
        setName("sampleName");
        // name = "Mayur";
        // document.getElementById('mylabel').innerText = (name);
    }

    const handleInputChange =(event) => {
        setSearchText(event.target.value);
    }

    const handleSearch = (e) => {
        // Call the search APi with searchText
        // fetch(`searchURL?${searchText}`)
        const promiseObj = fetch('https://www.googleapis.com/youtube/v3/search');
        promiseObj.then(res => res.json())
        .then(data => console.log(data));
    }

    let productList_o = [];
    let productTitle = 'MAyur';
    let imageUrl = '';

    useEffect(() => {
        console.log("useEffect called");
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(productList => {
                console.log(productList)
                productList_o = productList.products;

                // Access the first product from the productList
                console.log("product1 :", productList_o[0]);
                setProduct1(productList_o[0]);
                setProductListItems(productList.products);

            });
    },[]);

    // Create a renderedList
    const renderedList = productListItems.map((product, index) => {
        return (
            <div key={index}>
                <img src={product.images[0]} alt={product.title} style={{width: '200px'}}/>
                <h2>{product.title}</h2>
            </div>
        )
    });

    return (
        <>
            <div>Hello from Sample1 function</div>
            <div>My name is : {name}</div>

            <label id="mylabel"></label>

            <button onClick={handleChangeName}>Change name</button>

            <br/>

            <input 
                id="selectid"
                type="text" 
                placeholder="Search..." 
                // value="Mayur"
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
            
            <div>
                {renderedList}
            </div>
            
        </>
    )
}

// How many ways to export?
export default Sample1;

// When is named export used
// export {Saplme1, Sample2, Sample3};
