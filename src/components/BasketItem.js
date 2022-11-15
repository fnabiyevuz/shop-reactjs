export default function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        incrementQuantity,
        decrementQuantity,
        removeFromBasket,
    } = props;
    return (
        <li className="collection-item">
            {name} x {quantity} = {price * quantity}
            <span className="secondary-content">
                <button
                    className="waves-light btn btnq"
                    onClick={() => incrementQuantity(id)}
                >
                    +
                </button>
                <button
                    className="waves-light btn btnq"
                    style={{ marginLeft: 10 }}
                    onClick={() => decrementQuantity(id)}
                >
                    -
                </button>
                <button
                    className="waves-light btn btnq"
                    style={{ marginLeft: 10 }}
                    onClick={() => removeFromBasket(id)}
                >
                    <i className="material-icons basket-delete">
                        delete_forever
                    </i>{" "}
                    delete
                </button>
            </span>
        </li>
    );
}
