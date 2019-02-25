
class List extends Component {
    state = {
        shoppingProducts: [
            { id: 'some-id-for-apple', value: 'apple' },
            { id: 'tomato-id', value: 'tomato' },
            { id: 'asdasdas', value: 'cucumber' },
        ]
    }

    render() {
        const { shoppingProducts } = this.state;

        return (
            <ul>
                {
                    shoppingProducts.map(product => (
                        <li key={product.id}>
                            {product.value}
                        </li>
                    ))
                }
            </ul>
        );
    }

    componentDidMount()  {
        this.setState(({ shoppingProducts }) => ({
            shoppingProducts: [...shoppingProducts, {
                id: 'another-one', value: 'dj khaled'
            }]
        }));
    }
}