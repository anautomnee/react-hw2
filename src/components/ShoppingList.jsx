function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((item, ind) => (
                <li key={ind}>{item}</li>
            ))}
        </ul>
    );
};

export default ShoppingList;