import styles from "./MealsGrid.module.css";

import MealItem from "@/components/MealItem/MealItem";

export default function MealsGrid({ meals }) {
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
