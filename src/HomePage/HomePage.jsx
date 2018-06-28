import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BudgetExpences, DefaultHeader } from '../_components';
import { userActions } from '../_actions';
import WebSessionCounter from 'web-session-counter';
import { styles } from '../_constants';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        WebSessionCounter.update();
    }

    componentWillUnmount() {
        return count = WebSessionCounter.count - 10;
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        const count = WebSessionCounter.count;
        
        //first letter capitalized
        let firstNameUpper = user.firstName.slice(0,1).toUpperCase() + user.firstName.slice(1, user.firstName.lenght); 
        let lastNameUpper = user.lastName.slice(0,1).toUpperCase() + user.lastName.slice(1, user.lastName.lenght);

        //Moduls
            // Session counts
            let sessionCount = <div style={styles.sessionsModul} className="sessionCount"><div><h4>Number of current sessions: {count}</h4></div></div>;

        return (
            <div style={styles.contentContainer} className="content-container">
                <DefaultHeader />
                <div style={styles.content} className="col-md-6 col-md-offset-3">
                    <div style={styles.usersModul}>
                        <div className="welcomeMessage">
                            <h1>Dashboard</h1>
                        </div>
                        {BudgetExpences}   
                    </div>
                    {sessionCount}
                </div>
                <div>
                <h3>All registered users:</h3>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {firstNameUpper + ' ' + lastNameUpper}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };