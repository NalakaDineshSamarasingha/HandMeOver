import React from "react";
import './category.css';
import category from "../../assests/category";


const Category = () => {
    return(
        <div className="categoryPage">
            <div className="container">
                <div className="Cateheader"><p>Category</p></div>
                <div className="items">
                    {category.map((item,index)=>(
                        <div className="item" key={index}>
                            <img src={item.img} alt={item.title} />
                            <p className="item-des">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category;