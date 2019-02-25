import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Book = React.lazy(() => import('./book'));
const BooksList = React.lazy(() => import('./book-list'));

class Books extends React.Component {
    state = {
        books: [
            {id: 'a', title: 'LOTR'},
            {id: 'b', title: 'HP'},
            {id: 'c', title: 'GOT'},
        ]
    };

    render() {
        const { books } = this.state;
        const { path } = this.props.match;

        return (
            <div>
                <aside>
                    Here is an ad for you
                </aside>
                <Suspense fallback={<span>Loading book information</span>}>
                    <Switch>
                        <Route path={path} render={() => <BooksList books={books} />} exact />
                        <Route path={`${path}/:id`} component={Book} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default Books;