import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Cart from "./Card";
import { GoodList } from "./GoodList";
import { Loader } from "./Loader";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);
    return (
        <div className="container content">
            <Cart quantity={goods.length} />
            {loading ? <Loader /> : <GoodList goods={goods} />}
        </div>
    );
}

export { Shop };
