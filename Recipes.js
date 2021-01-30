import React from 'react';
import styles from './Recipe.module.css';

const Recipe = ({title,calory,img,ingredients}) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calory}</p>
            <ol>
                {ingredients.map((ingredient=>(
                    <li>{ingredient.text}</li>
                )))}
            </ol>
            <img src={img} alt="" className={styles.image}/>
        </div>
    )
}
export default Recipe;