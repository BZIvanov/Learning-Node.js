class Bar extends Component {
    render() {
        const {name, changeName} = this.props;
        
        return (
            <div>
                {name}
                <button onClick={changeName}>Click</button>
            </div>
        );
    }
};

class Foo extends Component {
    state = {
        name: 'random name'
    };

    changeName = () => {
        this.setState({
            name: 'some other name'
        });
    }
    
    render() {
        const { name } = this.state;
        
        return <Bar name={name} changeName={this.changeName} />;
    }
}