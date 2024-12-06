import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    description: "Finest fish and veggies",
    name: "Sushi",
    price: 22.99,
  },
  {
    id: "m2",
    description: "A german specialty!",
    name: "Schnitzel",
    price: 16.5,
  },
  {
    id: "m3",
    " description": "American, raw, meaty",
    name: "Barbecue Burger",
    price: 12.99,
  },
  {
    id: "m4",
    description: "Healthy...and green...",
    name: "Green Bowl",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
